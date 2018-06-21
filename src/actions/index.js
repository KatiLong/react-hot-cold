export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const onGenerateAuralUpdate = () => ({
    type: GENERATE_AURAL_UPDATE
})
export const RESTART_GAME = 'RESTART_GAME';
export const onRestartGame = (correctAnswer) => ({
    type: RESTART_GAME,
    correctAnswer
})
export const MAKE_GUESS = 'MAKE_GUESS';
export const onMakeGuess = (guess) => ({
    type: MAKE_GUESS,
    guess
})
