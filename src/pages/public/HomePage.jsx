import {logoutAction} from "../../actions/AuthorActions"
import { getUsuario,postUsuario } from "../../app/middleware/payloadQuestions"
import {  useDispatch ,useSelector  } from "react-redux"
import { useNavigate } from "react-router-dom"
import { app, google } from "../../service/firebase"
import useFormData from '../../hooks/UseFormData'
import { useState } from "react"


const HomePage = () => {

    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const{form, formData, updateFormData} = useFormData();

    const [error,setError]=useState("");

    const submitForm = (e) => {
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(formData.email,formData.password)
        .then(user =>{
            console.log("hola",user);
            if(user){
                dispatch(getUsuario(user.user.multiFactor.user.uid)) 
            }   
            navigate("/private/Home")
          }
        )
        .catch(error=>setError("Usuario o contraseña incorrecta"))
      }
      
    const handler=()=>{
        app.auth().signOut()
        dispatch(logoutAction())
        navigate("/")
    }

    const handlerLog=()=>{
        app.auth().signInWithPopup(google)
        .then(user =>{
            const userInfo = {
                email:user.user.multiFactor.user.email,
                nombre:user.user.multiFactor.user.displayName,
                uid:user.user.multiFactor.user.uid,
                path:user.user.multiFactor.user.photoURL,
                apellido:""
              }          
              dispatch(postUsuario(userInfo,navigate))
        })
        .catch(error=>setError("Ocurrio un error al loguearse"))
      }

      const formulario=()=>{
       return(<><form ref={form} onSubmit={submitForm} onChange={updateFormData}>
            <label>Correo</label>
            <input required name="email" type="email" placeholder='Ingresa un email'></input>
            <label>Contraseña</label>
            <input required name="password" type="password" placeholder='Ingresa una contraseña'></input>
            <button className="button" type="submit">Ingresar</button>
            
        </form>
        {error?<span>{error}</span>:null}
        </>)
      }
    return (
        <section>
            <h1>Bienvenido</h1>
            {!state.user&&formulario()}
            <br/>
            {state.user?<button className="button" onClick={handler}>Logout</button>:<button className="button" onClick={handlerLog}> Ingresar con google</button>}
        </section>
    )
}

export default HomePage
