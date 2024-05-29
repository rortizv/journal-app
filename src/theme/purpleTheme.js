import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpleTheme = createTheme({
    palette: {
        primary: {
        main: "#543884",
        },
        secondary: {
        main: "#ff4081",
        },
        error: {
        main: red.A400,
        },
    },
});
