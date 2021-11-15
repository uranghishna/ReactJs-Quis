import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncreamen = (params) => {
    console.log(params)
    setCount((previous) => previous + 1);
  }

  function handleDecreamen(params){
    console.log(params);
    if (count === 0) return;
      setCount(count - 1);
  }

    return (
        <div className="container">
            <div style={{
        backgroundColor : "pink",
            }}>

        <div style={{margin: 10}}>ini adalah app : {count}</div>
        </div>
        
        <button onClick={() => handleIncreamen("tambah")} className="btn btn-success">Increamen</button>
        <button onClick={() => handleDecreamen("kurang")} className="btn btn-danger">Decreamen</button>         
        </div>
    )
}

export default Counter
