let rastgeleSayi = Math.ceil(Math.random() * 20);
console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");

let skor = 10;


/* const girlenSyi = document.querySelector(".check")
girlenSyi.onclick = () => {
    const tahmin = document.querySelector(".guess")
    console.log(tahmin.value);
} */ //!diğer bir event kullanım şekli aynı inputtan girilen aynı tahmin i yakalar
let enYuksekSkor = localStorage.getItem("top-score") || 0;
document.querySelector(".top-score").textContent = enYuksekSkor

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
    document.querySelector(".check").disabled = true
    if(skor > enYuksekSkor) {
      localStorage.setItem("top-score",skor)
      enYuksekSkor = skor
      document.querySelector(".top-score").textContent = skor
    }




  } else {
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;

      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Arttır 👆🏻")
        : (mesaj.textContent = "Azalt 👇🏻");
    } else {
        mesaj.textContent = "Oyunu kaybettiniz🥺"
        document.querySelector(".score").textContent = 0;
        document.querySelector("body").style.backgroundColor ="red"
        document.querySelector(".number").textContent = rastgeleSayi;



    }
  }
});

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor ="#2d3436"
  rastgeleSayi = Math.ceil(Math.random()*20)
  skor = 10;
  document.querySelector(".score").textContent = skor
  document.querySelector(".number").textContent = "?"
  document.querySelector(".guess").value = "" 
  mesaj.textContent = "Oyun yeniden başlıyor..."
  document.querySelector(".check").disabled = false
}

document.addEventListener("keydown", function(e){
  if (e.key === "Enter") {
    document.querySelector(".check").click()
    
  } 
})

document.querySelector(".check").addEventListener("click", () => {
  tahmin = document.querySelector(".guess").value 

  const tahminiSayi = parseInt(tahmin) 
  if (tahminiSayi>=1 && tahminiSayi <=20 && !isNaN(tahminiSayi)) {
    
  } else {
    mesaj.textContent = "Geçersiz sayı girdiniz 1 -20 arasında bir sayı giriniz."
    skor ++
    document.querySelector(".guess").value = ""
    document.querySelector("body").style.backgroundColor = "magenta"
  }
})


