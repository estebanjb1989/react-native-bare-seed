import styled from "styled-components/native";
import { TextInput, Button as NativeButton } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Filler = styled.View``;

export const FieldContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.Text`
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
  width: 240px;
  height: 48px;
  padding-horizontal: 8px;
  background-color: white;
  border-radius: 4px;
`;
