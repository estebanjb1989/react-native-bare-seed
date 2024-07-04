import styled from "styled-components/native";
import { TextInput, Button as NativeButton } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  margin-bottom: 12px;
`;

export const Input = styled(TextInput)`
  width: 240px;
  height: 48px;
  padding-horizontal: 8px;
  background-color: white;
  border-radius: 4px;
`;

export const Button = styled(NativeButton)`   
  height: 48px;
  padding-horizontal: 8px;
  border-radius: 4px;
`;