// const addToCartButtons = document.querySelectorAll('.add-to-cart');
// const orderForm = document.querySelector('.order-form');
// const placeOrderButton = document.getElementById('place-order');
// const cartItemsContainer = document.getElementById('cart-items'); 
// const orderHistoryContainer = document.getElementById('orderHistoryList');
// const orderHistoryLink = document.getElementById('orderHistoryLink');
// const homeLink = document.getElementById('homeLink');
// const homeContent = document.getElementById('homeContent');
// const orderHistoryContent = document.getElementById('orderHistoryContent');
// const cancellationLink = document.getElementById('cancellationLink');
// const cancellationContent = document.getElementById('cancellationContent');
// const logoutLink = document.getElementById('logoutLink');
// const orderItemsSelect = document.getElementById('orderItems');
// const orderToCancelSelect = document.getElementById('orderToCancel');

// const cart = [];

// // Home Section Logic
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const productName = button.dataset.product;
//         cart.push(productName);

        
//         button.classList.add('animate__animated', 'animate__bounceIn');
//         setTimeout(() => {
//             button.classList.remove('animate__animated', 'animate__bounceIn');
//         }, 500);

//         displayCart();
//     });
// });

// placeOrderButton.addEventListener('click', (event) => {
//     event.preventDefault();

//     const name = document.getElementById('name').value;
//     const selectedItems = Array.from(orderItemsSelect.selectedOptions).map(option => option.value);
//     if (selectedItems.length === 0) {
//         alert("Please select at least one item to order.");
//         return;
//     }

    
//     placeOrderButton.classList.add('animate__animated', 'animate__pulse');
//     setTimeout(() => {
//         placeOrderButton.classList.remove('animate__animated', 'animate__pulse');
//     }, 500);

//     alert(`Order placed successfully!
// Name: ${name}
// Items: ${selectedItems.join(", ")}`);

    
//     orderItemsSelect.value = "";
// });

// function displayCart() {
//     cartItemsContainer.innerHTML = '';

//     if (cart.length === 0) {
//         cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
//         return;
//     }

//     cart.forEach(item => {
//         const cartItem = document.createElement('div');
//         cartItem.classList.add('cart-item');

//         const image = document.createElement('img');
//         let imageSource = '';

//         if (item === "barb") {
//             imageSource = "Barb.jpeg";
//         } else if (item === "biggie") {
//             imageSource = "Biggie.jpeg";
//         } else if (item === "branch") {
//             imageSource = "Branch.jpeg";
//         } else if (item === "bridget") {
//             imageSource = "Bridget.jpeg";
//         } else if (item === "cooper") {
//             imageSource = "Cooper.jpeg";
//         } else if (item === "deltadawn") {
//             imageSource = "DeltaDawn.jpeg";
//         } else if (item === "dickory") {
//             imageSource = "Dickory.jpeg";
//         } else if (item === "glitter") {
//             imageSource = "Glitter.jpeg";
//         } else if (item === "guydiamond") {
//             imageSource = "Guy Diamond.jpeg";
//         } else if (item === "hickory") {
//             imageSource = "Hickory.jpeg";
//         } else if (item === "kingpeppy") {
//             imageSource = "King Peppy.jpg";
//         } else if (item === "mrdinkles") {
//             imageSource = "Mr. Dinkles.jpeg";
//         } else if (item === "princegristle") {
//             imageSource = "Prince Gristle.jpeg";
//         } else if (item === "smidge") {
//             imageSource = "Smidge.jpeg";
//         } else if (item === "thrash") {
//             imageSource = "Thrash.jpeg";
//         } else if (item === "tinydiamond") {
//             imageSource = "Tiny Diamond.jpeg";
//         } else if (item === "tumbleweed") {
//             imageSource = "Tumblewee.jpeg";
//         } else if (item === "poppy") {
//             imageSource = "Poppy.jpeg";
//         } 
//         image.src = imageSource;
//         image.alt = item;
//         cartItem.appendChild(image);

//         cartItem.innerHTML += `${item}`; 
//         cartItemsContainer.appendChild(cartItem);

        
//         cartItem.classList.add('animate__animated', 'animate__fadeInUp');
//         setTimeout(() => {
//             cartItem.classList.remove('animate__animated', 'animate__fadeInUp');
//         }, 500);
//     });
// }

// // Your Orders Section Logic
// orderHistoryLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     displayOrderHistory();
//     homeContent.classList.add('hide');
//     orderHistoryContent.classList.remove('hide');
//     cancellationContent.classList.add('hide');
// });

// function displayOrderHistory() {
//     orderHistoryContainer.innerHTML = ''; // Clear existing list items

//     const orders = [
//         { id: 1, items: ['Big Chungus', 'Doge'], date: '2023-12-01' },
//         { id: 2, items: ['Trollface', 'Nyan Cat'], date: '2023-12-05' }
//     ];

//     if (orders.length === 0) {
//         orderHistoryContainer.innerHTML = "<li>No order history found.</li>";
//         return;
//     }

//     orders.forEach(order => {
//         const orderItem = document.createElement('li'); // Create a new list item
//         orderItem.innerHTML = `Order ID: ${order.id} - Items: ${order.items.join(', ')} - Date: ${order.date}`;
//         orderHistoryContainer.appendChild(orderItem); // Append the list item to the list

//         // Add animation to newly added order items
//         orderItem.classList.add('animate__animated', 'animate__fadeInRight');
//         setTimeout(() => {
//             orderItem.classList.remove('animate__animated', 'animate__fadeInRight');
//         }, 500);
//     });
// }


// // Cancellation Section Logic
// cancellationLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     homeContent.classList.add('hide');
//     orderHistoryContent.classList.add('hide');
//     cancellationContent.classList.remove('hide');
// });

// // Populate the Order to Cancel dropdown
// populateOrderToCancelDropdown();

// document.getElementById('cancelOrderButton').addEventListener('click', function() {
//     const selectedOrderId = orderToCancelSelect.value;
//     if (selectedOrderId === "") {
//         alert("Please select an order to cancel.");
//         return;
//     }

//     // Add your logic here to actually cancel an order (e.g., send a request to your backend). 
//     alert(`Canceling order with ID: ${selectedOrderId}`);
//     // You can update the dropdown or the order history display after successful cancellation.
// });

// function populateOrderToCancelDropdown() {
//     const orders = [
//         { id: 1, items: ['Big Chungus', 'Doge'], date: '2023-12-01' },
//         { id: 2, items: ['Trollface', 'Nyan Cat'], date: '2023-12-05' }
//     ];

//     orders.forEach(order => {
//         const option = document.createElement('option');
//         option.value = order.id;
//         option.text = `Order ID: ${order.id}`;
//         orderToCancelSelect.appendChild(option);
//     });
// }

// // Fetch user details when the page loads
// document.addEventListener('DOMContentLoaded', function () {
//     fetchUserDetails();
// });

// async function fetchUserDetails() {
//     try {
//         const response = await fetch('/user-details', { credentials: 'include' });

//         if (!response.ok) {
//             throw new Error('Failed to fetch user details.');
//         }

//         const data = await response.json();

//         if (data.success) {
//             // Update the element with user email
//             document.getElementById('userEmail').textContent = data.user.email;
//         } else {
//             console.error('Failed to fetch user details:', data.message);
//         }
//     } catch (error) {
//         console.error('Error fetching user details:', error);
//     }
// }

// // Add logout functionality
// document.getElementById('logoutLink').addEventListener('click', function (event) {
//     event.preventDefault();
//     performLogout();
// });

// async function performLogout() {
//     try {
//         const response = await fetch('/logout', {
//             method: 'POST',
//             credentials: 'include'
//         });

//         if (response.ok) {
//             // Redirect to login page
//             window.location.href = 'index.html';
//         } else {
//             console.error('Logout failed');
//         }
//     } catch (error) {
//         console.error('Error during logout:', error);
//     }
// }

// // Home Button Logic
// homeLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     homeContent.classList.remove('hide');
//     orderHistoryContent.classList.add('hide');
//     cancellationContent.classList.add('hide');
// });



const addToCartButtons = document.querySelectorAll('.add-to-cart');
const orderForm = document.querySelector('.order-form');
const placeOrderButton = document.getElementById('place-order');
const cartItemsContainer = document.getElementById('cart-items'); 
const orderHistoryContainer = document.getElementById('orderHistoryList');
const orderHistoryLink = document.getElementById('orderHistoryLink');
const homeLink = document.getElementById('homeLink');
const homeContent = document.getElementById('homeContent');
const orderHistoryContent = document.getElementById('orderHistoryContent');
const cancellationLink = document.getElementById('cancellationLink');
const cancellationContent = document.getElementById('cancellationContent');
const logoutLink = document.getElementById('logoutLink');
const orderItemsSelect = document.getElementById('orderItems');
const orderToCancelSelect = document.getElementById('orderToCancel');

const cart = [];

// Home Section Logic
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.dataset.product;
        cart.push(productName);

        button.classList.add('animate__animated', 'animate__bounceIn');
        setTimeout(() => {
            button.classList.remove('animate__animated', 'animate__bounceIn');
        }, 500);

        displayCart();
    });
});

placeOrderButton.addEventListener('click', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const selectedItems = Array.from(orderItemsSelect.selectedOptions).map(option => option.value);
    if (selectedItems.length === 0) {
        alert("Please select at least one item to order.");
        return;
    }

    placeOrderButton.classList.add('animate__animated', 'animate__pulse');
    setTimeout(() => {
        placeOrderButton.classList.remove('animate__animated', 'animate__pulse');
    }, 500);

    alert(`Order placed successfully!
Name: ${name}
Items: ${selectedItems.join(", ")}`);

    orderItemsSelect.value = "";
});

function displayCart() {
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const image = document.createElement('img');
        let imageSource = '';

        switch(item) {
            case 'barb': imageSource = "Barb.jpeg"; break;
            case 'biggie': imageSource = "Biggie.jpeg"; break;
            case 'branch': imageSource = "Branch.jpeg"; break;
            case 'bridget': imageSource = "Bridget.jpeg"; break;
            case 'cooper': imageSource = "Cooper.jpeg"; break;
            case 'deltadawn': imageSource = "DeltaDawn.jpeg"; break;
            case 'dickory': imageSource = "Dickory.jpeg"; break;
            case 'glitter': imageSource = "Glitter.jpeg"; break;
            case 'guydiamond': imageSource = "Guy Diamond.jpeg"; break;
            case 'hickory': imageSource = "Hickory.jpeg"; break;
            case 'kingpeppy': imageSource = "King Peppy.jpg"; break;
            case 'mrdinkles': imageSource = "Mr. Dinkles.jpeg"; break;
            case 'princegristle': imageSource = "Prince Gristle.jpeg"; break;
            case 'smidge': imageSource = "Smidge.jpeg"; break;
            case 'thrash': imageSource = "Thrash.jpeg"; break;
            case 'tinydiamond': imageSource = "Tiny Diamond.jpeg"; break;
            case 'tumbleweed': imageSource = "Tumblewee.jpeg"; break;
            case 'poppy': imageSource = "Poppy.jpeg"; break;
        }

        image.src = imageSource;
        image.alt = item;
        cartItem.appendChild(image);

        cartItem.innerHTML += `${item}`;
        cartItemsContainer.appendChild(cartItem);

        cartItem.classList.add('animate__animated', 'animate__fadeInUp');
        setTimeout(() => {
            cartItem.classList.remove('animate__animated', 'animate__fadeInUp');
        }, 500);
    });
}

// Your Orders Section Logic
orderHistoryLink.addEventListener('click', function(event) {
    event.preventDefault();
    displayOrderHistory();
    homeContent.classList.add('hide');
    orderHistoryContent.classList.remove('hide');
    cancellationContent.classList.add('hide');
});

function displayOrderHistory() {
    orderHistoryContainer.innerHTML = ''; // Clear existing list items

    const orders = [
        { id: 1, items: ['Big Chungus', 'Doge'], date: '2023-12-01' },
        { id: 2, items: ['Trollface', 'Nyan Cat'], date: '2023-12-05' }
    ];

    if (orders.length === 0) {
        orderHistoryContainer.innerHTML = "<li>No order history found.</li>";
        return;
    }

    orders.forEach(order => {
        const orderItem = document.createElement('li');
        orderItem.innerHTML = `Order ID: ${order.id} - Items: ${order.items.join(', ')} - Date: ${order.date}`;
        orderHistoryContainer.appendChild(orderItem);

        orderItem.classList.add('animate__animated', 'animate__fadeInRight');
        setTimeout(() => {
            orderItem.classList.remove('animate__animated', 'animate__fadeInRight');
        }, 500);
    });
}

// Cancellation Section Logic
cancellationLink.addEventListener('click', function(event) {
    event.preventDefault();
    homeContent.classList.add('hide');
    orderHistoryContent.classList.add('hide');
    cancellationContent.classList.remove('hide');
});

// Populate the Order to Cancel dropdown
populateOrderToCancelDropdown();

document.getElementById('cancelOrderButton').addEventListener('click', function() {
    const selectedOrderId = orderToCancelSelect.value;
    if (selectedOrderId === "") {
        alert("Please select an order to cancel.");
        return;
    }

    alert(`Canceling order with ID: ${selectedOrderId}`);
});

function populateOrderToCancelDropdown() {
    const orders = [
        { id: 1, items: ['Big Chungus', 'Doge'], date: '2023-12-01' },
        { id: 2, items: ['Trollface', 'Nyan Cat'], date: '2023-12-05' }
    ];

    orders.forEach(order => {
        const option = document.createElement('option');
        option.value = order.id;
        option.text = `Order ID: ${order.id}`;
        orderToCancelSelect.appendChild(option);
    });
}

// Fetch user details when the page loads
document.addEventListener('DOMContentLoaded', function () {
    fetchUserDetails();
});

async function fetchUserDetails() {
    try {
        const response = await fetch('/user-details', { credentials: 'include' });

        if (!response.ok) {
            throw new Error('Failed to fetch user details.');
        }

        const data = await response.json();

        if (data.success) {
            document.getElementById('userEmail').textContent = data.user.email;
        } else {
            console.error('Failed to fetch user details:', data.message);
        }
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
}

// Add logout functionality
logoutLink.addEventListener('click', function (event) {
    event.preventDefault();
    performLogout();
});

async function performLogout() {
    try {
        const response = await fetch('/logout', {
            method: 'POST',
            credentials: 'include'
        });

        if (response.ok) {
            localStorage.clear(); // Clear local storage
            sessionStorage.clear(); // Clear session storage
            window.location.href = 'index.html';  // Redirect to login page
        } else {
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('Error during logout:', error);
    }
}

// Home Button Logic
homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    homeContent.classList.remove('hide');
    orderHistoryContent.classList.add('hide');
    cancellationContent.classList.add('hide');
});
