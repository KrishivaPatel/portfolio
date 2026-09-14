# Portfolio site

## Editing

**Everything you change lives in `content.js`.** Open it, edit the text, save, reload.
You never need to touch `index.html`.

### Add an image or PDF
1. Put the file in `images/`
2. Find the project in `content.js` and add it to that project's `media` array:
   ```js
   media: [
     { src: "images/injector-face.png", caption: "Injector face, shear coaxial elements" }
   ]
   ```
3. Save, reload.

An empty `media: []` shows a dashed placeholder box, so unfinished sections still look intentional.

### Add a project
Copy any existing block in the `projects` array and change the fields.
`id` must be unique and lowercase with no spaces; it becomes the anchor link and
the side index entry. Order in the array is the order on the page.

### Add your resume
Put the PDF next to `index.html`, then set in `content.js`:
```js
resume: "Krishiv_Patel_Resume.pdf"
```

## Viewing locally
Open a terminal in this folder and run:
```
python3 -m http.server
```
Then visit http://localhost:8000

Opening `index.html` directly by double-clicking also works in most browsers.

## Publishing on GitHub Pages
1. Make a repo. Naming it `yourusername.github.io` gets you a clean root URL.
2. Push these files to the `main` branch.
3. Repo Settings → Pages → Source: `main`, folder: `/ (root)` → Save.
4. Live in a minute or two.

No build step, no dependencies. Static files only.
