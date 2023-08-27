function contar() {
    var n1 = document.querySelector('input#n1')
    var n2 = document.querySelector('input#n2')
    var n3 = document.querySelector('input#n3')
    var res = document.querySelector('div#res')
    
    if (n1.value.length == 0 || n2.value.length == 0 || n3.value.length == 0) {
        window.alert('[ERRO] Dados não preenchidos corretamente!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(n1.value)
        var f = Number(n2.value)
        var p = Number(n3.value)
        if (p <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }  
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        
        } 
      res.innerHTML += `\u{1F3C1}`
    }
}