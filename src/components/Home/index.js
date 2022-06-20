import Logo from "../Logo";
import Navbar from "../Navbar";
import backgroundVideo from "./../../assets/videos/Background.mp4"
import {Box, Stack, Typography, Button} from "@mui/material";
import Footer from "../Footer";
import {Link, Route, Routes} from "react-router-dom";
import Shop from "../Shop"
import Game from "../Game"
import Login from "../Login"
import SignUp from "../SignUp"

const Home = () => {
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
                           <Box sx={{
                               flex: "1",
                               width: "100%",
                               backgroundColor: "primary.contrastText",
                               px: "10%",
                           }}>
                               <Shop/>
                           </Box>
                       }/>
                <Route path={"/game/:gameId"}
                       element={
                           <Box sx={{
                               flex: "1",
                               width: "100%",
                               backgroundColor: "primary.contrastText",
                               px: "10%",
                           }}>
                               <Game/>
                           </Box>
                       }/>
                <Route path={"/login"}
                       element={
                           <Box sx={{
                               flex: "1",
                               width: "100%",
                               backgroundColor: "primary.contrastText",
                               px: "10%",
                           }}>
                               <Login/>
                           </Box>
                       }
                />
                <Route path={"/signup"}
                       element={
                           <Box sx={{
                               flex: "1",
                               width: "100%",
                               backgroundColor: "primary.contrastText",
                               px: "10%",
                           }}>
                               <SignUp/>
                           </Box>
                       }
                />
            </Routes>
            <video style={{
                position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover", zIndex: -1,
            }}
                   preload={true}
                   autoPlay
                   loop
                   muted>
                <source src={backgroundVideo} type={"video/mp4"}/>
            </video>
            <Footer/>
        </Stack>)
}

export default Home
