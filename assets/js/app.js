document.querySelector("#signup-form").addEventListener("submit", (e) => {
  const errors = [];
  console.log(e);
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const acceptTerms = document.querySelector("#accept-terms:checked");
  const role = document.querySelector("#role");

  const letterOnlyRegex = /^[A-Z]+$/gi;
  // const regEx = new RegExp(/^[A-Z]+$/, "i");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  if (name.value == "") {
    errors.push("name is required");
    document.getElementById("name-error").innerHTML = "name is required";
    document.getElementById("name-error").classList.add("error");
    // document.getElementById("name-error").style.cssText =
    //   "border: 1px solid #58151c !important; padding:0.25rem 1rem !important;";
  } else if (!name.value.match(letterOnlyRegex)) {
    errors.push("you must use letter only");
    document.getElementById("name-error").innerHTML =
      "you must use letter only";
    document.getElementById("name-error").classList.add("error");
  } else {
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("name-error").classList.remove("error");
  }

  if (email.value == "") {
    errors.push("email is required");
    document.getElementById("email-error").innerHTML = "email is required";
    document.getElementById("email-error").classList.add("error");
  } else if (!email.value.match(emailRegex)) {
    e.preventDefault();
    document.getElementById("email-error").innerHTML = "email is not valid";
    document.getElementById("email-error").classList.add("error");
  } else {
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("email-error").classList.remove("error");
  }

  if (!acceptTerms) {
    errors.push("You must accept all terms");
    // document.getElementById("checkbox-error").innerHTML = "You must accept all terms";
    if (!document.querySelector(".accept-term-box .error")) {
      const div = document.createElement("div"); //<div></div>
      div.className = "error";
      div.innerText = "You must accept all terms";
      document.querySelector(".accept-term-box").appendChild(div);
    }
  } else {
    if (document.querySelector(".accept-term-box .error")) {
      document.querySelector(".accept-term-box .error").innerHTML = "";
      document
        .querySelector(".accept-term-box .error")
        .classList.remove("error");
    }
  }

  const degree = document.querySelector("input[name='degree']:checked");
  // console.log(degree.value);
  if (!degree) {
    errors.push("degree is required");
    const errorDegree = "<div class='error'>degree is required</div>";
    document.querySelector(".error-box").innerHTML = errorDegree;
  } else {
    document.querySelector(".error-box").innerHTML = "";
  }

  const skills = document.querySelectorAll("input[name='skill']:checked");

  // let skillsList = [];
  // skills.forEach((item) => {
  //    skillsList.push(item.value);
  // });
  // console.log(skillsList);

  if (skills.length == 0) {
    errors.push("select a skill");
    document.getElementById("skill-error").innerHTML = "select a skill";
    document.getElementById("skill-error").classList.add("error");
  } else {
    document.getElementById("skill-error").innerHTML = "";
    document.getElementById("skill-error").classList.remove("error");
  }

   if (role.value === "0") {
     errors.push("Select a Role");
     document.getElementById("role-error").innerHTML = "Select a Role";
     document.getElementById("role-error").classList.add("error");
   } else {
     document.getElementById("role-error").innerHTML = "";
     document.getElementById("role-error").classList.remove("error");
   }

  if (errors.length > 0) {
    e.preventDefault();
  }
}); //end submit

{
  /* <i class="bi bi-eye"></i>;  */
}
document.querySelector("#icon-password").addEventListener("click", () => {
  document.querySelector("#icon-password i").classList.toggle("bi-eye"); //<i class="bi"></i>
  document.querySelector("#icon-password i").classList.toggle("bi-eye-slash"); //<i class="bi bi-eye-slash"></i>

  let passwordInput = document.querySelector("#password");

  passwordInput.type = passwordInput.type === "text" ? "password" : "text";
});
