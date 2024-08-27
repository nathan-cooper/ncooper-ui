import { Box, Typography, styled } from "@mui/material";
import { styles } from "../../constants/style.constants";
import footerLogo from "../../assets/Navy_Federal_Credit_Union_Logo.svg";
import { FOOTER_LINKS } from "../../constants/navyFederal.constants";
import { NavigateFunction } from "react-router-dom";
import { navHelper } from "../../helper/helper";

const FooterOuterContainer = styled(Box)({
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: styles.gray,
    display: "flex",
    justifyContent: "center",
    padding: "1rem 0"
});

const FooterContainer = styled(Box)({
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    boxSizing: "border-box",
    justifyContent: "flex-start",
    maxWidth: "750px",
    gap: "1rem"
});

const FooterLinkContainer = styled(Box)({
    padding: "1rem 0 5rem 0",
    display: "flex",
    flexDirection: "row",
    gap: "0.5rem"
});

const FooterIcon = styled("img")({
    width: "5rem",
    height: "5rem"
});

const FooterLink = styled("a")({
    color: "blue",
    paddingRight: "0.5rem",
    fontFamily: "sans-serif",
    cursor: "pointer"
});

const FooterText = styled(Typography)({
    color: "gray",
    fontFamily: "sans-serif",
    textAlign: "left",
    fontSize: "0.8rem"
});

export interface FooterProps {
    navigateFunction?: NavigateFunction;
}

export const Footer = ({ navigateFunction }: FooterProps) => (
    <FooterOuterContainer>
        <FooterContainer>
            <FooterIcon src={footerLogo} />
            <div>
                <FooterLinkContainer>
                    {FOOTER_LINKS.map((l, i) => (
                        <FooterLink key={i} 
                            onClick={() => navHelper(l.link, navigateFunction)}
                            style={{ 
                                borderRight: i < FOOTER_LINKS.length - 1 ? "1px solid gray" : "none",
                            }}
                        >{l.title}</FooterLink>
                    ))}
                </FooterLinkContainer>
                <FooterText>
                    Navy Federal conducts all member business in English. All origination, servicing, collections and marketing materials are provided in English only.
                    As a service to members, we will attempt to assist members who have limited English proficiency where possible. Military images used for 
                    representational purposes only; do not imply government endorsement. Terms and conditions are applied to gift cards.
                </FooterText>
                <FooterText sx={{ marginTop: "2rem" }}>
                    APY = Annual Percentage Yield, APR = Annual Percentage Rate <br />
                    +Rates are based on an evaluation of credit history, so your rate may differ. <br />
                    •Message and data rates may apply. <FooterLink  onClick={() => navHelper("/terms-and-conditions", navigateFunction)}>Terms and Conditions</FooterLink>are available. <br />
                    ◆Terms and conditions are applied to gift cards. <br />
                    ++Investment products and services are available through Navy Federal Investment Services and are not insured by NCUA.
                </FooterText>
            </div>
        </FooterContainer>
    </FooterOuterContainer>
);
