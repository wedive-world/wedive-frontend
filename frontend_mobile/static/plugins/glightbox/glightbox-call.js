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
    window.localStorage.isShowImage="1";
});

lightbox.once('close', () => {
    // Do something just one time
    window.localStorage.isShowImage="0";
});
