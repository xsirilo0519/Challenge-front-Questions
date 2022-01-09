import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getFavoriteUserQuestion } from "../../app/middleware/payloadQuestions"
import QuestionsPrivate from "../../components/private/QuestionsPrivate"


 
const MyFavorites = () => {
    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.auth)
    const {
        isLoading,
        myQuestions,
        error
    } = useSelector(state => state.myQuestion)

    const isFavorite=false;


    useEffect(() =>{
        dispatch(getFavoriteUserQuestion(user.uid));
    },[user])

    return (
        <section>
        {myQuestions?
        (myQuestions.length>0?myQuestions.map((question)=>{
            return(
                <QuestionsPrivate key={question.id} question={question} isFavorite={isFavorite}/>
                )}):<p>No tiene favoritos </p>):null}
        
        {isLoading && <h1> Cargando preguntas </h1>}
            {error && <h1> Error {error} </h1>}
        </section>
    )
}

export default MyFavorites
