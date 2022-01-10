import { useSelector } from 'react-redux';
import useFormData from '../../hooks/UseFormData'
import { useDispatch } from 'react-redux';
import { PutUsuario } from '../../app/middleware/payloadQuestions';
import { useNavigate } from 'react-router-dom';

const FormProfile = () => {
    const navigate=useNavigate();
    const dispatch = useDispatch();
    const{form, updateFormData} = useFormData();
    const state =useSelector(state=>state.auth);

   

    const submitForm = (e) => {
        e.preventDefault();
        const userUpdate={
            email:state.user.email,
            nombre:form.current[0].value,
            uid:state.user.uid,
            path:state.user.photo,
            id:state.user.id,
            apellido:form.current[1].value
        }
        dispatch(PutUsuario(userUpdate,navigate))
      }


    return (
        <section>
            <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
                <label>Cambiar nombre</label>
                <input type="text" name="nombre"  defaultValue={state.user.name} placeholder='Ingrese su nombre'></input>
                <input type="text"name="apellido" defaultValue={state.user.apellido} placeholder='Ingrese su apellido'></input>
                <input type="text"name="email"  value={state.user.email} readOnly></input>
                <button className='button' type="submit">Actualizar</button>
            </form>
        </section>
    )
}

export default FormProfile
