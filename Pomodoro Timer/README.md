# Pomodoro Timer

A lightweight Pomodoro timer with Work / Short Break / Long Break modes built with HTML, CSS and JavaScript.

Contents
- `index.html` — UI (modes, display, controls, settings)
- `style.css` — styles for the timer card and layout
- `script.js` — timer logic (start/pause/reset, auto-next option, keyboard shortcuts)

Run locally
- Open `index.html` in your browser or run from PowerShell:

```powershell
Start-Process -FilePath 'c:\Users\kehin\Documents\Web Tutorial\Pomodoro Timer\index.html'
```

Features
- Start / Pause / Reset controls
- Mode selection: Work, Short Break, Long Break
- Configurable durations (in minutes) via inputs
- Auto-start-next toggle to start the next period automatically
- Keyboard shortcuts: Space toggles Start/Pause, R resets
- Small beep at the end of a period (Web Audio API)

Testing
- Set short durations to test quickly (e.g., 1 or 2 minutes) and verify the countdown, pause and reset functions.

Notes
- The beep uses the Web Audio API and may be blocked by browsers until the page receives a user interaction.
- If you want cycles (long break after N work sessions) or persistent settings, I can add those features.

Next steps
- Persist user settings to localStorage.
- Add cycle counting (e.g., long break every 4 work sessions).
