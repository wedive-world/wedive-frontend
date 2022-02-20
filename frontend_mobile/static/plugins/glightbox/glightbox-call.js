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
    // Do something
    try {
        Android.setNeedToGoBack(true);
    } catch(e) {

    }
});

lightbox.once('close', () => {
    // Do something just one time
    try {
        Android.setNeedToGoBack(false);
    } catch(e) {

    }
});
