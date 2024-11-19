// function to toggle faq answers
function toggleFAQ(index) {
  const faqItems = document.querySelectorAll('.faq_item');
  const selectedFAQ = faqItems[index];
  selectedFAQ.classList.toggle('active');
}

// function to switch tabs
function showTab(index) {
  const contents = document.querySelectorAll('.tab_content');
  const tabs = document.querySelectorAll('.tab');

  contents.forEach((content) => content.classList.remove('active'));
  tabs.forEach((tab) => tab.classList.remove('active'));

  contents[index].classList.add('active');
  tabs[index].classList.add('active');
}

/* email validation */
const emailForm = document.getElementById('subscribeForm');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');
const errorIcon = document.getElementById('errorIcon');
const successMessage = document.getElementById('successMessage');
// Email validation pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!emailPattern.test(emailInput.value)) {
    emailInput.classList.add('error');
    errorMessage.style.display = 'block';
    errorIcon.style.display = 'block';
    successMessage.style.display = 'none';
  } else {
    emailInput.classList.remove('error');
    errorMessage.style.display = 'none';
    errorIcon.style.display = 'none';
    emailInput.value = '';
    successMessage.style.display = 'flex';
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 2000);
  }
});

// function to make browser logos rotate when they are in view
const browserLogos = document.querySelectorAll('.browser_logo');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('rotate'); 
    } else {
      entry.target.classList.remove('rotate');
    }
  });
  
});

browserLogos.forEach((logo) => observer.observe(logo));


// nav menu control
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("open-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const closeBtn = document.getElementById("close-menu-btn");
  const navLinks = document.querySelectorAll(".mob_nav_link");

  menuToggle.addEventListener("click", () => {
    mobileNav.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
});