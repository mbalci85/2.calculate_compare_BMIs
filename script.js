// let massMark = 75;
// let massJohn = 56;
// let heightMark = 1.67;
// let heightJohn = 1.77;

let massMark = prompt("Enter Mark's weight in kg: ");
let massJohn = prompt("Enter John's weight in kg: ");
let heightMark = prompt("Enter Mark's height in m: ");
let heightJohn = prompt("Enter John's height in m: ");

//BMIs of Mark and John
let BMIMark = Math.round(massMark / (heightMark * heightMark));
let BMIJohn = Math.round(massJohn / (heightJohn * heightJohn));

alert(`Mark's BMI: ${BMIMark}
John's BMI: ${BMIJohn}`);

// let higherBMI = BMIJohn > BMIMark;

// console.log(
// 	`Is Mark's BMI higher than John's? Answer is 'false'. Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`,
// );

if (BMIMark > BMIJohn) {
	alert(
		`Is Mark's BMI higher than John's? Answer is 'true'. Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`,
	);
} else if (BMIMark < BMIJohn) {
	alert(
		`Is Mark's BMI higher than John's? Answer is 'false'. Because Mark's BMI is ${BMIMark} and John's BMI is ${BMIJohn}`,
	);
} else {
	alert(
		`Mark's BMI and John's BMI are equal since their BMIs are both ${BMIJohn}`,
	);
}
