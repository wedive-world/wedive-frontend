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
    window.history.pushState({}, 'modal', '/modal');
});

lightbox.once('close', () => {
    if (window.localStorage.gclose == "1") {
        window.localStorage.gclose = '0';
    } else {
        window.history.back(); 
    }
});
