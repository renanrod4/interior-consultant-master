var collection = document.querySelectorAll('.collection')[0];
var about = document.querySelectorAll('.about')[0];
var contact = document.querySelectorAll('.contact')[0];
var home = document.querySelectorAll('.home')[0];
// take screen width and height
var width = window.innerWidth;
var height = window.innerHeight;

if (width > 1150){
  console.log(collection)
  if (collection) {
    collection.addEventListener('click', function(e) {
      e.preventDefault();
      home.classList.remove('focus');
      about.classList.remove('focus');
      contact.classList.remove('focus');
      collection.classList.add('focus');
    });
    collection.addEventListener('mouseover', function(e) {
      e.preventDefault();
      collection.classList.add('mouseover');
      collection.classList.remove('mouseout');
    })
      collection.addEventListener('mouseout', function(e) {
      e.preventDefault();
      collection.classList.remove('mouseover');
      collection.classList.add('mouseout')
    })
  }
  
  if (about) {
    about.addEventListener('click', function(e) {
      e.preventDefault();
      home.classList.remove('focus');
      collection.classList.remove('focus');
      contact.classList.remove('focus');
      about.classList.add('focus');
    });
    about.addEventListener('mouseover', function(e) {
      e.preventDefault();
      about.classList.add('mouseover');
      about.classList.remove('mouseout');
    })
      about.addEventListener('mouseout', function(e) {
      e.preventDefault();
      about.classList.remove('mouseover');
      about.classList.add('mouseout')
    }
    )
  }
  if (contact) {
      contact.addEventListener('click', function(e) {
          e.preventDefault();
          home.classList.remove('focus');
          collection.classList.remove('focus');
          about.classList.remove('focus');
          contact.classList.add('focus');
      });
      contact.addEventListener('mouseover', function(e) {
          e.preventDefault();
          contact.classList.add('mouseover');
          contact.classList.remove('mouseout');
      })
          contact.addEventListener('mouseout', function(e) {
          e.preventDefault();
          contact.classList.remove('mouseover');
          contact.classList.add('mouseout')
          })
  
      }
  
  
  if (home) {
      home.addEventListener('click', function(e) {
          e.preventDefault();
          about.classList.remove('focus');
          collection.classList.remove('focus');
          contact.classList.remove('focus');
          home.classList.add('focus');
      });
      home.addEventListener('mouseover', function(e) {
          e.preventDefault();
          home.classList.add('mouseover');
          home.classList.remove('mouseout');
      })
          home.addEventListener('mouseout', function(e) {
          e.preventDefault();
          home.classList.remove('mouseover');
          home.classList.add('mouseout')
          })
      
  }
}