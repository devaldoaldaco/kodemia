// scope global
let variableGlobal = 15;



function saludar() {
    // scope local
    let variableLocal = 10;
    console.log(variableGlobal, variableLocal);// 15 10
    function adios() {
        console.log(variableGlobal, variableLocal); //
    }
    adios();
} 
saludar();

console.log(variableGlobal, variableLocal);// 15 10









