function mostrarOcultarSenha(idIcone, idInput) {
    var icone = document.querySelector(`#${idIcone}`)
    var senha = document.getElementById(`${idInput}`);
    if (senha.type == "password") {
      senha.type = "text";
      icone.classList.replace("fa-eye", "fa-eye-slash")
    } else {
      senha.type = "password"
      icone.classList.replace("fa-eye-slash", "fa-eye")
    }
  }

// modal

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn_modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("btn_modal_f")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}