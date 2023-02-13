function images(){
    const   worksSection = document.querySelector('.works'),
            imgPopup = document.createElement('div'),
            imgBig = document.createElement('img');


    imgPopup.classList.add('popup');
    worksSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    imgBig.style.maxWidth = '650px';
    imgBig.style.maxHeight = '650px';

    imgPopup.appendChild(imgBig);
            

    worksSection.addEventListener('click', (e) => {
        e.preventDefault();

        const target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            imgBig.setAttribute('src',path);
            document.body.style.overflow = 'hidden';
        }
        if(target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

export default images;