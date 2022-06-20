export const gameByid = (state, id) => {
    const game = state.games.filter(game => game.id === id)
    if (game.length === 0) {
        return null
    }
    return game[0]
}
