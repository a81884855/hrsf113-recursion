// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var answer = "";
  var keys = false;
  var isObject = false;
  var values = true;

  for (var i = 0; i < json.length; i++) {
  	// Array Case
  	if (json[i] === "["){
  		isarray = true;
  		answer = [];
  		key = "";

  	}else if(json[i] === "]"){
  		isarray = false
  	}else if(isarray === true){
  		answer.push(json[i])
  	}

  	//Object Case
  	if(json[i] === "{"){
  		isObject = true;
  		answer = {};
  	}else if(json[i] === "}"){
  		isObject = false;
  	}else if(isObject === true){
  		if(json[i] === ":"){
  			values = true;
  			value = ""
  		}else if(values === "true"){
  			value += json[i];
  		}


  		if(json[i] === '"'){
  			keys = !keys;
  			if(keys === false && key.length > 0){
  				answer[key] = "";
  				key = "";
  			}
  		}else if(keys === true){
  			key += json[i];
  		}

  	}
  }

  return answer
};
