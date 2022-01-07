import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';


const FormQuestion = () => {

    const state =useSelector(state=>state.auth)

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        postQuestion(formData)
      }

    return(
        <section>
            <h1>Este es un fomulario de question.</h1>

            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label>Añadir nueva pregunta</label>
                <input required name="question" type="text" placeholder='Ingresa una pregunta acá'></input>
                <input  required name="userId" hidden type="text" value={state.user.uid} placeholder='Ingresa una pregunta acá'></input>
                <label className=" font-medium">Type</label>
                <select required className="" name="type" defaultValue="Type">
                  <option disabled type="String" value="">Type</option>
                  <option type="String" value="OPEN">OPEN (LONG OPEN BOX)</option>
                        <option type="String" value="OPINION">OPINION (SHORT OPEN BOX)</option>
                        <option type="String" value="WITH RESULT">WITH RESULT (OPEN BOX WITH LINK)</option>
                        <option type="String" value="WITH EVIDENCE">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                </select>
                <label className=" font-medium">Category</label>
                <select required name="category"  defaultValue="Category"className="">
                  <option disabled type="String"  value="">Category</option>
                  <option value="TECHNOLOGY AND COMPUTER">TECHNOLOGY AND COMPUTER</option>
                        <option value="SCIENCES">SCIENCES</option>
                        <option value="SOFTWARE DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                        <option value="SOCIAL SCIENCES">SOCIAL SCIENCES</option>
                        <option value="LANGUAGE">LANGUAGE</option>
                </select>
                <button className="button" type="submit">Enviar</button>
            </form>

        </section>
    )

}

export default FormQuestion