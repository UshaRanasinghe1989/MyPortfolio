function responsiveNavBar() {
    var x = document.getElementById("navBar");
    var myImage=document.getElementById("myImage");
    if (x.className == "topnav") {
        x.className += " responsive";
        //myImage.className+="responsive";
    } else {
        x.className = "topnav";
       // myImage.className="myImage";
    }
}