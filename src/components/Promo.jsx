import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
  height: 20px;
  background-color: #e3e2df;
  color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: italic;
  font-size: 14px;
  font-weight: 600;
  ${mobile({ fontSize: 12, fontWeight: 300 })}
  ${tablet({ fontSize: 12, fontWeight: 300 })};
`;
// #e3e2df

const Promo = () => {
  return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
};

export default Promo;
