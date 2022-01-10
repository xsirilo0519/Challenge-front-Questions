import useFormData from '../../hooks/UseFormData'
import { postAnswer } from '../../app/middleware/payloadQuestions';
import { useSelector, useDispatch } from 'react-redux';

const FormAnswer = ({idQuestion}) => {

    const dispatch=useDispatch();
    const state =useSelector(state=>state.auth)

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(postAnswer(formData))
        form.current.reset();
      }

    return(

        <section>
            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label>Añade una respuesta.</label>
                <input required name="answer" type="text" placeholder='Ingresa acá una respuesta'></input>
                <input hidden readOnly name="userId" type="text" value={state.user.uid} ></input>
                <input hidden readOnly name="questionId" type="text" value={idQuestion} ></input>
                <button className="button" type="submit">Enviar Respuesta</button>
            </form>
        </section>

    )

}

export default FormAnswer