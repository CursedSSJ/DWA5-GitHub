const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  if (dividend === "" || divider === "") {
    //This resolves the second scenario
    result.innerHTML =
      "Division not performed. Both values are required in inputs. Try again";

    return;
  }

  if (dividend < 0 || divider < 0) {
    //This resolves the third scenario

    result.innerHTML =
      "Division not performed. Invalid number provided. Try again";
    throw new Error(
      "Division not performed. Invalid number provided. Try again"
    );
  }

  if (isNaN(dividend) || isNaN(divider)) {
    //This resolves the fourth scenario

    document.body.innerHTML =
      "Something critical went wrong. Please reload the page";
    throw new Error("Something critical went wrong. Please reload the page");
  }

  result.innerText = Math.floor(dividend / divider); //This resolves the first scenario
});
