import styled from "styled-components/native";

// Content spacing 
// column
export const Group = styled.View<{ 
  contained?: boolean; 
  centered?: boolean;
}>`
  align-items: flex-start;
  justify-content: center;
  align-items: ${({ centered }) => centered ? "center" : "flex-start"};
  background-color: ${({ contained }) => contained ? "#DEDFE4" : "transparent"};
  padding-vertical: ${({ contained }) => contained ? "24px" : "0px"};
  padding-horizontal: ${({ contained }) => contained ? "16px" : "0px"};
  border-radius: ${({ contained }) => contained ? "8px" : "0px"};
`;

// row
export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`
// Fixing default group button container
export const ButtonContainer = styled.View`
  align-items: flex-end;  
  width: 240px;
  margin-top: 16px;
`;

// Components for app title/banner/logo, subsection title, 
export const AppTitle = styled.Text`
  font-size: 30px;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin-bottom: 8px;
`;

// height filler
export const Filler = styled.View<{ 
  height?: number;
}>`
  height: ${({ height }) => height ? `${height}px` : "0px"};
`