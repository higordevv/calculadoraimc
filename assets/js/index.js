//Captura evento submit do formulário
const form = document.querySelector("#formT");
form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector("#peso");
    const inputAltura = evento.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    } else if (peso >= 597) {
        setResultado('Peso Inválidokkkkkkkk mlk?ta doido?', false);
        return;
    } else if (peso <= 2.1) {
        setResultado('Peso Inválido, é uma Pena?', false);
        return;
    }
    if (!altura) {
        setResultado("Altura invalida", false);
        return;
    } else if (altura >= 2.51) {
        setResultado('Altura invalida kkkkkk é um poste é?', false);
        return;
    } else if (altura <= 0.62){
        setResultado('Altura  Inválida, é um gnomo?', false);
        return;
    }
    const imc = getIMC(peso, altura)
    const Nivelimc = getnivelIMC(imc)
    
    const msg = `Seu IMC é ${imc} (${Nivelimc}).`;
    setResultado(msg,true)

});
/*
abaixo de 16,00	 Baixo peso Grau III
16,00 a 16,99	 Baixo peso Grau II
17,00 a 18.49	 Baixo peso Grau I
18,50 a 24,99	 Peso ideal
25,00 a 29,99	 Sobrepeso
30,00 a 34,99	 Obesidade Grau I
35,00 a 39,99	 Obesidade Grau II
40,0 e acima	 Obesidade Grau III */

function getnivelIMC(imc) {
    const nivel = ['Baixo peso Grau III', 'Baixo peso Grau II',
     'Baixo peso Grau I', 'Peso ideal', 'Sobrepeso', 'Obesidade Grau I'
     , 'Obesidade Grau II','Obesidade Grau III'];

     if(imc <= 16.00 )                 return nivel[0];
     if(imc >= 16.00 && imc <= 16.99)  return nivel[1];
     if(imc >= 17.00 && imc <= 18.49)  return nivel[2];
     if(imc >= 18.50 && imc <= 24.99)  return nivel[3];
     if(imc >= 25.00 && imc <= 29.99)  return nivel[4];
     if(imc >= 30.00 && imc <= 34.99)  return nivel[5];
     if(imc >= 35.00 && imc <= 39.99)  return nivel[6];
     if(imc >= 40.00)                  return nivel[7];

}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2)

}

function criaP() {
    const p = document.createElement('p')
    p.classList.add('setR')
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector("#result")
    resultado.innerHTML = '';
    const p = criaP();
    if(isValid) {
        p.classList.add('Rp')
    } else {
        p.classList.add('Bad')
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

