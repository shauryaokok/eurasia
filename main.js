// ===================================================================
// EURASIA PALACE — shared behavior across all pages
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Header: solid on scroll ---- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('solid');
    else header.classList.remove('solid');
  };
  onScroll();
  window.addEventListener('scroll', onScroll);

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      header.classList.toggle('solid', navLinks.classList.contains('open'));
    });
  }

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));

  /* ---- Gallery filters (only present on gallery.html) ---- */
  const filterButtons = document.querySelectorAll('.gfilter');
  const galleryItems = document.querySelectorAll('.gallery-grid a');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      galleryItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.style.display = match ? '' : 'none';
      });
    });
  });

  /* ---- Enquiry form(s) ----
     Demo behavior only: shows a confirmation message inline.
     When wired to Supabase, replace the section below with an
     insert into the `enquiries` table (see comment at bottom of file). */
  const forms = document.querySelectorAll('.enquiry-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled = true;

      setTimeout(() => {
        form.reset();
        btn.textContent = original;
        btn.disabled = false;
        let note = form.parentElement.querySelector('.form-success');
        if (!note) {
          note = document.createElement('p');
          note.className = 'form-success form-note';
          note.style.color = '#d4af6a';
          form.parentElement.appendChild(note);
        }
        note.textContent = 'Enquiry received — our team will reach out shortly. For a faster response, tap the WhatsApp button below.';
      }, 700);
    });
  });

});

/* ---------------------------------------------------------------
   SUPABASE WIRING (for later — not active in this demo)
   ---------------------------------------------------------------
   1. Add the Supabase JS CDN script to each page:
      <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

   2. Create a client:
      const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

   3. On form submit, insert a row instead of the fake timeout above:
      await supabase.from('enquiries').insert({
        type: 'wedding',       // room | restaurant | wedding | banquet | conference | general
        name, phone, event_date, guest_count, message,
        status: 'new'
      });

   4. Trigger an email (Resend / Edge Function) from a Supabase
      database webhook on insert, so the manager gets notified instantly.
   --------------------------------------------------------------- */
