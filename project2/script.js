const container = document.querySelector('.container')
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
const ticketPrice = + movieSelect.value;
// console.log(ticketPrice);
// Eventlistner on container to reduce complexity

function updateselectedcount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatNumber = document.getElementById('num');
    const seatCount = selectedSeats.length;
    count.innerText = seatCount;
    total.innerText = seatCount * ticketPrice;


    const unseats = Array()
    for (const value of selectedSeats.values()) {
        unseats.push(+value.innerHTML)
    }
    // console.log(unseats)
    seatNumber.innerHTML = JSON.stringify(unseats, null, seatCount)

};
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected')
        updateselectedcount();
    }
})


