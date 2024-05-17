const ratingState = document.querySelector(".rating-state");
const ratingNumber = document.querySelectorAll(".rating-number");
const submitBtn = document.querySelector(".rating-btn");

const thankState = document.querySelector(".thank-state");
const chosenNumber = document.querySelector(".chosen-number");

let selectedNumber = 0;

ratingNumber.forEach((number, index, array) => {
	number.addEventListener("click", () => {
		array.forEach((arrayEl) => {
			arrayEl.classList.remove("selected");
		});

		number.classList.add("selected");

		selectedNumber = number.textContent;
		chosenNumber.textContent = selectedNumber;
	});
});

submitBtn.addEventListener("click", () => {
	ratingState.style.display = "none";
	thankState.style.display = "flex";
});
