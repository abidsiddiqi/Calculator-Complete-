import inquirer from "inquirer";
try{
let Calc = await inquirer.prompt([{
    name: "n1",
    type: "number",
    message: "Enter First Number : "},
    {
        name: "n2",
        type: "number",
        message: "Enter Second Number : "},
    {
        name: "choice",
        type: "list",
        choices: ["Add","Sub","Mul","Div"],
        message: "Enter A Choice : "}
])

if (Calc.choice=="Add"){
    console.log(Calc.n1+Calc.n2);
}

else if (Calc.choice=="Sub"){
    console.log(Calc.n1-Calc.n2);
}

else if (Calc.choice=="Mul"){
    console.log(Calc.n1*Calc.n2);
}

else if (Calc.choice=="Div"){
    console.log(Calc.n1/Calc.n2);
}
}
catch(e){
    console.log(e);
}