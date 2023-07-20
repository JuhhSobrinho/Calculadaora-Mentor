const dataAtual = new Date();
const atualAno = dataAtual.getFullYear();
const atualMes = dataAtual.getMonth();
const atualDia = dataAtual.getDate();

const mesCom31dias = [1,3,5,7,8,10,12];
const mesSem31dias = [2,4,6,9,11];



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



/* validação */
    const border = document.querySelectorAll('.date');
    const vazios = document.querySelectorAll('.descricao');

    const errorRequired = document.querySelectorAll('#required');
    const errorPast = document.querySelector('#erPast');
    const errorMonth = document.querySelector('#erMonth');
    const errorDay = document.querySelector('#erDay');


    for (let i = 0; i < border.length; i++) {
        const element = border[i].value;
        const date = border[i];
        const required = errorRequired[i];
        const descricao = vazios[i];

        if (border[i].value === '') {
            descricao.innerHTML = vazio;
            border[i].style.boxShadow = '0 0 5px red';
            botao.style.backgroundImage = 'url("./assets/images/button.png")';
            errorRequired[i].style.display = 'flex';
        } else{
            date.style.boxShadow = '0 0 0px red';
            required.style.display = 'none';

        switch (i) {
            case 0:
                if (border[0].value > 30 && mesSem31dias.includes(Number(border[1].value)) || border[0].value > 31) {
                    descricao.innerHTML = vazio;
                    border[0].style.boxShadow = '0 0 5px red';
                    botao.style.backgroundImage = 'url("./assets/images/button.png")';
                    errorDay.style.display = 'flex';
                } else {
                    date.style.boxShadow = '0 0 0px red';
                    errorDay.style.display = 'none';
                }
                break;
            case 1:
                if (border[1].value > 12) {
                    descricao.innerHTML = vazio;
                    border[1].style.boxShadow = '0 0 5px red';
                    botao.style.backgroundImage = 'url("./assets/images/button.png")';
                    errorMonth.style.display = 'flex';
                } else {
                    date.style.boxShadow = '0 0 0px red';
                    errorMonth.style.display = 'none';
                }
                break;
            case 2:
                if (border[2].value > atualAno) {
                    descricao.innerHTML = vazio;
                    border[2].style.boxShadow = '0 0 5px red';
                    botao.style.backgroundImage = 'url("./assets/images/button.png")';
                    errorPast.style.display = 'flex';
                } else {
                    date.style.boxShadow = '0 0 0px red';
                    errorPast.style.display = 'none';
                }
                break;
        }
        if (errorPast.style.display == 'none' && errorMonth.style.display == 'none' && errorDay.style.display == 'none') {
            errorPast.style.display = 'none';
            errorMonth.style.display = 'none';
            errorDay.style.display = 'none';
            botao.style.backgroundImage = 'url("./assets/images/butonblack.png")';
            resultAno.innerHTML = resultIdAno;
            resultMes.innerHTML = resultIdMes;
            resultDia.innerHTML = resultIdDia;
        }else{
            resultAno.innerHTML = vazio;
            resultMes.innerHTML = vazio;
            resultDia.innerHTML = vazio;
        }

        console.log(mesSem31dias.length.val);

        
        }
    }






})

