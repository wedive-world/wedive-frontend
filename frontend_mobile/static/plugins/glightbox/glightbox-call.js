setTimeout(function() {
    var lightbox = GLightbox({
        closeOnOutsideClick: false,
        zoomable:false,
        descPosition:'bottom',
        selector: '[data-gallery]',
        openEffect: 'fade',
        closeEffect: 'fade',
        dragAutoSnap:true,
        preload:true,
    });
    lightbox.on('open', () => {
        if(window.location.href.split('/').pop() != 'modal'){
            window.history.pushState({}, 'modal', window.location.pathname + '/modal');
        }
    });
    
    lightbox.on('close', () => {
        console.log("close : " + window.location.href)
        if(window.location.href.split('/').pop() == 'modal'){
            window.history.back(); 
        }
    });
},1000);

