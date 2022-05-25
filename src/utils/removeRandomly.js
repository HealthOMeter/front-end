/**Array composed of elements that were randomly removed from another array */
export const removeRandomly = (array, maxElements) => {
    const newArray = [];
    
    while(newArray.length < maxElements){
        const random = Math.floor(Math.random() * array.length);
        const el = array.splice(random, 1)[0];
        console.log(el);
        newArray.push(el);
    }
    return newArray;
}