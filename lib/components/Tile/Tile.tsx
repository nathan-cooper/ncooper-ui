import { Box, Typography, styled } from "@mui/material";

const TileContainer = styled(Box)({
    width: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left"
});

const TileTitleText = styled(Typography)({
    fontSize: "1.6rem",
    color: "black",
    textAlign: "left",
    fontWeight: "bold",
    margin: "1rem 0"
});

const TileDescriptionText = styled(Typography)({
    fontSize: "1rem",
    color: "black",
    textAlign: "left"
});

const TileIcon = styled("img")({
    width: "5rem",
    height: "5rem",
});


export interface DevCenterTileProps {
    title: string;
    description: string;
    icon: string;
    containerProps?: React.ComponentProps<typeof Box>;
}

export const Tile = ({ title, description, icon, containerProps }: DevCenterTileProps) => {
    return (
        <TileContainer data-testid="tile__container" {...containerProps}>
            <TileIcon src={icon} data-testid="tile__icon" />
            <TileTitleText data-testid="tile__title">
                {title}
            </TileTitleText>
            <TileDescriptionText data-testid="tile__description">
                {description}
            </TileDescriptionText>
        </TileContainer>
    )
};
