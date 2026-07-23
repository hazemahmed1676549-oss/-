const RECITERS = [
  { name: "أحمد بن علي العجمي", image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Ahmed_Al-Ajmi.jpg", server: "https://server10.mp3quran.net/ajm/" },
  { name: "عبد الرحمن السديس", image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Abdul_Rahman_Al-Sudais.jpg", server: "https://server11.mp3quran.net/sds/" },
  { name: "ياسر الدوسري", image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Yasser_Al-Dosari.jpg", server: "https://server11.mp3quran.net/yasser/" },
  { name: "محمد صديق المنشاوي", image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Muhammad_Siddiq_Al-Minshawi.jpg", server: "https://server10.mp3quran.net/minsh/" },
  { name: "محمود خليل الحصري", image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Mahmoud_Khalil_Al-Husary.jpg", server: "https://server13.mp3quran.net/husr/" }
];

let currentReciterIndex = 0;
let currentSurahId = 1;

function buildReciters(filter = '') {
  const grid = document.getElementById('reciter-grid');
  grid.innerHTML = '';
  RECITERS.filter(r => !filter || r.name.includes(filter)).forEach((r, index) => {
    const card = document.createElement('div');
    card.className = 'reciter-card';
    card.innerHTML = `
      <div class="reciter-img-container" onclick="openReciterSurahs(${index})">
        <img src="${r.image}" alt="${r.name}" onerror="this.src='https://via.placeholder.com/300x300/0A3D2E/FFFFFF?text=${encodeURIComponent(r.name)}'">
        <div class="reciter-play-overlay"><i class="fas fa-headphones"></i></div>
      </div>
      <div class="reciter-info"><h4>${r.name}</h4></div>
    `;
    grid.appendChild(card);
  });
}
function searchReciter(val) { buildReciters(val); }
function openReciterSurahs(index) { currentReciterIndex = index; document.getElementById('reciter-view').style.display = 'none'; document.getElementById('surah-view').style.display = 'block'; buildAudioSurahList(); }
function backToReciters() { document.getElementById('reciter-view').style.display = 'block'; document.getElementById('surah-view').style.display = 'none'; }
function buildAudioSurahList(filter = '') {
  const list = document.getElementById('audio-surah-list');
  list.innerHTML = '';
  SURAHS.filter(s => !filter || s.name.includes(filter)).forEach(s => {
    const div = document.createElement('div');
    div.className = 'surah-item';
    div.innerHTML = `<div class="surah-num">${s.id}</div><div class="surah-info"><h4>${s.name}</h4></div><i class="fas fa-play" style="color:var(--gold)"></i>`;
    div.onclick = () => playStickySurah(s.id);
    list.appendChild(div);
  });
}
function searchAudioSurah(val) { buildAudioSurahList(val); }
function playStickySurah(surahId) {
  currentSurahId = surahId;
  const surah = SURAHS.find(s => s.id === surahId);
  const reciter = RECITERS[currentReciterIndex];
  const audio = document.getElementById('main-audio');
  const surahStr = String(surahId).padStart(3, '0');
  audio.src = `${reciter.server}${surahStr}.mp3`;
  document.getElementById('sp-img').src = reciter.image;
  document.getElementById('sp-surah-name').textContent = surah.name;
  document.getElementById('sp-reciter-name').textContent = reciter.name;
  document.getElementById('sticky-player').classList.add('show');
  audio.play().then(() => { document.getElementById('sp-play-btn').innerHTML = '<i class="fas fa-pause"></i>'; }).catch(() => { showToast('ملف التلاوة غير متوفر حالياً'); });
}
function toggleStickyPlay() { const audio = document.getElementById('main-audio'); if (audio.paused) { audio.play(); document.getElementById('sp-play-btn').innerHTML = '<i class="fas fa-pause"></i>'; } else { audio.pause(); document.getElementById('sp-play-btn').innerHTML = '<i class="fas fa-play"></i>'; } }
function nextStickySurah() { if (currentSurahId < 114) playStickySurah(currentSurahId + 1); }
function prevStickySurah() { if (currentSurahId > 1) playStickySurah(currentSurahId - 1); }
function closeStickyPlayer() { document.getElementById('sticky-player').classList.remove('show'); document.getElementById('main-audio').pause(); }
document.getElementById('main-audio').addEventListener('timeupdate', function() {
  const a = this; if (!a.duration) return;
  const pct = (a.currentTime / a.duration) * 100 || 0;
  document.getElementById('sp-fill').style.width = pct + '%';
});