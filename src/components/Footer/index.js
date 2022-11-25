import React from "react";
import{
    FooterContainer, 
    FooterWrap,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink

} from './FooterElement'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>


                        <FooterLinksItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Terms of Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Terms of Services</FooterLink>
                        </FooterLinksItems>


            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
