const text = document.querySelector("#advice");
const count = document.querySelector("#number");

const generate = () => {
	const data = JSON.parse(localStorage.getItem("adviserAdvice"));
	if (data) {
		//means there is some advice in localstorage which is prefetched
		text.innerHTML = `"${data.advice}"`;
		number.innerHTML = data.id;
	}

	//prefetch for next time
	fetch("https://api.adviceslip.com/advice")
		.then((res) => res.json())
		.then((data) => {
			localStorage.setItem("adviserAdvice", JSON.stringify(data.slip));
		});
};

generate();
