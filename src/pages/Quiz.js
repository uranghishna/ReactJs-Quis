import React, {useState, useEffect} from 'react';
import { useTimer } from 'react-timer-hook';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { quiz as quizData } from '../components/quiz/FakeData';


const Quiz = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [quiz, setQuiz] = useState(quizData);
    const [score,setScore]= useState({
        correct: 0,
        false: 0,
    });
    const {id, question, options} = quiz[currentIndex];
    const history = useHistory();
    const MINUTES = 1 *5;
    const time = new Date();
    time.setSeconds(time.getSeconds() + MINUTES); // 10 minutes timer

    const {
    seconds,
    minutes,
    hours,
    // days,
    // isRunning,
    // start,
    // pause,
    // resume,
    // restart,
    } = useTimer({ expiryTimestamp: time, onExpire: () => history.push({
                    pathname: "/summary",
                    state: {
                        quiz,
                        score,
                    }
                })
            });

    const checkScore = () => {
        const questionAnswered = quiz.filter((item) => item.selected);
        const questionCorrect = questionAnswered.filter((item) => item.options.find(option => option.correct && option.selected === option.correct));
        setScore({
            correct: questionCorrect.length,
            false: quiz.length - questionCorrect.length,
        })
    }

    useEffect(() => {
        checkScore();
    }, [quiz]);

    const nextQuestion = () =>{
        if(quiz.length - 1 === currentIndex) return;
        setCurrentIndex(currentIndex + 1)
    }

    const previousQuestion = () =>{
        if(currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1)
    }

        const selectOption = (indexSelected, indexOptionSelected) =>{
        setQuiz(
            quiz.map((item, index) =>
            index === indexSelected
             ? {...item, selected: true,
                options: options.map((item, index) =>
                index === indexOptionSelected
                    ? {...item, selected: true}
                    : {...item, selected: false}
                ),
                }
             : item
            )
        )
        
    }
    

    return (
        <div className="container">
            <h1 className="text-center my-3">Happy Quiz</h1>
            <h3 className="text-center">Timer = {hours}:{minutes}:{seconds}</h3>
            {/* <h4 className="text-center">Benar = {score.correct} | Salah = {score.false}</h4> */}
            <div className="card" style={{ backgroundColor: 'grey' }}>
                <div className="card-body" style={{
                    display: 'flex',
                    padding: 10,
                    flexWrap: 'wrap',
                }}>
                    {quiz.map((item, index) => (
                        <div className="border border-black" style={{
                        height: 35,
                        width: 35,
                        display: 'flex',
                        justifyContent: 'center',
                        justifyItems: 'center',
                        alignItems: 'center',
                        margin: 5,
                        borderRadius: 5,
                        cursor: 'pointer',
                        backgroundColor: index === currentIndex ? "greenyellow" : item?.selected ? "green" : 'white'
                        }}
                        onClick={() => setCurrentIndex(index)}
                        >
                        {index + 1}
                    </div>
                    ))}
                </div>
            </div>
            <div className="card">
                <div className="card-header" style={{fontSize: 25}}>{currentIndex +1}. {question}</div>
                <div className="card-body">
                    {options.map((item, index) => (
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
                            }}
                             onClick={() => selectOption(currentIndex, index)}>
                            </div>
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-between pt-3">
                <button className="btn btn-secondary col-sm-2" onClick={() => previousQuestion()} disabled={currentIndex === 0 ? true : false}>Previous</button>
                {quiz.length - 1 === currentIndex ?
                (<Link className="btn btn-success col-sm-2" to={{
                    pathname: "/summary",
                    state: {
                        quiz,
                        score,
                    },
                }}>Finish</Link>) : (<button className="btn btn-primary col-sm-2" onClick={() => nextQuestion()}>Next</button>)
                }
            </div>
        </div>
    )
}

export default Quiz
