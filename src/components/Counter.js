import React, {useState} from 'react';



const Counter = () => {
    let [count, setCount] = useState(0); 
    return (
        <div>
        The count is {count}
        <button onClick={()=> setCount(count+1)}>+1</button>
        <button onClick={() => setCount(0)}>Reset Count</button>
        </div> 
    )
}

export default Counter; 