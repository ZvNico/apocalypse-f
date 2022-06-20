import {Box, TextField, Stack, Typography, Button} from "@mui/material"
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../../actions/auth";
import {Navigate} from "react-router-dom";

const SignUp = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [submited, setSubmited] = useState(false)
    const handleSubmit = (event) => {
        dispatch(signUp(email, password, username))
        setSubmited(true)
        event.preventDefault()
    }
    if (submited) {
        return <Navigate to={"/login"}/>
    }
    return (<Box sx={{
        width: "100%", display: "flex", justifyContent: "center", alignItems: "center"
    }}>
        <Stack justifyContent={"flex-start"} mt={3} spacing={2} direction={"column"} sx={{width: "500px"}}>
            <Typography sx={{color: "white", fontSize: "1.5rem"}}>S'inscrire</Typography>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction={"column"}>
                    <TextField value={username}
                               onChange={e => setUsername(e.target.value)}
                               variant={"outlined"}
                               label={"Nom d'utilisateur"}/>
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
    </Box>)
}

export default SignUp
