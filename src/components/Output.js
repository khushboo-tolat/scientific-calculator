import React,{ useContext } from 'react';
import '../css/output.css';
import { CalcContext } from '../App';

const Output = () => {
    const [calc] = useContext(CalcContext);

    return (
        <div className="output">
            <div className="prev-operand">
                {calc.prev_operand}
            </div>
            <div className="curr-operand">
                {calc.curr_operand}
            </div>
        </div>
    )
}

export default Output
