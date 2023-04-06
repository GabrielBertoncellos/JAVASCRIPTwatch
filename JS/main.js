function carregar () {
    var msg = document.querySelector('div.msg')
    var img = document.querySelector('img.imagem')
    var data = new Date() //pega dados de data do sistema
    //var hora = data.getHours() //dos dados, extrai a hora
    var hora = 22
    var minuto = data.getMinutes()// dos dados, extrai os minutos
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = './img/manha.jpg'
        document.body.style.background = '#DDFFBB'
    } else if (hora >=12 && hora <18){
        //boa tarde
        img.src = './img/tarde.jpg'
        document.body.style.background = 'FEC868'
    } else {
        //boa noite
        img.src = './img/noite.jpg'
        document.body.style.background = '#0B2447'
    }

}

