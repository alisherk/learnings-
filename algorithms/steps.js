//for each input like number generate steps
//e.g 4 '####' '###' '###' '#'

function steps(n) {
  for (let i = 1; i <= n; i++) {
    let step = '';
    for (let hash = i; hash > 0; hash--) {
      step += '#';
    }
    for(let space = n - i; space > 0; space--){
       step += " "; 
       console.log('running space loop'); 
    }
    console.log(step)
  }
}

steps(4); 
