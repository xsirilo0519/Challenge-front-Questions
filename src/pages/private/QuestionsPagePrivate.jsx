import {useEffect} from'react'
import { useDispatch,useSelector } from "react-redux";
import { loadAllQuestion } from '../../app/middleware/payloadQuestions';
import QuestionPrivate from '../../components/private/QuestionsPrivate';

const QuestionsPagePrivate = () => {
    const dispatch = useDispatch()
    const {isLoading,questions,error}=useSelector(state=>state.question)


    useEffect(()=>{
      dispatch(loadAllQuestion())
    },[])
  
    
    return (
        <section>
                    
                    {questions?
            (questions.length>0? questions.map((question)=>{
                return(
                    <QuestionPrivate key={question.id} question={question}/>
                )
               
            }):<p>No ha creado preguntas</p>):null}
                    {isLoading && <h1> Cargando preguntas </h1>}
            {error && <h1> Error {error} </h1>}
        </section>
    )
}

export default QuestionsPagePrivate
