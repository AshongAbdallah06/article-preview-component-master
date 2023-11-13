const shareButton = document.querySelector('.js-share-btn');


function checkStyles() {
    let main = document.getElementById('main');
    const width = window.innerWidth;
    const computedStyle = window.getComputedStyle(main);
    const flexDirection = computedStyle.getPropertyValue('flex-direction');

    if (width <= 700 && flexDirection === 'column') {
        // Your code here for when the page width is 700 pixels or less and main is in column direction

        document.querySelector('.mobile-share').innerHTML = `
        <span class="share-options-column">
            <span class="container">
                <span class="tooltip">SHARE</span>
                <img src="images/icon-facebook.svg" class="icons-column" alt="facebook icon">
                <img src="images/icon-twitter.svg" class="icons-column" alt="twitter-icon">
                <img src="images/icon-pinterest.svg" class="icons-column" alt="pinterest-icon">
            </span>

            <img class="mobile-share-svg" src="images/icon-share.svg" alt="">

        </span>`
        
        document.querySelector('.share-options-column').classList.add('is-sharing-options')

        document.querySelector('.user-container').classList.add('remove-user-container')
    } else {
        // Your code here for other cases

        document.querySelector('.user-container').classList.remove('remove-user-container');



    let isSharing = document.querySelector('.share-options-row');
    if (!isSharing.classList.contains("is-sharing")) {
        isSharing.classList.add("is-sharing");
        document.querySelector('.share-options-row').innerHTML = `
        <span class="tooltip">SHARE</span>
        <img src="images/icon-facebook.svg" class="icons" alt="facebook icon">
        <img src="images/icon-twitter.svg" class="icons" alt="twitter-icon">
        <img src="images/icon-pinterest.svg" class="icons" alt="pinterest-icon">
        `        
        document.querySelector('.share-svg').classList.add("share-icon");
        document.querySelector('.js-share-btn').classList.add("Share-btn");


    } else {
        isSharing.classList.remove("is-sharing");

        document.querySelector('.share-svg').classList.remove("share-icon")
        document.querySelector('.js-share-btn').classList.remove("Share-btn");
    }
  }
}



// Check styles when the window is resized
window.addEventListener('resize', () => {
    const width = window.innerWidth;
  
    if (width > 700) {
        document.querySelector('.user-container').classList.remove('remove-user-container')
    } else {
        if (!document.querySelector('.share-options-column').classList.contains('mobile-svg')) {
            document.querySelector('.user-container').classList.add('remove-user-container')
        }

    }

});

// Check styles when the button is clicked
shareButton.addEventListener('click', () => {
    checkStyles();


    document.querySelector('.mobile-share-svg').addEventListener('click', () => {
        document.querySelector('.user-container').classList.remove('remove-user-container');
        document.querySelector('.share-options-column').classList.add('mobile-svg')
    })

});


