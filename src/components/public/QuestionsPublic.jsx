import { Link } from "react-router-dom"

const QuestionsPublic = ({question}) => {  

    return(
        <section className='question'>
         <div className="card">
            <h4>{question.question}</h4>
            <h6>{question.category}  - <small>{question.type}</small></h6>
            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
            <Link to={`/question/${question.id}`} className="button">
                View Question
            </Link>
        </div>
        </section>
    )
}

export default QuestionsPublic