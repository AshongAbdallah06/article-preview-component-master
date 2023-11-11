let shareButton = document.querySelector('.js-share-btn');
shareButton.addEventListener('click', () => {

    const shareOptions = document.querySelector('.share-options');

    if (!shareOptions.classList.contains('is-sharing')) {
        document.querySelector('.share-options').classList.add('is-sharing');
        document.querySelector('.share-btn').classList.add('Share-btn');
        document.querySelector('.share-svg').classList.add('share-icon')

    } else {
        document.querySelector('.share-options').classList.remove('is-sharing');
        document.querySelector('.share-btn').classList.remove('Share-btn');
        document.querySelector('.share-svg').classList.remove('share-icon')

    }

})

