import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer'
import PublicLayout from './layout/PublicLayout';
import PrivateLayout from './layout/PrivateLayout';
import HomePage from './pages/public/HomePage';
import QuestionsPagePrivate from './pages/private/QuestionsPagePrivate';
import OneQuestionPagePrivate from './pages/private/OneQuestionPagePrivate';
import OneQuestionPagePublic from './pages/public/OneQuestionPagePublic';
import QuestionsPagePublic from './pages/public/QuestionsPagePublic';
import CreateQuestion from './pages/private/CreateQuestion';
import MyQuestions from './pages/private/MyQuestions';
import { app } from "./service/firebase"
import { loggedAction} from "./actions/AuthorActions"
import { useDispatch } from "react-redux"
import {useEffect} from "react";




function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
      app.auth().onAuthStateChanged((user)=>{
        console.log(user);
        if(user){
          dispatch(loggedAction(user.multiFactor.user.email , 
              user.multiFactor.user.displayName,
              user.multiFactor.user.uid,
              user.multiFactor.user.photoURL))
          }
  })},[])

  return (
    <>
    <div className="App">
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
            <Route path="" element={<HomePage/>}/>
            <Route path="/QuestionsPage" element={<QuestionsPagePublic/>}/>
            <Route path="Question/:id" element={<OneQuestionPagePublic/>}/>
        </Route>
          <Route path="/private" element={<PrivateLayout/>}>
            <Route path="Home" element={<HomePage/>}/>
            <Route path="QuestionsPage" element={<QuestionsPagePrivate/>}/>
            <Route path="Question/:id" element={<OneQuestionPagePrivate/>}/>
            <Route path="CreateQuestion" element={<CreateQuestion/>}/>
            <Route path="MyQuestions" element={<MyQuestions/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
    <Footer/>
    </>
  );

  
}


export default App;
