import inquirer from 'inquirer';
console.log("Guess a number between 1 to 10");

let a:number=Math.floor(Math.random()*10)
while (true) {
    let input=await inquirer.prompt(
        {name:"guess",type:"number", message:"enter your guess number you want:"})
        let ans:number=input.guess
        if(a==ans){console.log("congratulation your guess number absolutely correct")
        break;}
        else{console.log("sorry you guess wroung number try again");
        }
}