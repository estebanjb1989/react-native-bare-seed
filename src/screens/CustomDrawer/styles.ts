import styled from "styled-components/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const Container = styled.View`
  padding: 32px;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const PKContainer = styled(TouchableOpacity)`
    align-items: center;
`;

export const PKValue = styled.Text`
  font-size: 16px;
`;
