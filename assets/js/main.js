// Page Navigation Function
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to clicked nav item
    event.target.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile navbar if open
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}

// Comment Indicator Toggle (for development purposes)
function toggleComments() {
    document.body.classList.toggle('show-comments');
}

// Add smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Add a developer toggle for comment indicators (press 'C' key)
document.addEventListener('keydown', function (e) {
    if (e.key === 'c' || e.key === 'C') {
        if (e.ctrlKey) {
            toggleComments();
        }
    }
});
