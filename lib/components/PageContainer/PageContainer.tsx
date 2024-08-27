import { Box, styled } from "@mui/material";
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer";
import { NavigateFunction } from "react-router-dom";

const PageContainerOuter = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "100vh",
    width: "100%",
    backgroundColor: "white"
});

const PageContainerInner = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    flexGrow: 1,
    width: "100%"
});

export interface PageContainerProps {
    children?: React.ReactNode;
    outerProps?: React.ComponentProps<typeof Box>;
    innerProps?: React.ComponentProps<typeof Box>;
    navigateFunction?: NavigateFunction
}

export const PageContainer = ({ children, outerProps, innerProps, navigateFunction }: PageContainerProps) => {

    return (
        <PageContainerOuter data-testid="pageContainer__outer" {...outerProps}>
            <Header navigateFunction={navigateFunction} />
            <PageContainerInner data-testid="pageContainer__inner" {...innerProps}>
                {children}
            </PageContainerInner>
            <Footer navigateFunction={navigateFunction} />
        </PageContainerOuter>
    )
};