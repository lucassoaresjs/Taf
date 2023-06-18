let gender = process.argv[2]; // Genero 
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
let abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
let swimDistance = process.argv[9]; // Distância da natação
let swimTime = process.argv[10]; // Tempo da natação
let diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

// Verifica se o(a) candidato(a) atende aos requisitos de altura
if ((gender === "male" && height >= 1.70) || (gender === "female" && height >= 1.60)) {
   // Verifica se o(a) candidato(a) atende aos requisitos da prova na barra ou duração mínima
   if ((gender === "male" && ( barReps >= 6 || barSeconds >= 15))  || (gender === "female" && (barReps >= 5 || barSeconds >=12))) {
     // Verifica se o(a) candidato(a) atende aos requisitos da prova de abdominais
     if (abs >= 41) {
       // Verifica se o(a) candidato(a) atende aos requisitos da prova de corrida
       if ((gender === "male" && runDistance >= 3000 && runTime <= 720) || (gender === "female" && runDistance >= 4000 && runTime <= 900) || (gender == "female" && runDistance >= 6000 && runTime <=1320) ) {
         // Verifica se o(a) candidato(a) atende aos requisitos da prova de natação ou mergulho
         if ((gender === "male" || gender === "female") && ((swimDistance >= 100 && swimTime <= 60) || diveTime <= 30)) {
          passed = true;
         }
       }
     }
   }
 }


console.log(passed);