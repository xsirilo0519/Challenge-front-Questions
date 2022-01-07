import { useDispatch,useSelector } from "react-redux";
import { loadById,deleteAnswer} from '../../app/middleware/payloadQuestions';
import OneQuestionPrivate from '../../components/private/OneQuestionPrivate';
import {useEffect} from'react'
import { useParams } from "react-router-dom";
import FormAnswer from "../../components/private/FormAnswer";
import ViewAnswer from "../../components/private/ViewAnswer";
import Modal from "../../components/Modal"
import {useState} from "react"

const OneQuestionPagePrivate = () => {
    const {id}=useParams();
    const msgModal = {
        msg: "Desea eliminar la respuesta seleccionada",
        titulo: "Eliminar",
      };
    const [idEliminar, setIdEliminar] = useState("");
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const {isLoading,oneQuestion,error} = useSelector(state => state.oneQuestion)

    useEffect(()=>{
      dispatch(loadById(id))
    },[])

    const deleteAnswers=(id)=>{
        console.clear();
        setOpen(true);
        setIdEliminar(id)
    }  

    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleConfirm = () => {
        dispatch(deleteAnswer(idEliminar))
        setOpen(false);

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
            <Modal
          msgModal={msgModal}
          open={open}
          handleClose={handleClose}
          handleConfirm={handleConfirm}
        ></Modal>
            
        </section>
    )
}

export default OneQuestionPagePrivate
