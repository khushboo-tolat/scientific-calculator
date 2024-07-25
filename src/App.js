import Wrapper from './components/Wrapper';
import Output from './components/Output';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';

const btnValues = [
    ["AC", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="]
];


function App() {
    return (
        <Wrapper>
            <Output value="0" />
            <ButtonBox>
            {
                btnValues.flat().map((btn, i) => {
                    return(
                    <Button 
                        key={i}
                        className={btn === "=" ? "equals" : ""} 
                        value={btn} 
                        click={() => {
                            console.log("clicked!!");
                    }} /> 
                )
                })
            }
            </ButtonBox>
                       
        </Wrapper>
    );
}

export default App;
