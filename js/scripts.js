alert ('Cuidado com a minha piroca');
console.log('O Guilherme gosta de dar o cu!');
var  num = 7;

    function myFunction(){
      var x = document.getElementById('contextText');
     
      /* a variável x é o texto dentro da div com id="contextText" */
      if (x.style.display ==='none'){
        /* se o sytle da div for none, ou seja, estiver invisível... */
        x.style.display = 'block';
        /* ... então faça o style ser block, ou seja, ficar visível... */
      } else {
        x.style.display = 'none';
        /* ... caso contrário, (se já estiver visível) faça sumir.*/
      }
    }
    
    x = null;
    y = undefined;
    
    if (x==y){
    console.log('os valores são iguais')}
    else {console.log('os valores são diferentes')}