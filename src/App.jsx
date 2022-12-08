import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
        <Wrapper />
    </div>
  )
}

function Wrapper() {
    return (
        <table className="wrapper">
            <figcaption>Tic Tac Toe</figcaption>
            <tr>
                <Cell status={CROSS}/>
                <Cell status={CIRCLE}/>
                <Cell />
            </tr>
            <tr>
                <Cell />
                <Cell />
                <Cell />
            </tr>
            <tr>
                <Cell />
                <Cell />
                <Cell />
            </tr>
        </table>
    )
}

const EMPTY = 0;
const CROSS = 1;
const CIRCLE = 2;

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
