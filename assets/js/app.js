//control event:
// event handler  onclick="functionName()"
// event listener  addEventListener("click", submitForm)

// function submitForm(){
//     console.log(document.querySelector("#btn-submit")) ;
//     console.log("fffffffffffffff");
// }

document.querySelector("#btn-submit").addEventListener("click", () => {
  const name = document.querySelector("#name");
  if (name.value == "") {
    document.getElementById("name-error").innerHTML = "name is required";
    document.getElementById("name-error").classList.add("name-error")
    // document.getElementById("name-error").style.cssText =
    //   "border: 1px solid #58151c !important; padding:0.25rem 1rem !important;";
  }
});
