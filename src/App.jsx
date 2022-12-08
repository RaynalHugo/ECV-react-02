import {useState} from 'react'
import './App.css'
import {set} from 'lodash/fp'

const EMPTY = "Empty";
const CROSS = "Cross";
const CIRCLE = "Circle";

function App() {
    return (
        <div className="App">
            <Wrapper/>
        </div>
    )
}

const defaultState =
    [
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY],
        [EMPTY, EMPTY, EMPTY]
    ]

function Wrapper() {
    const [status, setStatus] = useState(defaultState);
    const [player, setPlayer] = useState(CROSS);

    function setCellStatus(row, col, status) {
        setStatus((previousState) =>
            set([row, col], status, previousState)
        )
        setPlayer(previousPlayer => {
            if (previousPlayer === CROSS) {
                return CIRCLE
            }
            if (previousPlayer === CIRCLE) {
                return CROSS
            }
        })
    }

    return (
        <>
            <span>Current player : {player}</span>
            <table className="wrapper">
                <figcaption>Tic Tac Toe</figcaption>
                <tr>
                    <Cell status={status[0][0]} setCellStatus={() => setCellStatus(0, 0, player)}/>
                    <Cell status={status[0][1]} setCellStatus={() => setCellStatus(0, 1, player)}/>
                    <Cell status={status[0][2]} setCellStatus={() => setCellStatus(0, 2, player)}/>
                </tr>
                <tr>
                    <Cell status={status[1][0]} setCellStatus={() => setCellStatus(1, 0, player)}/>
                    <Cell status={status[1][1]} setCellStatus={() => setCellStatus(1, 1, player)}/>
                    <Cell status={status[1][2]} setCellStatus={() => setCellStatus(1, 2, player)}/>
                </tr>
                <tr>
                    <Cell status={status[2][0]} setCellStatus={() => setCellStatus(2, 0, player)}/>
                    <Cell status={status[2][1]} setCellStatus={() => setCellStatus(2, 1, player)}/>
                    <Cell status={status[2][2]} setCellStatus={() => setCellStatus(2, 2, player)}/>
                </tr>
            </table>
            <pre>{JSON.stringify(status, null, 2)}</pre>
        </>
    )
}

function Cell({status, setCellStatus}) {
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
        <td className="cell" onClick={setCellStatus}></td>
    )
}

export default App
