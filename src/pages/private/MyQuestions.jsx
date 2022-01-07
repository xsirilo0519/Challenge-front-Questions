import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserQuestion,deleteQuestion } from "../../app/middleware/payloadQuestions"
import QuestionsPrivate from "../../components/private/QuestionsPrivate"
import Modal from "../../components/Modal"
import {useState} from "react"


 
const MyQuestions = () => {
    const dispatch = useDispatch()
    const {user}=useSelector(state=>state.auth)
    const {
        isLoading,
        myQuestions,
        error
    } = useSelector(state => state.myQuestion)


    const msgModal = {
        msg: "Desea eliminar la pregunta seleccionada",
        titulo: "Eliminar",
      };
      const [idEliminar, setIdEliminar] = useState("");
      const [open, setOpen] = useState(false);
    
    useEffect(() =>{
        dispatch(getUserQuestion(user.uid));
    },[user])

    const deleteQuestions=(id)=>{
        console.clear();
        setOpen(true);
        setIdEliminar(id)
    }  

    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleConfirm = () => {
        dispatch(deleteQuestion(idEliminar))
        setOpen(false);

      }

    return (
        <section>
        {myQuestions?
        (myQuestions.length>0?myQuestions.map((question)=>{
            return(
                <QuestionsPrivate key={question.id} question={question} deleteQuestion={deleteQuestions}/>
                )}):<p>No ha creado preguntas</p>):null}
        
        {isLoading && <h1> Cargando preguntas </h1>}
            {error && <h1> Error {error} </h1>}
            <Modal
          msgModal={msgModal}
          open={open}
          handleClose={handleClose}
          handleConfirm={handleConfirm}
        ></Modal>
        </section>
    )
}

export default MyQuestions
