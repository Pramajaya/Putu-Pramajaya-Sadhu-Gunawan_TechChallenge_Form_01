function btnKeyUp() {
  let name = document.getElementById("nama");
  let email = document.getElementById("email");
  let genderMale = document.getElementById("gender-male");
  let genderFemale = document.getElementById("gender-female");

  if (name.value.length == 0) {
    document.getElementById("name-valid").innerHTML = "Nama harus diisi!";
  } else if (email.value.length == 0) {
    document.getElementById("email-valid").innerHTML = "Email harus diisi!";
  } else if (email.value.length > 0 && !email.value.includes("@")) {
    document.getElementById("email-valid").innerHTML =
      "Email harus berisi '@'!";
  } else if (genderMale.checked == false && genderFemale.checked == false) {
    document.getElementById("gender-valid").innerHTML = "Gender harus diisi!";
  } else {
    document.getElementById("btn-valid").innerHTML = "Sukses!";
  }
}
