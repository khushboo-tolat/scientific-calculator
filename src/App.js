import React, { useState, createContext } from 'react';
import Wrapper from './components/Wrapper';
import Output from './components/Output';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
    ["sin", "cos", "tan", "", ""],
    ["x²", "log", "ln", "π", "x!"],
    ["√", "^", "(", ")","%" ],
    ["7", "8", "9", "AC", "DEL"],
    ["4", "5", "6", "*", "÷"],
    ["1", "2", "3", "+", "-"],
    ["0", "00", ".", "="]
];

export const CalcContext = createContext();

function App() {
    let [calc, setCalc] = useState({
        operand: "",
        prev_operand: 0,
        curr_operand: 0,
        expression: ""
    });

    return (
        <CalcContext.Provider value={[calc, setCalc]}>
            <Wrapper>
                <Output />
                <ButtonBox>
                {
                    btnValues.flat().map((btn, i) => {
                        return(
                            <Button key={i} value={btn} /> 
                        )
                    })
                }
                </ButtonBox>                       
            </Wrapper>
        </CalcContext.Provider>
    );
}

export default App;
