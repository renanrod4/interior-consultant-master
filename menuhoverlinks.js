var collection = document.querySelector('.collection.menulink');
var about = document.querySelector('.about.menulink');
var contact = document.querySelector('.contact.menulink');
var home = document.querySelector('.home.menulink');
var menupage = document.querySelector(".menupage");
var menu = document.querySelector(".menu");

// take screen width and height
var width = window.innerWidth;
var height = window.innerHeight;
if (width < 1150){
    if (collection){
        collection.addEventListener('click', function(e) {
            e.preventDefault();
            home.classList.remove('focus');
            about.classList.remove('focus');
            contact.classList.remove('focus');
            collection.classList.add('focus');
            menupage.classList.add("close");
            menu.classList.remove("open");
        })

    }
    if (about){
        about.addEventListener('click', function(e) {
            e.preventDefault();
            home.classList.remove('focus');
            collection.classList.remove('focus');
            contact.classList.remove('focus');
            about.classList.add('focus');
            menupage.classList.add("close");
            menu.classList.remove("open");
        }
        )
    }
    if (contact){
        contact.addEventListener('click', function(e) {
            e.preventDefault();
            home.classList.remove('focus');
            collection.classList.remove('focus');
            about.classList.remove('focus');
            contact.classList.add('focus');
            menupage.classList.add("close");
            menu.classList.remove("open");
        })
    }
    if (home){
        home.addEventListener('click', function(e) {
            e.preventDefault();
            collection.classList.remove('focus');
            about.classList.remove('focus');
            contact.classList.remove('focus');
            home.classList.add('focus');
            menupage.classList.add("close");
            menu.classList.remove("open");
            

        }
        )
    }

}