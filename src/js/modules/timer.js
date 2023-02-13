function timer(id,deadline) {

        function getTime(endTime){
            const t = Date.parse(endTime) - Date.parse(new Date()),
            days =  Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor(t / (1000 * 60 * 60) % 24),
            minutes = Math.floor(t / (1000 * 60) % 60),
            seconds = Math.floor((t / 1000) % 60);

            if(t <= 0){
                return{
                    'total': 0,
                    'days' : 0,
                    'hours': 0,
                    'minutes': 0,
                    'seconds': 0
                };
            }else{
                return{
                    'total': t,
                    'days' : days,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds
                };
            }
        }

        function getZero(num){
            if(num >= 0 && num < 10){
                return `0${num}`;
            }else{
                return num;
            }
        }

        function getSelector(timerSelector,endTime){
            const   timer = document.querySelector(timerSelector),
                    days = timer.querySelector('#days'),
                    hours = timer.querySelector('#hours'),
                    minutes = timer.querySelector('#minutes'),
                    seconds = timer.querySelector('#seconds'),
                    timeOut = setInterval(putTime, 1000);

            putTime();

            function putTime(){
                const times = getTime(endTime);

                days.textContent = getZero(times.days);
                hours.textContent = getZero(times.hours);
                minutes.textContent = getZero(times.minutes);
                seconds.textContent = getZero(times.seconds);

                if(times.total <= 0){
                    clearInterval(timeOut);
                }
            }
        }
        getSelector(id,deadline);

}

export default timer; 