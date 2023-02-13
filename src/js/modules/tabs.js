"use strict";

function tabs(){
    function showTabs(headerSelector,tabsItem,contentSelector,activeItem, display ='block'){
        const   header = document.querySelector(headerSelector),
                tabs = document.querySelectorAll(tabsItem),
                content = document.querySelectorAll(contentSelector);


        function hideContent(){
            content.forEach(item =>{
                item.style.display = 'none';
            });
            tabs.forEach(item =>{
                item.classList.remove(activeItem);
            });
        }
        function showContent(i = 0){
            content[i].style.display = display;
            tabs[i].classList.add(activeItem);
        }

        hideContent();
        showContent();

        
        header.addEventListener('click', (event) =>{
            const target = event.target;
            
            if(target && ( target.classList.contains(tabsItem.replace(/\./, "")) || target.parentNode.classList.contains(tabsItem.replace(/\./, "")))){
                tabs.forEach((item, i)=>{
                    if(target == item || target.parentNode == item){
                        hideContent();
                        showContent(i);
                    }
                });
            }
        });

    }
    showTabs('.glazing_slider','.glazing_block','.glazing_content','active');
    showTabs('.decoration_slider', '.no_click', '.decoration_content > div > div ','after_click');
    showTabs('.balcon_icons', '.balcon_icons_img', '.big_img > img','do_image_more','inline-block');
}


export default tabs;