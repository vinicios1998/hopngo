import createTheme, { ThemeOptions } from "@mui/material/styles/createTheme";

export const themeOptions: ThemeOptions = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#fbc02d'
        },
        secondary: {
            main: '#00b0ff',
        },
    },
});