import styled from "styled-components/native";

export const ButtonContainer = styled.View`
  align-items: flex-end;  
  margin-top: 18px;
  width: 240px;
`;

export const Filler = styled.View<{ 
  height?: number;
}>`
  height: ${({ height }) => height ? `${height}px` : "0px"};
`

export const Group = styled.View<{ 
  contained?: boolean; 
  centered?: boolean;
}>`
  align-items: flex-start;
  justify-content: center;
  align-items: ${({ centered }) => centered ? "center" : "flex-start"};
  background-color: ${({ contained }) => contained ? "#DEDFE4" : "transparent"};
  padding: ${({ contained }) => contained ? "24px" : "0px"};
  border-radius: ${({ contained }) => contained ? "8px" : "0px"};
`;

export const AppTitle = styled.Text`
  font-size: 30px;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin-bottom: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`