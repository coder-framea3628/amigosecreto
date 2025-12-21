// ===== Injetar Meta Viewport para Responsividade em Mobile =====
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);

// ===== Injetar Link de Fontes =====
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Montserrat:wght@400;500;600&display=swap';
fontLink.rel = 'preload';
fontLink.as = 'style';
fontLink.onload = function() { this.rel = 'stylesheet'; };
document.head.appendChild(fontLink);

// ===== Injetar Canvas Confetti =====
const confettiScript = document.createElement('script');
confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
document.head.appendChild(confettiScript);

// ===== Injetar CSS =====
const style = document.createElement('style');
style.textContent = `
:root {
  --bg-color: #f8f5f2;
  --text-color: #2d2d2d;
  --primary: #8b6f47; /* dourado suave */
  --accent: #5e3f3b; /* vinho escuro */
  --secondary: #3e5f47; /* verde escuro elegante */
  --light: #fdfaf7;
  --shadow: rgba(0,0,0,0.08);
  --heart: #c44c4c;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #fdfaf7 0%, #f0e9e3 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  color: var(--text-color);
  overflow-x: hidden;
}
.container {
  width: 90%;
  max-width: 560px;
  background: var(--light);
  border-radius: 24px;
  box-shadow: 0 16px 48px var(--shadow);
  padding: 40px 28px;
  position: relative;
  z-index: 10;
  overflow-y: auto;
  max-height: 92vh;
  margin: 0 auto;
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.step {
  display: none;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  animation: fadeIn 0.6s ease forwards;
}
.step.active {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
  color: var(--accent);
}
h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 12px;
  color: var(--secondary);
}
.subtitle {
  font-size: 1rem;
  text-align: center;
  margin-bottom: 32px;
  color: var(--text-color);
  font-weight: 500;
}
p {
  font-size: 1.05rem;
  line-height: 1.7;
  text-align: center;
  margin-bottom: 28px;
  color: var(--text-color);
}
.btn {
  padding: 18px 36px;
  border-radius: 32px;
  cursor: pointer;
  font-size: 1.2rem;
  border: none;
  background: var(--accent);
  color: #fff;
  transition: all 0.4s ease;
  font-weight: 600;
  display: block;
  width: 100%;
  max-width: 320px;
  margin: 20px auto 0;
  box-shadow: 0 8px 24px rgba(94,63,59,0.3);
}
.btn:hover:not(:disabled) {
  background: #4a302c;
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(94,63,59,0.4);
}
.btn.secondary {
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
}
.profile-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin: 40px 0;
}
.profile-card {
  background: #fff;
  border-radius: 24px;
  padding: 28px 20px;
  text-align: center;
  box-shadow: 0 8px 24px var(--shadow);
  cursor: pointer;
  transition: all 0.4s ease;
}
.profile-card:hover {
  transform: translateY(-12px);
  box-shadow: 0 16px 40px var(--shadow);
}
.profile-img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
  border: 5px solid var(--primary);
}
.profile-name {
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--accent);
  margin-bottom: 4px;
}
.profile-relation {
  font-size: 0.95rem;
  color: var(--secondary);
  font-weight: 500;
}
.spinning-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(253,250,247,0.95);
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10002;
  backdrop-filter: blur(8px);
}
.spinning-overlay.show {
  display: flex;
}
.big-spinner {
  width: 120px;
  height: 120px;
  border: 10px solid var(--primary);
  border-top: 10px solid var(--accent);
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
  margin-bottom: 40px;
}
.spin-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--accent);
  text-align: center;
  animation: pulse 2s infinite;
}
.footer {
  text-align: center;
  margin-top: 48px;
  font-size: 0.9rem;
  color: var(--secondary);
}
.footer svg {
  width: 18px;
  height: 18px;
  fill: var(--heart);
  margin: 0 6px;
  vertical-align: middle;
}
.overlay-black {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0,0,0,0.7);
  display: none;
  z-index: 9999;
}
.overlay-black.show {
  display: block;
}
.bottom-sheet {
  position: fixed;
  bottom: 0; left: 0; width: 100%;
  background: var(--light);
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  padding: 50px 28px 60px;
  transform: translateY(100%);
  transition: transform 0.5s ease;
  z-index: 10000;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 -12px 40px var(--shadow);
}
.bottom-sheet.show {
  transform: translateY(0);
}
.close-popup {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: var(--text-color);
}
.result-img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin: 24px auto;
  border: 8px solid var(--primary);
  display: block;
  box-shadow: 0 8px 32px var(--shadow);
}
.result-name {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  color: var(--accent);
  text-align: center;
  margin: 20px 0;
}
.loading-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: var(--light);
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10001;
}
.spinner {
  width: 60px;
  height: 60px;
  border: 6px solid var(--primary);
  border-top: 6px solid var(--secondary);
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
  margin-bottom: 24px;
}
#canvas-container {
  background: #fff;
  border-radius: 24px;
  padding: 32px;
  margin: 20px auto;
  box-shadow: 0 8px 32px var(--shadow);
  text-align: center;
  max-width: 400px;
}
#share-canvas {
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 8px 24px var(--shadow);
}
.heart-beat {
  display: inline-block;
  animation: heartbeat 1.5s ease infinite;
}
@keyframes heartbeat {
  0% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);

// ===== Injetar HTML =====
document.body.innerHTML = `
  <div class="container" style="opacity: 0; animation: fadeIn 0.8s ease forwards;">
    <div id="step1" class="step active">
      <h1>Amigo Secreto de Natal 🎄</h1>
      <p>Oi, família! Eu sou a Luiza.<br>Desenvolvi esse amigo secreto com muito carinho pra gente se confraternizar nesse Natal tão especial.</p>
      <p style="font-style:italic; font-size:0.95rem;">Lembre-se: o mais importante é o carinho no presente, não o valor. Vamos caprichar nas surpresas! ✨</p>
      <button class="btn" id="start">Prosseguir</button>
    </div>

    <div id="step2" class="step">
      <h2>Selecione seu perfil</h2>
      <p class="subtitle">Aqui você seleciona quem é</p>
      <div class="profile-grid">
        <div class="profile-card" data-name="Ayrton">
          <img class="profile-img" src="https://framerusercontent.com/images/mo6h6LH2URKoUDkdQCvKL1YV4.jpeg" alt="Ayrton">
          <div class="profile-name">Ayrton</div>
          <div class="profile-relation">(Irmão)</div>
        </div>
        <div class="profile-card" data-name="Luiza Prado">
          <img class="profile-img" src="https://framerusercontent.com/images/jjvgBrGxMkjCcf37wNfwlrxIdKw.jpeg" alt="Luiza Prado">
          <div class="profile-name">Luiza Prado</div>
          <div class="profile-relation">(Irmã)</div>
        </div>
        <div class="profile-card" data-name="Matheus">
          <img class="profile-img" src="https://framerusercontent.com/images/c8ZUn2qoSCKOvHBhThGtej6shCQ.jpeg" alt="Matheus">
          <div class="profile-name">Matheus</div>
          <div class="profile-relation">(Irmão)</div>
        </div>
        <div class="profile-card" data-name="Leide">
          <img class="profile-img" src="https://framerusercontent.com/images/pcXzS5xFHN3vBFce2yh7ZlfJ0IM.jpeg" alt="Leide">
          <div class="profile-name">Leide</div>
          <div class="profile-relation">(Mãe)</div>
        </div>
      </div>
    </div>

    <div id="step3" class="step">
      <h2>Pronto para o sorteio?</h2>
      <p>Respira fundo, toca no botão e descubra quem é seu amigo secreto esse ano! 🎁</p>
      <button class="btn" id="spin-btn">Girar</button>
    </div>

    <div class="footer">
      Desenvolvido com <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> por Luiza Prado
    </div>
  </div>

  <div class="overlay-black" id="overlay-black"></div>

  <div class="spinning-overlay" id="spinning-overlay">
    <div class="big-spinner"></div>
    <div class="spin-text">Sorteando seu amigo secreto...</div>
  </div>

  <div class="bottom-sheet" id="confirm-popup">
    <span class="close-popup">×</span>
    <h2>Confirmação</h2>
    <p id="confirm-text">Confirma que você é <strong></strong>?</p>
    <button class="btn" id="confirm-yes">Sim, sou eu!</button>
    <button class="btn secondary" id="confirm-no">Voltar</button>
  </div>

  <div class="bottom-sheet" id="result-popup">
    <!-- Sem close-popup aqui -->
    <h2>Parabéns! 🎉</h2>
    <p>Seu amigo secreto esse ano é…</p>
    <img class="result-img" id="result-img" src="" alt="">
    <div class="result-name" id="result-name"></div>
    <p style="font-size:1.1rem; margin:20px 0;">Agora vai lá caprichar no presente, hein? 🎁✨</p>
    <p style="font-size:1rem;">Tirar print dessa tela e enviar pra Luiza pelo WhatsApp!</p>
    <button class="btn" id="confirm-secret">Confirmar meu amigo secreto</button>
  </div>

  <div class="bottom-sheet" id="code-popup">
    <span class="close-popup">×</span>
    <h2>Confirmação final</h2>
    <p style="font-size:1.1rem;">Clique no botão abaixo e me envie junto com a captura de tela</p>
    <div id="canvas-container">
      <canvas id="share-canvas" width="400" height="600"></canvas>
    </div>
    <button class="btn" id="download-image">Baixar imagem</button>
    <button class="btn secondary" id="send-whatsapp">Enviar pro WhatsApp</button>
  </div>

  <div class="loading-overlay" id="loading-overlay">
    <div class="spinner"></div>
    <p>Preparando a mágica… ✨</p>
  </div>
`;

// ===== Dados dos Perfis =====
const profiles = [
  { name: "Ayrton", img: "https://framerusercontent.com/images/mo6h6LH2URKoUDkdQCvKL1YV4.jpeg" },
  { name: "Luiza Prado", img: "https://framerusercontent.com/images/jjvgBrGxMkjCcf37wNfwlrxIdKw.jpeg" },
  { name: "Matheus", img: "https://framerusercontent.com/images/c8ZUn2qoSCKOvHBhThGtej6shCQ.jpeg" },
  { name: "Leide", img: "https://framerusercontent.com/images/pcXzS5xFHN3vBFce2yh7ZlfJ0IM.jpeg" }
];

let spinnerParticipants = [];
let selectedProfile = null;
let drawnPerson = null;

function showStep(step) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(`step${step}`).classList.add('active');
}

function showBottomSheet(id) {
  document.getElementById(id).classList.add('show');
  document.getElementById('overlay-black').classList.add('show');
}

function closeBottomSheet(id) {
  const el = document.getElementById(id);
  el.classList.remove('show');
  if (!document.querySelector('.bottom-sheet.show')) {
    document.getElementById('overlay-black').classList.remove('show');
  }
}

function showLoading() {
  document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
  document.getElementById('loading-overlay').style.display = 'none';
}

function showSpinning() {
  document.getElementById('spinning-overlay').classList.add('show');
}

function hideSpinning() {
  document.getElementById('spinning-overlay').classList.remove('show');
}

function launchConfetti() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.55 },
    colors: ['#8b6f47', '#5e3f3b', '#3e5f47', '#c44c4c', '#d4af37']
  });
  setTimeout(() => {
    confetti({ particleCount: 100, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 100, angle: 120, spread: 55, origin: { x: 1 } });
  }, 300);
}

function generateCanvas() {
  const canvas = document.getElementById('share-canvas');
  const ctx = canvas.getContext('2d');

  // Fundo branco com gradiente sutil
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, '#fdfaf7');
  gradient.addColorStop(1, '#f0e9e3');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Foto da pessoa
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.src = drawnPerson.img;
  img.onload = () => {
    const size = 200;
    const x = (canvas.width - size) / 2;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x + size/2, 120 + size/2, size/2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(img, x, 120, size, size);
    ctx.restore();

    // Borda dourada na foto
    ctx.strokeStyle = '#8b6f47';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Nome
    ctx.font = 'bold 36px Montserrat';
    ctx.fillStyle = '#5e3f3b';
    ctx.textAlign = 'center';
    ctx.fillText(drawnPerson.name, canvas.width / 2, 360);

    // Texto principal
    ctx.font = '28px Playfair Display';
    ctx.fillStyle = '#3e5f47';
    ctx.fillText('Meu amigo secreto em 2025', canvas.width / 2, 410);
    ctx.fillText('- Família Pereira -', canvas.width / 2, 450);

    // Árvore de Natal SVG
    ctx.fillStyle = '#3e5f47';
    ctx.font = '80px serif';
    ctx.fillText('🎄', canvas.width / 2, 540);
  };
}

function downloadCanvas() {
  const canvas = document.getElementById('share-canvas');
  const link = document.createElement('a');
  link.download = `amigo-secreto-${drawnPerson.name.replace(' ', '-')}.png`;
  link.href = canvas.toDataURL('image/png');
  link.click();
}

function markAsDone() {
  const data = {
    name: drawnPerson.name,
    img: drawnPerson.img,
    timestamp: Date.now()
  };
  localStorage.setItem('amigoSecretoResult', JSON.stringify(data));
  localStorage.setItem('amigoSecretoDone', 'true');
}

function showAlreadyDrawn() {
  const saved = localStorage.getItem('amigoSecretoResult');
  if (!saved) return false;

  const data = JSON.parse(saved);
  document.querySelector('.container').innerHTML = `
    <h1>Você já sorteou! 😘</h1>
    <p>Seu amigo secreto é ${data.name}. Se perdeu o print, aqui tá de novo:</p>
    <img class="result-img" src="${data.img}" style="margin:32px auto;">
    <div class="result-name">${data.name}</div>
    <button class="btn" id="view-again">Ver imagem completa</button>
    <div class="footer">
      Desenvolvido com <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> por Luiza Prado
    </div>
  `;

  document.getElementById('view-again').addEventListener('click', () => {
    drawnPerson = { name: data.name, img: data.img };
    generateCanvas();
    showBottomSheet('code-popup');
  });
  return true;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  if (showAlreadyDrawn()) return;

  showStep(1);

  document.getElementById('start').addEventListener('click', () => showStep(2));

  document.querySelectorAll('.profile-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedProfile = profiles.find(p => p.name === card.dataset.name);
      document.getElementById('confirm-text').innerHTML = `Confirma que você é <strong>${selectedProfile.name}</strong>?`;
      showBottomSheet('confirm-popup');
    });
  });

  document.getElementById('confirm-yes').addEventListener('click', () => {
    closeBottomSheet('confirm-popup');
    showLoading();
    spinnerParticipants = profiles.filter(p => p.name !== selectedProfile.name);
    setTimeout(() => {
      hideLoading();
      showStep(3);
    }, 1800);
  });

  document.getElementById('confirm-no').addEventListener('click', () => closeBottomSheet('confirm-popup'));

  document.getElementById('spin-btn').addEventListener('click', () => {
    document.getElementById('spin-btn').disabled = true;
    showSpinning();
    setTimeout(() => {
      hideSpinning();
      drawnPerson = spinnerParticipants[Math.floor(Math.random() * spinnerParticipants.length)];
      launchConfetti();
      document.getElementById('result-img').src = drawnPerson.img;
      document.getElementById('result-name').textContent = drawnPerson.name;
      showBottomSheet('result-popup');
      document.getElementById('spin-btn').disabled = false;
    }, 4000);
  });

  document.getElementById('confirm-secret').addEventListener('click', () => {
    closeBottomSheet('result-popup');
    generateCanvas();
    showBottomSheet('code-popup');
  });

  document.getElementById('download-image').addEventListener('click', () => {
    downloadCanvas();
    markAsDone();
    closeBottomSheet('code-popup');
    document.querySelector('.container').innerHTML = `
      <h1>Sorteio concluído! 🎉</h1>
      <p>Agora é só esperar o dia 24!</p>
      <p style="font-size:2rem;"><span class="heart-beat">❤️</span></p>
      <div class="footer">
        Desenvolvido com <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> por Luiza Prado
      </div>
    `;
  });

  document.getElementById('send-whatsapp').addEventListener('click', () => {
    const message = encodeURIComponent(`Olá Luiza! Tirei ${drawnPerson.name} no amigo secreto 2025 da família Pereira. Baixei a imagem! 🎄`);
    window.open(`https://wa.me/5545991519289?text=${message}`, '_blank');
    markAsDone();
    closeBottomSheet('code-popup');
    document.querySelector('.container').innerHTML = `
      <h1>Sorteio concluído! 🎉</h1>
      <p>Agora é só esperar o dia 24!</p>
      <p style="font-size:2rem;"><span class="heart-beat">❤️</span></p>
      <div class="footer">
        Desenvolvido com <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> por Luiza Prado
      </div>
    `;
  });

  document.querySelectorAll('.close-popup').forEach(close => {
    close.addEventListener('click', () => {
      const popup = close.closest('.bottom-sheet').id;
      closeBottomSheet(popup);
    });
  });

  document.getElementById('overlay-black').addEventListener('click', () => {
    if (document.getElementById('result-popup').classList.contains('show')) return; // não fecha result-popup
    document.querySelectorAll('.bottom-sheet.show').forEach(el => closeBottomSheet(el.id));
  });
});