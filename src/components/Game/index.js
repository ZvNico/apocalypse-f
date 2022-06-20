import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {gameByid} from "../../selectors/game";
import {Box, Grid} from "@mui/material"
import {useState, useEffect} from "react"

const Game = (props) => {
    const params = useParams()
    const id = params.gameId
    const game = useSelector(state => gameByid(state, id))
    const [currentEdition, setCurrentEdition] = useState(game?.default_edition)
    useEffect(() => {
        console.log(game)
        setCurrentEdition(game?.default_edition)
    }, [game])
    return (
        <Box
            sx={{
                mt: 3,
                width: "100%",
                height: "calc(100vh - 100px)"
            }}>
            <Grid container>
                <Grid item md={6}>
                    <img src={currentEdition?.cover} alt={"image edition"}/>
                </Grid>
                <Grid item md={6}>

                </Grid>
            </Grid>
        </Box>
    )
}
export default Game
