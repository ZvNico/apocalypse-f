import {Button, Stack, Typography, useTheme, Menu, MenuItem} from "@mui/material";
import {AccountCircle, ArrowDropUp} from '@mui/icons-material'
import {Link} from "react-router-dom"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux"
import {logout} from "../../actions/auth";

const Navbar = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl)
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
        (user
            ? {
                name: user.username,
                icon: ArrowDropUp,
                childs: [
                    {
                        name: user.email,
                        onClick: (e) => {
                            handleClose()
                        }
                    },
                    {
                        name: "Panier",
                        link: "/cart",
                        onClick: (e) => {
                            handleClose()
                        }
                    },
                    {
                        name: "Se Deconnecter",
                        icon: null,
                        onClick: (e) => {
                            handleClose()
                            dispatch(logout())
                        }
                    }],
            }
            : {
                name: "Connexion",
                link: "/login",
                icon: AccountCircle,
            })
    ]
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
            {menuItems.map((item, index) => {
                return (<>
                    <Button
                        id={item.childs && "basic-button"}
                        color={"primary"}
                        key={`navbar-item-button-${index}`}
                        component={item.link ? Link : null}
                        to={item.link ? item.link : null}
                        onClick={(e) => {
                            if (item.onClick) {
                                item.onClick()
                            }
                            handleClick(e)
                        }}
                        sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                        {item.icon != null && <item.icon size={"large"} sx={{
                            mr: 0.5,
                            transition: "0.3s all ease-in",
                            transform: (item.childs && open) && "rotate(180deg)",
                        }}/>}
                        <Typography sx={{textAlign: "center"}}>{item.name}</Typography>
                    </Button>
                    {item.childs?.length > 0 &&
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}>
                            {item.childs.map((child, i) => {
                                return (
                                    <MenuItem component={child.link ? Link : null}
                                              to={child.link ? child.link : null}
                                              key={`menu-item-${i}`}
                                              onClick={child.onClick}
                                              sx={{
                                                  width: "100%"
                                              }}>
                                        {child.name}
                                    </MenuItem>
                                )
                            })}
                        </Menu>}
                </>)
            })
            }
        </Stack>
    )
}

export default Navbar
