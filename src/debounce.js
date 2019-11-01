function debounce(fn, delay) {
    //classic debounce function which accepts a callback function and delay
    let timer = null;
    return function (...args) {
        const context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
  }
  
  export default debounce;