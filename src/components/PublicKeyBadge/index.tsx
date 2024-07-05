import React, { useCallback } from "react";
import Clipboard from "@react-native-clipboard/clipboard";
import { useSelector } from "react-redux";
import { IStore } from "src/interfaces/store";
import { Group, Row } from "src/styles";
import CopyIcon from "src/assets/copy.svg";
import { Container, PKText, IconContainer } from "./styles";

export interface IPublicKeyBadgeProps {
  showPublicKey?: boolean;
}

export const PublicKeyBadge = ({
  showPublicKey = false,
}: IPublicKeyBadgeProps) => {
  const publicKey = useSelector((state: IStore) => state.auth.user?.publicKey);
  const handleCopyToClipboard = useCallback(() => {
    Clipboard.setString(publicKey);
    alert("Public key copied to clipboard")
  }, [publicKey]);

  return (
    <Container onPress={handleCopyToClipboard}>
      <Group contained>
        <Row>
          <PKText>Public Key</PKText>
          <IconContainer>
            <CopyIcon width={20} height={20} />
          </IconContainer>
        </Row>
        {showPublicKey && <Value>{publicKey}</Value>}          
      </Group>
    </Container>
  );
};