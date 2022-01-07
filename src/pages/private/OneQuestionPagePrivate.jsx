import { useDispatch,useSelector } from "react-redux";
import { loadById,deleteAnswer} from '../../app/middleware/payloadQuestions';
import OneQuestionPrivate from '../../components/private/OneQuestionPrivate';
import {useEffect} from'react'
import { useParams } from "react-router-dom";
import FormAnswer from "../../components/private/FormAnswer";
import ViewAnswer from "../../components/private/ViewAnswer";

const OneQuestionPagePrivate = () => {
    const {id}=useParams();
    

    const dispatch = useDispatch()
    const {isLoading,oneQuestion,error} = useSelector(state => state.oneQuestion)

    useEffect(()=>{
      dispatch(loadById(id))
    },[])

    const deleteAnswers=(id)=>{
        dispatch(deleteAnswer(id))
    }  

    return (
        <section>

            {oneQuestion && 
            <>
                 <OneQuestionPrivate oneQuestion={oneQuestion}/>
                 {oneQuestion.answers&&oneQuestion.answers.map((answer)=>{
                     return(
                         <ViewAnswer key={answer.id} answer={answer} deleteAnswer={deleteAnswers} />
                     )
                 }) }
                 <FormAnswer idQuestion={oneQuestion.id}></FormAnswer>
            </>
            }
                     {isLoading && <h1> Cargando pregunta </h1>}
            {error && <h1> Error {error} </h1>} 
            
        </section>
    )
}

export default OneQuestionPagePrivate
