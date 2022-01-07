import { Link } from "react-router-dom"

const QuestionsPrivate = ({question,deleteQuestion}) => {  

    return(
        <section className='question'>
            <div className="card">
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
  
        </section>
    )
}

export default QuestionsPrivate