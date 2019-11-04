function setCookie(name, value, tamanho) {
    var cookie = name + "=" + escape(value);
    var tamanho = tamanho+ "=" + escape(tamanho);
    document.cookie = cookie;
    document.cookie = tamanho;
}
// Função para pegar o cookie de carrinho enviado
function getCookie(name) {
    var cookies = document.cookie;
    var prefix = name + "=";
    var begin = cookies.indexOf("; " + prefix);

    if (begin == -1) {
        begin = cookies.indexOf(prefix);
        if (begin != 0) {
            return null;
        }
    } else {
        begin += 2;
    }
    var end = cookies.indexOf(";", begin);
    if (end == -1) {
        end = cookies.length;
    }
    return unescape(cookies.substring(begin + prefix.length, end));
}

function deletar(i, itens = []) {
    var x;
    var d; // recebe o indice q vai deletar 
    console.log("deletar ", i);

    
    for( x=0;x<itensCarrinho.length; x++){
      d = itens.indexOf(i);
      if(d!= -1){
        itens.splice(d, 1); 
      }      
    }
    
    console.log("itens ", itens);
    return itens;
    
  }