import { Link } from "react-router-dom"

const QuestionsPrivate = ({question,deleteQuestion}) => {  

    return(
        <section className='question'>
            <div className="card">
                <div>
            <h4>{question.question}</h4>
            <h6>{question.category}  - <small>{question.type}</small></h6>
            
     
            <Link to={`/private/question/${question.id}`} className="button">
                View Question
            </Link>
            </div>   {deleteQuestion && (
                <button className="button right" onClick={() => deleteQuestion(question.id)}>DELETE</button>
            )} 
            </div>
  
        </section>
    )
}

export default QuestionsPrivate