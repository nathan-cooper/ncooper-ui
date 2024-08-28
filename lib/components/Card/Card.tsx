import { Box, Typography, styled } from "@mui/material";
import { styles } from "../../constants/style.constants";
import { NavigateFunction } from "react-router-dom";
import { navHelper } from "../../helper/helper";


const CardContainer = styled(Box)(({theme})=>({
    height: "100%",
    backgroundColor: styles.blue,
    borderRadius: "12px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    padding: "1rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    [theme.breakpoints.down("lg")]: {
        height: "19rem"
    }
}));

const CardTitleText = styled(Typography)({
    fontSize: "1.6rem",
    color: "white",
    textAlign: "left",
    fontWeight: "bold"
});

const CardDescriptionText = styled(Typography)({
    fontSize: "1rem",
    color: "white",
    textAlign: "left",
    marginBottom: "0.5rem"
});

const CardDivider = styled(Box)({
    width: "3rem",
    height: "0.4rem",
    backgroundColor: styles.orange,
    borderRadius: "8px",
    marginBottom: "1.5rem"
});

const CardButton = styled("button")({
    backgroundColor: styles.medBlue,
    color: "white",
    padding: "0.75rem 1.5rem",
    border: "none",
    cursor: "pointer",
    fontSize: "0.75rem"
});


export interface DevCenterCardProps {
    title: string;
    description: string;
    link: string;
    containerProps?: React.ComponentProps<typeof Box>;
    navigateFunction?: NavigateFunction;
    variant?: "blue" | "white"
}

export const Card = ({ title, description, link, containerProps, navigateFunction, variant = "blue" }: DevCenterCardProps) => {
    return (
        <CardContainer data-testid="card__container" 
            sx={{ backgroundColor: variant === "blue" ? styles.blue : "white" }} {...containerProps}
        >
            <Box data-testid="card__textContainer">
                <CardTitleText data-testid="card__title"
                    sx={{ 
                        color: variant === "blue" ? "white" : "black",
                        marginBottom: variant === "blue" ? "0" : "1rem"
                    }}
                >
                    {title}
                </CardTitleText>
                {variant === "blue" && <CardDivider data-testid="card__divider" />}
                <CardDescriptionText data-testid="card__description"
                    sx={{ 
                        color: variant === "blue" ? "white" : "black",
                        marginBottom: variant === "blue" ? "0" : "2rem"
                    }}
                >
                    {description}
                </CardDescriptionText>
            </Box>
            <CardButton data-testid="card__button"
                onClick={() => navHelper(link, navigateFunction)}
                sx={{ backgroundColor: variant === "blue" ? styles.medBlue : styles.orange}}
            >
                Learn more
            </CardButton>
        </CardContainer>
    )
};