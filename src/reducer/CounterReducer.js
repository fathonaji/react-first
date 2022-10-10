import React, { useReducer } from "react";
import * as Reduce from './ReducerCustom'

const CounterReducer = props => {
    let [counter, dispatch] = useReducer(Reduce.counterRe,0)
    return <div>
        <button onClick={e => {dispatch({type: Reduce.DECREMENT_STATE})}}>Kurang</button>
            <span style={{paddingLeft: '1rem', paddingRight: '1rem'}}>{counter}</span>
        <button onClick={e => {dispatch({type: Reduce.INCREMENT_STATE})}}>Tambah</button>
    </div>
}

export default CounterReducer