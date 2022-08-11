// Get DOM Elements
const main= document.getElementById('main')
const addUserBtn= document.getElementById('add-user')
const doubleBtn=document.getElementById('double');
const filterBtn = document.getElementById('filter');
const sortBtn= document.getElementById('sort')
const sumBtn = document.getElementById('sum')
// Initialize user data array
let data= [];

// Fetch Random User from randomuser.me API
async function getRandomUser(){
    //wait for the results from API
    const res= await fetch('https://randomuser.me/api/');
    // Wait for response to convert into JSON
    const data= await res.json();
    // console.log(data)
    // Get User data
    const user= data.results[0];
    // Get the New user 
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        balance: Math.floor(Math.random()*1000000)
    }


    // Add the new user into data array
    addData(newUser);
}

function addData(newUser){
    data.push(newUser);

    // Update the DOM to display users in the data array
    updateDOM();
}
// Function to double Money of All Users
function doubleMoney(){
    // Loop  through all users in the user data array
    // for each user,return the user data
    // overwrite the data array with the new data array created by map 
    data= data.map((user)=>{
        return {...user,balance:user.balance*2};
    })
    // update the DOM using the new user data array
    updateDOM();
}

// function to format random number as money
function formatRandomNumber(number){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Update the UI with data from the user data array
function updateDOM(userData=data){
    // clear previous UI
    // main.innerHTML =`<h2><strong>User</strong>Wealth</h2>`
    // Loop through userdata and render into the UI
    const tablebody= document.getElementById('main')
    let tabledata=""
    userData.forEach(user=>{
        // Create new div element for the user
        // const userDiv= document.createElement('div')
        // Apply the user class to the new div
        // userDiv.classList.add('user');
        // Add inner HTML to the user div
        // userDiv.innerHTML = `<strong>${user.name}</strong> ${formatRandomNumber(user.balance)}`
        // Add the new element into the DOM
        // main.appendChild(userDiv);
        // userDiv.innerHTML = `<strong>${user.name}</strong> ${formatRandomNumber(user.balance)}`
        tabledata+=`<tr>
                        <td><strong>${user.name}</strong></td>
                        <td><strong>${formatRandomNumber(user.balance)}</strong></td>
                    </tr>`
        
    })
    tablebody.innerHTML= tabledata;
}


// Event Listeners
// 1. Listen for click on Add User Button
addUserBtn.addEventListener('click',getRandomUser)

// 2. Listen for click on Double Button
doubleBtn.addEventListener('click',doubleMoney)


getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();
getRandomUser();



