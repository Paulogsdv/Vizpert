import styled from "styled-components";
import { Col } from "reactstrap";

export const TEXT = styled.h4`
  font-size: ${(props) => (props.fontS ? `${props.fontS}px` : "20px")};
  text-decoration: ${(props) => props.pointer && "underline"};
  cursor: ${(props) => props.pointer && "pointer"};
  font-weight: ${(props) => props.fontW};
  color: ${(props) => props.color};

  @media (max-width: 520px) {
    font-size: ${(props) => `${props.fontS - 25}px`};
  }
`;

export const COL = styled(Col)`
  margin-bottom: ${(props) => props.margin && "100px"};
  margin-top: ${(props) => props.margin && "30px"};
  justify-content: center !important;
  flex-direction: column !important;
  background-color: #000 !important;
  align-items: center !important;
  display: flex !important;
  padding: 10px !important;
`;

export const DIV = styled.div`
  border: 1px solid #ea0009 !important;
  padding-right: 10px;
  border-radius: 10px;
  padding-left: 10px;
  height: 35px;
`;
