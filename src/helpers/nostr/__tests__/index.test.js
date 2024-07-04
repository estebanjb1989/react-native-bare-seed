import * as nostrTools from "nostr-tools";
import { RELAY_URL } from "@env";
import { postMessage } from "../index";

const connectSpy = jest.spyOn(nostrTools.Relay, "connect");

jest.mock("nostr-tools", () => ({
  Relay: {
    connect: jest.fn().mockImplementation(() => ({
      publish: jest.fn(),
      close: jest.fn(),
    })),
  },
  finalizeEvent: jest.fn(),
}));

describe("nostr helpers tests", () => {
  it("should have connectivity with env relay url", async () => {
    await postMessage({
      user: {
        name: "test user",
        publicKey: "public-key#",
        secretKeyHex: "sk-#",
      },
    });
    expect(connectSpy).toHaveBeenCalledWith(RELAY_URL);
  });
});
