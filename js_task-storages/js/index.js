function visitLink(path) {
	let clicks = {};
	if (localStorage.clicks) {
		clicks = JSON.parse(localStorage.clicks);
	}

	if (typeof clicks[path] !== 'undefined') {
		clicks[path] += 1;
	} else {
		clicks[path] = 1;
	}
	
	localStorage.clicks = JSON.stringify(clicks);
}

function viewResults() {
	let clicks={};
	if (localStorage.clicks) {
		let ul = document.createElement('ul');
		ul.id = 'list';
		document.getElementById('results').appendChild(ul);
		
		clicks = JSON.parse(localStorage.clicks);
		for (let key in clicks) {
			if(clicks.hasOwnProperty(key)){
				let li = document.createElement('li');
				li.textContent = `You visited ${key} ${clicks[key]} time(s)`;
				ul.appendChild(li);
			}
		}
		localStorage.clear();
	}
}



	