# To-Do List App

A simple browser-based to-do list application built with HTML, CSS and JavaScript.

Contents
- `index.html` — the app UI (input, add button, list)
- `style.css` — styles for the app
- `script.js` — client-side logic for creating, deleting and persisting tasks
- `static/` and `templates/` — (optional) supporting files or templates if present

Run locally
- Double-click `index.html` inside the `To Do` folder, or from PowerShell:

```powershell
Start-Process -FilePath 'c:\Users\kehin\Documents\Web Tutorial\To Do\index.html'
```

How it works
- Add a task in the input and click Add — the item appears in the list.
- Use the UI buttons (if implemented) to edit or delete tasks.

Notes & tips
- This is a static client-side app. If you want persistence across browsers or devices, add a backend (API + database) or export/import tasks.
- If you rename the folder (recommended: remove spaces, e.g. `todo`), update links that point to it. In HTML hrefs replace `To%20Do` with the new folder name.

Testing
- Try adding, editing and deleting tasks. Refresh the page to confirm whether tasks persist (depending on implementation it may use localStorage).

Next steps
- Add task editing, filtering (completed/active), and localStorage persistence if not present.
- Improve keyboard accessibility (Enter to add, arrow navigation).

If you want, I can add a README copy into a `docs/` folder for hosting, or rename the folder to `todo` across the project and update the portfolio links.
