var navLinks = document.getElementById("navLinks");
        function showMenu(){
            navLinks.style.right="0";
        }
        function hideMenu(){
            navLinks.style.right="-300px"
        }

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", ()=>{
        removeActiveClasses();
        panel.classList.add("active");
    });
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}