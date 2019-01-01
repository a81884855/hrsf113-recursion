// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	var answer = [];

	var findElementsContainingClass = function(element){

		if(element.classList && element.classList.contains(className)){
			answer.push(element);
		}

		if(element.childNodes) {
			_.each(element.childNodes, function(item){
				findElementsContainingClass(item);
			})
		}
	}
  // your code here
  findElementsContainingClass(document.body);

  return answer;
};
