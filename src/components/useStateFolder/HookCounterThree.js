import React, {useState} from 'react'

function HookCounterThree() {
    const [name, setName] = useState({firstName:'', lastName:''})
    return (
        <div>
            <input type='text' vlaue={name.firstName} onChange={e => setName({... name,firstName:e.target.value})}/>
            <input type='text' vlaue={name.lastName} onChange={e => setName({... name,lastName:e.target.value})}/>
            <h2>You firstName is - {name.firstName}</h2>
            <h2>You lastName is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree