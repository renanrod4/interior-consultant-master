var menu = document.querySelector(".menu");
var html = document.querySelector("html");
var topbar = document.querySelector(".topbar");
var midbar = document.querySelector(".midbar");
var bottombar = document.querySelector(".bottombar");
var menupage = document.querySelector(".menupage");
var menupagetop = menupage.offsetTop;
var collectionmenu = document.querySelector('.collection.menulink');
var aboutmenu = document.querySelector('.about.menulink');
var contactmenu = document.querySelector('.contact.menulink');
var homemenu = document.querySelector('.home.menulink');
var width = window.innerWidth;
var height = window.innerHeight;
if (width < 1150){
    console.log("a")
    function openmenu(){
        topbar.classList.toggle("open");
        midbar.classList.toggle("open");
        bottombar.classList.toggle("open");
    }
    menu.addEventListener("click", openmenu);
    menu.addEventListener("click", ()=>{
        if(!menupage.classList.contains("close")){
            menupage.classList.add("open");
            menu.classList.add("hide")
            html.classList.add("overflow")
        }
    }); 
    
    setInterval(() => {
        if (menupage.classList.contains("close")){
            menupage.classList.remove("open");
            menu.classList.remove("hide")
            menu.classList.remove("open");
            topbar.classList.remove("open");
            midbar.classList.remove("open");
            bottombar.classList.remove("open");
            html.classList.remove("overflow")

            setTimeout(() => {
                menupage.classList.remove("close");
            },1500)
        } 
    }, 10);
    
    // take screen width and height


    if (collectionmenu){
        collectionmenu.addEventListener('click', function(e) {
            e.preventDefault();
            homemenu.classList.remove('focus');
            aboutmenu.classList.remove('focus');
            contactmenu.classList.remove('focus');
            collectionmenu.classList.add('focus');
            menupage.classList.add("close");
            menu.classList.remove("open");
        })

    }
    if (aboutmenu){
        aboutmenu.addEventListener('click', function(e) {
            e.preventDefault();
            homemenu.classList.remove('focus');
            collectionmenu.classList.remove('focus');
            contactmenu.classList.remove('focus');
            aboutmenu.classList.add('focus');
            menupage.classList.add("close");
            menu.classList.remove("open");
        }
        )
    }
    if (contactmenu){
        contactmenu.addEventListener('click', function(e) {
            e.preventDefault();
            home.classList.remove('focus');
            collectionmenu.classList.remove('focus');
            aboutmenu.classList.remove('focus');
            contactmenu.classList.add('focus');
            menupage.classList.add("close");
            menu.classList.remove("open");
        })
    }
    if (homemenu){
        homemenu.addEventListener('click', function(e) {
            e.preventDefault();
            collectionmenu.classList.remove('focus');
            aboutmenu.classList.remove('focus');
            contactmenu.classList.remove('focus');
            homemenu.classList.add('focus');
            menupage.classList.add("close");
            menu.classList.remove("open");
            

        }
        )
    }


}