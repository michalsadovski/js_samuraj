let commonColor = 50;
document.body.style.backgroundColor = `rgb(${commonColor}%, ${commonColor}%, ${commonColor}%`;
let change = true;

const changeColor = (e) => {
  // console.log(e.keyCode);
  // e.keyCode, e.which - robi to samo
  // 38 - strzałka do gory
  // 40 - strzałka w dół

  // rgb 0,0,0, - ekran czarny,
  // rgb 255,255,255, - ekran bialy,


  // ==========================
  // ROZWIĄZANIE - WERSJA Z IF:
  // ==========================

//  if (e.keyCode == 38 && commonColor <= 255) {
//    change = !change;
//    console.log('strzalka do gory')
//    commonColor += 5;
//    document.body.style.backgroundColor = `rgb(${commonColor}%, ${commonColor}%, ${commonColor}%`;
//    console.log('commonColor = ' + commonColor)
//  }
//
//  if (e.keyCode == 40 && commonColor >= 0) {
//    change = !change;
//    console.log('strzalka w dol')
//    commonColor -= 5;
//    document.body.style.backgroundColor = `rgb(${commonColor}%, ${commonColor}%, ${commonColor}%`;
//    console.log('commonColor = ' + commonColor)
//  }
//}

  // ===============================
  // ROZWIĄZANIE - WERSJA ZE SWITCH:
  // ===============================

  switch (e.keyCode) {
    case 38:
      console.log('strzalka do gory');
      commonColor <= 255 ? commonColor +=5 : commonColor;
      console.log('commonColor = ' + commonColor)
      document.body.style.backgroundColor = `rgb(${commonColor}%, ${commonColor}%, ${commonColor}%`;
      break;

    case 40:
      console.log('strzalka w dol');
      commonColor >= 0 ? commonColor -=5 : commonColor;
      console.log('commonColor = ' + commonColor)
      document.body.style.backgroundColor = `rgb(${commonColor}%, ${commonColor}%, ${commonColor}%`;
      break;
  }
}

window.addEventListener('keydown', changeColor);
