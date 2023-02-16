
const modal = () =>{

    function bindModal(btnSelector,modalSelector,closeSelector, closeClickOverlay = true){
        const   modal = document.querySelector(modalSelector),
                btns = document.querySelectorAll(btnSelector),
                close = document.querySelector(closeSelector),
                lastFormBtn = document.querySelector('[data-close="last"]'),
                scroll = scrollCalc(),
                window = document.querySelectorAll('[data-modal]');

        function openModal(modalItem){
            modalItem.style.display = 'block';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

        function closeModal(modalItem){
            window.forEach(item => {
                item.style.display = 'none';
            });
            modalItem.style.display = 'none';
            document.body.style.overflow = '';
            document.body.style.marginRight = '0px';
        }

        btns.forEach(btn  =>{
            btn.addEventListener('click', () => {
                window.forEach(item => {
                    item.style.display = 'none';
                });
                openModal(modal);
            });     
        });

        close.addEventListener('click', () =>{
            closeModal(modal);
        });

        modal.addEventListener('click',(e) => {
            if(modal === e.target && closeClickOverlay){
                closeModal(modal);
            }
        });
    
        lastFormBtn.addEventListener('click', () =>{
            closeModal(modal);
        });

        function scrollCalc(){
            const div = document.createElement('div');

            div.style.cssText = 
            `   width: 50px;
                height: 50px;
                overflow-y: scroll;
                visibility: hidden;
            `;

            document.body.appendChild(div);

            const scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();

            return scrollWidth;
        }
    }
    bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
    bindModal('.phone_link','.popup','.popup .popup_close');
    bindModal('.glazing_price_btn','.popup_calc','.popup_calc_close');
    bindModal('.popup_calc_button','.popup_calc_profile','.popup_calc_profile_close',false);
    bindModal('.popup_calc_profile_button','.popup_calc_end','.popup_calc_end_close', false);
    

    function showModalByTime(modal,time){
        setTimeout(function(){
            let display,
            scroll = scrollCalc();

            document.querySelectorAll('[data-modal]').forEach(item =>{
                if(getComputedStyle(item).display !== 'none'){
                    display = 'block';
                }
            });
            
            if(!display){
                document.querySelector(modal).style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
            }
        },time) ;
    }
    showModalByTime('.popup', 60000);
};

export default modal;