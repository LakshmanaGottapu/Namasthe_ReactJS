import fs from 'fs';   
export function getComponent(comp,dataObject){
    return <comp dataObject={dataObject}></comp>;
}
export const fetchStaticData =  JSON.parse(fs.readFileSync("./src/utils/swiggycards.json","utf-8"));

export function debounceFunction(fn,delay){
  let timer;
  let count=0;
  const context = this;
  return function(...args){
      clearTimeout(timer);
      timer = setTimeout(fn.bind(context,...args),delay);
  }
}