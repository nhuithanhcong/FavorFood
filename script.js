function upDate(previewPic) {
    console.log("Sự kiện hover/focus hoạt động");
    console.log("ALT:", previewPic.alt);
    console.log("SRC:", previewPic.src);

    document.getElementById("image").innerHTML = previewPic.alt;
    document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Sự kiện onload đã kích hoạt hàm addTabFocus thành công!");
    
    let images = document.querySelectorAll(".grid img");
    
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
