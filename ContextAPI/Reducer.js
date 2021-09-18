export const initialState = {
    info: [],
};

export const actionTypes = {
    SET_ITEM: "SET_ITEM",
};
console.log("action");

const reducer = (state, action) => {
    console.log(action);
    console.log(state);

    switch (action.type) {
        case actionTypes.SET_ITEM:
            return{
                ...state,
                info: action.info,
            };
    
        default:
            return state;
    }
};
export default reducer;