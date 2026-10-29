// Portfolio Filtering Function
function filterPortfolio(category) {
    const cards = document.querySelectorAll('.portfolio-card');
    const buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Form Submission Interactive Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const alertBox = document.getElementById('successAlert');
    const form = document.getElementById('consultationForm');
    
    alertBox.style.display = 'block';
    form.reset();

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 6000);
}