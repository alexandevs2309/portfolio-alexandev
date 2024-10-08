const toggleButton = document.getElementById('toggle-theme');
const body = document.body;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    // Alternar íconos
    if (body.classList.contains('dark')) {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    }
});



