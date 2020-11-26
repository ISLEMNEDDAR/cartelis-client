import userActions from './actions'

const initialState = {
    token : null
}

export default function userReducers(state = initialState, action) {
    switch (action.type) {
        case userActions.SET_STATE:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
