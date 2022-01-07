import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import {publicNavbar} from "../utils/NavbarList"
import { app } from "../service/firebase"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {  useSelector  } from "react-redux"


const PublicLayout = () => {
    const state = useSelector(state => state.auth)

    const navigate=useNavigate()

    useEffect(()=>{  
      app.auth().onAuthStateChanged((users)=>{
      users&&navigate("/private/home")
  })},[])




    return (
        <>
{state?.user?
    null:
    <>
            <Navbar elements={publicNavbar}/>
            <Outlet/>
            </>
    }
        </>
    )
}
    
export default PublicLayout
