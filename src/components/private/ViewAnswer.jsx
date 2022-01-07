import { useSelector } from 'react-redux';

const ViewAnswer = ({answer,deleteAnswer}) => {  

    const state = useSelector(state => state.auth)

    console.log(state.user.uid);
    console.log(answer);

    return( 
        <section className='question'>
            <div className="card-answer">
            <p>{answer.answer}</p>
              <div>

              {state.user.uid===answer.userId?(deleteAnswer && (
                <button className="button right" onClick={() => deleteAnswer(answer.id)}>DELETE</button>
            )):null} 
              </div>
        
            </div>
        </section>
    )
}

export default ViewAnswer