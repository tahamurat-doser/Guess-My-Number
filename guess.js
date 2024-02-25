let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");

let skor = 10;

let enYuksekSkor = 0;
/* const girlenSyi = document.querySelector(".check")
girlenSyi.onclick = () => {
    const tahmin = document.querySelector(".guess")
    console.log(tahmin.value);
} */ //!diğer bir event kullanım şekli aynı inputtan girilen aynı tahmin i yakalar

document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;
  /*  console.log(tahmin); */
  if (!tahmin) {
    //! tahmin girilmediği durumlarda if in çalışmasını istiyorum bu yüzden de tahmin girilmediğinde değeri false olur ama ben if bloğunun çalışmasını istediğimden ! koyarak false u true yaparım.
    mesaj.textContent = "Lütfen bir sayı giriniz...🙂";
  } else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "Tebrikler bildiniz...👏🏻";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;
  } else {
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Arttır 👆🏻")
        : (mesaj.textContent = "Azalt 👇🏻");
    } else {
        
    }
  }
});
