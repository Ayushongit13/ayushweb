const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const serviceList = document.getElementById('service-list');

// Sample services data
const services = [
    { id: 1, name: 'Graphic Design', description: 'Professional design services for your business.', price: 50 },
    { id: 2, name: 'Web Development', description: 'Custom websites tailored to your needs.', price: 200 },
    { id: 3, name: 'Content Writing', description: 'Engaging content for your website and blogs.', price: 30 }
];

// Function to display services
function displayServices(services) {
    serviceList.innerHTML = '';
    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
            <p>Price: $${service.price}</p>
            <button class="cta" onclick="buyService(${service.id})">Buy Now</button>
        `;
        serviceList.appendChild(serviceItem);
    });
}

// Function to handle buying a service
function buyService(id) {
    alert(`Service ${id} purchased!`);
}

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredServices = services.filter(service => service.name.toLowerCase().includes(query));
    displayServices(filteredServices);
});

// Event listeners for forms
document.getElementById('registration-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Registration Form:', Object.fromEntries(formData));
    alert('Registration Successful!');
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Login Form:', Object.fromEntries(formData));
    alert('Login Successful!');
});

// Display initial services
displayServices(services);

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
