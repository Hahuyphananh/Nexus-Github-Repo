let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

var loadFile = function (event) {
    var image = document.getElementById('profile-pic');
    image.src = URL.createObjectURL(event.target.files[0]);
}

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("edit-profile").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("edit-profile").style.display = "none";

}
