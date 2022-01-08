import { Link } from "react-router-dom"
import favorite from '../../imagen/star.png'
import No_Favorite from '../../imagen/starNo.png'

const QuestionsPrivate = ({question,deleteQuestion}) => {  

    const hola=()=>{
        console.log("hi");
    }

    return(
        <section className='question'>
            
            <div className="card">
            <div>
                <div style={{margin:10}}>
            <h4>{question.question}</h4>
            <h6>{question.category}  - <small>{question.type}</small></h6>
            </div>
            <Link to={`/private/question/${question.id}`} className="button">
                View Question
            </Link>
             {deleteQuestion && (
                <button className="button right" onClick={() => deleteQuestion(question.id)}>DELETE</button>
            )} 
            </div>
                    {!deleteQuestion&&
                        <div style={{width:40}}>{question?.favorite?<img onClick={hola} className="favorite" src={favorite}/>:<img onClick={hola} className="favorite" src={No_Favorite}/>}</div> 
                    }  
            </div>
            
  
        </section>
    )
}

export default QuestionsPrivate