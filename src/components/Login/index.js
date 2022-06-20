import {Box, TextField, Stack, Typography, Button} from "@mui/material"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../actions/user";

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
        dispatch(login(email, password))
        event.preventDefault()
    }
    return (
        <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Stack justifyContent={"flex-start"} mt={3} spacing={2} direction={"column"} sx={{width: "500px"}}>
                <Typography sx={{color: "white", fontSize: "1.5rem"}}>Se connecter</Typography>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2} direction={"column"}>
                        <TextField value={email}
                                   onChange={e => setEmail(e.target.value)}
                                   variant={"outlined"}
                                   label={"Email"}/>
                        <TextField value={password}
                                   onChange={e => setPassword(e.target.value)}
                                   variant={"outlined"}
                                   label={"Password"}
                                   type={"password"}/>
                        <Button color={"secondary"} type={"submit"} variant={"contained"}>OK</Button>
                    </Stack>
                </form>
            </Stack>
        </Box>
    )
}

export default Login
