  import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #101522;
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;
export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #58c2b9;
    transition: 0ms.3s ease-out;
  }
`;
