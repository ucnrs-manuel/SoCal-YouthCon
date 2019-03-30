/*
    Author: Will Gunadi
    Date Created: 3/15/2019
    Purpose: Remove and Resize Social Icons

*/
const maptext = document.getElementById('maptext');
const mapImage = document.getElementById('mapimage');
const igIcon = document.querySelector(".fa-instagram");
const fbIcon = document.querySelector('.fa-facebook-square');
//Adding content
window.onresize = function () {
    if (window.innerWidth <= 450) {
        //Add class into map text
        maptext.classList.add("d-flex", "justify-content-center");

        //Toggle float right
        mapImage.classList.remove('float-right');
        mapImage.classList.add("dflex", "justify-content-center");

        //Toggle Facebook Icon
        fbIcon.classList.remove('fa-4x', 'fab', 'fa-facebook-square');
        // fbIcon.classList.add('fa-2x');

        //Toggle instagram Icon
        igIcon.classList.remove('fa-4x', 'fa-instagram', 'fab');
        // igIcon.classList.add('fa-2x');


    } else if (window.innerWidth >= 450) {
        //remove class into map text
        maptext.classList.remove("d-flex", "justify-content-center");

        //toggle image 
        mapImage.classList.remove("dflex", "justify-content-center");
        mapImage.classList.add("float-right");

        //toggle facebook icon
        // fbIcon.classList.remove('fa-2x');
        fbIcon.classList.add('fa-4x', 'fa-facebook-square', 'fab');

        //Toggle instagram Icon
        // igIcon.classList.remove('fa-2x');
        igIcon.classList.add('fa-4x', 'fa-instagram', 'fab');

    }
}