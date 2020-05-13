let chbox = document.querySelector('#hamburger');
let body = document.body;
chbox.addEventListener('change', function(){

    body.style.overflow = chbox.checked ? body.style.overflow = 'hidden' : body.style.overflow = 'unset';
});

// window.addEventListener('mouseover', function(event){
//     if(event.target != undefined) {
//         var target;
        
//         if(event.target.classList.contains('product-card')) {
//             target = event.target;
            
//         } else if(event.target.parentNode.classList.contains('product-card')) {
//             target = event.target.parentNode;
//         }
//     } else {
//         console.log('not');
//     }

//     console.log(target, event.screenY, target.getBoundingClientRect());
    
   
});