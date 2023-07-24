import fs from 'fs';   
export function getComponent(comp,dataObject){
    return <comp dataObject={dataObject}></comp>;
}
export const fetchStaticData =  JSON.parse(fs.readFileSync("./src/utils/swiggycards.json","utf-8"));

export function debounce(func, delay) {
    let timeoutId;
  
    return function(...args) {
      const context = this;
  
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
}