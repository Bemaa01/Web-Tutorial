# Personal Portfolio

Simple, static personal portfolio built with HTML, CSS and JavaScript. Use this folder to showcase projects and contact information.

Contents
- `index.html` — main page with header, hero, about, projects, contact and footer.
- `style.css` — site styles (responsive, variables).
- `script.js` — small interactive behaviour (nav toggle, theme toggle, contact demo).

Run locally
- Double-click `index.html`, or from PowerShell run:

```powershell
Start-Process -FilePath 'c:\Users\kehin\Documents\Web Tutorial\Personal Portfolio\index.html'
```

Quick edits
- Replace the placeholder name, email and text directly inside `index.html`.
- Update project cards in the `Projects` section to point to your local projects (for example the To-Do app: `../To%20Do/index.html`, Calculator: `../Calculator/index.html`, Pomodoro: `../Pomodoro Timer/index.html`).

Notes
- Folder names with spaces must be percent-encoded in links (space → `%20`) when used in href attributes. For example: `../To%20Do/index.html`.
- To host the site, place the folder on any static host (GitHub Pages, Netlify) or serve it with a simple static server.

Next improvements
- Add real content and images in an `assets/` folder.
- Add metadata (OpenGraph) and accessibility improvements where needed.

If you want, I can automatically add project cards that link to the Calculator and Pomodoro apps in this portfolio.
