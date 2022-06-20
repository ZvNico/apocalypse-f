import Logo from "../Logo";
import Navbar from "../Navbar";
import backgroundVideo from "./../../assets/videos/Background.mp4"
import {Box, Stack, Typography, Button, Snackbar, Alert} from "@mui/material";
import Footer from "../Footer";
import {Link, Route, Routes} from "react-router-dom";
import Shop from "../Shop"
import Game from "../Game"
import Login from "../Login"
import SignUp from "../SignUp"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllGames} from "../../actions/game";

const Home = () => {
    const [logged, setLogged] = useState(false)
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllGames())
    }, [])
    useEffect(() => {
        if (user) {
            setLogged(true)
        }
    }, [user])
    return (
        <Stack
            direction={"column"}
            sx={{
                minHeight: "100vh",
                width: "100%"
            }}>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                py={2}
                pl={2}>
                <Logo height={50} title={"Apocalypse"}/>
                <Navbar/>
            </Stack>
            <Box sx={{
                flex: "1",
                width: "100%",
            }}>
                <Routes>
                    <Route path={"/"} element={
                        <Stack
                            justifyContent={"center"}
                            alignItems={"center"}
                            direction={"column"}
                            sx={{
                                position: "absolute",
                                transform: "translate(-50%, -50%)",
                                top: "50%",
                                left: "50%",
                                zIndex: 2,
                            }}>
                            <Typography sx={{
                                fontSize: "2rem",
                                fontWeight: "bold",
                                textAlign: "center",
                                textShadow: "0 0 5px #ff4000",
                                color: "white"
                            }}>
                                APOCALYPSE
                            </Typography>
                            <Typography sx={{
                                textAlign: "center",
                                fontSize: "1.2rem",
                                fontWeight: "bold",
                                textShadow: "0 0 3px #ff4000",
                                color: "white"
                            }}>
                                Ventes de jeu
                            </Typography>
                            <Button color={"secondary"} variant={"contained"} component={Link} to={"/shop"}>
                                Rejoindre la boutique
                            </Button>
                        </Stack>
                    }/>
                    <Route path={"/shop"}
                           element={
                               <Shop/>
                           }/>
                    <Route path={"/game/:gameId"}
                           element={
                               <Game/>
                           }/>
                    <Route path={"/login"}
                           element={
                               <Login/>
                           }
                    />
                    <Route path={"/signup"}
                           element={
                               <SignUp/>
                           }
                    />
                </Routes>
            </Box>
            <video style={{
                position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover", zIndex: -1,
            }}
                   preload={true}
                   autoPlay
                   loop
                   muted>
                <source src={backgroundVideo} type={"video/mp4"}/>
            </video>
            <Snackbar
                open={logged}
                autoHideDuration={6000}
                onClose={() => setLogged(false)}>
                <Alert variant={"filled"} severity="success">{`Connecté, Bonjour ${user?.username} !`}</Alert>
            </Snackbar>
            <Footer/>
        </Stack>)
}

export default Home
