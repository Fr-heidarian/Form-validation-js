//control event:
// event handler  onclick="functionName()"
// event listener  addEventListener("click", submitForm)

// function submitForm(){
//     console.log(document.querySelector("#btn-submit")) ;
//     console.log("fffffffffffffff");
// }

document.querySelector("#btn-submit").addEventListener("click", () => {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");

  const letterOnlyRegex = /^[A-Z]+$/gi;
  // const regEx = new RegExp(/^[A-Z]+$/, "i");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (name.value == "") {
    document.getElementById("name-error").innerHTML = "name is required";
    document.getElementById("name-error").classList.add("error");
    // document.getElementById("name-error").style.cssText =
    //   "border: 1px solid #58151c !important; padding:0.25rem 1rem !important;";
  } else if (!name.value.match(letterOnlyRegex)) {
    document.getElementById("name-error").innerHTML =
      "you must use letter only";
    document.getElementById("name-error").classList.add("error");
  } else {
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("name-error").classList.remove("error");
  }

  if (email.value == "") {
    document.getElementById("email-error").innerHTML = "email is required";
    document.getElementById("email-error").classList.add("error");
  } else if (email.value.match(emailRegex)) {
    document.getElementById("email-error").innerHTML = "email is not valid";
    document.getElementById("email-error").classList.add("error");
  } else {
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("email-error").classList.remove("error");
  }
});
