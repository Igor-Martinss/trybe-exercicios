const nota = 50;
if (nota >= 50) {
    console.log("Parabéns, voce faz parte do grupo das pessoas aprovadas!")
} else if (nota < 50 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
} else if (nota < 60) {
    console.log("Infelimente, você reprovou.");
}