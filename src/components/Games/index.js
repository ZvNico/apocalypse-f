import {useEffect} from "react";
import {getAllGames} from "../../actions/game";
import {useDispatch, useSelector} from "react-redux";
import {Grid, Stack, Typography, Box, ButtonBase} from "@mui/material";
import {Link} from "react-router-dom"

const Games = (props) => {
    const games = useSelector(state => state.games)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllGames())
    }, [])
    return (
        <Grid container sx={{width: "100%", minHeight: "100%", mt: 2}} spacing={2}>
            {games.map(game => {
                return (
                    <Grid key={`game-${game.id}`} item xs={12} sm={6} md={4} sx={{
                        height: "200px"
                    }}>
                        <ButtonBase sx={{height: "100%", width: "100%", display: "block", borderRadius: 2}}
                                    component={Link} to={`/game/${game.id}`}>
                            <Stack sx={{height: "100%"}}>
                                <Box sx={{
                                    flex: "1",
                                    mb: 1,
                                    position: "relative",
                                    borderRadius: "10px",
                                    backgroundSize: "cover",
                                    backgroundImage: `url(${game.default_edition.cover})`
                                }}>
                                    <Box sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        px: 1,
                                        py: 0.5,
                                        transform: "translate(-10%, +10%)",
                                        backgroundColor: "secondary.main",
                                        borderRadius: 1,
                                    }}>
                                        <Typography sx={{color: "white"}}>
                                            -{Math.round(game.default_edition.price / game.default_edition.initial_price * 100)}%
                                        </Typography>
                                    </Box>
                                </Box>
                                <Stack direction={"row"} justifyContent={"space-between"} px={1}>
                                    <Typography sx={{color: "white"}}>{game.name}</Typography>
                                    <Typography sx={{color: "white"}}>{game.editions[0].price}€</Typography>
                                </Stack>
                            </Stack>
                        </ButtonBase>
                    </Grid>
                )
            })}
        </Grid>
    )

}
export default Games
