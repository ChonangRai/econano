// ===== Navigation & Scroll ===== 
(function () {
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  // Navbar shadow on scroll
  const onScroll = () => {
    if (window.scrollY > 8) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Close menu on link click
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        if (navToggle) {
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  // Set active nav link
  function setActiveNav() {
    const currentPath = window.location.pathname;
    const navItems = navLinks?.querySelectorAll('a');
    
    navItems?.forEach((link) => {
      link.classList.remove('is-active');
      const href = link.getAttribute('href');
      if (currentPath.includes(href.replace('.html', '')) || 
          (href === 'index.html' && currentPath.endsWith('/'))) {
        link.classList.add('is-active');
      }
    });
  }
  setActiveNav();
  window.addEventListener('load', setActiveNav);
})();

// ===== Intersection Observer for Reveals ===== 
(function () {
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }
})();

// ===== Hero Canvas Background =====
(function () {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const particles = [];
  const count = 30;
  let width = 0;
  let height = 0;
  const devicePixelRatio = window.devicePixelRatio || 1;

  function resizeCanvas() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    particles.length = 0;
    for (let i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: 1.8 + Math.random() * 2.5,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(255,255,255,0.22)';
    ctx.lineWidth = 1;

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.24)';
      ctx.fill();

      for (let j = index + 1; j < particles.length; j += 1) {
        const other = particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.globalAlpha = 1 - dist / 110;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(other.x, other.y);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    });

    requestAnimationFrame(draw);
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  requestAnimationFrame(draw);
})();

// ===== Form Validation ===== 
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const btn = document.getElementById('formBtn');
  const inputs = form.querySelectorAll('input, textarea');

  // Simple validation
  function validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    let isValid = true;
    let errorMsg = '';

    if (!value) {
      isValid = false;
      errorMsg = 'This field is required';
    } else if (type === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMsg = 'Please enter a valid email';
      }
    }

    if (!isValid) {
      field.classList.add('error');
      const errorElement = field.parentElement.querySelector('.error-msg');
      if (errorElement) {
        errorElement.textContent = errorMsg;
      }
    } else {
      field.classList.remove('error');
    }

    return isValid;
  }

  // Real-time validation
  inputs.forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('change', () => validateField(field));
  });

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all fields
    let allValid = true;
    inputs.forEach((field) => {
      if (!validateField(field)) {
        allValid = false;
      }
    });

    if (allValid) {
      const original = btn.textContent;
      btn.textContent = 'Message sent ✓';
      btn.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        form.reset();
        inputs.forEach((field) => field.classList.remove('error'));
        btn.textContent = original;
        btn.disabled = false;
      }, 2000);
    }
  });
})();
