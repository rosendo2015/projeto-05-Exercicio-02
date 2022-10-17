
const estudents = [
    {
        nome: "João",
        notaDaPrimeiraProva: 7,
        notaDaSegundaProva: 8,
    },
    {
        nome: "Maria",
        notaDaPrimeiraProva: 10,
        notaDaSegundaProva: 7,
    },
    {
        nome: "Felipe",
        notaDaPrimeiraProva: 6,
        notaDaSegundaProva: 8,
    },
    {
        nome: "Junior",
        notaDaPrimeiraProva: 3,
        notaDaSegundaProva: 3,
    },
    {
        nome: "Fernando",
        notaDaPrimeiraProva: 5,
        notaDaSegundaProva: 6,
    },
]

//calculo da média soma dos elementos e dividir pela quantidade de elementos


//criação da função
function CalcMedia(estudent) {
    media = (estudent.notaDaPrimeiraProva + estudent.notaDaSegundaProva) / 2;
    return media;  
}

for (estudent of estudents) {
    mediaFinal = CalcMedia(estudent)

    if (mediaFinal >= 7) {
        alert(`Aluno(a):  ${estudent.nome},
            Sua média final foi: ${mediaFinal},
            Parabéns, ${estudent.nome} você foi aprovado(a)
            `);

    } else {
        alert(`Aluno(a):  ${estudent.nome},
        Sua média final foi: ${mediaFinal},
        Que pena, ${estudent.nome} você foi reprovado(a) estude mais `);
    };
}

