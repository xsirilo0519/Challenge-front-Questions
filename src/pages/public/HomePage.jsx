import {loginAction,loggedAction,logoutAction} from "../../actions/AuthorActions"
import {  useDispatch ,useSelector  } from "react-redux"
import { useNavigate } from "react-router-dom"
import { app, google } from "../../service/firebase"

const HomePage = () => {

    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate=useNavigate()

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
    return (
        <section>
            <h1>Home</h1>
            {state.user?<button className="button" onClick={handler}>Log-out</button>:<button className="button" onClick={handlerLog}> google</button>}
        </section>
    )
}

export default HomePage
