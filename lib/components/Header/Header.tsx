import { Box, Grid, Typography, styled, useTheme } from "@mui/material";
import headerLogo from "../../assets/Navy_Federal_Credit_Union_Logo.svg";
import { styles } from "../../constants/style.constants";
import { NavigateFunction } from "react-router-dom";
import { navHelper } from "../../helper/helper";
import { HEADER_LINKS, HEADER_MILITARY_LIST } from "../../constants/navyFederal.constants";

const HeaderOuterContainer = styled(Box)(({theme})=>({
    width: "100%",
    boxSizing: "border-box",
    padding: "1rem 5rem",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    borderBottom: `2px solid ${styles.orange}`,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("lg")]: {
        padding: "1rem 0.5rem"
    }
}));

const HeaderContainer = styled(Grid)({
    width: "100%",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
    justifyContent: "space-between",
    backgroundColor: "white",
    maxWidth: "1250px"
});

const HeaderBox = styled(Grid)({
    display: "flex",
    alignItems: "center",
    gap: "1rem"
});

const HeaderVBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRight: `1px solid ${styles.blue}`,
    borderLeft: `1px solid ${styles.blue}`,
    padding: "0 1rem 0 0.5rem"
});

const HeaderTitle = styled(Typography)(({theme})=>({
    fontSize: "2rem",
    fontWeight: "bold",
    color: styles.blue,
    [theme.breakpoints.down("lg")]: {
        fontSize: "1.5rem"
    }
}));

const HeaderLogo = styled("img")(({theme})=>({
    height: "5rem",
    [theme.breakpoints.down("lg")]: {
        height: "3.5rem"
    }
}));

const HeaderTextSm = styled(Typography)(({theme})=>({
    fontSize: "0.6rem",
    color: styles.blue,
    fontWeight: "bold",
    textWrap: "nowrap",
    [theme.breakpoints.down("lg")]: {
        fontSize: "0.45rem"
    }
}));

const HeaderLink = styled(Typography)(({theme})=>({
    fontSize: "1rem",
    color: "black",
    fontWeight: "bold",
    cursor: "pointer",
    [theme.breakpoints.down("lg")]: {
        fontSize: "0.75rem"
    }
}));

const HeaderButton = styled("button")(({theme})=>({
    backgroundColor: styles.orange,
    color: "white",
    padding: "0.5rem 1.5rem",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1rem",
    [theme.breakpoints.down("lg")]: {
        fontSize: "0.75rem",
        padding: "0.5rem 1rem"
    }
}));

export interface HeaderProps {
    navigateFunction?: NavigateFunction;
}

export const Header = ({ navigateFunction }: HeaderProps) => {
    const theme = useTheme();

    return (
        <HeaderOuterContainer data-testid="header__outerContainer">
            <HeaderContainer container rowGap={2} data-testid="header__innerContainer">
                <HeaderBox item xs={12} md={6}>
                    <HeaderLogo src={headerLogo} data-testid="header__logo" />
                    <HeaderVBox>
                        {HEADER_MILITARY_LIST.map((t, i) => (
                            <HeaderTextSm key={i}
                                data-testid={`header__text--${t.toLowerCase().replace(/\s/g, "_")}`}
                            >{t}</HeaderTextSm>
                        ))}
                    </HeaderVBox>
                    <HeaderTitle>Developer Center</HeaderTitle>
                </HeaderBox>
                <HeaderBox sx={{ 
                    gap: "2rem",
                    [theme.breakpoints.down("lg")]: {
                        gap: "1rem"
                    }
                }} item xs={12} md={6}>
                    {HEADER_LINKS.map((l, i) => (
                        <HeaderLink key={i}
                            onClick={() => navHelper(l.link, navigateFunction)}
                            data-testid={`header__link--${l.title.toLowerCase().replace(/\s/g, "_")}`}
                        >{l.title}</HeaderLink>
                    ))}
                    <HeaderButton 
                        onClick={() => navHelper("/login", navigateFunction)}
                        data-testid="header__button--login"
                    >Login</HeaderButton>
                </HeaderBox>
            </HeaderContainer>
        </HeaderOuterContainer>
    )
};