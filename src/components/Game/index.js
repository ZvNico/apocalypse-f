import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {gameByid} from "../../selectors/game";
import {Box, Stack, Typography, Select, MenuItem, Button, useTheme} from "@mui/material"
import {useState, useEffect} from "react"

const Game = (props) => {
    const params = useParams()
    const id = parseInt(params.gameId)
    const theme = useTheme()
    const game = useSelector(state => gameByid(state, id))
    const [currentEdition, setCurrentEdition] = useState(game?.default_edition)
    useEffect(() => {
        setCurrentEdition(game?.default_edition)
    }, [game])
    if (game === null) {
        return <div/>
    }
    if (!currentEdition) {
        return <div/>
    }
    return (
        <Box
            sx={{
                pt: 3,
                px: "10%",
                backgroundColor: "primary.contrastText",
                width: "100%",
                minHeight: "calc(100vh - 100px)",
                height: "calc(100%)"
            }}>
            <Stack direction={"row"}
                   spacing={2}
                   sx={{
                       [theme.breakpoints.down('sm')]: {
                           "&>*": {
                               margin: 0
                           },
                           flexDirection: "column-reverse"
                       },
                   }}>
                <Box sx={{
                    width: "50%",
                    [theme.breakpoints.down('md')]: {
                        width: "100%",
                    },
                }}>
                    <Stack direction={"column"} sx={{p: 1}} spacing={2}>
                        <img src={currentEdition.cover} style={{
                            borderRadius: "10px",
                            width: "100%"
                        }} alt={"image edition"}/>
                        <Typography sx={{fontSize: "1.5rem", color: "white"}}>A propos du jeu</Typography>
                        <Typography sx={{color: "lightgray"}}>{game.description}</Typography>
                    </Stack>
                </Box>
                <Box sx={{
                    width: "50%",
                    [theme.breakpoints.down('md')]: {
                        width: "100%",
                    },
                }}>
                    <Stack direction={"column"} sx={{p: 1}} spacing={1}>
                        <Typography sx={{
                            color: "white",
                            fontSize: "2rem",
                            textAlign: "center"
                        }}>
                            {game.name}
                        </Typography>
                        <Select value={currentEdition.name}
                                onChange={(e) => setCurrentEdition(game.editions.find(edition => edition.name === e.target.value))}>
                            {game.editions.map(edition => {
                                return (
                                    <MenuItem key={edition.id} value={edition.name}>
                                        {edition.name}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                        <Stack direction={"row"}
                               justifyContent={"center"}
                               sx={{
                                   borderRadius: 5,
                                   border: "2px solid",
                                   borderColor: "secondary.main",
                                   p: 1,
                                   "&>*": {
                                       px: 1
                                   },
                                   "&>*:not(:last-child)": {
                                       borderRight: "2px solid",
                                       borderColor: "secondary.main",
                                   }
                               }}>
                            <Typography
                                sx={{color: "white", flex: "1", textAlign: "center"}}>
                                {currentEdition.support}
                            </Typography>
                            <Typography
                                sx={{color: "white", flex: "1", textAlign: "center"}}>
                                {currentEdition.platform}
                            </Typography>
                            <Typography
                                sx={{color: "white", flex: "1", textAlign: "center"}}>
                                {currentEdition.keys.length > 0
                                    ? `${currentEdition.keys.length} en stock`
                                    : "X Rupture de stock"}
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={1} justifyContent={"center"} alignItems={"center"}>
                            <Typography sx={{
                                color: "white",
                                textDecoration: "line-through"
                            }}>{currentEdition.initial_price}€
                            </Typography>
                            <Typography
                                sx={{color: "secondary.main"}}>
                                {-(100 - Math.round(currentEdition.price / currentEdition.initial_price * 100))}%
                            </Typography>
                            <Typography sx={{color: "white", fontSize: "2rem"}}>
                                {currentEdition.price}€
                            </Typography>
                        </Stack>
                        <Button color={"secondary"}
                                disabled={!currentEdition.keys.length > 0}
                                variant={"contained"}>Acheter</Button>
                    </Stack>
                    <Stack direction={"row"} mt={1} p={1}>
                        <Stack direction={"column"} spacing={1} pr={3}>
                            <Typography sx={{color: "lightgray"}}>Editeur</Typography>
                            <Typography sx={{color: "lightgray"}}>Développeur</Typography>
                            <Typography sx={{color: "lightgray"}}>Date de sortie</Typography>
                            <Typography sx={{color: "lightgray"}}>Genres</Typography>
                        </Stack>
                        <Stack direction={"column"} spacing={1}>
                            <Typography sx={{color: "primary.main"}}>{game.editor}</Typography>
                            <Typography sx={{color: "primary.main"}}>{game.developer}</Typography>
                            <Typography sx={{color: "primary.main"}}>{game.release_date}</Typography>
                            <Typography sx={{color: "primary.main"}}>{game.genres.join(", ")}</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}
export default Game
