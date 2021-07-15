function store() {
    var inputEmail = document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
}