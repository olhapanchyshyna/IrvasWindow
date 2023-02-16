import checkNumInput from "./checkNumInput";
import checkEmptyInputs from "./checkEmptyInput";

function changeModalState(state){
    const   windowForm = document.querySelectorAll('.balcon_icons_img'),
            windowWidth = document.querySelectorAll('#width'),
            windowHeight = document.querySelectorAll('#height'),
            windowType = document.querySelectorAll('#view_type'),
            windowProfile = document.querySelectorAll('.checkbox'),
            windowName = document.querySelector('.popur-end-input-name'),
            windowPhone = document.querySelector('.popur-end-input-phone');

    
    checkNumInput('#width');
    checkNumInput('#height');
    checkEmptyInputs('button[data-lockBtn-for-input]', windowWidth[0], windowHeight[0]);
    checkEmptyInputs('[data-popur-end-btn]', windowName, windowPhone);
    chackEmptyChackbox('.popup_calc_profile_button');


    
    function chackEmptyChackbox(selectorBtn){

        const chackboxCustom = document.querySelectorAll('.popup_calc_profile_content > label > span.checkbox-custom');

        document.querySelector(selectorBtn).setAttribute('disabled', 'disabled');
        document.querySelector(selectorBtn).style.cssText = 'filter: opacity(0.5);';

        chackboxCustom.forEach((item) =>{
            item.addEventListener('click', ()=>{
                console.log("Состояние чекбокса изменнено");
                document.querySelector(selectorBtn).style.cssText = 'filter: unset;';
                openBtn();
            });
        });
        
        const openBtn = () => document.querySelector(selectorBtn).removeAttribute('disabled', 'disabled');
    };


    function windowListener(selector,action,name){
        selector.forEach((item,i) => {
            item.addEventListener(action, () => {
                switch(item.nodeName){
                    case 'SPAN' : 
                        state[name] = i;
                        break;

                    case 'INPUT' :
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[name] = 'Холодное': state[name] = 'Теплое';
                            selector.forEach((box,j) => {
                                box.checked = false;
                                if(i == j){
                                    box.checked = true;
                                }
                            });
                            if(!Object.keys(state).includes('type')){
                                state['type'] = 'tree';
                            }
                        }else{
                            if(!Object.keys(state).includes('form')){
                                state['form'] = 0;
                            }
                            state[name] = item.value;   
                        }
                        break;

                    case 'SELECT' :
                        state[name] = item.value;
                        break;
                }
                console.log(state);
               
            });
        });
    }

    windowListener(windowForm,'click','form');
    windowListener(windowWidth,'input','width');
    windowListener(windowHeight,'input','height');
    windowListener(windowType,'change','type');
    windowListener(windowProfile,'change','profile');

}

export default changeModalState;
