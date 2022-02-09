export const initialState = {
    text:null
};

export const actionType = {
    Set_Search_Term: "Set_Search_Term"
};

export const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
    case actionType.Set_Search_Term:
        return{
            ...state,
            text: action.text
        };
        default:
            return state;
    }
};

export default reducer;