import styled from "styled-components";

export const AccordionWrapper = styled.div`
  border: 1px solid #ccc;
`;

export const AccordionHeader = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  cursor: pointer;
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: 10px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;
