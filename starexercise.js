star (7);

function star(rows){
    for(let i = 0 ; i<= rows; i++){
        let pattern = '';
        for(let j = 0; j<i ; j++){
            pattern += '*';
        }
        console.log(pattern);
    }
    
}