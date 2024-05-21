import React, {useState} from "react";
const EightBall = () => {
    const initialValue = {msg: "Think of a Question", color: "black"}
    const [answers, setAnswers] = useState(initialValue);
   
    const [count, setCount] = useState({green:0, goldenrod:0, red:0 });
    
    
    const Answers = [
    
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
      ];

     const changeBall = () => {
        setAnswers(Answers[Math.floor(Math.random()*Answers.length)]);
      
     }
     const reset = (initialValue) => {
        if(answers.color !== 'black'){
        let Update = count;
        Update[answers.color] +=1;
        setCount(Update);
        }
        setAnswers(initialValue);
     }
    
    return (
        <>
            <div onClick={() => answers.color === "black" ? changeBall() : setAnswers(answers)} className="EightBall" style={{backgroundColor: answers.color}} > 
                <p className="EightBall-Text">{answers.msg}</p>
            </div>
            <br />
            <button className="EightBall-Text" onClick={() => reset(initialValue)}>Reset</button>
        </>
    )
}
 

export default EightBall
