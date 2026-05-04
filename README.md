# Karim El Yaagoubi — Portfolio

A clean, fast, single-page portfolio for **Karim El Yaagoubi**, Software Engineer specializing in Flutter, Spring Boot, and Semantic Web technologies.

- **Theme:** Red & black, engineering aesthetic
- **Stack:** Plain HTML, CSS, and JavaScript (no build step, no dependencies)
- **Hosting:** GitHub Pages ready

## Files

```
portfolio/
??? index.html      # Page structure
??? styles.css      # Theme, layout, animations
??? script.js       # Nav, reveal-on-scroll, card spotlight
??? favicon.svg     # Site icon
??? resume.pdf      # Downloadable résumé (linked from the site)
??? .nojekyll       # Tells GitHub Pages to serve files as-is
??? README.md
```

## Run locally

Just open `index.html` in your browser.

For a more accurate preview (relative paths, fonts, etc.) serve it locally:

```bash
# Python 3
python -m http.server 8080

# or, with Node
npx serve .
```

Then visit <http://localhost:8080>.

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio` or `karim.github.io`).
2. Push the contents of this folder to the `main` branch:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```

3. On GitHub, go to **Settings ? Pages**.
4. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `/ (root)`
5. Save. GitHub will publish the site at:
   - `https://<your-username>.github.io/<repo>/`
   - or `https://<your-username>.github.io/` if you named the repo `<your-username>.github.io`.

The `.nojekyll` file ensures GitHub Pages serves the assets directly without Jekyll preprocessing.

## Customizing

- **Colors** — edit the CSS variables at the top of `styles.css` (`--red`, `--bg`, etc.).
- **Content** — all text lives in `index.html`. Update the hero, projects, skills, education, and contact sections directly.
- **Résumé** — replace `resume.pdf` to update the downloadable file.
- **Favicon** — replace `favicon.svg` with your preferred icon.

## License

Personal portfolio © Karim El Yaagoubi.
