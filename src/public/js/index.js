const socket = io();

const sendEmail = () => {
    console.log(document.getElementById("txtEmail").value);
    console.log(document.getElementById("txtSubject").value);
    console.log(document.getElementById("txtMessage").value);

    let testEmail = {
        body: {
            email: document.getElementById("txtEmail").value,
            subject: document.getElementById("txtSubject").value,
            message: document.getElementById("txtMessage").value,
            host: document.getElementById("txtHost").value,
            service: document.getElementById("txtService").value,
            port: document.getElementById("txtPort").value,
            user: document.getElementById("txtUser").value,
            password: document.getElementById("txtPassword").value,
        }
    }

    socket.emit('send', JSON.stringify(testEmail))
}

const buttonEnviar = document.getElementById("btnEnviar");
buttonEnviar.addEventListener("click", sendEmail);
