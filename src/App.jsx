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

    const winner = getWinner(status)

    function setCellStatus(row, col, status) {
        if(winner !== undefined) {
            return
        }
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
            <span>Current player : {player}</span><br/>
            <span>Winner : {winner}</span>
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

const getWinner = status => {
    for (let r = 0; r < status.length; r++) {
        if (status[r][0] === status[r][1] && status[r][0] === status[r][2] && status[r][0] !== EMPTY) {
            return status[r][0]
        }
    }


    for (let c = 0; c < status.length; c++) {
        if (status[0][c] === status[1][c] && status[0][c] === status[2][c] && status[0][c] !== EMPTY) {
            return status[0][c]
        }
    }

    if (status[0][0] === status[1][1] && status[0][0] === status[2][2] && status[0][0] !== EMPTY) {
        return status[0][0]
    }

    if (status[0][2] === status[1][1] && status[0][2] === status[2][0] && status[0][2] !== EMPTY) {
        return status[0][2]
    }

    const isTotallyFilled = status.every(row => {
        return row.every(column => {
            return column !== EMPTY
        })
    })

    if (isTotallyFilled) {
        return 'draw'
    }
}

export default App
