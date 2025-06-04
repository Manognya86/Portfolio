import config from './config.js';

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById('loader');
  let scene, camera, renderer, neuralMaterial;
  let nodes = [];

  // ========== Dependency Check ==========
  const checkDependencies = () => {
    if (!window.THREE || !window.tsParticles) {
      loader.innerHTML = `
        <div class="error">
          <h2>Missing Libraries</h2>
          <p>Please check internet connection or disable ad blockers.</p>
          <button onclick="window.location.reload()">Refresh</button>
        </div>`;
      return false;
    }
    return true;
  };

  if (!checkDependencies()) return;

  // ========== Theme System ==========
  const themeToggle = document.getElementById("theme-toggle");

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.toggle("dark-theme", savedTheme === "dark");

    const neon = savedTheme === "dark" ? '#00f3ff' : '#1a73e8';
    document.documentElement.style.setProperty('--neon-blue', neon);
    themeToggle.innerHTML = savedTheme === "dark"
      ? '<i class="fas fa-sun"></i> Light Mode'
      : '<i class="fas fa-moon"></i> Dark Mode';

    if (neuralMaterial) {
      neuralMaterial.color.set(savedTheme === "dark" ? 0x00ff00 : 0x1a73e8);
    }

    window.tsParticles.load("particles-js", getParticlesConfig(savedTheme));
  };

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    initializeTheme();
  });

  // ========== 3D Neural Network ==========
  const initializeNeuralNetwork = () => {
    const container = document.getElementById('neural-network');
    container.innerHTML = '';

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const nodeGeo = new THREE.IcosahedronGeometry(0.1, 2);
    const nodeMat = new THREE.MeshPhongMaterial({ color: 0x00ff00, shininess: 100 });
    neuralMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.3 });

    const light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);

    for (let i = 0; i < 100; i++) {
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
      nodes.push(node);
      scene.add(node);
    }

    camera.position.z = 15;
  };

  const updateConnections = () => {
    if (!scene) return;
    scene.children.filter(child => child.type === 'Line').forEach(line => scene.remove(line));
    nodes.forEach((node, i) => {
      if (i % 2 === 0 && i < nodes.length - 2) {
        const geo = new THREE.BufferGeometry().setFromPoints([node.position, nodes[i + 2].position]);
        scene.add(new THREE.Line(geo, neuralMaterial));
      }
    });
  };

  const animate = () => {
    requestAnimationFrame(animate);
    if (!renderer || !scene || !camera) return;

    nodes.forEach(node => {
      node.position.x += Math.sin(Date.now() * 0.001 + node.position.y) * 0.002;
      node.position.y += Math.cos(Date.now() * 0.001 + node.position.z) * 0.002;
      node.position.z += Math.sin(Date.now() * 0.001 + node.position.x) * 0.002;
    });

    updateConnections();
    renderer.render(scene, camera);
  };

  // ========== Particle Config ==========
  const getParticlesConfig = (theme) => ({
    particles: {
      number: { value: 80 },
      color: { value: theme === "dark" ? "#00f3ff" : "#1a73e8" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 2 },
      move: { enable: true, speed: 0.5 },
      links: {
        enable: true,
        distance: 150,
        color: theme === "dark" ? "#00f3ff" : "#1a73e8",
        opacity: 0.3,
        width: 1
      }
    }
  });

  // ========== Populate Content ==========
  const populateSection = (selector, items, templateFn) => {
    const container = document.querySelector(selector);
    if (!container || !items?.length) return;
    container.innerHTML = items.map(templateFn).join('');
  };

  const populateSkills = () => populateSection('.skills-grid', config.skills, skill => `
    <div class="skill-card" data-aos="zoom-in">
        <img src="${skill.logo}" alt="${skill.name}" class="skill-logo">
        <span class="skill-name">${skill.name}</span>
    </div>
  `);

const populateExperience = () => populateSection('#experience .timeline', config.experience, (exp, i) => `
    <div class="timeline-item ${i % 2 === 0 ? 'left' : 'right'}" data-aos="fade-up">
      <div class="timeline-node glass-card">
        <div class="company-header">
          ${exp.logo ? `
          <a href="${exp.website || '#'}" 
             class="company-link" 
             target="_blank" 
             rel="noopener noreferrer"
             aria-label="Visit ${exp.company} website">
            <img src="${exp.logo}" 
                 alt="${exp.company} logo" 
                 class="company-logo">
          </a>` : ''}
          <div class="company-info">
            <h3>${exp.position}</h3>
            <h4>${exp.company}</h4>
          </div>
        </div>
        <p class="duration">${exp.timeline}</p>
        <ul>${exp.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
      </div>
    </div>
`);
  const populateProjects = () => populateSection('.project-grid', config.projects, project => `
    <div class="project-card glass-card" data-aos="flip-up">
      <h3>${project.name}</h3>
      <div class="tech-stack">${project.tech.map(t => `<span class="badge">${t}</span>`).join('')}</div>
      <p>${project.description}</p>
      <div class="metrics">${project.metrics.map(m => `<span class="metric">${m}</span>`).join('')}</div>
      <div class="project-actions">
        ${project.github ? `<a href="${project.github}" class="btn" target="_blank"><i class="fab fa-github"></i> Code</a>` : ''}
        ${project.demo ? `<a href="${project.demo}" class="btn" target="_blank"><i class="fas fa-rocket"></i> Demo</a>` : ''}
      </div>
    </div>
  `);

  const populateEducation = () => populateSection('#education-timeline', config.education, edu => `
    <div class="edu-card" data-aos="fade-up">
        <div class="edu-header">
            <img src="${edu.logo}" alt="${edu.institution}" class="institution-logo">
            <div class="edu-details">
                <h3 class="edu-degree">${edu.degree}</h3>
                <h4 class="institution-name">${edu.institution}</h4>
            </div>
        </div>
        <div class="edu-meta">
            <div class="timeline">
                <i class="fas fa-calendar-alt"></i>
                <span>${edu.timeline.replace('–', '-')}</span>
            </div>
            <span class="gpa-text">${edu.gpa}</span>
        </div>
    </div>
`);

  const populateLeadership = () => populateSection('.leadership-grid', config.leadership, role => `
    <div class="glass-card" data-aos="zoom-in">
      <h3>${role.title}</h3>
      <p class="duration">${role.timeline}</p>
      <ul>${role.achievements.map(a => `<li>${a}</li>`).join('')}</ul>
    </div>
  `);

  const populateCertifications = () => populateSection('.cert-grid', config.certifications, cert => `
    <div class="glass-card" data-aos="flip-up">
      <img src="${cert.badge}" alt="${cert.name}" class="cert-badge">
      <h3>${cert.name}</h3>
      <div class="cert-details">
        <p class="issuer">${cert.issuer}</p>
        <p class="date"><i class="fas fa-calendar-alt"></i> ${cert.date}</p>
      </div>
    </div>
  `);

  const populatePublications = () => populateSection('.publication-grid', config.publications, pub => `
    <div class="glass-card" data-aos="fade-up">
      <h3>${pub.title}</h3>
      <p class="meta"><i class="fas fa-book"></i> ${pub.journal} • ${pub.date}</p>
      ${pub.link ? `<a href="${pub.link}" class="btn" target="_blank">
        <i class="fas fa-external-link-alt"></i> 
        ${pub.journal.includes('YouTube') ? 'See Video' : 'Read Paper'}
      </a>` : ''}
    </div>
  `);

  const populateCommunityImpact = () => populateSection('.extracurricular-grid', config.extracurriculars, item => `
    <div class="glass-card" data-aos="zoom-in">
      <h3><i class="fas ${item.icon}"></i> ${item.category}</h3>
      <ul>${item.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
  `);



  const populateEvents = () => populateSection('.event-grid', config.events, event => `
    <div class="glass-card" data-aos="zoom-in">
      <h3>${event.name}</h3>
      <p class="meta">${event.date} • ${event.role}</p>
      <ul class="event-metrics">${event.metrics.map(m => `<li>${m}</li>`).join('')}</ul>
    </div>
  `);

  // ========== Interactivity ==========
  const initializeInteractions = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.transform = `perspective(1000px) rotateX(${(y - rect.height / 2) / 10}deg) rotateY(${-(x - rect.width / 2) / 10}deg) scale(1.05)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'none';
      });
    });

    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  // ========== Contact Form ==========
  const initializeForm = () => {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      const originalText = button.innerHTML;

      try {
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        button.disabled = true;

        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.reset();
          alert('Message sent successfully!');
        } else {
          alert('Error submitting form. Please try again.');
        }
      } catch {
        alert('Something went wrong. Try again later.');
      } finally {
        button.innerHTML = originalText;
        button.disabled = false;
      }
    });
  };

  // ========== Final Setup ==========
  const finalizeSetup = () => {
    populateEducation();
    populateSkills();
    populateExperience();
    populateProjects();
    populateCertifications();
    populatePublications();
    populateLeadership();
    populateCommunityImpact();
    populateEvents();
    animate();
    initializeInteractions();
    initializeForm();

    // Updated AOS initialization
    AOS.init({ 
      duration: 800, 
      once: false,  // Allow re-animation on scroll up
      mirror: true, // Enable mirror animation
      anchorPlacement: 'top-bottom'
    });

    window.tsParticles.load("particles-js", getParticlesConfig(localStorage.getItem("theme") || "dark"));

    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => (loader.style.display = 'none'), 1000);
    }, 1500);
  };

  // ========== Startup ==========
  initializeTheme();
  initializeNeuralNetwork();
  finalizeSetup();

  window.addEventListener('resize', () => {
    if (camera && renderer) {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(console.error);
  }
});