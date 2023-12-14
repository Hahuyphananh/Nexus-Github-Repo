let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

/*function pfpChange() {
    inputFile.onchange = function () {
        profilePic.src = URL.createObjectURL(inputFile.files[0]);
    }
    document.inputFile.style.display = "block";
}*/

function changeImage() {
    var userImage = document.getElementById("input-file").value;
    document.getElementById("profile-pic").src = userImage;
}

/*function pfpChange() {
    document.getElementById("swim-image").style.display = "block";
    document.getElementById("swim-image").style.zIndex = "10";
}*/

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("edit-profile").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("edit-profile").style.display = "none";

}
