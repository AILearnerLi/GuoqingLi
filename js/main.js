 /**
  * Academic Homepage - Main Script
  */
 
 (function () {
   'use strict';
 
   /* =========================================================
      PUBLICATION DATA
      ========================================================= */
   const scholarBase = 'https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=nneG3OwAAAAJ&citation_for_view=nneG3OwAAAAJ:';
   const publications = [
     { year: 2026, title: 'A Survey of the First TinyML@ICCAD Contest for Ventricular Arrhythmia Detection by Artificial Intelligence on Low-power Microprocessor', authors: '<strong>G Li</strong>, J Zhang, M Zhang, T Chen, J Yang', venue: 'ACM Transactions on Embedded Computing Systems, 25(4), 1–24, 2026', link: scholarBase + '7PzlFSSx8tAC' },
     { year: 2026, title: 'A 8–19-GHz Current-Reused Wideband LNA With Dual Transformer Feedback', authors: 'Z Xie, H Gong, <strong>G Li</strong>, T Chen, Z Cai, Z Wang', venue: 'IEEE International Symposium on Circuits and Systems (ISCAS), 2628–2632, 2026', link: scholarBase + 'ZeXyd9-uunAC' },
     { year: 2026, title: 'A Compact Wide-Band RF Energy Harvesting Front-End Based on an On-Chip IMN with 51.78% Peak PCE', authors: 'Z Xie, Y Zhou, <strong>G Li</strong>, T Chen, Z Cai, Z Wang', venue: 'IEEE International Symposium on Circuits and Systems (ISCAS), 3101–3105, 2026', link: scholarBase + 'L8Ckcad2t8MC' },
     { year: 2026, title: 'A Low-Power Self-reference Class-C VCO With Dual Feedback Loops', authors: 'Z Xie, H Gong, B Gu, C Yan, J Guo, L Liu, <strong>G Li</strong>, T Chen, Z Cai, Z Wang', venue: 'Microelectronics Journal, 107069, 2026', link: scholarBase + '4TOpqqG69KYC' },
     { year: 2025, title: 'Hardware-Friendly and Efficient Vision Transformer for Deployment on Low-Power Embedded Device', authors: 'Z Chen, M Hao, X Cao, J Zhang, C Shen, <strong>G Li</strong>, M Zhang', venue: 'Journal of Low Power Electronics and Applications, 16(1), Article 1, 2025', link: scholarBase + 'aqlVkmm33-oC' },
     { year: 2025, title: 'EFSD-YOLOv5s: Effective Fire and Smoke Detection Method Based on an Improved YOLOv5s Model', authors: 'C Wang, C Xu, N Li, <strong>G Li</strong>, M Liu, T Li', venue: '4th International Conference on Image Processing, Computer Vision and Machine Learning, 2025', link: scholarBase + 'mVmsd5A6BfQC' },
     { year: 2025, title: 'A Compact 2.45-/5.8-GHz Dual-Band RF Energy Harvesting Front-End With On-Chip IMN', authors: 'Z Xie, Y Zhou, <strong>G Li</strong>, T Chen, Z Cai, Z Wang', venue: 'IEEE Microwave and Wireless Technology Letters, 2025', link: scholarBase + 'qxL8FJ1GzNcC' },
     { year: 2025, title: 'Optimization of FPGA-Based Hardware Accelerator for SkyNet Neural Network', authors: 'Z Li, <strong>G Li</strong>, Z Suo, T Li, K Su, C Wang, A Dong, W Shan', venue: '2nd Symposium on Big Data, Neural Networks, and Deep Learning, 2025', link: scholarBase + 'M3ejUd6NZC8C' },
     { year: 2025, title: 'EdgeFTX: A 22 nm 3.6 mW Edge Attention-Free Transformer Accelerator with Non-Blocking Scheduling', authors: 'M Hao, R Li, Z Yan, T Li, <strong>G Li</strong>, K Yang, C Li, W Shan', venue: 'IEEE Asian Solid-State Circuits Conference (A-SSCC), 1–3, 2025', link: scholarBase + '9ZlFYXVOiuMC' },
     { year: 2025, title: 'RSizing: Robust Bayesian Optimization for Analog Circuit Sizing Under Process Variations', authors: 'J Tu, Y Li, P Xu, T Li, <strong>G Li</strong>, Z Xie, B Yu, T Chen', venue: 'IEEE/ACM International Conference on Computer-Aided Design (ICCAD), 1–8, 2025', link: scholarBase + '4DMP91E08xMC' },
     { year: 2025, title: 'A Three-Level Inverting Buck Converter with 5μs Response Time and 20mV Output Ripple for Micro-LED Displays', authors: 'G Liu, W Dong, R Li, <strong>G Li</strong>, J Jiang, X Liu', venue: 'IEEE Asia Pacific Conference on Circuits and Systems (APCCAS), 1–5, 2025', link: scholarBase + 'dhFuZR0502QC' },
     { year: 2025, title: 'A 5V-to-1V Hybrid Buck Converter with Asynchronized Switched Inductors and Hybrid Controls for Fast Load Transient', authors: 'H Deng, M Yu, R Li, C Hu, <strong>G Li</strong>, X Liu, J Jiang', venue: 'IEEE Asia Pacific Conference on Circuits and Systems (APCCAS), 1–5, 2025', link: scholarBase + 'QIV2ME_5wuYC' },
     { year: 2025, title: 'Wavelength Calibration Technology of Overlapping Spectra in MRR-WDM Transmission Systems', authors: 'K Zhu, Z Du, T Li, F Zhang, C Wang, K Su, <strong>G Li</strong>, X Xi, F Guo, X Yuan', venue: 'Optics Communications, 132484, 2025', link: scholarBase + 'Wp0gIr-vW9MC' },
     { year: 2025, title: 'Fabrication of GaN Nanostructures by Nanosphere Lithography and Their Enhanced Water-Splitting Property', authors: 'T Li, F Guo, C Cheng, J Yang, T Chen, K Su, C Wang, K Liu, X Zou, K Zhu, et al.', venue: 'Crystal Growth & Design, 25(18), 7384–7395, 2025', link: scholarBase + 'IWHjjKOFINEC' },
     { year: 2025, title: 'A Trigger-Free Dual-Ramp Controller for a Three-Level Buck-Boost Converter Achieving Fast Transient Response and Seamless Mode Transition', authors: 'C Ding, J Ruan, R Li, K Yuan, J Jiang, Y Wu, <strong>G Li</strong>, K N Leung, X Liu', venue: 'IEEE Transactions on Power Electronics, 40(11), 16111–16115, 2025', link: scholarBase + '_kc_bZDykSQC' },
     { year: 2025, title: 'PCSViT: Efficient and Hardware Friendly Pyramid Vision Transformer with Channel and Spatial Self-Attentions', authors: 'X Zou, Y Peng, <strong>G Li</strong>, X Cao', venue: 'Neurocomputing, 636, 129987, 2025', link: scholarBase + 'ULOm3_A8WrAC' },
     { year: 2025, title: 'A Single-Stage Four-Phase Hybrid Boost Converter with 11-to-20 VCRs for LiDAR Driver Applications', authors: 'C Hu, W Song, S Du, X Liu, J Jiang', venue: 'IEEE Transactions on Circuits and Systems I: Regular Papers, 72(11), 6458–6468, 2025', link: scholarBase + 'YOwf2qJgpHMC' },
     { year: 2025, title: 'Algorithm-Hardware Co-Design for Accelerating Depthwise Separable CNNs', authors: '<strong>G Li</strong>, R Li, T Li, T Chen, M Zhang, H Corporaal', venue: 'ACM Transactions on Design Automation of Electronic Systems, 30(2), 1–22, 2025', link: scholarBase + 'Zph67rFs4hoC' },
     { year: 2025, title: 'SFP: Similarity-Based Filter Pruning for Deep Neural Networks', authors: '<strong>G Li</strong>, R Li, T Li, C Shen, X Zou, J Wang, C Wang, N Li', venue: 'Information Sciences, 689, 121418, 2025', link: scholarBase + 'KlAtU1dfN6UC' },
     { year: 2024, title: 'A Comprehensive Analysis of DAC-SDC FPGA Low Power Object Detection Challenge', authors: 'J Zhang, <strong>G Li</strong>, M Zhang, X Cao, Y Zhang, X Li, Z Chen, J Yang', venue: 'Science China Information Sciences, 67(8), 182401, 2024', link: scholarBase + 'kNdYIx-mwKoC' },
     { year: 2024, title: 'An Analysis of TinyML@ICCAD for Implementing AI on Low-Power Microprocessor', authors: '<strong>G Li</strong>, J Zhang, M Zhang, T Li, T Chen, J Yang', venue: 'Science China Information Sciences, 67(4), 149402, 2024', link: scholarBase + 'MXK_kJrjxJIC' },
     { year: 2024, title: 'Fast Constraints Tuning via Transfer Learning and Multiobjective Optimization', authors: 'M Zhang, Z Zhang, Y Niu, J Li, Z Chen, <strong>G Li</strong>, Y Ha, T Chen', venue: 'IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems, 2024', link: scholarBase + '3fE2CSJIrl8C' },
     { year: 2023, title: 'Uint-Packing: Multiply Your DNN Accelerator Performance via Unsigned Integer DSP Packing', authors: 'J Zhang, M Zhang, X Cao, <strong>G Li</strong>', venue: '60th ACM/IEEE Design Automation Conference (DAC), 1–6, 2023', link: scholarBase + '8k81kl-MbHgC' },
     { year: 2022, title: 'OGCNet: Overlapped Group Convolution for Deep Convolutional Neural Networks', authors: '<strong>G Li</strong>, M Zhang, J Zhang, Q Zhang', venue: 'Knowledge-Based Systems, 253, 109571, 2022', link: scholarBase + '_FxGoFyzp5QC' },
     { year: 2022, title: 'Efficient Channel Expansion and Pyramid Depthwise-Pointwise-Depthwise Neural Networks', authors: '<strong>G Li</strong>, M Zhang, Y Zhang, R Wu, D Weng', venue: 'Applied Intelligence, 52(11), 12860–12872, 2022', link: scholarBase + 'eQOLeE2rZwMC' },
     { year: 2022, title: 'Efficient Depthwise Separable Convolution Accelerator for Classification and UAV Object Detection', authors: '<strong>G Li</strong>, J Zhang, M Zhang, R Wu, X Cao, W Liu', venue: 'Neurocomputing, 490, 1–16, 2022', link: scholarBase + 'qjMakFHDy7sC' },
     { year: 2022, title: 'An Efficient FPGA Implementation for Real-Time and Low-Power UAV Object Detection', authors: '<strong>G Li</strong>, J Zhang, M Zhang, H Corporaal', venue: 'IEEE International Symposium on Circuits and Systems (ISCAS), 1387–1391, 2022', link: scholarBase + 'UebtZRa9Y70C' },
     { year: 2022, title: 'SCWC: Structured Channel Weight Sharing to Compress Convolutional Neural Networks', authors: '<strong>G Li</strong>, M Zhang, J Wang, D Weng, H Corporaal', venue: 'Information Sciences, 587, 82–96, 2022', link: scholarBase + 'IjCSPb-OGe4C' },
     { year: 2022, title: 'Efficient Binary 3D Convolutional Neural Network and Hardware Accelerator', authors: '<strong>G Li</strong>, M Zhang, Q Zhang, Z Lin', venue: 'Journal of Real-Time Image Processing, 19(1), 61–71, 2022', link: scholarBase + 'Tyk-4Ss8FVUC' },
     { year: 2021, title: 'Efficient Hardware Optimization Strategies for Deep Neural Networks Acceleration Chip', authors: 'M Zhang, J Zhang, <strong>G Li</strong>, R Wu, X Zeng', venue: 'Journal of Electronics & Information Technology, 43(6), 1510–1517, 2021', link: scholarBase + 'hqOjcs7Dif8C' },
     { year: 2021, title: 'An Efficient Sharing Grouped Convolution via Bayesian Learning', authors: 'T Chen, B Duan, Q Sun, M Zhang, <strong>G Li</strong>, H Geng, Q Zhang, B Yu', venue: 'IEEE Transactions on Neural Networks and Learning Systems, 33(12), 7367–7379, 2021', link: scholarBase + 'WF5omc3nYNoC' },
     { year: 2021, title: 'Efficient Densely Connected Convolutional Neural Networks', authors: '<strong>G Li</strong>, M Zhang, J Li, F Lv, G Tong', venue: 'Pattern Recognition, 109, 107610, 2021', link: scholarBase + 'YsMSGLbcyi4C' },
     { year: 2021, title: 'Diagonal-Kernel Convolutional Neural Networks for Image Classification', authors: '<strong>G Li</strong>, X Shen, J Li, J Wang', venue: 'Digital Signal Processing, 108, 102898, 2021', link: scholarBase + 'Y0pCki6q_DkC' },
     { year: 2019, title: 'PSDNet and DPDNet: Efficient Channel Expansion, Depthwise-Pointwise-Depthwise Inverted Bottleneck Block', authors: '<strong>G Li</strong>, M Zhang, Q Zhang, Z Chen, W Liu, J Li, X Shen, J Li, Z Zhu, C Yuen', venue: 'arXiv preprint arXiv:1909.01026, 2019', link: scholarBase + '5nxA0vEk-isC' },
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
       : filter === 'older'
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
           + `<i class="fa-brands fa-google-scholar"></i> Scholar</a>`
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
