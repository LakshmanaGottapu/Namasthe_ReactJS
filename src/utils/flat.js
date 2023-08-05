const flat = function(array){
    let flatArray = [];
    function slim(array){
        for(let val of array){
            if(Array.isArray(val)){
                slim(val);
            }
            else{
                flatArray.push(val);
            }
        }
    }
    slim(array);
    return flatArray;
}
export default flat;