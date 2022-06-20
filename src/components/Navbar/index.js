import {Button, Stack, Typography, useTheme} from "@mui/material";
import {AccountCircle} from '@mui/icons-material'
import {Link} from "react-router-dom"

const Navbar = () => {
    const theme = useTheme()
    const menuItems = [
        {
            name: "Acceuil",
            link: "/",
            icon: null
        },
        {
            name: "Boutique",
            link: "/shop",
            icon: null
        }, {
            name: "Connexion",
            link: "/login   ",
            icon: AccountCircle,
        },
    ]
    return (
        <Stack direction={"row"}
               sx={{
                   [theme.breakpoints.down('md')]: {
                       flexDirection: "column"
                   },
                   backgroundColor: "primary.contrastText",
                   px: 1.5,
                   py: 1,
                   "& > *": {
                       px: 1.5,
                       py: 1,
                   }
               }}>
            {menuItems.map((item, index) => {
                return <Button
                    color={"primary"}
                    key={`menu-item-${index}`}
                    component={Link}
                    to={item.link}
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                    {item.icon != null && <item.icon size={"large"} sx={{
                        mr: 0.5,
                    }}/>}
                    <Typography sx={{textAlign: "center"}}>{item.name}</Typography>
                </Button>
            })}
        </Stack>
    )
}

export default Navbar
