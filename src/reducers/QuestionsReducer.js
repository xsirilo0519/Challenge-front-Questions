import actionsTypesQuestions from "../actions/actionsTypes/ActiosTypesQuestions";

const initialState={

    isLoading:false,
    questions:null,
    error:null

}

const QuestionsReducer = (state=initialState,{type,payload})=>{
    switch(type){

        case actionsTypesQuestions.LOADING:
            return {
                ...state,
                isLoading:true,
                error:null,
                }
        case actionsTypesQuestions.LOAD_SUCCESS:
            return {
                ...state,
                isLoading:false,
                questions:payload,
                error:null

                }
        case actionsTypesQuestions.LOAD_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:payload
                }

        case actionsTypesQuestions.DELETE_FAVORITE_SUCCESS:
            const question=state.questions.filter(question=>question.favorite!==null).filter(questionNoNull=>questionNoNull.favorite.id===payload)
            const questionModificada={...question[0],favorite:null}
            return {
                ...state,
                isLoading:false,
                error:null,
                questions:state.questions.map(question=>{if(question.id===questionModificada.id){
                    return questionModificada;
                }
                return question;
            })
                }
        case actionsTypesQuestions.ADD_FAVORITE:
            const questionAdd=state.questions.filter(question=>question.id===payload.questionid)
            const questionModificadaAdd={...questionAdd[0],favorite:payload}
            return {
                ...state,
                isLoading:false,
                error:null,
                questions:state.questions.map(question=>{if(question.id===questionModificadaAdd.id){
                    return questionModificadaAdd;
                }
                return question;
            })
                }   

        default: return state;
    }
}

export default QuestionsReducer
