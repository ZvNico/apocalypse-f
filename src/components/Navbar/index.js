import {Button, Stack, Typography, useTheme, Menu, MenuItem} from "@mui/material";
import {AccountCircle} from '@mui/icons-material'
import {Link} from "react-router-dom"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../../actions/auth";

const Navbar = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const user = useSelector(state => state.user.user)
    const menuItems = [
        {
            name: "Accueil",
            link: "/",
            icon: null
        },
        {
            name: "Boutique",
            link: "/shop",
            icon: null
        },
        (user && {
            name: user.username,
            link: "/cart",
            icon: null,
        }),
        (user && {
            name: "se deconnecter",
            link: "/",
            icon: null,
            onClick: () => dispatch(logout()),
        }),
        (!user && {
            name: "Connexion",
            link: "/login",
            icon: AccountCircle,
        }),
    ]
    return (
        <Stack direction={"row"}
               sx={{
                   [theme.breakpoints.down('sm')]: {
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
            {menuItems.filter(item => item?.name != null).map((item, index) => {
                return <Button
                    color={"primary"}
                    key={`menu-item-${index}`}
                    component={item.link ? Link : null}
                    to={item.link ? item.link : null}
                    onClick={() => {
                        if (item.onClick) {
                            item.onClick()
                        }
                    }}
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                    {item.icon != null && <item.icon size={"large"} sx={{
                        mr: 0.5,
                    }}/>}
                    <Typography sx={{textAlign: "center"}}>{item.name}</Typography>
                </Button>
            })
            }
        </Stack>
    )
}

export default Navbar
