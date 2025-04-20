export interface IAction {
    type: string;
    payload?: number;
}
export interface IQuestion {
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    trueAnswer: string;
    selectedAnswer: string;
}
