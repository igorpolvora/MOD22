// Defina a data do evento
const eventDate = new Date("December 24, 2024 00:00:00").getTime();

// Atualize a contagem regressiva a cada 1 segundo
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  // Calcule os dias, horas, minutos e segundos
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Exiba o resultado no elemento com id="countdown-timer"
  document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // Se a contagem regressiva terminar, exiba uma mensagem
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown-timer").innerHTML = "O evento começou!";
  }
}, 1000);
