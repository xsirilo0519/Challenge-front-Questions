import useFormData from '../../hooks/UseFormData'
import { postQuestion } from '../../app/middleware/payloadQuestions';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const FormQuestion = () => {
    const navigate=useNavigate();
    const state =useSelector(state=>state.auth)

    const{form, formData, updateFormData} = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        postQuestion(formData,navigate)
      }

    return(
        <section>
            {state?.user?
            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label>Añadir nueva pregunta</label>
                <input required name="question" type="text" placeholder='Ingresa una pregunta acá'></input>
                <input  required name="userId" readOnly hidden type="text" value={state.user.uid} placeholder='Ingresa una pregunta acá'></input>
                <input  required name="email" readOnly hidden type="text" value={state.user.email} placeholder='Ingresa una pregunta acá'></input>
                <label className=" font-medium">Type</label>
                <select required className="" name="type" defaultValue="OPEN">
                  <option disabled type="String" defaultValue="" >Type</option>
                  <option type="String" value="OPEN">OPEN (LONG OPEN BOX)</option>
                        <option  type="String" value="OPINION">OPINION (SHORT OPEN BOX)</option>
                        <option  type="String" value="WITH_RESULT">WITH RESULT (OPEN BOX WITH LINK)</option>
                        <option  type="String" value="WITH_EVIDENCE">WITH EVIDENCE (OPEN BOX WITH VIDEO)</option>
                </select>
                <label className=" font-medium">Category</label>
                <select required  name="category"  defaultValue="TECHNOLOGY_AND_COMPUTER"className="">
                  <option disabled  type="String"  defaultValue="" >Category</option>
                  <option  value="TECHNOLOGY_AND_COMPUTER">TECHNOLOGY AND COMPUTER</option>
                        <option  type="String" value="SCIENCES">SCIENCES</option>
                        <option  type="String" value="SOFTWARE_DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
                        <option  type="String" value="SOCIAL_SCIENCES">SOCIAL SCIENCES</option>
                        <option type="String" value="LANGUAGE">LANGUAGE</option>
                </select>
                <button className="button" type="submit">Enviar</button>
            </form>
:null}
        </section>
    )

}

export default FormQuestion