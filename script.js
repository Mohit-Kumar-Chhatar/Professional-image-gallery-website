function openImage(src) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = src;
    
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}
 
let name1 = document.getElementById("name");
let email = document.getElementById("email");



function contactInfo(){
    confirm( "thank you "+ name1.value + "for Submitting Your Query" + "\n we Found your Email " + email.value)

}





