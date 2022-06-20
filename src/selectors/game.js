export const gameByid = (state, id) => {
    console.log(state.games)
    const game = state.games.filter(game => game.id === id)
    if (game.length === 0) {
        return null
    }
    return game[0]
}
