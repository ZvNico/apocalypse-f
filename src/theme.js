import {createTheme} from '@mui/material/styles';

let theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                },
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    mb: 0.3
                }
            }
        }
    },
    typography: {
        logo: {
            fontSize: 18,
            textTransform: "uppercase",
        }
    },
    palette: {
        primary: {
            contrastText: '#323232',
            main: "#ffffff",
        },
        secondary: {
            main: '#ff4000',
            contrastText: "#ffffff",
        },
    },
});

export default theme
