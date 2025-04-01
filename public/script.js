usuario = document.getElementById("usuario")
usuario2 = document.getElementById("usuario2")
motorista = document.getElementById("motorista")
motorista2 = document.getElementById("motorista2")

function cadastro1() {
    sessionStorage.setItem("Perfil", "Usuário:")
    usuarioCadastro = document.getElementById("usuarioCadastro").style = "opacity: 1"
    motoristaCadastro = document.getElementById("motoristaCadastro").style = "opacity: 0"
    usuario.classList.add("active")
    motorista.classList.remove("active")
}
function cadastro2() {
    sessionStorage.setItem("Perfil", "Motorista:")
    usuarioCadastro = document.getElementById("usuarioCadastro").style = "opacity: 0"
    motoristaCadastro = document.getElementById("motoristaCadastro").style = "opacity: 1"
    usuario.classList.remove("active")
    motorista.classList.add("active")
}
usuario.onclick = cadastro1
usuario2.onclick = cadastro1

motorista.onclick = cadastro2
motorista2.onclick = cadastro2

function enviaDados() {
    inputNome = document.getElementById("inputNome").value
    inputEmail = document.getElementById("inputEmail").value
    inputSenha = document.getElementById("inputSenha").value
    inputSenha2 = document.getElementById("inputSenha2").value
    inputCarro = document.getElementById("inputCarro").value
    inputPlaca = document.getElementById("inputPlaca").value

    inputNome2 = document.getElementById("inputNome2").value
    inputEmail2 = document.getElementById("inputEmail2").value
    inputSenha3 = document.getElementById("inputSenha3").value
    inputSenha4 = document.getElementById("inputSenha4").value
    inputTelefone = document.getElementById("inputTelefone").value

    if (sessionStorage.getItem("Perfil") == "Motorista:") {
        if (inputNome == "" || inputEmail == "" || inputCarro == "" || inputPlaca == "" || inputSenha == "" || inputSenha2 == "") {
            alert("Algum campo não foi preenchido! Corrija e tente novamente")
        } else {
            if (inputSenha === inputSenha2) {
                Swal.fire({
                    // title: "Sucesso!",
                    text: "Cadastro realizado com sucesso!",
                    icon: "success",
                    confirmButtonText: "OK"
                });
                sessionStorage.setItem("Nome", inputNome)
                sessionStorage.setItem("E-mail", inputEmail)
                sessionStorage.setItem("Carro", inputCarro)
                sessionStorage.setItem("Placa", inputPlaca)
                sessionStorage.setItem("Senha", inputSenha)
                sessionStorage.removeItem("Telefone")
            } else {
                alert("As senhas estão diferentes! corrija e tente novamente")
            }
        }
    } else {
        if (inputNome2 == "" || inputEmail2 == "" || inputTelefone == "" || inputSenha3 == "" || inputSenha4 == "") {
            alert("Algum campo não foi preenchido! Corrija e tente novamente")
        } else {
            if (inputSenha3 === inputSenha4) {
                Swal.fire({
                    // title: "Sucesso!",
                    text: "Cadastro realizado com sucesso!",
                    icon: "success",
                    confirmButtonText: "OK"
                });
                sessionStorage.setItem("Nome", inputNome2)
                sessionStorage.setItem("E-mail", inputEmail2)
                sessionStorage.setItem("Telefone", inputTelefone)
                sessionStorage.setItem("Senha", inputSenha3)
                sessionStorage.removeItem("Carro")
                sessionStorage.removeItem("Placa")
            } else {
                alert("As senhas estão diferentes! corrija e tente novamente")
            }
        }

    }
}

function confirmaDados() {
    conferirSenha = (document.getElementById("ConferirSenha").value).trim()
    conferirNome = (document.getElementById("ConferirNome").value).trim()
    conferirSenha2 = (document.getElementById("ConferirSenha2").value).trim()
    conferirNome2 = (document.getElementById("ConferirNome2").value).trim()

    if (sessionStorage.getItem("Perfil") == "Motorista:") {
        if (conferirNome == sessionStorage.getItem("Nome") && conferirSenha == sessionStorage.getItem("Senha")) {
            Swal.fire({
                // title: "Sucesso!",
                text: `Bem vindo/a ${sessionStorage.getItem("Nome")}`,
                icon: "success",
                confirmButtonText: "OK"
            });
        } else {
            alert("Usuário ou senha incorreto!")
        }
    } else {
        if (conferirNome2 == sessionStorage.getItem("Nome") && conferirSenha2 == sessionStorage.getItem("Senha")) {
            Swal.fire({
                // title: "Sucesso!",
                text: `Bem vindo/a ${sessionStorage.getItem("Nome")}`,
                icon: "success",
                confirmButtonText: "OK"
            });
        } else {
            alert("Usuário ou senha incorreto!")
        }
    }
}