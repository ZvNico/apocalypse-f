import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {gameByid} from "../../selectors/game";
import {Box} from "@mui/material"

const Game = (props) => {
    const params = useParams()
    const id = params.gameId
    const game = useSelector(state => gameByid(state, id))
    return (
        <Box sx={{
            width: "100%",
            height: "calc(100vh - 84px)"
        }}>
            <Box>{id} {game?.name}</Box>
        </Box>
    )
}
export default Game
