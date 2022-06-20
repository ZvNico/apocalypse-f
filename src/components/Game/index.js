import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {gameByid} from "../../selectors/game";
import {Box, Stack, Typography} from "@mui/material"
import {useState, useEffect} from "react"

const Game = (props) => {
    const params = useParams()
    const id = parseInt(params.gameId)
    const game = useSelector(state => gameByid(state, id))
    const [currentEdition, setCurrentEdition] = useState(game?.default_edition)
    useEffect(() => {
        setCurrentEdition(game?.default_edition)
    }, [game])
    if (game === null) {
        return <div/>
    }
    return (
        <Box
            sx={{
                mt: 3,
                px: "10%",
                backgroundColor: "primary.contrastText",
                width: "100%",
                minHeight: "calc(100vh - 100px)",
                height: "calc(100%)"
            }}>
            <Stack>
                <Box sx={{width: "50%"}}>
                    <Stack direction={"column"} sx={{p: 2}} spacing={2}>
                        <img src={currentEdition?.cover} style={{
                            borderRadius: "10px",
                            width: "100%"
                        }} alt={"image edition"}/>
                        <Typography sx={{fontSize: "1.5rem", color: "white"}}>A propos du jeu</Typography>
                        <Typography sx={{color: "lightgrey"}}>{game.description}</Typography>
                    </Stack>
                </Box>
                <Box sx={{width: "50%"}}>

                </Box>
            </Stack>
        </Box>
    )
}
export default Game
