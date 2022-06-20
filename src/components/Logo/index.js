import logo from "./../../assets/images/logo.png"
import {Stack, Typography, useTheme, ButtonBase} from "@mui/material";
import {Link} from "react-router-dom"

const Logo = (props) => {
    const theme = useTheme()
    return (
        <ButtonBase sx={{display: "block"}} component={Link} to={"/"}>
            <Stack flexDirection={"row"} alignItems={"center"}>
                <img alt={"logo"} height={props.height} src={logo}/>
                {props.title &&
                    <Typography
                        variant={"logo"}
                        ml={1}
                        sx={{
                            color: "white",
                            [theme.breakpoints.down('md')]: {
                                display: "none"
                            }
                        }}>
                        {props.title}
                    </Typography>
                }
            </Stack>
        </ButtonBase>
    )
}

export default Logo
