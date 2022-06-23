// Capturar evento submit do formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso || peso >= 400) {
        setResultado('Peso Inválido', false);
    }

    if(!altura || altura >= 2.60) {
        setResultado('Altura Inválida', false);
        
    }

    

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultado(msg, true);
});

// Função pegar IMC 

function getIMC(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
};

// Função pegar Niveis de IMC

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}


//Função de Criar P

function criaP () {
    const p = document.createElement('p');
    return p;
  }
  

//Função de setResultado

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML ='';


    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
      } else {
        p.classList.add('incorreto');
      }
      p.innerHTML = msg;
      resultado.appendChild(p);
 
};