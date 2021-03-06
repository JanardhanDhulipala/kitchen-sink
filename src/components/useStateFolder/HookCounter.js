import React, { useState } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)

    const increamentCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={increamentCount}>Count {count}</button>
        </div>
    )
}

export default HookCounter
