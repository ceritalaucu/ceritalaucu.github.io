/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(){
    document.getElementById("Kisah_Show").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event){
    if (!event.target.matches(".Nav_Buttons")){
        var dropdowns = document.getElementsByClassName("Kisah_Content");
        var i;
        for (i=0;i<dropdowns.length;i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")){
                openDropdown.classList.remove("show");
            }
        }
    }
}