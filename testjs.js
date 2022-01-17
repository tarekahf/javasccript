var i = 0;

/*
setInterval(() => {
    i++;
    console.log("Iteration " + i)
}, 1000);
*/

function permutation(prmStr) {
    var permResult =[];
    var permutationGo = function (prmStr, prmCombination){
        if (prmStr.length === 0 && prmCombination) {
            permResult.push(prmCombination);
        } else {
            var chr;
            var newCombination;
            for (var i=0; i < prmStr.length; i++) {
                chr = prmStr[i];
                if (prmStr.indexOf(chr) !== i) continue;
                var rem = prmStr.substring(0, i) + prmStr.substring(i+1);
                newCombination = prmCombination + chr;
                permutationGo(rem, newCombination);
            }
        }   
    }
    if (typeof prmStr === "string")
        permutationGo(prmStr, "");
    else return "Error: Must pass string type."
    return permResult;
}
  
/* function permutation2(prmStr, prmPrefix, permResult) {
    if (prmStr.length === 0) {
        //console.log(prmPrefix);
        permResult.push(prmPrefix);
    } else {
        for (var i=0; i < prmStr.length; i++) {
            var rem = prmStr.substring(0, i) + prmStr.substring(i+1);
            permutation2(rem, prmPrefix + prmStr.charAt(i), permResult);
        }
    }
} */

console.log("Simple Alogorithm: ", permutation("abc"));

let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
      return "Please enter a string"
    }
  
    if (!!string.length && string.length < 2 ){
      return string
    }
  
    let permutationsArray = [] 
     
    for (let i = 0; i < string.length; i++){
      let char = string[i]
  
      if (string.indexOf(char) != i)
      continue
  
      let remainder = string.slice(0, i) + string.slice(i + 1, string.length)
      let findPermutationsArr = findPermutations(remainder);
      for (let permutation of findPermutationsArr){
        permutationsArray.push(char + permutation) }
    }
    return permutationsArray
  }

  console.log("Complex Alogorithm: ", findPermutations("abc"));