/* ─── Email Modal ─── */
function openEmailModal(e) {
  e.preventDefault();
  const modal = document.getElementById('emailModal');
  modal.classList.remove('hidden', 'pointer-events-none');
  modal.classList.add('flex', 'opacity-100');
  
  // Efek transisi pembesaran sedikit
  const modalBox = modal.querySelector('div');
  setTimeout(() => {
    modalBox.classList.remove('scale-95');
    modalBox.classList.add('scale-100');
  }, 10);
  
  document.body.style.overflow = 'hidden';
}

function closeEmailModal() {
  const modal = document.getElementById('emailModal');
  const modalBox = modal.querySelector('div');
  
  modalBox.classList.remove('scale-100');
  modalBox.classList.add('scale-95');
  
  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0');
  
  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden', 'pointer-events-none');
    modal.classList.remove('opacity-0'); // Reset opacity untuk open selanjutnya
  }, 300); // Sinkronisasi dengan durasi transition-opacity (300ms)
  
  document.body.style.overflow = '';
}

document.getElementById('emailModal').addEventListener('click', function(e) {
  if (e.target === this) closeEmailModal();
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeEmailModal();
    closeWaModal();
  }
});

function handleEmail(e) {
  e.preventDefault();
  
  const name    = document.getElementById('mName').value.trim();
  const subject = document.getElementById('mSubject').value.trim();
  const message = document.getElementById('mMessage').value.trim();
  
  // Format body email agar rapi
  const body    = 'Dari: ' + name + '\n\n' + message;
  const mailto  = 'mailto:azafi101@gmail.com?subject='
    + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

  // Gunakan window.open untuk memastikan instruksi mailto terkirim tanpa interupsi
  window.open(mailto, '_blank');

  // Berikan jeda super singkat sebelum merusak/mengubah isi DOM form
  setTimeout(() => {
    document.getElementById('emailForm').innerHTML =
      '<div class="text-center text-accent-cream text-[1.1rem] py-8">' +
      '✅ Pesan siap dikirim!<br>' +
      '<small class="block text-[0.85rem] text-accent-taupe mt-1.5">Aplikasi email kamu akan terbuka atau silakan cek tab baru...</small>' +
      '</div>';
  }, 100);

  // Tutup modal otomatis setelah beberapa detik
  setTimeout(closeEmailModal, 4000);
  
  return false;
}

/* ─── WhatsApp Modal ─── */
function openWaModal(e) {
  e.preventDefault();
  const modal = document.getElementById('waModal');
  modal.classList.remove('hidden', 'pointer-events-none');
  modal.classList.add('flex', 'opacity-100');
  
  const modalBox = modal.querySelector('div');
  setTimeout(() => {
    modalBox.classList.remove('scale-95');
    modalBox.classList.add('scale-100');
  }, 10);
  
  document.body.style.overflow = 'hidden';
}

function closeWaModal() {
  const modal = document.getElementById('waModal');
  const modalBox = modal.querySelector('div');
  
  modalBox.classList.remove('scale-100');
  modalBox.classList.add('scale-95');
  
  modal.classList.remove('opacity-100');
  modal.classList.add('opacity-0');
  
  setTimeout(() => {
    modal.classList.remove('flex');
    modal.classList.add('hidden', 'pointer-events-none');
    modal.classList.remove('opacity-0');
  }, 300);
  
  document.body.style.overflow = '';
}

document.getElementById('waModal').addEventListener('click', function(e) {
  if (e.target === this) closeWaModal();
});

function handleWhatsApp(e) {
  e.preventDefault();
  const name    = document.getElementById('waName').value.trim();
  const message = document.getElementById('waMessage').value.trim();
  const text    = 'Halo Azwa, saya ' + name + '.\n\n' + message;
  const url     = 'https://wa.me/6283809714022?text=' + encodeURIComponent(text);

  window.open(url, '_blank');

  document.getElementById('waForm').innerHTML =
    '<div class="text-center text-accent-cream text-[1.1rem] py-8">✅ Pesan siap dikirim!<br><small class="block text-[0.85rem] text-accent-taupe mt-1.5">WhatsApp akan terbuka...</small></div>';

  setTimeout(closeWaModal, 4000);
  return false;
}