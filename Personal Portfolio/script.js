// script.js — basic interactions: nav toggle, smooth scroll, theme toggle, contact form handling
document.addEventListener('DOMContentLoaded', function () {
	// Year in footer
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	// Nav toggle for mobile
	const navToggle = document.querySelector('.nav-toggle');
	const navList = document.getElementById('nav-list');
	if (navToggle && navList) {
		navToggle.addEventListener('click', function () {
			const expanded = navToggle.getAttribute('aria-expanded') === 'true';
			navToggle.setAttribute('aria-expanded', String(!expanded));
			navList.classList.toggle('show');
		});

		// Close menu when a link is clicked
		navList.addEventListener('click', function (e) {
			if (e.target.tagName === 'A') {
				navList.classList.remove('show');
				navToggle.setAttribute('aria-expanded', 'false');
			}
		});
	}

	// Smooth scrolling for internal links
	document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
		anchor.addEventListener('click', function (e) {
			const href = anchor.getAttribute('href');
			if (href.length > 1 && href.startsWith('#')) {
				const target = document.querySelector(href);
				if (target) {
					e.preventDefault();
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		});
	});

	// Theme toggle with localStorage
	const themeToggle = document.querySelector('.theme-toggle');
	const root = document.documentElement;
	const stored = localStorage.getItem('theme');
	if (stored === 'dark') root.setAttribute('data-theme', 'dark');

	if (themeToggle) {
		themeToggle.addEventListener('click', function () {
			const isDark = root.getAttribute('data-theme') === 'dark';
			if (isDark) {
				root.removeAttribute('data-theme');
				localStorage.setItem('theme', 'light');
			} else {
				root.setAttribute('data-theme', 'dark');
				localStorage.setItem('theme', 'dark');
			}
		});
	}

	// Contact form handling (non-functional server-side) — just validate and show a friendly message
	const contactForm = document.getElementById('contact-form');
	if (contactForm) {
		contactForm.addEventListener('submit', function (e) {
			e.preventDefault();
			const formData = new FormData(contactForm);
			const name = formData.get('name') || '';
			const email = formData.get('email') || '';
			const message = formData.get('message') || '';
			if (!name || !email || !message) {
				alert('Please fill out all fields before sending.');
				return;
			}
			// In a real site you'd send this to a server or service here.
			contactForm.reset();
			alert('Thanks! Your message has been noted (demo form).');
		});
	}
});
