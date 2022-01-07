import {loginAction,logoutAction} from "../../actions/AuthorActions"
import {  useDispatch ,useSelector  } from "react-redux"
import { useNavigate } from "react-router-dom"
import { app, google } from "../../service/firebase"
import useFormData from '../../hooks/UseFormData'


const HomePage = () => {

    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate=useNavigate()
    const{form, formData, updateFormData} = useFormData();


    const submitForm = (e) => {
        e.preventDefault();
        console.log(formData);
        //postQuestion(formData)
      }
    const handler=()=>{
        app.auth().signOut()
        dispatch(logoutAction())
        navigate("/")
    }

    const handlerLog=()=>{
        app.auth().signInWithPopup(google)
        .then(user =>{
             dispatch(loginAction(user.user.multiFactor.user.email , 
                user.user.multiFactor.user.displayName,
                user.user.multiFactor.user.uid,
                user.user.multiFactor.user.photoURL))
                navigate("/private/Home")    
        })
        .catch()
      }

      const formulario=()=>{
       return( <form ref={form} onSubmit={submitForm} onChange={updateFormData}>
            <label>Correo</label>
            <input required name="email" type="email" placeholder='Ingresa un email'></input>
            <label>Contraseña</label>
            <input required name="password" type="password" placeholder='Ingresa una contraseña'></input>
            <button className="button" type="submit">Ingresar</button>
        </form>)
      }
    return (
        <section>
            <h1>Bienvenido</h1>
            {!state.user&&formulario()}
            <br/>
            {state.user?<button className="button" onClick={handler}>Loggout</button>:<button className="button" onClick={handlerLog}> Ingresar con google</button>}
        </section>
    )
}

export default HomePage
