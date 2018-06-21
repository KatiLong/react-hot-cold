import {RESTART_GAME, MAKE_GUESS, GENERATE_AURAL_UPDATE} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const Reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'RESTART_GAME':
            return {
                ...state,
                correctAnswer: action.correctAnswer
            };
        case 'MAKE_GUESS':

            let guess, feedback2;

            guess = parseInt(guess, 10);
            if (isNaN(guess)) {
                this.setState({ feedback: 'Please enter a valid number' });
                return {
                    ...state,
                    feedback: feedback2,
                    guesses: [...state.guesses, guess]
                }
            }

            const difference = Math.abs(guess - this.state.correctAnswer);

            if (difference >= 50) {
                feedback2 = 'You\'re Ice Cold...';
            } else if (difference >= 30) {
                feedback2 = 'You\'re Cold...';
            } else if (difference >= 10) {
                feedback2 = 'You\'re Warm.';
            } else if (difference >= 1) {
                feedback2 = 'You\'re Hot!';
            } else {
                feedback2 = 'You got it!';
            }
            return {
                ...state,
                feedback: feedback2,
                guesses: [...state.guesses, guess]
            }

        case 'GENERATE_AURAL_UPDATE':
            const { guesses, feedback } = this.state;
            // If there's not exactly 1 guess, we want to
            // pluralize the nouns in this aural update.
            const pluralize = guesses.length !== 1;

            let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

            if (guesses.length > 0) {
                auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
            }
            return {
                ...state,
                auralStatus
            }
        default:
            return state;
    }
}
