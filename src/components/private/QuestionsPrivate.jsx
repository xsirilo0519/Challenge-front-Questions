import { Link } from "react-router-dom"
import favorite from '../../imagen/star.png'
import No_Favorite from '../../imagen/starNo.png'

const QuestionsPrivate = ({question,deleteQuestion}) => {  

    return(
        <section className='question'>
            
            <div className="card">
            <div>
                <div style={{margin:10}}>
            <h4>{question.question}</h4>
            <h6>{question.category}  - <small>{question.type}</small></h6>
                {console.log(question)}
            </div>
            <Link to={`/private/question/${question.id}`} className="button">
                View Question
            </Link>
             {deleteQuestion && (
                <button className="button right" onClick={() => deleteQuestion(question.id)}>DELETE</button>
            )} 
            </div>
                        <div>{question?.favorite===true?<img className="favorite" src={favorite}/>:<img className="favorite" src={No_Favorite}/>}</div> 

            </div>
            
  
        </section>
    )
}

export default QuestionsPrivate