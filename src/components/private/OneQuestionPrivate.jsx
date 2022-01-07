import { Link } from "react-router-dom"

const OneQuestionPrivate = ({oneQuestion}) => {

    return(
        <section className='question'>
            <div className="card">
            <h4>{oneQuestion.question}</h4>
            <h6>{oneQuestion.category}  - <small>{oneQuestion.type}</small></h6>
            
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
        </div>
        </section>
    )
}

export default OneQuestionPrivate