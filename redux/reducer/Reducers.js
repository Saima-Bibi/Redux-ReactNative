import { ADD_ITEM, REMOVE_ITEM } from "../ActionTypes";

const initialState = {
    items: []
};
export const Reducers= (state= initialState, action)=>{
    console.log('here',action)
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };

        case REMOVE_ITEM:
        return{ 
            ...state,
            items: state.items.filter(item => item.id !== action.payload)

        }

        default :
        return state
    }
}