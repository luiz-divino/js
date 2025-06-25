(function(){
    let sobrenome = prompt('digite seu nome aqui');
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }
    
    function falaNome(){
        console.log(criaNome('nando'))
    }
    falaNome()
})();