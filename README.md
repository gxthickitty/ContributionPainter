<img width="890" height="362" alt="image" src="https://github.com/user-attachments/assets/545ed7b1-da86-4267-af24-ce40c5f61f6a" />


---

## Overview

GitHub Contribution Painter allows you to "paint" your GitHub contribution graph directly from your browser. You design pixel art on a 52x7 grid, and the backend automatically generates commits for each painted cell, turning your design into actual GitHub activity. This eliminates the need to juggle multiple confusing Python or shell scripts online.

---

## Full Step-by-Step Guide

This guide assumes you want to start completely from scratch, including creating a new repository on GitHub.

### 1. Create a New GitHub Repository

1. Go to [GitHub](https://github.com/) and log in.
2. Click **New repository**.
3. Give your repository a name, for example: `contribution-art`.
4. Choose **Public** or **Private**, as you prefer.
5. **Do NOT** initialize with a README, .gitignore, or license- we will handle the first commit manually.
6. Click **Create repository**.

---

### 2. Clone the Repository Locally

Open your terminal and run:

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

Replace `<your-username>` and `<repo-name>` with your GitHub username and repository name.

---

### 3. Add a Placeholder File

Git requires at least one file to create commits. We'll use a simple text file called `pt.txt`:

```bash
echo "Placeholder for GitHub art commits" > pt.txt
git add pt.txt
git commit -m "Initial commit with placeholder file"
```

This file will be updated repeatedly by the painter script to generate additional commits.

---

### 4. Push the Initial Commit

Push the repository to GitHub so your placeholder file exists online:

```bash
git push origin main
```

> Note: If your repository uses `master` instead of `main`, replace `main` with `master`.

---

### 5. Download or Clone the Painter Tool

You can clone this repository (the one containing `index.html` and `server.js`) somewhere else on your machine:

```bash
git clone https://github.com/<your-username>/github-contribution-painter.git
cd github-contribution-painter
```

---

### 6. Install Dependencies

This project requires Node.js. Install the necessary packages:

```bash
npm install express moment
```

---

### 7. Start the Painter Server

Run the server:

```bash
node server.js
```

You should see a message like:

```
Server running at http://localhost:3000
```

---

### 8. Open the Painter in Your Browser

Navigate to `http://localhost:3000`. You will see a 52x7 grid representing your GitHub contributions for the past year.

---

### 9. Paint Your Contribution Art

- **Left-click & drag**: Paint and increase intensity.  
- **Right-click**: Erase a cell.  
- **Clear button**: Reset the canvas to empty.

Intensity levels correspond to GitHub's contribution shades:

- Level 1: 2 commits  
- Level 2: 5 commits  
- Level 3: 10 commits  
- Level 4: 15 commits  

---

### 10. Generate Commits

Once your design is ready, click **Generate Commits**. The backend will:

1. Loop through all painted cells.
2. Modify `pt.txt` for each commit.
3. Create commits with the correct date so that your GitHub graph reflects the design.
4. Use Windows `cmd.exe` to set `GIT_AUTHOR_DATE` and `GIT_COMMITTER_DATE` (Linux/macOS users may need to adjust the commands).

---

### 11. Push Your Art to GitHub

After commit generation completes:

```bash
git push origin main
```

Check your GitHub profile to see your new contribution art!

---

### 12. Notes & Tips

- **Repository must have at least one file** (`pt.txt`) before generating commits.  
- Ensure your Git working directory is clean; avoid other uncommitted changes.  
- Windows users: Uses `cmd.exe` for environment variables.  
- Linux/macOS users: Adjust `execSync` commands:

```bash
GIT_AUTHOR_DATE="$date" GIT_COMMITTER_DATE="$date" git commit -am "gxthickitty art contribution"
```

- The placeholder file (`pt.txt`) can be anything; it’s only used to generate commits.  

---

## How It Works

- Each grid cell has a **level** 0–4.  
- Levels map to commit counts `[0, 2, 5, 10, 15]`.  
- Backend loops through all painted pixels, modifies `pt.txt`, and commits the changes with the correct date.  
- This automates what would otherwise require multiple Python or shell scripts, making it a one-stop solution for GitHub contribution art.

---

## License

As long as you credit me within inspiration/code-base credits, you're welcome to improve and add features as you see fit.     
What I do not wish to see is this code to be in any way paid-walled by malicious actors.   
IT IS MEANT TO BE FREE FOR USE.  


