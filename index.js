// add solution here
function theBeatlesPlay(arr1, arr2){
  finalArr = [];
  for(i=0;i<arr1.length();i++){
    finalArr.push(`${arr1[i]} plays ${arr2[i]}`)
  }
  return finalArr;
}