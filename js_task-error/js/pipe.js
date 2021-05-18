function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

const pipe = (value, ...funcs) => {
	return funcs.reduce((currentVal, currentFunc) => {
		try {
			if (!isFunction(currentFunc)) {
				throw Error(`Provided argument at position ${funcs.indexOf(currentFunc)} is not a function!`);
			} else {
				return currentFunc(currentVal);
			}
		} catch (err) {
			return alert(err);
		}

	}, value)
}

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');

const capitalize = (value) =>
	value
		.split(' ')
		.map((val) => val.charAt(0).toUpperCase() + val.slice(1))
		.join(' ');

const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error); // Provided argument at position 2 is not a function!

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result); // Hello, John Doe!
