var productImg = document.getElementById("productImg");
var smallimg = document.getElementsByClassName("smallImg");
console.log(smallimg);

for (var i = 0; i < smallimg.length; i++) {
  smallimg[i].onclick = function () {
    productImg.src = this.src;
  };
}
