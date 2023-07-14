const botao = document.querySelector('.botao');
const dia = document.querySelector('#dia');
const mes = document.querySelector('#mes');
const ano = document.querySelector('#ano');
const resultDia = document.querySelector('.descricao');



botao.addEventListener('click', () => {
    console.log(true);
    const idDia = dia.value;
    const idMes = mes.value;
    const idAno = ano.value;


    console.log(idDia);
    console.log(idMes);
    console.log(idAno);



/* vaalidação */

    const border = document.querySelectorAll('.date');

    if (idMes === '' || idDia === '' || idAno === '') {
        console.log('funfa');
        border.forEach((date) =>{
            date.style.boxShadow = '0 0 5px red';
        });
        botao.style.backgroundImage = 'url("./assets/images/button.png")';
    } else {
        border.forEach((date) =>{
            date.style.boxShadow = '0 0 0px red';
        });

        botao.style.backgroundImage = 'url("./assets/images/butonblack.png")';
    }

    resultDia.innerHTML= idDia;


})

