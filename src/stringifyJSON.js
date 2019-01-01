// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var answer = "";

  if(obj === null){
  	return "null"
  }

  if(typeof obj === "number" || typeof obj === "boolean"){
  	answer = obj.toString();
  }else if(typeof obj === "string"){
  	answer = '"' + obj + '"';
  }else if(Array.isArray(obj)){
  	var temp = "";
  	for (var i in obj) {
  		temp += stringifyJSON(obj[i]);
  		if(i >= 0 && i <= obj.length - 2){
  			temp += ","
  		}
  	}
  	answer = "[" + temp + "]"
  }else{
  	var temp = "";
  	for(var keys in obj) {
  		if(typeof obj[keys] !== "function" && obj[keys] !== undefined){
  			temp += stringifyJSON(keys) + ":" + stringifyJSON(obj[keys]) + ",";
  		}
  	}
  	temp = temp.slice(0, temp.length-1);

  	answer = "{" + temp + "}";
  }

  return answer;

};
