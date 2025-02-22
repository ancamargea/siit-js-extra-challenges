console.log("Recompense");

function recompensaFinala() {
  const initialMsg = ["Felicitari! Ai castigat", "Incredibil! Ai primit"];

  const recompense = [
    "o vacanta in Caraibe.",
    "un sejur de 5 zile in Dolomiti.",
    "o Toyota Corolla hybrid.",
    "un cec in valoare de 10.000 RON.",
    "un teren de 700mp in Coasta Amalfi.",
  ];

  const randomMsg = Math.floor(Math.random() * initialMsg.length);
  const randomRecompensa = Math.floor(Math.random() * recompense.length);

  const recompensaFinala = `${initialMsg[randomMsg]} ${recompense[randomRecompensa]}`;

  console.log(recompensaFinala);
}
recompensaFinala();
