// Pomodoro Timer script
(function(){
  const display = document.getElementById('time');
  const startBtn = document.getElementById('start');
  const pauseBtn = document.getElementById('pause');
  const resetBtn = document.getElementById('reset');
  const modeBtns = Array.from(document.querySelectorAll('.mode-btn'));
  const workInput = document.getElementById('work-min');
  const shortInput = document.getElementById('short-min');
  const longInput = document.getElementById('long-min');
  const autoNext = document.getElementById('auto-next');

  let timer = null;
  let secondsLeft = 25 * 60;
  let running = false;
  let mode = 'work'; // work, short, long

  function formatTime(s){
    const m = Math.floor(s/60).toString().padStart(2,'0');
    const sec = Math.floor(s%60).toString().padStart(2,'0');
    return `${m}:${sec}`;
  }

  function updateDisplay(){ display.textContent = formatTime(secondsLeft); }

  function setMode(newMode, applyInputs=true){
    mode = newMode;
    modeBtns.forEach(b=>b.classList.toggle('active', b.dataset.mode===mode));
    if(applyInputs){
      if(mode==='work') secondsLeft = Number(workInput.value || 25) * 60;
      else if(mode==='short') secondsLeft = Number(shortInput.value || 5) * 60;
      else secondsLeft = Number(longInput.value || 15) * 60;
    }
    updateDisplay();
  }

  function tick(){
    if(secondsLeft<=0){
      playBeep();
      clearInterval(timer); timer=null; running=false;
      if(autoNext.checked){
        // rotate: work -> short -> work, every 4th cycle use long
        if(mode==='work') setMode('short'); else setMode('work');
        start();
      } else {
        // keep stopped at 0:00
      }
      pauseBtn.disabled = true; startBtn.disabled = false;
      return;
    }
    secondsLeft -= 1;
    updateDisplay();
  }

  function start(){
    if(running) return;
    running = true;
    timer = setInterval(tick, 1000);
    startBtn.disabled = true; pauseBtn.disabled = false;
  }

  function pause(){
    if(!running) return;
    running = false;
    clearInterval(timer); timer=null;
    startBtn.disabled = false; pauseBtn.disabled = true;
  }

  function reset(){
    pause(); setMode(mode,true);
  }

  // Simple beep using Web Audio API
  function playBeep(){
    try{
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = 880;
      g.gain.value = 0.03;
      o.connect(g); g.connect(ctx.destination);
      o.start();
      setTimeout(()=>{ o.stop(); ctx.close(); }, 250);
    }catch(e){ /* ignore if not allowed */ }
  }

  // Event listeners
  startBtn.addEventListener('click', () => start());
  pauseBtn.addEventListener('click', () => pause());
  resetBtn.addEventListener('click', () => reset());

  modeBtns.forEach(btn => btn.addEventListener('click', ()=> setMode(btn.dataset.mode)));

  // Update durations when user changes inputs (only when not running)
  [workInput, shortInput, longInput].forEach(inp => inp.addEventListener('change', ()=>{
    if(!running) setMode(mode,true);
  }));

  // Keyboard shortcuts: Space toggles start/pause, r resets
  window.addEventListener('keydown', (e)=>{
    if(e.code === 'Space'){ e.preventDefault(); running? pause(): start(); }
    if(e.key.toLowerCase() === 'r'){ reset(); }
  });

  // Initialize
  setMode('work', true);
  updateDisplay();
})();
