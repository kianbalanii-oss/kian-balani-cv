# Kian Balani — Personal CV Website

A responsive personal CV and portfolio website for **Kian Balani**, a fourth-year Bachelor of Science in Information Technology student based in Panabo City, Philippines.

## Features

- Personal profile, introduction, and career objective
- Education timeline
- Technical and professional skills
- Academic project showcase
- Experience and achievements section
- GitHub and email links
- Mobile navigation menu
- Scroll-based reveal animations and reading progress indicator
- Responsive layout for desktop, tablet, and mobile
- Reduced-motion accessibility support
- No build tools or dependencies required

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, custom properties, responsive media queries)
- Vanilla JavaScript
- Git and GitHub
- Vercel for deployment

## Run locally

This is a static website. You can open `index.html` directly in your browser, or use the Live Server extension in Visual Studio Code.

## Personalize before publishing

1. Replace `assets/profile-placeholder.svg` with a professional photo. Update the image path in `index.html` if you use a different filename.
2. Verify the email address in `index.html` before publishing. Update both `mailto:` links if needed.
3. Add your actual senior high school, strand, and graduation year.
4. Review the listed skills and keep only those you can explain.
5. Replace the project links with the correct repositories or live demos.
6. Add verified certificates, awards, or LinkedIn only if you have them.
7. Check all information for accuracy before sharing the public URL.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import your CV website repository from GitHub.
4. Since this is a static HTML/CSS/JS project, no framework preset or build command is required. Leave the build command blank if Vercel detects one; set the output directory to `.` if requested.
5. Click **Deploy** and wait for the deployment to finish.
6. Open the generated `.vercel.app` URL and test every section and link.
7. Test the site at desktop and mobile widths.

## Suggested meaningful commit history

Use these as a suggested sequence while you actually build and test the project. Do not create all commits as fake history after the fact.

```bash
git add index.html style.css script.js assets/profile-placeholder.svg
git commit -m "Initial commit: create CV website structure"

git add index.html
git commit -m "Add personal profile and education content"

git add index.html style.css
git commit -m "Build skills and academic project sections"

git add style.css script.js
git commit -m "Add responsive layout and scroll animations"

git add README.md
git commit -m "Document project setup and deployment"

git add .
git commit -m "Polish CV content and prepare Vercel deployment"
```

Only make a commit when you have made and checked the corresponding changes. If a commit has no new changes, Git will report that there is nothing to commit.

## Student Information

- **Name:** Kian Balani
- **Program:** Bachelor of Science in Information Technology
- **Year Level:** 4th Year
- **Location:** Panabo City, Philippines
- **GitHub:** https://github.com/kianbalanii-oss
- **Live Website:** Add your Vercel URL after deployment

## License

Created as an academic personal portfolio project. Replace placeholders with accurate personal information before publication.
