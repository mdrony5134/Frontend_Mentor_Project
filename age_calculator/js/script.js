// we select element
const isValid = false;
const output_year = document.querySelector(".output_year");
const output_month = document.querySelector(".output_month");
const output_day = document.querySelector(".output_day");
// input element select
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
const input_year = document.querySelector("#year");

const submit_btn = document.querySelector(".submit_btn");

const error_day = document.querySelector(".error_day");
const error_month = document.querySelector(".error_month");
const error_year = document.querySelector(".error_year");

submit_btn.addEventListener("click", calculateAge);

input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31 || +input_day.value <= 0) {
    error_day.textContent =
      +input_day.value > 31 ? "Must be valid number" : "The Field is Required";
    isValid = false;
  } else {
    error_day.textContent = "";
    isValid = true;
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12 || +input_month.value <= 0) {
    error_month.textContent =
      +input_month.value > 12 ? "Must be valid number" : "The Field is Required";
    isValid = false;
  } else {
    error_month.textContent = "";
    isValid = true;
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2024 || +input_year.value <= 0) {
    error_year.textContent =
      +input_year.value > 2024 ? "Must be valid number" : "The Field is Required";
    isValid = false;
  } else {
    error_year.textContent = "";
    isValid = true;
  }
});

function calculateAge() {
  // console.log("click")
  if (isValid) {
    let birthday = `${input_month.value} / ${input_day.value} / ${input_year.value}`;
    console.log(birthday);
    let birthdayObj = new Date(birthday);
    console.log(birthdayObj);
  } else {
    console.log("error");
  }
}
