 /**
  * Academic Homepage - Main Script
  */
 
 (function () {
   'use strict';
 
   /* =========================================================
      PUBLICATION DATA
      ========================================================= */
   const publications = [
     {
       year: 2025,
       title: 'Title of Your Latest Paper',
       authors: 'Your Name, Coauthor A, Coauthor B',
       venue: 'Nature / Science / Conference Name, 2025',
       link: 'https://doi.org/...',
       pdf: 'assets/papers/paper1.pdf',
     },
     {
       year: 2024,
       title: 'Title of Another Paper',
       authors: 'Coauthor A, Your Name, Coauthor C',
       venue: 'Journal Name, Volume(Issue), Pages, 2024',
       link: 'https://doi.org/...',
     },
     {
       year: 2024,
       title: 'Third Paper Title Here',
       authors: 'Your Name, Coauthor D, Coauthor E',
       venue: 'Conference Proceedings, 2024',
       pdf: 'assets/papers/paper3.pdf',
     },
     {
       year: 2023,
       title: 'Earlier Work Title',
       authors: 'Your Name, Coauthor F',
       venue: 'Journal Name, 2023',
       link: 'https://doi.org/...',
     },
     {
       year: 2021,
       title: 'Early Work from Undergrad',
       authors: 'Your Name, Coauthor G, Coauthor H',
       venue: 'Conference Name, 2021',
       pdf: 'assets/papers/paper5.pdf',
     },
   ];
 
   /* =========================================================
      RENDER PUBLICATIONS
      ========================================================= */
   const pubList = document.getElementById('publications-list');
   let currentFilter = 'all';
 
   function renderPublications(filter) {
     if (!pubList) return;
 
     const filtered = filter === 'all'
       ? publications
       : filter === '2021'
         ? publications.filter(p => p.year <= 2021)
         : publications.filter(p => p.year === parseInt(filter));
 
     if (filtered.length === 0) {
       pubList.innerHTML =
         '<p style="color: var(--color-text-muted); text-align: center; padding: 40px 0;">'
         + 'No publications found for this year.</p>';
       return;
     }
 
     pubList.innerHTML = filtered.map(pub => {
       const links = [];
       if (pub.link) {
         links.push(
           `<a href="${pub.link}" target="_blank" rel="noopener" class="pub-link">`
           + `<i class="fa-solid fa-link"></i> DOI</a>`
         );
       }
       if (pub.pdf) {
         links.push(
           `<a href="${pub.pdf}" class="pub-link">`
           + `<i class="fa-solid fa-file-pdf"></i> PDF</a>`
         );
       }
 
       return `
         <div class="pub-item">
           <div class="pub-year-badge">${pub.year}</div>
           <div class="pub-info">
             <h3><a href="${pub.link || pub.pdf || '#'}" target="_blank" rel="noopener">${pub.title}</a></h3>
             <p class="pub-authors">${pub.authors}</p>
             <p class="pub-venue">${pub.venue}</p>
             ${links.length ? `<div class="pub-links">${links.join('')}</div>` : ''}
           </div>
         </div>
       `;
     }).join('');
   }
 
   /* ---------- Filter buttons ---------- */
   document.querySelectorAll('.pub-filter-btn').forEach(btn => {
     btn.addEventListener('click', function () {
       document.querySelectorAll('.pub-filter-btn').forEach(b => b.classList.remove('active'));
       this.classList.add('active');
       currentFilter = this.dataset.filter;
       renderPublications(currentFilter);
     });
   });
 
   // Initial render
   renderPublications('all');
 
   /* =========================================================
      NAVBAR - Scroll shadow
      ========================================================= */
   const navbar = document.getElementById('navbar');
 
   window.addEventListener('scroll', function () {
     navbar.classList.toggle('scrolled', window.scrollY > 60);
   }, { passive: true });
 
   /* =========================================================
      NAVBAR - Active section highlight
      ========================================================= */
   const sections = document.querySelectorAll('section[id]');
   const navLinks = document.querySelectorAll('.nav-link');
 
   function updateActiveLink() {
     let current = '';
     const scrollPos = window.scrollY + 100;
 
     sections.forEach(section => {
       const top = section.offsetTop;
       const height = section.offsetHeight;
       if (scrollPos >= top && scrollPos < top + height) {
         current = section.getAttribute('id');
       }
     });
 
     navLinks.forEach(link => {
       link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
     });
   }
 
   window.addEventListener('scroll', updateActiveLink, { passive: true });
   updateActiveLink();
 
   /* =========================================================
      NAVBAR - Mobile toggle
      ========================================================= */
   const navToggle = document.getElementById('nav-toggle');
   const navLinksList = document.getElementById('nav-links');
 
   navToggle.addEventListener('click', function () {
     this.classList.toggle('active');
     navLinksList.classList.toggle('open');
   });
 
   // Close mobile nav on link click
   document.querySelectorAll('.nav-link').forEach(link => {
     link.addEventListener('click', function () {
       navToggle.classList.remove('active');
       navLinksList.classList.remove('open');
     });
   });
 
   /* =========================================================
      SMOOTH SCROLL OFFSET (for fixed navbar)
      ========================================================= */
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function (e) {
       const target = document.querySelector(this.getAttribute('href'));
       if (!target) return;
       e.preventDefault();
       const offset = 72;
       const top = target.getBoundingClientRect().top + window.scrollY - offset;
       window.scrollTo({ top, behavior: 'smooth' });
     });
   });
 
 })();
