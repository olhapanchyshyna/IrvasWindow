import checkNumInput from "./checkNumInput";
import checkEmptyInputs from "./checkEmptyInput";

function forms(state){
    function postData(){
        const   form = document.querySelectorAll('form'),
                inputs = document.querySelectorAll('input'),
                window = document.querySelectorAll('[data-modal]');

        const message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро мы с вами свяжемся',
            failure: 'Что-то пошло не так...'
        };

        checkNumInput('input[name="user_phone"]');
        
        const serverPostData = async (url,data) => {
            document.querySelector('.status').textContent = message.loading;

            const res = await fetch(url,{
                method : 'POST',
                body : data,
            });

            return await res.text();
        };

        const inputReset = () => {
            inputs.forEach(input => {
                input.value = '';
            });
        };

        function checkboxReset(selectorBtn){
            document.querySelector(selectorBtn).setAttribute('disabled', 'disabled');
            document.querySelector(selectorBtn).style.cssText = 'filter: opacity(0.5);'; 
            document.querySelectorAll('.checkbox').forEach(item => {
                item.checked = false;
            });
        }

        function tabsReset(){
            const tabs = document.querySelectorAll('.balcon_icons_img');
            tabs.forEach(item => {
                item.classList.remove('do_image_more');
            });
            tabs[0].classList.add('do_image_more');
        }


        form.forEach(item => {
            item.addEventListener('submit', (e)=> {
                e.preventDefault();

                const statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.appendChild(statusMessage);


                const formData = new FormData(item);

                if(item.getAttribute('data-calc') === "end") {
                    for (let key in state) {
                        formData.append(key, state[key]);
                    }
                }

                serverPostData('/assets/server.php',formData)
                    .then((data) => {
                        console.log(data);
                        statusMessage.textContent = message.success;
                        Object.keys(state).forEach(key => delete state[key]);
                    })
                    .catch(() => {
                        statusMessage.textContent = message.failure;
                    })
                    .finally(() => {
                        inputReset();
                        setTimeout(() => {
                            statusMessage.remove();
                            window.forEach(item => {
                                item.style.display = 'none';
                            });
                            document.body.style.overflow = '';
                        }, 3000);
                        checkEmptyInputs('button[data-lockBtn-for-input]', document.querySelectorAll('#width')[0], document.querySelectorAll('#height')[0]);
                        checkboxReset('.popup_calc_profile_button');
                        tabsReset();
                        document.querySelector('#view_type').value = 'tree';
                    });
            });
        });
    }
    postData();
}

export default forms;