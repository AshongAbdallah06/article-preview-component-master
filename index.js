let shareButton = document.querySelector('.js-share-btn');
shareButton.addEventListener('click', () => {

    const shareOptions = document.querySelector('.share-options');

    if (!shareOptions.classList.contains('is-sharing')) {
        document.querySelector('.share-options').classList.add('is-sharing')
    } else {
        document.querySelector('.share-options').classList.remove('is-sharing')

    }
    
})

