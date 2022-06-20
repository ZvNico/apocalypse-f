import {Box, Button, Stack, Typography, useTheme} from "@mui/material"
import {Facebook, Twitter, Instagram, YouTube} from "@mui/icons-material";

const Footer = () => {
    const theme = useTheme()
    const footerItems = [
        {
            name: "SUIVEZ NOUS",
            icon: null
        },
        {
            name: "Facebook",
            icon: Facebook
        },
        {
            name: "Twitter",
            icon: Twitter
        },
        {
            name: "Instagram",
            icon: Instagram
        },
        {
            name: "Youtube",
            icon: YouTube
        },

    ]
    return (
        <Box sx={{
            position: "absolute",
            bottom: 0,
            zIndex: 1,
            transform: "translateY(100%)",
            backgroundColor: "primary.contrastText",
            width: "100%",
            p: 2,
            minHeight: "50px",
        }}>
            <Stack
                justifyContent={"center"}
                alignItems={"center"}
                spacing={2}
                direction={"row"}
                sx={{
                    height: "100%",
                    [theme.breakpoints.down('md')]: {
                        flexDirection: "column"
                    }
                }}>
                {footerItems.map((item, index) => {
                    if (item.icon) {
                        return <Button key={`footer-item-${index}`} sx={{textTransform: "none"}}>
                            <item.icon size={"large"} sx={{mr: 1}}/>
                            <Typography>{item.name}</Typography>
                        </Button>
                    } else {
                        return <Typography key={`footer-item-${index}`}
                                           sx={{color: "primary.main"}}>{item.name}</Typography>
                    }
                })}
            </Stack>
        </Box>
    )
}


export default Footer;
