const form = document.getElementById("formContato");
const msg = document.getElementById("msgForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nome === "" || email === "" || mensagem === "") {
    msg.style.color = "red";
    msg.textContent = "Preencha todos os campos antes de enviar.";
    return;
  }

  if (!emailRegex.test(email)) {
    msg.style.color = "red";
    msg.textContent = "Digite um e-mail válido.";
    return;
  }

  msg.style.color = "#361E08";
  msg.textContent = "Mensagem enviada! Em breve entraremos em contato.";
  form.reset();
});
