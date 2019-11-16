function setCookie(name, value) {
    var cookie = name + "=" + escape(value);
    document.cookie = cookie;
}

function setCookie(name, id) { //Para o produto
    var cookie = name + "=" + escape(id);
    document.cookie = cookie;
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
      console.log("index ", d);
      if(d!= -1){
        itens.splice(d, 1); 
      }      
    }
    
    console.log("itens ", itens);
    return itens;
    
}

// utilize a opção 1 quando for enviar os dados que vc pefgou pelo getCookie
function adicionar(id, itens, op) {
    console.log(itens);
    console.log(id);
    if(op==1){
        itens += id+",";
    }else{
        itens += id+",";
    }    
    return itens;
}