function verificar() {
  var dt = new Date()
  var data = dt.getFullYear()
  var anoNasc = window.document.getElementById('txtano')
  var resultado = window.document.getElementById('res')
  if (anoNasc.value.length == 0 || Number(anoNasc.value) > data) {
    resultado.innerHTML = `Verifique os dados e tente novamente`
  }
  else {

    var sexf = document.getElementsByName('radsex')
    var idade = data - Number(anoNasc.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (sexf[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade <= 12) {
        //criança
        img.setAttribute('src', 'criançamasc.png')
      }
      else if (idade < 21) {
        //adolescente
        img.setAttribute('src', 'jovemmasc.png')
      }
      else if (idade < 65) {
        //adulto
        img.setAttribute('src', 'adultomasc.png')
      }
      else {
        //idoso
        img.setAttribute('src', 'idosomasc.png')
      }
    }
    if (sexf[1].checked) {
      genero = 'Mulher'

      if (idade >= 0 && idade <= 12) {
        //criança
        img.setAttribute('src', 'criançafem.png')
      }
      else if (idade < 21) {
        //adolescente
        img.setAttribute('src', 'jovemfem.png')
      }
      else if (idade < 65) {
        //adulto
        img.setAttribute('src', 'adultafem.png')
      }
      else {
        //idoso
        img.setAttribute('src', 'idosofem.png')
      }
    }
    resultado.style.fontWeight = 'bold'
    resultado.style.color = 'rgb(135, 219, 240)'
    resultado.innerHTML = `Você é um(a) ${genero} com ${idade} ano(s) de idade.`
    resultado.appendChild(img)
  }


}

