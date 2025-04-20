import { IAction, IQuestion } from "../@types";

const reducer = (state: IDBRequestReadyState, action: IAction) : IQuestion => {
    switch (action.type) {
        case 'set-answer': 
            return {...state, selectedAnswer: action.payload ?? ""}
        default: {
            console.log("invalid action type! : " + action.type);
        }
    }
}
export default reducer;