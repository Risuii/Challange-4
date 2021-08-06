// random comp

function pilihanComputer() {
  const comp = Math.floor(Math.random() * 10);
  if (comp < 3) return "batu";
  if (comp >= 3 && comp < 6) return "kertas";
  return "gunting";
}

let hasilBatu = document.getElementById("comBatu");

let hasilKertas = document.getElementById("comKertas");

let hasilGunting = document.getElementById("comGunting");

// get hasil

function hasil(player, computer) {
  if (player === computer) return "Draw";
  if (player === "batu") return computer == "kertas" ? "COM WIN" : "PLAYER 1 WIN";
  if (player === "kertas") return computer == "gunting" ? "COM WIN" : "PLAYER 1 WIN";
  if (player === "gunting") return computer == "kertas" ? "PLAYER 1 WIN" : "COM WIN";
}

// pilihan player

let pilPlayer = document.querySelectorAll(".pilPlayer img");
pilPlayer.forEach(function (pilihan) {
  pilihan.addEventListener("click", function () {
    let pComp = pilihanComputer();
    let pilihanPlayer = pilihan.className;
    let getHasil = hasil(pComp, pilihanPlayer);
    let info = document.querySelector(".info");
    info.innerHTML = hasil(pComp, pilihanPlayer);
    info.style.fontSize = "40px";
    info.style.color = "white";
    info.style.transform = "rotate(330deg)";
    info.style.position = "relative";
    info.style.left = "1vw";
    info.style.top = "28vh";
    info.style.backgroundColor = "green";
    pilihan.style.backgroundColor = "#ADD8E6";

    let hasilCom = pilihanComputer();
    {
      if (hasilCom < 3) {
        hasilBatu.style.backgroundColor = "#ADD8E6";
      } else if (hasilCom >= 3 && hasilKer < 6) {
        hasilKertas.style.backgroundColor = "#ADD8E6";
      } else {
        hasilGunting.style.backgroundColor = "#ADD8E6";
      }
    }
  });
});

// refresh

let reset = document.querySelector(".refresh");
reset.addEventListener("click", function () {
  window.location.reload();
});
