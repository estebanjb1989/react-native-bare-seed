import * as nostrTools from "nostr-tools";
import { RELAY_URL } from "@env";
import { postMessage } from "../index";

const publishFN = jest.fn();
const closeFN = jest.fn();

const connectSpy = jest
  .spyOn(nostrTools.Relay, "connect")
  .mockImplementation(() => ({
    publish: publishFN,
    close: closeFN,
  }));
const finalizeEvent = jest.spyOn(nostrTools, "finalizeEvent");

jest.mock("nostr-tools", () => ({
  Relay: {
    connect: jest.fn().mockImplementation(() => ({
      publish: jest.fn(),
      close: jest.fn(),
    })),
  },
  finalizeEvent: jest.fn(),
  getPublicKey: jest.fn(),
}));

jest.mock("@noble/hashes/utils", () => ({
  hexToBytes: jest.fn(),
}));

const TEST_USER = {
  name: "test user",
  publicKey: "pk-#",
  secretKeyHex: "sk-#",
};

describe("nostr helpers tests", () => {
  it("should have connectivity", async () => {
    await postMessage({
      user: TEST_USER,
      message: "Test message from RN tests",
    });
    expect(connectSpy).toHaveBeenCalledWith(RELAY_URL);
  });

  it("should finalize the event, publish and then close connection", async () => {
    await postMessage({
      user: TEST_USER,
      message: "Test message from RN tests",
    });
    expect(finalizeEvent).toHaveBeenCalled();
    expect(publishFN).toHaveBeenCalled();
    expect(closeFN).toHaveBeenCalled();
  });
});
