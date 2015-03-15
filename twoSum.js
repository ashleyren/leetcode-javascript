/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]} two integers in an array, ie: [index1, index2]
 */
var twoSum = function(numbers, target) {
    var len = numbers.length;  
    //since javascript does not have buildin HashMap, so we make our hashmap object.
    var map = toObject(numbers); 
    if(len < 2){
        return [];
    }
    for(var i = 0; i < len; i++){
        var rest = target - numbers[i];
        if(map[rest] !== undefined && map[rest] !== i){
            return  [i+1, map[rest]+1]; 
        } 
    }
    return [];
};

//convert array to an object {value1:index1,value2:index2,...}
function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    rv[arr[i]] = i ;
  return rv;
}
