<img width="890" height="362" alt="GitHub Contribution Painter" src="https://github.com/user-attachments/assets/545ed7b1-da86-4267-af24-ce40c5f61f6a" />

# GitHub Contribution Painter
Transform your GitHub contribution graph into pixel art directly from your browser. Design on a 52x7 grid, and the tool automatically generates dated commits to paint your graph.

---

## Prerequisites
- **Node.js** (v14 or later), [Download here](https://nodejs.org/)
- **Git** installed and configured
- A **GitHub account** and a personal access token (optional, for easier pushes)
- Basic terminal/command line familiarity

---

## Quick Start

### 1. Repository Setup
Create a **new, empty** GitHub repo (no README, .gitignore, or license). Then:
```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
echo "Art placeholder" > pt.txt
git add pt.txt && git commit -m "init"
git push origin main  # or master
```
### 2. Tool Setup

Clone and install the painter:
```bash
git clone https://github.com/<painter-repo-owner>/github-contribution-painter.git
cd github-contribution-painter
npm install express moment
```

### 3. Run & Paint

Start the server:
```bash
node server.js
```
Open ``http://localhost:3000`` in your browser.

    Left-click/drag: Paint (intensity 1–4)

    Right-click: Erase

    Clear: Reset canvas

Intensity levels:

    1 = 2 commits

    2 = 5 commits

    3 = 10 commits

    4 = 15 commits

### 4. Generate & Push

Click Generate Commits – this creates local commits with correct dates.   
Manually push to GitHub:
```bash
cd ../<your-art-repo>
git push origin main
```
> Commits are not pushed automatically.

---
### Notes

- Uses pt.txt as a placeholder file for commit generation.
- Windows: Uses cmd.exe for date env vars. Linux/macOS users may need to adjust server.js (see code comments).
- Keep your art repo clean—no uncommitted changes before generating.
- The grid represents the past year (52 weeks × 7 days).

### How It Works

The backend loops through painted cells, modifies `pt.txt` for each required commit, and uses `GIT_AUTHOR_DATE/GIT_COMMITTER_DATE` to backdate commits. This mimics natural GitHub activity.


### License
Free to use and modify as long as you credit the original author. Do not paywall.
