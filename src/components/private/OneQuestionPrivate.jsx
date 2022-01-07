import { Link } from "react-router-dom"

const OneQuestionPrivate = ({oneQuestion}) => {

    return(
        <section className='question'>
            <div className="card">
            <h4>{oneQuestion.question}</h4>
            <h6>{oneQuestion.category}  - <small>{oneQuestion.type}</small></h6>
            
        
        </div>
        </section>
    )
}

export default OneQuestionPrivate