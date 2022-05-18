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