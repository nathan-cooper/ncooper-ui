import { Box, Grid, Typography, styled, useTheme } from "@mui/material";
import headerLogo from "../../assets/Logo_white.png";
import { styles } from "../../constants/style.constants";
import { NavigateFunction } from "react-router-dom";
import { navHelper } from "../../helper/helper";
import { INTERNAL_HEADER_LINKS } from "../../constants/navyFederal.constants";

const HeaderOuterContainer = styled(Box)(()=>({
    width: "100%",
    boxSizing: "border-box",
    padding: "0.5rem 5rem",
    backgroundColor: styles.blue,
    display: "flex",
    justifyContent: "center",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
}));

const HeaderContainer = styled(Grid)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    justifyContent: "space-between",
    maxWidth: "1250px"
});

const HeaderBox = styled(Grid)({
    display: "flex",
    alignItems: "center",
    gap: "1rem"
});

const HeaderTitle = styled(Typography)(({theme})=>({
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.5rem"
    }
}));

const HeaderLogo = styled("img")(()=>({
    height: "3rem"
}));

const HeaderLink = styled(Typography)(({theme})=>({
    fontSize: "0.75rem",
    color: "white",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
        fontSize: "0.75rem"
    }
}));

export interface HeaderProps {
    navigateFunction?: NavigateFunction;
}

export const InternalHeader = ({ navigateFunction }: HeaderProps) => {
    const theme = useTheme();

    return (
        <HeaderOuterContainer data-testid="header__outerContainer">
            <HeaderContainer container rowGap={2} data-testid="header__innerContainer">
                <HeaderBox item xs={12} md={6}>
                    <HeaderLogo src={headerLogo} data-testid="header__logo" />
                    <HeaderTitle>Developer Center</HeaderTitle>
                </HeaderBox>
                <HeaderBox sx={{ 
                    gap: "2rem",
                    justifyContent: "flex-end",
                    [theme.breakpoints.down("lg")]: {
                        gap: "1rem"
                    },
                    [theme.breakpoints.down("md")]: {
                        justifyContent: "flex-start"
                    }
                }} item xs={12} md={6}>
                    {INTERNAL_HEADER_LINKS.map((l, i) => (
                        <HeaderLink key={i}
                            onClick={() => navHelper(l.link, navigateFunction)}
                            data-testid={`header__link--${l.title.toLowerCase().replace(/\s/g, "_")}`}
                        >{l.title}</HeaderLink>
                    ))}
                </HeaderBox>
            </HeaderContainer>
        </HeaderOuterContainer>
    )
};