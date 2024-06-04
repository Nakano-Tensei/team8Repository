//ここから時計に関するスクリプト
setInterval(() =>{
    const now = new Date();
    const hour = now.getHours().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const second = now.getSeconds().toString().padStart(2, '0');

    const currentTime = `${hour}:${minute}:${second}`;

    document.querySelector(".clock").textContent = currentTime;
},100);

//ここまで時計に関するスクリプト