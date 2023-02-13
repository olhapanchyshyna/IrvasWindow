import checkNumInput from "./checkNumInput";

function forms(state){
    function postData(){
        const   form = document.querySelectorAll('form'),
                inputs = document.querySelectorAll('input');

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
                        }, 2000);
                    });
            });
        });
    }
    postData();
}

export default forms;