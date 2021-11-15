import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom'

const QuizSummary = ({location}) => {
    const history = useHistory()

    useEffect(()=>{
        if(!location.state) history.push("/")
    },[])

    return !location.state?(<h1>Forbidden</h1>) : (
        <div className="my-3">
            <h1 className="text-center mb-3">Quiz Summary</h1>
            <h4 className="d-flex justify-content-center mb-3">Score :<div className="text-success">
            {location.state.score.correct}</div>
             - 
            <div className="text-danger">
                {location.state.score.false}
            </div>
            </h4>
            {location.state.quiz.map((item, index) => (
            <div className="container">
            <div className="card mb-3" key={index}>
                <div className="card-header">No.{index + 1} {item.question}</div>
                <div className="card-body">
                {item.options.map((item, index) => (
                        <div
                        style={{
                            display: 'flex',
                            justifyItems: 'center',
                            alignItems: 'center',
                            alignContent: 'center',
                            fontSize: 18,
                        }}
                        key={index}
                        >
                            <div
                            style={{
                                height: 20,
                                width: 20,
                                borderRadius: 100,
                                backgroundColor: item?.selected ? "greenyellow" : "grey",
                                cursor: 'pointer',
                                marginRight: 5,
                            }}>
                            </div>
                            {item.title}
                        </div>
                    ))}</div>
                <div className="card-footer">
                {item.options.find(
                    option => option.correct && option.selected === option.correct
                ) ? (
                    <div className = "text-success">
                        Jawaban anda Benar : {item.options.find((item) => item.correct).title}
                    </div>
                ) : (
                    <>
                    <div className = "text-danger">
                        Jawaban anda Salah : {
                            item.options.find(item => item.selected)?.title ?? "kamu tidak menjawab"
                        }
                    </div>
                    <div className="text-success">
                        Jawaban yang Benar : {item.options.find((item) => item.correct).title}
                    </div>
                    </>
                )}
                </div>
            </div>
            </div>
            ))}
            <hr/>
        </div>
    )
}

export default QuizSummary
