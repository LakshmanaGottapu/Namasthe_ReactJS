  export function getComponent(comp,dataObject){
    return <comp dataObject={dataObject}></comp>;
}
export function debounceFunction(fn,delay){
  let timer;
  let count=0;
  const context = this;
  return function(...args){
      clearTimeout(timer);
      timer = setTimeout(fn.bind(context,...args),delay);
  }
}