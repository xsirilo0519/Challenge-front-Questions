import { Link } from "react-router-dom"

const OneQuestionPrivate = ({oneQuestion}) => {

    return(
        <section className='question'>
            <div className="card">
            <div>
            <h4>{oneQuestion.question}</h4>
            <h6>{oneQuestion.category}  - <small>{oneQuestion.type}</small></h6>
            </div>
        
        </div>
        </section>
    )
}

export default OneQuestionPrivate