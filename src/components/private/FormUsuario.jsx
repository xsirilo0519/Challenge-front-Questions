import useFormData from '../../hooks/UseFormData'
import { useDispatch } from 'react-redux';
import {postUsuario} from '../../app/middleware/payloadQuestions'
import { useNavigate } from 'react-router-dom';
import { app } from "../../service/firebase"
import { useState } from 'react';

const FormUsuario = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();
    const{form, formData, updateFormData} = useFormData();
    const [error,setError]=useState("");

    const submitForm = (e) => {
        e.preventDefault();
        app.auth().createUserWithEmailAndPassword(formData.email,formData.password)
        .then( user =>{
          const userInfo = {
            email:user.user.multiFactor.user.email,
            nombre:"",
            uid:user.user.multiFactor.user.uid,
            path:"NO_IMG",
            apellido:""
          }
          dispatch(postUsuario(userInfo,navigate))
          })
          .catch(error=>setError(error.message))

        }
 

    return(
        <section>
            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label>Registrar</label>
                <input type="email" name="email" placeholder='Ingrese su email'></input>
                <input type="password"name="password" placeholder='Ingrese la contraseña'></input>
                <button className='button' type="submit">Registrar</button>
            </form>
            {error?<span>{error}</span>:null}
        </section>
    )

}

export default FormUsuario; 