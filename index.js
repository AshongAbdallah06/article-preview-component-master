const shareButton = document.querySelector('.js-share-btn');

let main = document.getElementById('main');

shareButton.addEventListener('click', () => {

    const shareOptionsColumn = document.querySelector('.share-options-row');




    let computedStyle = window.getComputedStyle(main);
    let flexDirection = computedStyle.getPropertyValue('flex-direction');

    if (flexDirection === 'column') {
    //   alert('Main is in column direction.');

    document.querySelector('.user-container').innerHTML = ''; 

    document.querySelector('.c').innerHTML = `
    <span class="share-options-column">
    <span class="container">
        <span class="tooltip">SHARE</span>
        <img src="images/icon-facebook.svg" class="icons-column" alt="facebook icon">
        <img src="images/icon-twitter.svg" class="icons-column" alt="twitter-icon">
        <img src="images/icon-pinterest.svg" class="icons-column" alt="pinterest-icon">
    </span>


        <div class="share-btn js-share-btn">
        <img class="share-svg" src="images/icon-share.svg" alt="">
      </div>
    </span>
    `



    } else {
      alert('Main is NOT in column direction.');
      if (!shareOptionsColumn.classList.contains('is-sharing')) {
        shareOptionsColumn.classList.add('is-sharing');
        document.querySelector('.share-btn').classList.add('Share-btn');
        document.querySelector('.share-svg').classList.add('share-icon')

    } else {
        shareOptionsColumn.classList.remove('is-sharing');
        document.querySelector('.share-btn').classList.remove('Share-btn');
        document.querySelector('.share-svg').classList.remove('share-icon')
    }
      // Your code here for when main is NOT in column direction
    }

})

