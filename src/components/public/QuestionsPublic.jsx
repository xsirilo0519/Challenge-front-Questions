import { Link } from "react-router-dom"

const QuestionsPublic = ({question}) => {  

    return(
        <div className='question'>
            <h2>{question.question}</h2>
            <p>{question.category}  - <small>{question.type}</small></p>
            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
            <Link to={`/question/${question.id}`} className="button">
                View Question
            </Link>
        
        </div>
    )
}

export default QuestionsPublic