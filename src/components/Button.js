import React,{ useContext } from 'react';
import '../css/button.css';
import { CalcContext } from '../App';


const Button = ({value}) => {
    const [calc, setCalc] = useContext(CalcContext);
    let prevOper = 0;
    let currOper = 0;
    let string = "";

    const chooseButton = (e) => {
        e.preventDefault();

        if((value >= 0 && value <=9) || value === '.' || value === "(" || value === ")" ){
            console.log("number clicked");
            appendNumber();
        }
        else if(value === 'AC'){
            console.log("AC clicked");
            clearNumber();
        }
        else if(value === 'DEL'){
            console.log("DEL clicked");
            deleteNumber();
        }
        else if(value === '='){
            console.log("= clicked");
            try{
                computation();
            }
            catch(err){
                setCalc({
                    operand: "",
                    prev_operand: 0,
                    expression: "",
                    curr_operand: "An error occurred !!"
                });  
            }
        }
        else if(value == '+' || value == '-' || value === '*' || value === "÷" || value === "%" ){
            console.log("operator clicked");
            chooseOperation();
        }
        else{
            console.log("sci oper clicked");
            chooseSciOperation();
        }
   }

   const clearNumber = () => {
        setCalc({
            ...calc,
            operand: "",
            prev_operand: 0,
            curr_operand: 0,
            expression: ""
        });                 
   }

   const deleteNumber = () => {
        currOper = calc.curr_operand;

        setCalc({
            ...calc,
            curr_operand: currOper.slice(0, -1),
            expression: currOper.slice(0, -1)
        });  
   }

   const appendNumber = () => {
        currOper = calc.curr_operand;
        string = calc.expression;

        if(value === '.' && currOper.toString().includes('.')) return;
        if(currOper == 0 && value == "00") value = "0";

        if(currOper == 0){
            currOper = parseInt(value);
            string = value;
        }
        else{
            string = string + value;
            currOper = `${currOper}${value}`;         
        }

        //currOper = formatOperand(currOper);
        console.log(string);
        setCalc({
            ...calc,
            curr_operand: currOper,
            expression: string,
        }); 
    
   }

   const chooseOperation = () => {
        currOper = calc.curr_operand;
        prevOper = calc.prev_operand;
        
        setCalc({
            ...calc,
            operand: value,
            prev_operand: `${currOper}${value}`,
            curr_operand: 0,
            expression: `${currOper}${value}`,
        }); 
   }

   const chooseSciOperation = () => {
        currOper = calc.curr_operand;
        const sciFunc = {
            "sin": "Math.sin",
            "cos": "Math.cos",
            "tan": "Math.tan",
            "ln": "Math.log",
            "log": "Math.log10",
            "π": "Math.PI",
            "e": "Math.E",
            "^": "**",
            "√": "Math.sqrt",
        };
    

        switch(value) {
            case '√':
                string = currOper * Math.sqrt(9);
                break;
        }

        if(value == 'log' || value == 'sin' || value == 'cos' || value == 'tan' || value == 'ln' ){
            value = value + '(';
        }

        if(currOper == 0){
            currOper = `${value}`;
        }
        else{
            currOper = `${currOper}${value}`;
        }

        console.log(currOper);
        
        setCalc({
            ...calc,
            curr_operand: currOper,
            expression: string
        });
    }

   const computation = () => {
        console.log("Inside compute");
        let compute;
        let oper = calc.operand;
        prevOper = parseFloat(calc.prev_operand);
        currOper = parseFloat(calc.curr_operand);

        //if(isNaN(prevOper) || isNaN(currOper)) return;
        
        switch(oper) {
            case '+':
                compute = prevOper + currOper;
                break;
            case '-':
                compute = prevOper - currOper;
                break;
            case '*':
                compute = prevOper * currOper;
                break;
            case '÷':
                if(currOper == '0') {
                    compute = "Can't divide by 0";
                }
                else{
                    compute = prevOper / currOper;
                }
                break;
            case '%':
                compute = prevOper % currOper;
                break;
            default:
                console.log("Inside default");
                console.log(currOper);
                compute = eval(currOper);
                return;
        }

        setCalc({
            ...calc,
            operand: "",
            prev_operand: 0,
            curr_operand: compute
        });
   }

  

    const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
        maximumFractionDigits: 0,
    });

    // function formatOperand(operand) {
    //     if (operand == null) return
    //     const [integer, decimal] = operand.split(".");

    //     console.log(typeof(integer));

    //     console.log(INTEGER_FORMATTER.format(operand));
    //     if (decimal == null) return INTEGER_FORMATTER.format(integer);

    //     return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
    // }
  

    return (
        <button className={value === "=" ? "equals" : ""} onClick={chooseButton} >
            {value}
        </button>
    )
}

export default Button