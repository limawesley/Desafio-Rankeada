let Wins = 90
let Loses = 37
let WinsDiff = CalcDiff(Wins, Loses)

function CalcDiff(Wins, Loses){
    return Wins - Loses
}

if (WinsDiff<=10)
console.log("O Herói tem saldo de " + WinsDiff + " e está no nível de Ferro.");
else if (WinsDiff>=11 && WinsDiff<=20)
console.log("O Herói tem saldo de " + WinsDiff + " e está no nível de Bronze.");
else if (WinsDiff>=21 && WinsDiff<=50)
console.log("O Herói tem saldo de " + WinsDiff + " e está no nível de Prata.");
else if (WinsDiff>=51 && WinsDiff<=80)
console.log("O Herói tem saldo de " + WinsDiff + " e está no nível de Ouro.");
else if (WinsDiff>=81 && WinsDiff<=90)
console.log("O Herói tem saldo de " + WinsDiff + " e está no nível de Diamante.");
else if (WinsDiff>=91 && WinsDiff<=100)
console.log("O Herói tem saldo de " + WinsDiff + " e está no nível de Lendário.");
else if (WinsDiff>100)
console.log("O Herói tem saldo de " + WinsDiff + " e está no nível de Imortal.");
