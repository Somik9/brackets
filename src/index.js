module.exports = function check(str, bracketsConfig) {
	
	let stack = [];
	let bracketsObj = {};
	let openBrackets = new Set();

	bracketsConfig.forEach(element => {
		bracketsObj[element[1]] = element[0];
		openBrackets.add(element[0]);
	});

	for (let chr of str) {
		if (openBrackets.has(chr)) {
			if (stack.length > 0 && stack[stack.length - 1] === chr && bracketsObj[chr] === chr) {
				stack.pop();
			} else {
				stack.push(chr)
			}
		} else {
			if (stack.length === 0 || stack.pop() !== bracketsObj[chr]) {
				return false;
			}
		}
	}
	return stack.length === 0;
}