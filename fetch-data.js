// this async function fetches user data and displays it 
async function fetchUserData() {
    //step 1: the public API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
    //step 2: select the div where we will show the data
    const dataContainer = document.getElementById('api-data');
    try {
        //step 3: fetch data from the API
        const response = await fetch(apiUrl);
        //step 4: convert the response to JSON (actual user object)
        const userData = await response.json();
        //step 5: remove the "loadong user data..." message
        dataContainer.innerHTML = '';
        //step 6: create <ul> list to hold all names
        const userList = document.createElement('ul');
        //step 7: loop through each user and add their name to the list
        users.forEach(user=> {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        //step 8: finally add the full list to the page
        dataContainer.appendChild(userList);
    } catch (error) {
        //step 9: if anything goes wrong (no internet, API down etc.)
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}
//step 10: run the function only when the HTML is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
