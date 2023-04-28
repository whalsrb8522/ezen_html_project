let reservation = document.getElementById('reservation')
let reservationTab = document.getElementById('reservationTab');
let reservationExit = document.getElementById('reservationExit');


reservation.addEventListener("click", function () {
    reservationTab.classList.remove('dp_none');
});

reservationExit.addEventListener("click", function () {
    reservationTab.classList.add('dp_none');
});