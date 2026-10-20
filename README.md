# Karim Merhi — Portfolio

Personal portfolio site. React + Vite, deployed to GitHub Pages at
<https://Merhii.github.io/Karim-Merhi/>.

## Running it

```sh
npm install
npm run dev      # http://localhost:5173/Karim-Merhi/
npm run build
npm run lint
```

## Deploying

```sh
npm run deploy   # builds, then pushes dist/ to the gh-pages branch
```

The site is served from a subpath, so `base` in `vite.config.js` must stay in
sync with the repo name.

## Layout

```
src/
  App.jsx                  Hero · Experience · Projects · Skills · Footer
  assets/common/           ThemeContext, ProjectCard, ExperienceItem, SkillList
  sections/<Name>/         one component + one CSS module per section
```

Content lives in the components themselves — roles in
`sections/Experience/Experience.jsx`, project cards in
`sections/Projects/Projects.jsx`. The resume PDF linked from the hero is
`assets/Karim-Merhi-Resume.pdf`.

Light/dark theming runs on CSS custom properties defined in `App.css` and
toggled by `ThemeContext`, which persists the choice to `localStorage`.
