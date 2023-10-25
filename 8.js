let button = document.getElementById('btn');
button.addEventListener('click',()=>{
    const bla = parseInt(document.getElementById('bla').value);
    const result = document.getElementById('output');
    if(bla===8){
        result.innerHTML='nos ti posran';
    }else{
        result.innerHTML='to nije 8 pickoo';
    }


})


