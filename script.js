const toggleBtn = document.querySelector(".togglebtn");
    const navMenu = document.querySelector(".nav-menu");
    const searchBar =document.querySelector(".search-bar")
    const icon = document.querySelector(".search-icon");

    toggleBtn.addEventListener("click", ()=> {
        toggleBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
        
    })
    
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        toggleBtn.classList.remove("active");
        navMenu.classList.remove("active");
    } ))

    icon.onclick = function(){
        searchBar.classList.toggle("active");
    }