<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gallery – AlumniArc</title>
    <link rel="stylesheet" href="gallery.css" />
  </head>
  <body>
    <div class="page">
      <!-- NAVBAR -->
      <nav class="navbar">
        <img src="logo.png" alt="AlumniArc Logo" class="nav-logo" />
        <button class="menu-btn" onclick="toggleMenu()">☰</button>
        <div class="nav-menu hidden" id="nav-menu">
          <a href="index.html">Home</a>
          <a href="index.html#about">About</a>
          <a href="mentors.html">Mentors</a>
          <a href="eventscalendar.html">Events</a>
          <a href="gallery.html" class="active">Gallery</a>
          <a href="index.html#jobs">Jobs</a>
          <a href="login.html">Login</a>
          <a href="signup.html" class="join-link">Join the Community</a>
        </div>
      </nav>

      <!-- GALLERY HERO -->
      <header class="gallery-hero">
        <div class="gallery-hero-overlay"></div>
        <div class="gallery-hero-content">
          <span class="hero-label">OUR GALLERY</span>
          <h1>Moments That Define Us</h1>
          <p>Celebrating sisterhood, growth, and innovation — one snapshot at a time.</p>
        </div>
      </header>

      <!-- ALBUM CATEGORIES -->
      <section class="section">
        <h2 class="section-title">Browse Albums</h2>
        <p class="section-sub">Explore our community through curated photo collections</p>

        <div class="albums-grid">
          <!-- Cohort Photos -->
          <a href="#cohort" class="album-card" onclick="showAlbum('cohort', this); return false;">
            <div class="album-cover cohort-cover">
              <div class="album-overlay">
                <span class="album-count">📷 12 Photos</span>
              </div>
            </div>
            <div class="album-info">
              <h3>Cohort Photos</h3>
              <p>Class portraits and graduation memories from every Code Queen cohort.</p>
            </div>
          </a>

          <!-- Events & Workshops -->
          <a href="#events" class="album-card" onclick="showAlbum('events', this); return false;">
            <div class="album-cover events-cover">
              <div class="album-overlay">
                <span class="album-count">📷 18 Photos</span>
              </div>
            </div>
            <div class="album-info">
              <h3>Events &amp; Workshops</h3>
              <p>Highlights from tech workshops, hackathons, seminars and community meetups.</p>
            </div>
          </a>

          <!-- Mentorship Moments -->
          <a href="#mentorship" class="album-card" onclick="showAlbum('mentorship', this); return false;">
            <div class="album-cover mentorship-cover">
              <div class="album-overlay">
                <span class="album-count">📷 9 Photos</span>
              </div>
            </div>
            <div class="album-info">
              <h3>Mentorship Moments</h3>
              <p>Pairing sessions, advice circles, and one-on-one growth conversations.</p>
            </div>
          </a>
        </div>
      </section>

      <!-- EXPANDED ALBUM VIEW (hidden by default) -->
      <section class="section album-view" id="album-view" style="display: none;">
        <button class="back-btn" onclick="closeAlbum()">← Back to Albums</button>
        <h2 class="section-title" id="album-title">Album</h2>

        <div class="photo-grid" id="photo-grid">
          
        </div>
      </section>

      <!-- LIGHTBOX -->
      <div class="lightbox" id="lightbox" onclick="closeLightbox(event)">
        <button class="lightbox-close" onclick="closeLightbox(event)">✕</button>
        <button class="lightbox-prev" onclick="prevPhoto(event)">‹</button>
        <img src="" alt="Gallery photo" id="lightbox-img" />
        <button class="lightbox-next" onclick="nextPhoto(event)">›</button>
        <div class="lightbox-caption" id="lightbox-caption"></div>
      </div>

      <!-- CALL TO ACTION -->
      <section class="section cta-section">
        <h2>Want to share your photos?</h2>
        <p>If you're a Code Queen alumna, submit your best moments to be featured in our gallery.</p>
        <a href="signup.html" class="btn-primary">Join &amp; Submit Photos</a>
      </section>

      <!-- FOOTER -->
      <footer class="footer">
        <div class="footer-inner">
          <div class="footer-col">
            <img src="logo.png" alt="AlumniArc Logo" class="footer-logo" />
            <p class="footer-tagline">Empowering women in tech, one cohort at a time.</p>
            <div class="social-links">
              <a href="#" class="social-btn" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z"/></svg>
              </a>
              <a href="#" class="social-btn" title="X / Twitter">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2h3.27l-7.14 8.16L23 22h-6.58l-5.15-6.74L5.15 22H1.88l7.63-8.72L1 2h6.75l4.66 6.17L18.24 2zm-1.15 18h1.81L6.99 3.84H5.06L17.09 20z"/></svg>
              </a>
              <a href="#" class="social-btn" title="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.86 9.86 0 0 1-1.51-5.27c0-5.45 4.44-9.88 9.9-9.88a9.84 9.84 0 0 1 7 2.9 9.81 9.81 0 0 1 2.89 6.99c0 5.45-4.44 9.9-9.9 9.9zm8.41-18.2A11.82 11.82 0 0 0 12.04 0C5.4 0 .02 5.38.02 12a11.93 11.93 0 0 0 1.6 6L0 24l6.18-1.62A11.94 11.94 0 0 0 12.05 24c6.63 0 12.01-5.38 12.01-12 0-3.2-1.25-6.22-3.6-8.4z"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-col">
            <div class="footer-heading">Quick Links</div>
            <a href="index.html">Home</a>
            <a href="index.html#about">About</a>
            <a href="mentors.html">Mentors</a>
            <a href="gallery.html">Gallery</a>
            <a href="login.html">Login</a>
            <a href="signup.html">Sign Up</a>
          </div>
          <div class="footer-col">
            <div class="footer-heading">Contact</div>
            <div class="footer-item">✉️ hello@alumniarc.edu</div>
            <div class="footer-item">📞 +256 70 012-3456</div>
            <div class="footer-item">📍 National ICT Hub, UG</div>
          </div>
        </div>
        <div class="footer-bottom">© 2026 AlumniArc · Code Queen · Educating the Children</div>
      </footer>
    </div>

    <script>
      /* NAV TOGGLE */
      function toggleMenu() {
        document.getElementById('nav-menu').classList.toggle('hidden');
      }
      document.addEventListener('click', function(e) {
        const menu = document.getElementById('nav-menu');
        const btn = document.querySelector('.menu-btn');
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
          menu.classList.add('hidden');
        }
      });

      
      const albums = {
        cohort: {
          title: 'Cohort Photos',
          cover: 'img.02.jpg', 
          photos: [
            { src: 'img.02.jpg', caption: 'Cohort 1 — The Pioneers (2019)' },
            { src: 'gallery/cohort-2.jpg', caption: 'Cohort 2 — Rising Stars (2020)' },
            { src: 'gallery/cohort-3.jpg', caption: 'Cohort 3 — Innovators (2021)' },
            { src: 'gallery/cohort-4.jpg', caption: 'Cohort 4 — Trailblazers (2022)' },
            { src: 'gallery/cohort-5.jpg', caption: 'Cohort 5 — Visionaries (2023)' },
            { src: 'gallery/cohort-6.jpg', caption: 'Cohort 6 — The Builders (2024)' },
            { src: 'gallery/cohort-grad-1.jpg', caption: 'Graduation Day — Cohort 3' },
            { src: 'gallery/cohort-grad-2.jpg', caption: 'Graduation Day — Cohort 5' },
            { src: 'gallery/cohort-group-1.jpg', caption: 'All-Cohorts Reunion 2023' },
            { src: 'gallery/cohort-group-2.jpg', caption: 'Code Queens Group Portrait' },
            { src: 'gallery/cohort-team-1.jpg', caption: 'Team Building Day' },
            { src: 'gallery/cohort-team-2.jpg', caption: 'Orientation Week Highlights' },
          ]
        },
        events: {
          title: 'Events & Workshops',
          cover: 'mentor.jpg.jpeg',
          photos: [
            { src: 'mentors.jpg.jpeg', caption: 'Annual Hackathon 2024' },
            { src: 'gallery/event-hackathon-2.jpg', caption: 'Hackathon Presentations' },
            { src: 'gallery/event-workshop-1.jpg', caption: 'UI/UX Design Workshop' },
            { src: 'gallery/event-workshop-2.jpg', caption: 'Python Bootcamp' },
            { src: 'gallery/event-seminar-1.jpg', caption: 'Women in Tech Seminar' },
            { src: 'gallery/event-seminar-2.jpg', caption: 'Career Panel Discussion' },
            { src: 'gallery/event-meetup-1.jpg', caption: 'Monthly Alumni Meetup' },
            { src: 'gallery/event-meetup-2.jpg', caption: 'Networking Evening' },
            { src: 'gallery/event-conference-1.jpg', caption: 'Tech Conference 2024' },
            { src: 'gallery/event-conference-2.jpg', caption: 'Innovation Summit' },
            { src: 'gallery/event-social-1.jpg', caption: 'End-of-Year Celebration' },
            { src: 'gallery/event-social-2.jpg', caption: 'Community Dinner' },
            { src: 'gallery/event-outreach-1.jpg', caption: 'School Outreach Program' },
            { src: 'gallery/event-outreach-2.jpg', caption: 'Girls in ICT Day' },
            { src: 'gallery/event-award-1.jpg', caption: 'Awards Ceremony 2024' },
            { src: 'gallery/event-award-2.jpg', caption: 'Best Innovation Award' },
            { src: 'gallery/event-collab-1.jpg', caption: 'Partner Collaboration Day' },
            { src: 'gallery/event-collab-2.jpg', caption: 'Cross-Cohort Project Showcase' },
          ]
        },
        mentorship: {
          title: 'Mentorship Moments',
          cover: 'mentor.jpg.jpeg',
          photos: [
            { src: 'gallery/mentor-session-1.jpg', caption: 'One-on-One Mentoring' },
            { src: 'gallery/mentor-session-2.jpg', caption: 'Career Guidance Session' },
            { src: 'gallery/mentor-group-1.jpg', caption: 'Group Mentorship Circle' },
            { src: 'gallery/mentor-group-2.jpg', caption: 'Advice & Feedback Round' },
            { src: 'gallery/mentor-pairing-1.jpg', caption: 'Mentor-Mentee Pairing Day' },
            { src: 'gallery/mentor-pairing-2.jpg', caption: 'Welcome Session for New Pairs' },
            { src: 'gallery/mentor-chat-1.jpg', caption: 'Fireside Chat with Industry Leaders' },
            { src: 'gallery/mentor-chat-2.jpg', caption: 'Ask Me Anything Panel' },
            { src: 'gallery/mentor-celebration.jpg', caption: 'Celebrating Mentorship Milestones' },
          ]
        }
      };

      let currentAlbum = [];
      let currentIndex = 0;

      function showAlbum(key) {
        const album = albums[key];
        if (!album) return;

        document.getElementById('album-title').textContent = album.title;
        const grid = document.getElementById('photo-grid');
        grid.innerHTML = '';

        album.photos.forEach((photo, i) => {
          const div = document.createElement('div');
          div.className = 'photo-card';
          div.innerHTML = `
            <div class="photo-placeholder" onclick="openLightbox('${key}', ${i})">
              <div class="placeholder-icon">📷</div>
              <div class="placeholder-label">${photo.caption}</div>
            </div>
          `;
          grid.appendChild(div);
        });

        document.getElementById('album-view').style.display = 'block';
        document.getElementById('album-view').scrollIntoView({ behavior: 'smooth' });
      }

      function closeAlbum() {
        document.getElementById('album-view').style.display = 'none';
        document.querySelector('.albums-grid').scrollIntoView({ behavior: 'smooth' });
      }

      function openLightbox(albumKey, index) {
        currentAlbum = albums[albumKey].photos;
        currentIndex = index;
        updateLightbox();
        document.getElementById('lightbox').classList.add('active');
        document.body.style.overflow = 'hidden';
      }

      function closeLightbox(e) {
        if (e.target.id === 'lightbox' || e.target.classList.contains('lightbox-close')) {
          document.getElementById('lightbox').classList.remove('active');
          document.body.style.overflow = '';
        }
      }

      function prevPhoto(e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length;
        updateLightbox();
      }

      function nextPhoto(e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentAlbum.length;
        updateLightbox();
      }

      function updateLightbox() {
        const photo = currentAlbum[currentIndex];
        document.getElementById('lightbox-img').src = photo.src;
        document.getElementById('lightbox-img').alt = photo.caption;
        document.getElementById('lightbox-caption').textContent = photo.caption;
      }

      /* Keyboard navigation for lightbox */
      document.addEventListener('keydown', function(e) {
        const lb = document.getElementById('lightbox');
        if (!lb.classList.contains('active')) return;
        if (e.key === 'Escape') { lb.classList.remove('active'); document.body.style.overflow = ''; }
        if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + currentAlbum.length) % currentAlbum.length; updateLightbox(); }
        if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % currentAlbum.length; updateLightbox(); }
      });
    </script>
  </body>
</html>