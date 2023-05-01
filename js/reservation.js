const movie_container = document.querySelector('.movie_container');
const reservation = document.getElementById('reservation')
const reservationTab = document.getElementById('reservationTab');
const reservationExit = document.getElementById('reservationExit');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const reservationNext = document.getElementById('reservationNext');

let count = 0;
let total = 0;

reservation.addEventListener("click", function () {
    reservationTab.classList.remove('dp_none');
});

reservationExit.addEventListener("click", function () {
    reservationTab.classList.add('dp_none');
});

movie_container.addEventListener("click", function (p) {
    const reservationCount = document.getElementById('reservationCount');
    const reservationPrice = document.getElementById('reservationPrice');



    if (p.target.classList.contains('seat') && !p.target.classList.contains('occupied')) {
        p.target.classList.toggle('selected');
    }

    const selectedSeats = document.querySelectorAll('.row .selected');
    const selectedSeatCount = selectedSeats.length;

    count = selectedSeatCount;
    total = count * 13000;

    reservationCount.innerText = count;
    reservationPrice.innerText = total;

    if (count > 0) {
        reservationNext.classList.remove('dp_none');
    } else {
        reservationNext.classList.add('dp_none');
    }
});

reservationNext.addEventListener("click", function () {
    alert(`총 ${count}명, 금액 ${total}\n예약완료되었습니다.`);
    location.reload();
});