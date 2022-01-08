import {useEffect} from'react'
import { useDispatch,useSelector } from "react-redux";
import { loadAllQuestionFavorite } from '../../app/middleware/payloadQuestions';
import QuestionPrivate from '../../components/private/QuestionsPrivate';

const QuestionsPagePrivate = () => {
    const dispatch = useDispatch()
    const {isLoading,questions,error}=useSelector(state=>state.question)
    const state =useSelector(state=>state.auth)


    useEffect(()=>{
      dispatch(loadAllQuestionFavorite(state.user.uid))
    },[dispatch])
  
    
    return (
        <section>
                    
                    {questions?
            (questions.length>0? questions.map((question)=>{
                return(
                    <QuestionPrivate key={question.id} question={question}/>
                )
               
            }):<p>No hay preguntas</p>):null}
                    {isLoading && <h1> Cargando preguntas </h1>}
            {error && <h1> Error {error} </h1>}
        </section>
    )
}

export default QuestionsPagePrivate
