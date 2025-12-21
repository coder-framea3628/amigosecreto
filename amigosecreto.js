// ===== Injetar Meta Viewport para Responsividade em Mobile =====
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);

// ===== Injetar Link de Fontes =====
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Montserrat:wght@400;500&display=swap';
fontLink.rel = 'preload';
fontLink.as = 'style';
fontLink.onload = function() { this.rel = 'stylesheet'; };
document.head.appendChild(fontLink);

// ===== Injetar TweenMax (GSAP antigo necessário para Winwheel antigo) =====
const tweenMaxScript = document.createElement('script');
tweenMaxScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js';
document.head.appendChild(tweenMaxScript);

// ===== Injetar Winwheel.js =====
const winwheelScript = document.createElement('script');
winwheelScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Winwheel/1.0/Winwheel.min.js';
winwheelScript.onload = () => {
  // Pronto para usar Winwheel após carregamento
};
document.head.appendChild(winwheelScript);

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
  --wheel-bg1: #fdfaf7;
  --wheel-bg2: #f5ede4;
  --wheel-stroke: #8b6f47;
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
  max-width: 540px;
  background: var(--light);
  border-radius: 20px;
  box-shadow: 0 12px 40px var(--shadow);
  padding: 32px 24px;
  position: relative;
  z-index: 10;
  overflow-y: auto;
  max-height: 90vh;
  margin: 0 auto;
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.step {
  display: none;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  animation: fadeIn 0.5s ease forwards;
}
.step.active {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
  color: var(--accent);
}
h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
  color: var(--secondary);
}
p {
  font-size: 1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 24px;
  color: var(--text-color);
}
.btn {
  padding: 16px 32px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;
  border: none;
  background: var(--primary);
  color: #fff;
  transition: all 0.3s ease;
  font-weight: 500;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 32px;
}
.btn:hover:not(:disabled) {
  background: var(--accent);
  transform: translateY(-2px);
}
.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}
.btn.secondary {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
  margin-top: 12px;
}
.profile-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 32px 0;
}
.profile-card {
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 16px var(--shadow);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.profile-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px var(--shadow);
}
.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
  border: 4px solid var(--primary);
}
.profile-name {
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--accent);
}
.profile-relation {
  font-size: 0.9rem;
  color: var(--secondary);
}
.spinner-container {
  text-align: center;
  margin: 40px 0;
}
#spinner {
  width: 340px;
  height: 340px;
  margin: 0 auto 32px;
  display: block;
  border: 8px solid var(--wheel-stroke);
  border-radius: 50%;
  box-shadow: 0 8px 32px var(--shadow);
}
.footer {
  text-align: center;
  margin-top: 40px;
  font-size: 0.85rem;
  color: var(--secondary);
}
.footer svg {
  width: 16px;
  height: 16px;
  fill: var(--heart);
  margin: 0 4px;
  vertical-align: middle;
}
.overlay-black {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: none;
  z-index: 9999;
}
.overlay-black.show {
  display: block;
}
.bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--light);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 32px 24px;
  transform: translateY(100%);
  transition: transform 0.4s ease;
  z-index: 10000;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 -8px 32px var(--shadow);
}
.bottom-sheet.show {
  transform: translateY(0);
}
.close-popup {
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--text-color);
}
.result-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin: 20px auto;
  border: 6px solid var(--primary);
  display: block;
}
.result-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: var(--accent);
  text-align: center;
  margin: 16px 0;
}
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--light);
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 10001;
}
.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid var(--primary);
  border-top: 5px solid var(--secondary);
  border-radius: 50%;
  animation: spin 1.2s linear infinite;
  margin-bottom: 20px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);

// ===== Injetar HTML =====
document.body.innerHTML = `
  <div class="container" style="opacity: 0; animation: fadeIn 0.8s ease forwards;">
    <div id="step1" class="step active">
      <h1>Amigo Secreto de Natal 🎄</h1>
      <p>Oi, família! Eu sou a Luiza.<br>Desenvolvi esse amigo secreto para a gente confraternizar agora no Natal.</p>
      <p style="font-style:italic; font-size:0.95rem;">É importante entender que deve ser feita a entrega de um presente especial e não é sobre valores.</p>
      <button class="btn" id="start">Prosseguir</button>
    </div>
    <div id="step2" class="step">
      <h2>Selecione seu perfil</h2>
      <div class="profile-grid">
        <div class="profile-card" data-name="Ayrton" data-relation="Irmão">
          <img class="profile-img" src="https://framerusercontent.com/images/mo6h6LH2URKoUDkdQCvKL1YV4.jpeg" alt="Ayrton">
          <div class="profile-name">Ayrton</div>
          <div class="profile-relation">(Irmão)</div>
        </div>
        <div class="profile-card" data-name="Luiza Prado" data-relation="Irmã">
          <img class="profile-img" src="https://framerusercontent.com/images/jjvgBrGxMkjCcf37wNfwlrxIdKw.jpeg" alt="Luiza Prado">
          <div class="profile-name">Luiza Prado</div>
          <div class="profile-relation">(Irmã)</div>
        </div>
        <div class="profile-card" data-name="Matheus" data-relation="Irmão">
          <img class="profile-img" src="https://framerusercontent.com/images/c8ZUn2qoSCKOvHBhThGtej6shCQ.jpeg" alt="Matheus">
          <div class="profile-name">Matheus</div>
          <div class="profile-relation">(Irmão)</div>
        </div>
        <div class="profile-card" data-name="Leide" data-relation="Mãe">
          <img class="profile-img" src="https://framerusercontent.com/images/pcXzS5xFHN3vBFce2yh7ZlfJ0IM.jpeg" alt="Leide">
          <div class="profile-name">Leide</div>
          <div class="profile-relation">(Mãe)</div>
        </div>
      </div>
    </div>
    <div id="step3" class="step">
      <h2>Pronto para o sorteio?</h2>
      <p>Toque em "Girar" e descubra seu amigo secreto!</p>
      <div class="spinner-container">
        <canvas id="spinner" width="340" height="340"></canvas>
        <button class="btn" id="spin-btn" disabled>Girar</button>
      </div>
    </div>
    <div class="footer">
      Desenvolvido com <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> por Luiza Prado
    </div>
  </div>
  <div class="overlay-black" id="overlay-black"></div>
  <div class="bottom-sheet" id="confirm-popup">
    <span class="close-popup" aria-label="Fechar">×</span>
    <h2>Confirmação</h2>
    <p id="confirm-text">Confirma que você é <strong></strong>?</p>
    <button class="btn" id="confirm-yes">Confirmar</button>
    <button class="btn secondary" id="confirm-no">Retornar</button>
  </div>
  <div class="bottom-sheet" id="result-popup">
    <span class="close-popup" aria-label="Fechar">×</span>
    <h2>Parabéns!</h2>
    <p>Seu amigo secreto é…</p>
    <img class="result-img" id="result-img" src="" alt="">
    <div class="result-name" id="result-name"></div>
    <button class="btn" id="show-code">Exibir código</button>
  </div>
  <div class="bottom-sheet" id="code-popup">
    <span class="close-popup" aria-label="Fechar">×</span>
    <h2>Confirmação de segurança</h2>
    <p>Para manter a segurança e a qualidade do sorteio, precisamos que você envie quem você retirou para a administradora.</p>
    <button class="btn" id="send-whatsapp">Enviar pelo WhatsApp</button>
  </div>
  <div class="loading-overlay" id="loading-overlay">
    <div class="spinner"></div>
    <p>Preparando seu sorteio…</p>
  </div>
`;

// ===== Dados dos Perfis =====
const profiles = [
  { name: "Ayrton", relation: "Irmão", img: "https://framerusercontent.com/images/mo6h6LH2URKoUDkdQCvKL1YV4.jpeg" },
  { name: "Luiza Prado", relation: "Irmã", img: "https://framerusercontent.com/images/jjvgBrGxMkjCcf37wNfwlrxIdKw.jpeg" },
  { name: "Matheus", relation: "Irmão", img: "https://framerusercontent.com/images/c8ZUn2qoSCKOvHBhThGtej6shCQ.jpeg" },
  { name: "Leide", relation: "Mãe", img: "https://framerusercontent.com/images/pcXzS5xFHN3vBFce2yh7ZlfJ0IM.jpeg" }
];

let spinnerParticipants = [];
let currentStep = 1;
let selectedProfile = null;
let drawnPerson = null;
let theWheel = null;

function showStep(step) {
  document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
  document.getElementById(`step${step}`).classList.add('active');
  currentStep = step;
}

function showBottomSheet(id) {
  document.getElementById(id).classList.add('show');
  document.getElementById('overlay-black').classList.add('show');
}

function closeBottomSheet(id) {
  const el = document.getElementById(id);
  el.classList.remove('show');
  document.getElementById('overlay-black').classList.remove('show');
}

function showLoading() {
  document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
  document.getElementById('loading-overlay').style.display = 'none';
}

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 },
    colors: ['#8b6f47', '#5e3f3b', '#3e5f47', '#c44c4c', '#d4af37']
  });
}

function initSpinner() {
  if (typeof Winwheel === 'undefined') {
    console.error('Winwheel não carregou corretamente.');
    return;
  }

  const segments = spinnerParticipants.map((p, i) => ({
    'fillStyle' : i % 2 === 0 ? '#fdfaf7' : '#f5ede4',
    'textFillStyle' : '#2d2d2d',
    'textFontSize' : 20,
    'textOrientation' : 'vertical',
    'textAlignment' : 'outer',
    'strokeStyle' : '#8b6f47',
    'lineWidth' : 5,
    'text' : p.name
  }));

  theWheel = new Winwheel({
    'canvasId' : 'spinner',
    'numSegments' : segments.length,
    'outerRadius' : 160,
    'innerRadius' : 60,
    'textFontFamily' : 'Montserrat',
    'segments' : segments,
    'pins' : {
      'number' : 24,
      'fillStyle' : '#5e3f3b',
      'outerRadius' : 8,
      'margin' : 8
    },
    'animation' : {
      'type'     : 'spinToStop',
      'duration' : 8,
      'spins'    : 12,
      'callbackFinished' : revealResult
    }
  });

  document.getElementById('spin-btn').disabled = false;
}

function startSpin() {
  if (theWheel) {
    document.getElementById('spin-btn').disabled = true;

    // Sorteio aleatório real
    const numSegments = spinnerParticipants.length;
    const randomSegment = Math.floor(Math.random() * numSegments) + 1;
    const segmentAngle = 360 / numSegments;
    const stopAngle = (randomSegment * segmentAngle) - (segmentAngle / 2) + Math.random() * segmentAngle;

    theWheel.animation.stopAngle = stopAngle;
    theWheel.startAnimation();
  }
}

function revealResult(indicatedSegment) {
  drawnPerson = spinnerParticipants[indicatedSegment - 1];
  launchConfetti();
  setTimeout(() => {
    document.getElementById('result-img').src = drawnPerson.img;
    document.getElementById('result-name').textContent = drawnPerson.name;
    showBottomSheet('result-popup');
    document.getElementById('spin-btn').disabled = false;
  }, 1200);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('amigoSecretoDone')) {
    document.querySelector('.container').innerHTML = `
      <h1>Ops!</h1>
      <p>Você já realizou o seu sorteio do amigo secreto.</p>
      <div class="footer">
        Desenvolvido com <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg> por Luiza Prado
      </div>
    `;
    return;
  }

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
      initSpinner();
    }, 1500);
  });

  document.getElementById('confirm-no').addEventListener('click', () => closeBottomSheet('confirm-popup'));

  document.getElementById('spin-btn').addEventListener('click', startSpin);

  document.getElementById('show-code').addEventListener('click', () => {
    closeBottomSheet('result-popup');
    showBottomSheet('code-popup');
  });

  document.getElementById('send-whatsapp').addEventListener('click', () => {
    const message = encodeURIComponent("Olá, tudo bem? Eu tirei esta pessoa no seu amigo secreto da família Pereira. Estou enviando a captura de tela.");
    window.open(`https://wa.me/5545991519289?text=${message}`, '_blank');
    localStorage.setItem('amigoSecretoDone', 'true');
  });

  document.querySelectorAll('.close-popup').forEach(close => {
    close.addEventListener('click', () => {
      const popup = close.closest('.bottom-sheet').id;
      closeBottomSheet(popup);
    });
  });

  document.getElementById('overlay-black').addEventListener('click', () => {
    document.querySelectorAll('.bottom-sheet.show').forEach(el => closeBottomSheet(el.id));
  });
});