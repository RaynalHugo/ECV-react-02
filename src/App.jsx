import { useState } from 'react'
import './App.css'

const EMPTY = "Empty";
const CROSS = "Cross";
const CIRCLE = "Circle";

function App() {
  return (
    <div className="App">
        <Wrapper />
    </div>
  )
}

const defaultState =
[
    [CROSS, CIRCLE, EMPTY],
    [EMPTY, CROSS, EMPTY],
    [CIRCLE, EMPTY, CROSS]
]

function Wrapper() {
    const [state, setState] = useState(defaultState);

    return (
        <>
            <table className="wrapper">
                <figcaption>Tic Tac Toe</figcaption>
                <tr>
                    <Cell status={state[0][0]}/>
                    <Cell status={state[0][1]}/>
                    <Cell status={state[0][2]}/>
                </tr>
                <tr>
                    <Cell status={state[1][0]}/>
                    <Cell status={state[1][1]}/>
                    <Cell status={state[1][2]}/>
                </tr>
                <tr>
                    <Cell status={state[2][0]}/>
                    <Cell status={state[2][1]}/>
                    <Cell status={state[2][2]}/>
                </tr>
            </table>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </>
    )
}

function Cell({status}) {
    if (status === CROSS) {
        return (
            <td className="cell">✘</td>
        )
    }
    if (status === CIRCLE) {
        return (
            <td className="cell">○</td>
        )
    }
    return (
        <td className="cell"></td>
    )
}

export default App
