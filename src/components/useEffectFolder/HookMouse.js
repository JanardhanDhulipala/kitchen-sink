import React, { useState, useEffect } from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('Mouse position')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Mouse evnet removed')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            X Position : {x}, Y Position : {y}
        </div>
    )
}

export default HookMouse
