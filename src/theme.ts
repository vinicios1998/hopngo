import { blue, grey, yellow } from "@mui/material/colors";
import createTheme, { ThemeOptions } from "@mui/material/styles/createTheme";

export const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#F1C40F'
        },
        secondary: {
            main: grey[500],
        },
    },
});