document.getElementById("boldBtn").addEventListener("click", function () {
  const inputContentBold = document.getElementById("contentInput");
  const boldBtn = document.getElementById("boldBtn");
  boldBtn.classList.toggle("bg-gray-700")
  if (inputContentBold.style.fontWeight === "bold") {
    inputContentBold.style.fontWeight = "normal";
  } else {
    inputContentBold.style.fontWeight = "bold";
  }
});

document.getElementById("italicBtn").addEventListener("click", function () {
  const italicBtn = document.getElementById("italicBtn");
  italicBtn.classList.toggle("bg-gray-700")
  const inputContentItalic = document.getElementById("contentInput");
  if (inputContentItalic.style.fontStyle === "italic") {
    inputContentItalic.style.fontStyle = "normal";
  } else {
    inputContentItalic.style.fontStyle = "italic";
  }
});

document.getElementById("underlineBtn").addEventListener("click", function () {
  const underlineBtn = document.getElementById("underlineBtn");
  underlineBtn.classList.toggle("bg-gray-700")
  const inputContentUnderline = document.getElementById("contentInput");
  if (inputContentUnderline.style.textDecoration === "underline") {
    inputContentUnderline.style.textDecoration = "none";
  } else {
    inputContentUnderline.style.textDecoration = "underline";
  }
});

document.getElementById("leftAlign").addEventListener("click", function () {
  const leftAlign = document.getElementById("leftAlign");
  leftAlign.classList.toggle("bg-gray-700");
  const inputContentLeft = document.getElementById("contentInput");
  if (inputContentLeft.style.textAlign === "left") {
    inputContentLeft.style.textAlign = "left";
  } else {
    inputContentLeft.style.textAlign = "left";
  }
});

document.getElementById("centerAlign").addEventListener("click", function () {
  const centerAlign = document.getElementById("centerAlign");
  centerAlign.classList.toggle("bg-gray-700");
  const inputContentCenter = document.getElementById("contentInput");
  if (inputContentCenter.style.textAlign === "center") {
    inputContentCenter.style.textAlign = "left";
  } else {
    inputContentCenter.style.textAlign = "center";
  }
});

document.getElementById("rightAlign").addEventListener("click", function () {
  const rightAlign = document.getElementById("rightAlign");
  rightAlign.classList.toggle("bg-gray-700");
  const inputContentRight = document.getElementById("contentInput");
  if (inputContentRight.style.textAlign === "right") {
    inputContentRight.style.textAlign = "left";
  } else {
    inputContentRight.style.textAlign = "right";
  }
});

document.getElementById("justifyAlign").addEventListener("click", function () {
  const justifyAlign = document.getElementById("justifyAlign");
  justifyAlign.classList.toggle("bg-gray-700");
  const inputContentJustify = document.getElementById("contentInput");
  if (inputContentJustify.style.textAlign === "justify") {
    inputContentJustify.style.textAlign = "left";
  } else {
    inputContentJustify.style.textAlign = "justify";
  }
});

document.getElementById("fontInput").addEventListener("input", function () {
  const inputContentFontInput = document.getElementById("contentInput");
  const fontInputValue = document.getElementById("fontInput").value;
  inputContentFontInput.style.fontSize = `${fontInputValue}px`;
});

document.getElementById("colorInput").addEventListener("input", function () {
  const inputContentColorInput = document.getElementById("contentInput");
  const colorInputValue = document.getElementById("colorInput").value;
  inputContentColorInput.style.color = colorInputValue;
});
