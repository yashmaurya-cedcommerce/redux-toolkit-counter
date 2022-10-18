import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount, decrementByAmount } from './redux/counterSlice'

export default function Home() {

    const state = useSelector(state=>state)
    const dispatch = useDispatch()
    const [selected, setSelected] = useState('increment')
    const [numInput, setNumInput] = useState(0)

    var selectHandler=(event)=> {
        setSelected(event.currentTarget.value)
    }

    var inputHandler=(event)=> {
        setNumInput(event.currentTarget.value)
    }

    var updateQuant=()=> {
        if(selected === 'increment') {
            dispatch(incrementByAmount(parseInt(numInput)))
        }
        else {
            dispatch(decrementByAmount(parseInt(numInput)))
        }
    }

  return (
    <div className='homeContainer'>

        <p>Count : {state.counter.count}</p>
        <button className='quantBtn' onClick={()=>dispatch(increment())}>Increment</button>
        <button className='quantBtn' onClick={()=>dispatch(decrement())}>Decrement</button>

        <div className='flexDiv'>
            <input type="number" className='numInput' onChange={(event)=>inputHandler(event)} value={numInput} />

            <select id='selectID' onChange={(event)=>selectHandler(event)} value={selected}>
                <option value="increment">Increment</option>
                <option value="decrement">Decrement</option>
            </select>
            <button className='updateBtn' onClick={()=>updateQuant()}>Update</button>
        </div>

    </div>
  )
}
