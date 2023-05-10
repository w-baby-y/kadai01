let myDebt = 100;
let myStar = 100;

function janken(userHand) {
  //乱数でCPUの値を取得
  let cpuHand = Math.floor(Math.random() * 3);

  let resultHTML = "";

  resultHTML +=
    "[あなた: " +
    changeText(userHand) +
    " ] VS [相手: " +
    changeText(cpuHand) +
    " ]";

  //判定
  if (userHand == cpuHand) {
    //引き分け
    resultHTML += "<br>引き分け";
  } else if (
    (userHand == 0 && cpuHand == 1) ||
    (userHand == 1 && cpuHand == 2) ||
    (userHand == 2 && cpuHand == 0)
  ) {
    resultHTML += "<br>勝ち";
  } else {
    //負け
    resultHTML += "<br>負け";
  }
  // 結果
  document.querySelector("#result").innerHTML = resultHTML;
}

// 値をテキストに変換
function changeText(num) {
  let item = "";
  switch (num) {
    case 0:
      item = "ぐー";
      break;
    case 1:
      item = "ちょき";
      break;
    case 2:
      item = "ぱー";
      break;
    default:
      item = "不正な値を検出";
  }
  return item;
}
