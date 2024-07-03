import { generateSecretKey, getPublicKey } from "nostr-tools";
import { useEffect } from "react";

export const useNostrTools = () => {
  useEffect(() => {
    let secretKey = generateSecretKey();
    let publicKey = getPublicKey(secretKey);

    console.log({
      secretKey,
      publicKey,
    });
  }, []);

  return null;
};
