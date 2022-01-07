
const ViewAnswer = ({answer}) => {  

    return(
        <section className='question'>
            <div className="card-answer">
            <p>{answer.answer}</p>
              
            {/* {onDelete && (
                <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
            )} */}
            </div>
        </section>
    )
}

export default ViewAnswer