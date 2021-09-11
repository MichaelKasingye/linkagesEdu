export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return{
                ...state,
                user: action.user,
            };
    
        default:
            return state;
    }
};
export default reducer;