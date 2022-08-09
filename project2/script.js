const container = document.querySelector('.container')
const seat = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = + movieSelect.value;

// console.log(ticketPrice);
// Eventlistner on container to reduce complexity
populateUI();

function updateselectedcount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatNumber = document.getElementById('num');
    const seatsindex = [...selectedSeats].map(seatt => [...seat].indexOf(seatt));
    // console.log(seatsindex)
    const seatCount = selectedSeats.length;
    count.innerText = seatCount;
    total.innerText = seatCount * ticketPrice;
    localStorage.setItem('selectedSeats', JSON.stringify(seatsindex));
    let data = "";
    // const unseats = Array()
    // for (const value of selectedSeats.values()) {
    //     unseats.push(+value.innerHTML)
    // }

    const unseats = Array()
    for (const value of selectedSeats.values()) {
        data += `<div class="seat selected list">
                    ${+value.innerHTML}
                </div>`
    }
    // console.log(unseats)


    seatNumber.innerHTML = data;

};

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice)
}
// GEt data from Localstorage and populate UI
function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats != null && selectedSeats.length > 0) {
        seat.forEach((seaat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seaat.classList.add('selected')
            }
        })
    }
    const selectedMovieindex = localStorage.getItem('selectedMovieIndex')
    if (selectedMovieindex != null) {
        movieSelect.selectedIndex = selectedMovieindex;
    }
}
// Eventlisteners
// 1. Implemented on container to check click on seats(not occupied)
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected')
        updateselectedcount();
    }
})

// 2. Event Listenern for movie select
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value)
    updateselectedcount();

})

// Initial count and total price
updateselectedcount();