import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import {privateNavbar} from "../utils/NavbarList"
import { app } from "../service/firebase"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"



const PrivateLayout = () => {

    const [user,setUser]=useState()
    const navigate=useNavigate()

    useEffect(()=>{
        app.auth().onAuthStateChanged((users)=>{
            if(users){
                users?setUser(users):navigate("/")

        }})
      },[])



    return (
        <>
        {user
        ?(<div>
            <Navbar elements={privateNavbar}/>
            <Outlet/>
        </div>)
        :
        null}
        </>
       
    )
}

export default PrivateLayout
