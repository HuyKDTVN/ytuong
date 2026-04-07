function start(soLuong) {
    hideButton();
    let count = 10;
    const el = document.getElementById("countdown");
    el.style.display = "block";



    const interval = setInterval(() => {
        el.innerText = count;
        count--;
        if (count < 0) {
            clearInterval(interval);
            el.style.display = "none";
            document.getElementById("gift").style.display = "block";
            setTimeout(() => {
                document.getElementById("gift").style.opacity = "1";
            }, 50);
            setTimeout(() => {
                openGift(soLuong);
                fireworkEffect();
            }, 1000);
        }
    }, 1000);
}
function hideButton() {
    const gift = document.getElementById("button_wrap");
    gift.classList.add("none");
}

function openGift(soLuong) {
    const gift = document.getElementById("gift");
    gift.classList.add("open");

    setTimeout(() => {
        const result = document.getElementById("result");
        result.innerText = "" + soLuong;
        result.style.display = "block";
    }, 600);
}
function fireworkEffect() {
    const duration = 2500;
    const end = Date.now() + duration;

    (function frame() {
        // bắn từ trái
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        // bắn từ phải
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        // bắn từ giữa
        confetti({
            particleCount: 8,
            spread: 100,
            origin: { x: 0.5, y: 0.3 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}