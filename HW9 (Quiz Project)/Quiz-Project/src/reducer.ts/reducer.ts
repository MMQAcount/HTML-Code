// import { IAction, IQuestion } from "../@types";

// const reducer = (state: IDBRequestReadyState, action: IAction) : IQuestion => {
//     switch (action.type) {
//         case 'set-answer': 
//             return {...state, selectedAnswer: action.payload ?? ""}
//         default: {
//             console.log("invalid action type! : " + action.type);
//         }
//     }
// }
// export default reducer;


const storeReducer = (state: {quiz:[]}, action:'next-question'): {quiz: []} => {
  switch (action) {
    case "next-question": {
      return { ...state };
    }
    default:
      return state;
  }
}

export { storeReducer };