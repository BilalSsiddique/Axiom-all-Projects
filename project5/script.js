// Get DOM Elements
const tablebody = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double');
const filterBtn = document.getElementById('filter');
const sortBtn = document.getElementById('sort')
const sumBtn = document.getElementById('sum')
const loadbtn=document.getElementById('load')
// Initialize user data array
let data = [];

// Fetch Random User from randomuser.me API
async function getRandomUser() {
    //wait for the results from API
    const res = await fetch('https://randomuser.me/api/');
    // Wait for response to convert into JSON
    const data = await res.json();
    // console.log(data)
    // Get User data
    const user = data.results[0];
    // Get the New user 
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random() * 1000000)
    }


    // Add the new user into data array
    addData(newUser);
}

function addData(newUser) {
    data.push(newUser);

    // Update the DOM to display users in the data array
    updateDOM();
}
// Function to double Money of All Users
function doubleMoney() {
    // Loop  through all users in the user data array
    // for each user,return the user data
    // overwrite the data array with the new data array created by map 
    data = data.map((user) => {
        return { ...user, balance: user.balance * 2 };
    })
    // update the DOM using the new user data array
    updateDOM();
}
// Function to 
function filterMillionaire() {
    data=data.filter(user => user.balance>1000000);
    if (data.length>0){
        updateDOM();
    }
    else{
        tablebody.innerHTML="";
        const tablerow = document.createElement('tr');
        tablerow.innerHTML=`
                            <td> No millionaires </td>
                            <td> 0 </td>
                            `
        tablebody.appendChild(tablerow);
    }
    
}

// function to load users
function loadallusers(){
    
    window.location.reload()

}

// Function to sort users by balance
function sortUsers(){
    data= data.sort((a,b) => b.balance-a.balance)
    updateDOM()
}
// function to sum all users balance into total balance
function totalBalance(){
    updateDOM()
    const balance = data.reduce((acc,user)=> (acc+=user.balance), 0);
    const tablerow = document.createElement('tr');
    tablerow.innerHTML =`
                            <td id="tab"  colspan="2">Total Balance :  ${formatRandomNumber(balance)} </td>
                        `

    tablebody.appendChild(tablerow);
}



// function to format random number as money
function formatRandomNumber(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Update the UI with data from the user data array
function updateDOM(userData = data) {
    // clear previous UI
    // main.innerHTML =`<h2><strong>User</strong>Wealth</h2>`

    // Loop through userdata and render into the UI
    tablebody.innerHTML = "";

    userData.forEach(user => {
        // Create new div element for the user
        // const userDiv= document.createElement('div')
        // Apply the user class to the new div
        // userDiv.classList.add('user');
        // Add inner HTML to the user div
        // userDiv.innerHTML = `<strong>${user.name}</strong> ${formatRandomNumber(user.balance)}`
        // Add the new element into the DOM
        // main.appendChild(userDiv);

        const tablerow = document.createElement('tr');

        tablerow.innerHTML = `
                        <td><strong>${user.name}</strong></td>
                        <td><strong>${formatRandomNumber(user.balance)}</strong></td>
                        `
        tablebody.appendChild(tablerow);
    })

}


// Event Listeners

// 1. Listen for click on Add User Button
addUserBtn.addEventListener('click', getRandomUser)

// 2. Listen for click on Double Button
doubleBtn.addEventListener('click', doubleMoney)

// 3 Listen for click on Filter Button
filterBtn.addEventListener('click', filterMillionaire)

// Listen for click on Load Button
loadbtn.addEventListener('click',loadallusers)

// Listen for click on Sort Button
sortBtn.addEventListener('click',sortUsers)

// Listen for click on Sum Button
sumBtn.addEventListener('click',totalBalance);


getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();



