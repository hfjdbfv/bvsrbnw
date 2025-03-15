let currentPage = 1;

function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle i');
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.classList.replace('fa-sun', 'fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    }
}

function showPage(page) {
    document.querySelectorAll('.page-left, .page-right').forEach(p => p.classList.remove('active'));
    document.getElementById(`page${page}`).classList.add('active');
    document.getElementById(`page${page + 1}`).classList.add('active');
}

function nextPages() {
    const nextPage = currentPage + 1;
    window.location.href = `page${nextPage}.html`;
}

function prevPages() {
    const prevPage = currentPage - 1;
    if (prevPage >= 2) {
        window.location.href = `page${prevPage}.html`;
    } else {
        window.location.href = 'index.html';
    }
}

showPage(currentPage);
