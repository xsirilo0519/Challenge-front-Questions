import { questionsLoading ,questionsLoadSucces,questionsLoadError } from "../../actions/QuestionsActions";
import {oneQuestionLoadSucces , oneQuestionLoadError, oneQuestionsLoading,oneQuestionsDeleteAnswer} from "../../actions/OneQuestionActions";
import { myQuestionsLoadSucces, myQuestionsLoading,myQuestionsLoadError, myQuestionsDelete } from "../../actions/MyQuestionsActions";
import { loggedAction, loginAction } from "../../actions/AuthorActions";
import axios from "axios";

export const loadAllQuestion=()=>(dispatch)=>{
  
    dispatch(questionsLoading())

    const options = {
    method: 'GET',
    url: 'http://localhost:8080/getAll',
    headers: {'Content-Type': 'application/json'}
    };

    axios.request(options).then(function (response) {
        dispatch(questionsLoadSucces(response.data))
    }).catch(function (error) {
        dispatch(questionsLoadError(error.message))
    });
}


export const loadById=(id)=>(dispatch)=>{

  dispatch(oneQuestionsLoading())

    const options = {
        method: 'GET',
        url: `http://localhost:8080/get/${id}`,
        headers: {'Content-Type': 'application/json'}
        };
    
        axios.request(options).then(function (response) {
            dispatch(oneQuestionLoadSucces(response.data))
        }).catch(function (error) {
            dispatch(oneQuestionLoadError(error.message))
        });
}


export const postQuestion=(question,navigate)=>{
    console.log(question);
    const options = {
        method: 'POST',
        url: 'http://localhost:8080/create',
        headers: {'Content-Type': 'application/json'},
        data: question
      };
      axios.request(options).then(function (response) {
        navigate("/private/MyQuestions")
      }).catch(function (error) {
        console.error(error);
      });
}


export const postAnswer=(answer)=>(dispatch)=>{

    const options = {
        method: 'POST',
        url: 'http://localhost:8080/add',
        headers: {'Content-Type': 'application/json'},
        data: answer
      };
      
      axios.request(options).then(function (response) {
        console.log(response);
        dispatch(oneQuestionLoadSucces(response.data))
      }).catch(function (error) {
        console.error(error);
      });
}

export const deleteAnswer=(id)=>(dispatch)=>{
  dispatch(oneQuestionsLoading())
  const options = {method: 'DELETE', url: `http://localhost:8080/deleteAnswer/${id}`};
      axios.request(options).then(function (response) {
          dispatch(oneQuestionsDeleteAnswer(id))
      }).catch(function (error) {
        dispatch(oneQuestionLoadError())
      });
}


export const deleteQuestion=(id)=>(dispatch)=>{
    dispatch(myQuestionsLoading())
    const options = {method: 'DELETE', url: `http://localhost:8080/delete/${id}`};
        axios.request(options).then(function (response) {
            dispatch(myQuestionsDelete(id))
        }).catch(function (error) {
          console.log(error);
        });
}


export const getUserQuestion=(userId)=>(dispatch)=>{

    dispatch(myQuestionsLoading())

    const options = {
        method: 'GET',
        url: `http://localhost:8080/getOwnerAll/${userId}`,
        headers: {'Content-Type': 'application/json'}
      };
      axios.request(options).then(function (response) {
        dispatch(myQuestionsLoadSucces(response.data));
      }).catch(function (error) {
        dispatch(myQuestionsLoadError(error.message));
      });
  };

export const postUsuario = (user,navigate)=>(dispatch) => {
  console.log("userpost",user);
  const options = {
    method: "POST",
    url: "http://localhost:8080/createUsuario",
    headers: { "Content-Type": "application/json" },
    data: user,
  };
  
  axios.request(options).then(function (response) {  
    
    console.log("response",response);

    dispatch(loginAction(
      response.data.email,
      response.data.nombre,
      response.data.uid,
      response.data.path,
      response.data.id,
      response.data.apellido)
    )
    navigate("/private/home")
  }).catch(function (error) {
    console.log(error);
  });
};

export const getUsuario = (UID) => (dispatch) => {
  const options = {
    method: "GET",
    url: `http://localhost:8080/getUsuario/${UID}`,
    headers: { "Content-Type": "application/json" },
  };
  axios.request(options).then(response=>{
      dispatch(loginAction(
        response.data.email,
        response.data.nombre,
        response.data.uid,
        response.data.path,
        response.data.id,
        response.data.apellido)
      )
    }

    )
    .catch(function (error) {
     console.log("error");
    });
};

export const PutUsuario = (user,navigate) => (dispatch) => {
  const options = {
    method: "PUT",
    url: `http://localhost:8080/actualizarUsuario`,
    headers: { "Content-Type": "application/json" },
    data: user,
  };
  axios.request(options).then(response=>{
      dispatch(loggedAction(
        response.data.email,
        response.data.nombre,
        response.data.uid,
        response.data.path,
        response.data.id,
        response.data.apellido)
      )
      navigate("/private/home")
    }

    )
    .catch(function (error) {
     console.log("error");
    });
};

