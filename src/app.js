// require('./styles.css')
const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const returnBtn = document.getElementById("return-btn");
const eraseBtn = document.getElementById("erase-btn");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOption = Array.from(document.getElementsByClassName("color-option"));
const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
ctx.lineCap = "round";

let isPainting = false;
let isFilling = false;
let filledColor = "white";

function onMove(event) {
  if (isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting() {
  isPainting = true;
}

function cancelPainting() {
  isPainting = false;
  ctx.beginPath();
}

function onLineWidthChange(event) {
  ctx.lineWidth = event.target.value;
}

function onColorChange(event) {
  ctx.strokeStyle = event.target.value;
  ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color;
  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;
  color.value = colorValue;
}

function onModeClick() {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
}

function onCanvasClick() {
  if (isFilling) {
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    filledColor = ctx.fillStyle;
  }
}

function onReturnClick() {
  ctx.fillStyle = "white";
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

function onEraserCLick() {
  ctx.strokeStyle = filledColor;
  isFilling = false;
  modeBtn.innerText = "Fill";
}

function onFileChange(event) {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image();
  image.src = url;
  image.onload = function () {
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
}

function onDoubleClick(event) {
  const text = textInput.value;
  if (text !== "") {
    ctx.save(); // 현재 상태 저장
    ctx.lineWidth = 1;
    ctx.font = "68px serif";
    ctx.fillText(text, event.offsetX, event.offsetY);
    ctx.restore(); // 저장된 상태 불러오기
  }
}

function onSaveClick() {
  const url = canvas.toDataURL();
  const a = document.createElement("a");
  a.href = url;
  a.download = "myDrawing.png";
  a.click();
}

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);
colorOption.forEach((color) => color.addEventListener("click", onColorClick));
modeBtn.addEventListener("click", onModeClick);
returnBtn.addEventListener("click", onReturnClick);
eraseBtn.addEventListener("click", onEraserCLick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);

// const canvas2 = document.querySelector("#canvas2");
// const ctx2 = canvas2.getContext("2d");
// canvas2.width = 800;
// canvas2.height = 800;
// // 마우스 움직일때마다 선긋기
// const colors = [
//     "#ff3838",
//     "#ffb8b8",
//     "#c56cf0",
//     "#ff9f1a",
//     "#fff200",
//     "#32ff7e",
//     "#d35400"
// ]

// function onClick(e) {
//     ctx.beginPath();
//     ctx.moveTo(400,400)
//     const color = colors[Math.floor(Math.random() * colors.length)]
//     ctx.strokeStyle = color
//     ctx.lineTo(e.offsetX, e.offsetY)
//     ctx.stroke();
// }

// canvas.addEventListener("mousemove", onClick)

// 기능 연습하기
// ctx.fillRect(100, 100, 100, 200); - 사각형 만들고 색칠혀라

// ctx.rect(50, 50, 100, 200);
// ctx.rect(150, 250, 100, 200);
// ctx.fill();
// ctx.rect(250, 450, 100, 200);
// ctx.stroke();

// ctx.beginPath(); // 새 경로 만들기
// ctx.fillStyle = "red";   // 색 변경
// ctx.rect(350, 450, 100, 100);
// ctx.rect(450, 550, 100, 100);
// ctx.fill();

// ctx.moveTo(50, 50); // 선을 긋지 않으면서 펜을 이동
// ctx.lineTo(150, 50);    // 선을 그으면서 펜을 이동
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.stroke();
// ctx.fill();

// 집만들기
// ctx.fillRect(100, 200, 50, 200);
// ctx.fillRect(300, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(200, 300, 50, 100);
// ctx.fillRect(100, 200, 200, 10);
// ctx.moveTo(100, 200);
// ctx.lineTo(225, 100);
// ctx.lineTo(350, 200);
// ctx.fill();

// // 사람
// ctx.beginPath();
// ctx.fillRect(425, 200, 15, 100);
// ctx.fillRect(540, 200, 15, 100);
// ctx.fillRect(460, 200, 60, 200);

// ctx.arc(490, 150, 50, 0, 2 * Math.PI); // 원 그리기, (x, y, radius, startAngle, endAngle)
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(450, 150, 7, Math.PI, 2 * Math.PI);
// ctx.arc(490, 150, 7, Math.PI, 2 * Math.PI);
// ctx.fill();
