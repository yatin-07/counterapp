//import { DefaultRootState } from "react-redux";
export type initialStateType= {
    inc: number;
    dec: number;
}

const initialStatetype: initialStateType ={
    inc: 0,
    dec:0
}
const counterReducer = (state = initialStatetype, action: any ) => {
    switch(action.type){
        case 'INCREMENT':
        return {
            ...state,
            inc: state.inc+1,
        }
        
        case 'DECREMENT':
        return {
            ...state,
            inc: state.inc-1,
        }
       
        default:
            return state;

    }
};

export default counterReducer;