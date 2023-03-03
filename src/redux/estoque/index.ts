const INITIAL_STATE = {
    estoque : []
}

export default (state = INITIAL_STATE, action : any) => {
    switch (action.type) {
        case 'ESTOQUE':
            return { ...state, estoque: action.payload }
        default:
            return state
    }
}