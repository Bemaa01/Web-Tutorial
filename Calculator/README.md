# Calculator

Simple calculator app (HTML/CSS/JS) supporting basic arithmetic with keyboard support.

Contents
- `index.html` — calculator UI and layout
- `style.css` — styles for display and keys
- `script.js` — logic for input, safe evaluation, keyboard handling

Run locally
- Open `index.html` in your browser, or from PowerShell:

```powershell
Start-Process -FilePath 'c:\Users\kehin\Documents\Web Tutorial\Calculator\index.html'
```

Features
- Clickable keys for numbers and operators.
- Keyboard support: numbers, operators (+ - * /), Enter = evaluate, Backspace = delete, C = clear.
- Basic input validation: script only allows digits, operators, parentheses, decimal and spaces before evaluation.

Testing
- Try calculations (e.g., `12+34`, `3*(2+5)`, `10/3`), check decimal results and error handling (invalid input shows `Error`).

Notes
- Evaluation uses a validated expression and the Function constructor — acceptable for local static apps. For production or untrusted input, replace with a proper expression parser.

Next steps
- Add history, memory buttons (M+/MR/MC), or persistent last result via localStorage.

