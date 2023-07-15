const dataAtual = new Date();
const atualAno = dataAtual.getFullYear();
const atualMes = dataAtual.getMonth();
const atualDia = dataAtual.getDate();


const botao = document.querySelector('.botao');
const ano = document.querySelector('#ano');
const mes = document.querySelector('#mes');
const dia = document.querySelector('#dia');


const resultAno = document.querySelector('#resAno');
const resultMes = document.querySelector('#resMes');
const resultDia = document.querySelector('#resDia');
const vazio = '--';

const idAno = ano.value;
const idMes = mes.value;
const idDia = dia.value

botao.addEventListener('click', () => {
    const idDia = dia.value;
    const idMes = mes.value;
    const idAno = ano.value;

    const resultIdAno = Math.abs(idAno - atualAno);
    const resultIdMes = Math.abs(idMes - atualMes);
    const resultIdDia = Math.abs(idDia - atualDia);



    console.log(idDia);
    console.log(idMes);
    console.log(idAno);

    console.log(atualAno);

/* validação */


    const border = document.querySelectorAll('.date');
    const vazios = document.querySelectorAll('.descricao');

    const errorRequired = document.querySelectorAll('#required');
    const ErrorPast = document.querySelector('#erPast');
    const ErrorMonth = document.querySelector('#erMonth');
    const ErrorDay = document.querySelector('#erDay');


    for (let i = 0; i < border.length; i++) {
        const element = border[i].value;
        const date = border[i];
        const required = errorRequired[i];
        const descricao = vazios[i];

         if (border[0].value > 31) {
            descricao.innerHTML= vazio;
            border[0].style.boxShadow = '0 0 5px red';
            botao.style.backgroundImage = 'url("./assets/images/button.png")';
            ErrorDay.style.display = 'flex';
        }else if (border[1].value > 12) {
            descricao.innerHTML= vazio;
            border[1].style.boxShadow = '0 0 5px red';
            botao.style.backgroundImage = 'url("./assets/images/button.png")';
            ErrorMonth.style.display = 'flex';

        }else if (border[2].value > atualAno) {
            descricao.innerHTML= vazio;
            border[2].style.boxShadow = '0 0 5px red';
            botao.style.backgroundImage = 'url("./assets/images/button.png")';
            ErrorPast.style.display = 'flex';
          
        }else if (element === '') {
            descricao.innerHTML= vazio;
            date.style.boxShadow = '0 0 5px red';
            botao.style.backgroundImage = 'url("./assets/images/button.png")';
            required.style.display = 'flex';

        }else{
            date.style.boxShadow = '0 0 0px red';
            required.style.display = 'none';
            ErrorPast.style.display = 'none';
            ErrorMonth.style.display = 'none';
            ErrorDay.style.display = 'none';
            botao.style.backgroundImage = 'url("./assets/images/butonblack.png")';
            resultAno.innerHTML = resultIdAno;
            resultMes.innerHTML = resultIdMes;
            resultDia.innerHTML = resultIdDia;
        }

    }






})

