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
  const acceptTerms = document.querySelector("#accept-terms:checked");

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

  if (!acceptTerms) {
    // document.getElementById("checkbox-error").innerHTML = "You must accept all terms";
    const div = document.createElement("div"); //<div></div>
    div.className = "error";
    div.innerText = "You must accept all terms";
    document.querySelector(".accept-term-box").appendChild(div);
    
  } else {
    if (document.querySelector(".accept-term-box .error")) {
      document.querySelector(".accept-term-box .error").innerHTML = "";
      document
        .querySelector(".accept-term-box .error")
        .classList.remove("error");
    }
  }
});

{
  /* <i class="bi bi-eye"></i>;  */
}
document.querySelector("#icon-password").addEventListener("click", () => {
  document.querySelector("#icon-password i").classList.toggle("bi-eye"); //<i class="bi"></i>
  document.querySelector("#icon-password i").classList.toggle("bi-eye-slash"); //<i class="bi bi-eye-slash"></i>

  let passwordInput = document.querySelector("#password");

  passwordInput.type = passwordInput.type === "text" ? "password" : "text";
});
