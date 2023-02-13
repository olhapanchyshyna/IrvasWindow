const checkEmptyInputs = (selectorBtn, ...inputs) => {

    const btn = document.querySelector(selectorBtn);

    btn.setAttribute('disabled', 'disabled');
    btn.style.cssText = 'filter: opacity(0.5);';        

    let swichFirstInput = false;
    let swichSecondInput = false;
    

    function checkInput (btn){
        const openBtn = () => btn.removeAttribute('disabled', 'disabled');
        const closeBtn = () => btn.setAttribute('disabled', 'disabled');

        const resSwich = () =>{
            if(swichFirstInput && swichSecondInput){
                openBtn();
                btn.style.cssText = 'filter: unset;';
            }else{
                closeBtn();
                btn.style.cssText = 'filter: opacity(0.5);';
        }};
        
        inputs.forEach((input, i)=> {
            input.addEventListener('input', () =>{
                if(input.value){
                    if(i == 0)swichFirstInput = true;
                    if(i == 1)swichSecondInput = true;
                }else if(!input[0].value){
                    if(i == 0)swichFirstInput = false;
                    if(i == 1)swichSecondInput = false;
                }
                resSwich();

            });
        });
    };
    checkInput(btn);


};

export default checkEmptyInputs;