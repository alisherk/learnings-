function debounce(fn, wait) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, arguments), wait);
  };
}

function print(){
    console.log('printing');
}

const debouncedFunction = debounce(print, 1000); 

for(i = 0; i <= 10; i++){
    debouncedFunction();
}
 

