# Learning Version Control with Git & GitHub
### A Hands-On Tutorial Using a Small HTML/CSS Project

---

## How This Document Works

You will build a tiny one-page HTML/CSS website ("My Profile Card") and use it as a
sandbox to practice **every core Git/GitHub skill**: repository setup, commits
(check-in/check-out), pushing to GitHub, deployment, branching, merge conflicts,
merging, tags, and reverting changes.

**Prerequisites**
- Git installed (`git --version` to check)
- A free GitHub account
- A code editor (VS Code recommended)
- Basic comfort with a terminal

**Conventions used below**
- Lines starting with `$` are terminal commands (don't type the `$`)
- `<your-username>` means replace with your actual GitHub username

---

## Table of Contents

1. [What Is Version Control, Really?](#1-what-is-version-control-really)
2. [Setting Up the Project](#2-setting-up-the-project)
3. [Git Basics: Init, Check-in, Check-out](#3-git-basics-init-check-in-check-out)
4. [Accessing & Deploying Source Code on GitHub](#4-accessing--deploying-source-code-on-github)
5. [Branching Strategy Basics](#5-branching-strategy-basics)
6. [Merging](#6-merging)
7. [Merge Conflicts](#7-merge-conflicts)
8. [Tags & Releases](#8-tags--releases)
9. [Reverting Changes](#9-reverting-changes)
10. [Putting It All Together: A Realistic Workflow](#10-putting-it-all-together-a-realistic-workflow)
11. [Cheat Sheet](#11-cheat-sheet)
12. [Practice Exercises](#12-practice-exercises)

---

## 1. What Is Version Control, Really?

Version control is a system that records changes to files over time so you can:

- **Recall** any previous version of your project
- **Compare** changes between versions
- **Collaborate** with others without overwriting each other's work
- **Undo mistakes** safely

**Git** is the version control *tool* — it runs on your computer and tracks changes
locally. **GitHub** is a *hosting service* for Git repositories — it stores a copy of
your repository online so others (and other computers) can access it, and adds
collaboration features like Pull Requests, Issues, and Pages hosting.

> Analogy: Git is like the "track changes" and "save version" engine inside a word
> processor. GitHub is like Google Drive — a place to store that document online and
> share it with others.

### Key vocabulary you'll meet in this doc

| Term | Meaning |
|---|---|
| Repository (repo) | A folder tracked by Git, containing your project + its history |
| Commit | A saved snapshot of your project at a point in time |
| Working directory | The files you're currently editing |
| Staging area (index) | A holding area for changes you're about to commit |
| Remote | A version of your repo hosted elsewhere (e.g., GitHub) |
| Branch | An independent line of development |
| HEAD | A pointer to your current position (usually the tip of a branch) |

---

## 2. Setting Up the Project

We'll build a tiny "Profile Card" page — just enough HTML/CSS to have something
real to version.

```bash
$ mkdir profile-card && cd profile-card
```

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Profile Card</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h1>Jordan Rivera</h1>
    <p class="role">Frontend Developer</p>
    <p class="bio">I build clean, accessible web interfaces.</p>
  </div>
</body>
</html>
```

Create `style.css`:

```css
body {
  font-family: sans-serif;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  text-align: center;
}

.role {
  color: #555;
  font-weight: bold;
}
```

Open `index.html` in a browser to confirm it works. This two-file project is our
playground for the rest of the tutorial.

---

## 3. Git Basics: Init, Check-in, Check-out

### 3.1 Initialize a repository

```bash
$ git init
```

This creates a hidden `.git` folder — this *is* the repository. Nothing is tracked
yet.

### 3.2 Configure your identity (once per machine)

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "you@example.com"
```

### 3.3 Check status

```bash
$ git status
```

Git will show `index.html` and `style.css` as **untracked**.

### 3.4 "Check-in" your code (stage + commit)

In Git, what many other systems call "check-in" is a **two-step process**:

1. **Stage** the changes you want to save (`git add`)
2. **Commit** them to history (`git commit`)

```bash
$ git add index.html style.css
# or stage everything in the folder:
$ git add .

$ git commit -m "Initial commit: basic profile card layout"
```

Each commit has a unique ID (a SHA hash), an author, a timestamp, and a message.
Run `git log` to see it:

```bash
$ git log
```

### 3.5 "Check-out" your code (retrieving a version)

"Check-out" in Git means **switching your working directory to match a specific
commit or branch**.

```bash
# See existing branches
$ git branch

# Check out (switch to) an existing branch
$ git checkout main
# Modern Git also supports:
$ git switch main

# Check out a specific past commit (read-only "time travel")
$ git checkout <commit-hash>

# Return to the latest commit on your branch
$ git checkout main
```

> **Tip:** `git checkout <commit-hash>` puts you in a "detached HEAD" state — you're
> viewing history, not editing it. To make new changes from that point, create a
> branch there first: `git checkout -b explore-old-version <commit-hash>`.

### 3.6 A second commit — practicing the cycle

Add a footer to `index.html`:

```html
  <footer>
    <p>&copy; 2026 Jordan Rivera</p>
  </footer>
```

Then:

```bash
$ git status                     # see the change
$ git diff                       # see exactly what changed, line by line
$ git add index.html
$ git commit -m "Add footer with copyright"
```

You now have two commits — a real history you can browse, compare, or return to.

---

## 4. Accessing & Deploying Source Code on GitHub

### 4.1 Create a remote repository

1. On GitHub, click **New repository**
2. Name it `profile-card`, leave it empty (no README/license — we already have code)
3. Copy the repository URL, e.g. `https://github.com/<your-username>/profile-card.git`

### 4.2 Connect your local repo to GitHub and push

```bash
$ git remote add origin https://github.com/<your-username>/profile-card.git
$ git branch -M main
$ git push -u origin main
```

`origin` is just the conventional nickname for your primary remote. `-u` sets
`origin main` as the default upstream, so future pushes only need `git push`.

### 4.3 Accessing (cloning) the code elsewhere

Anyone with access can get a full working copy — history included — with:

```bash
$ git clone https://github.com/<your-username>/profile-card.git
```

To pull *new* changes into a repo you already cloned:

```bash
$ git pull origin main
```

`git pull` is really `git fetch` (download new history) + `git merge` (integrate
it) in one step.

### 4.4 Deploying with GitHub Pages

GitHub can serve static HTML/CSS/JS directly from your repository — perfect for
this project.

1. Push your code to GitHub (done above)
2. On GitHub: **Settings → Pages**
3. Under **Source**, choose the `main` branch and `/ (root)` folder → **Save**
4. GitHub gives you a live URL, typically:
   `https://<your-username>.github.io/profile-card/`

Every time you `git push` new commits to `main`, GitHub Pages automatically
redeploys the updated site within a minute or two. This is your first taste of a
**deployment pipeline** driven entirely by Git.

---

## 5. Branching Strategy Basics

A branch is an independent line of development. The `main` branch typically holds
stable, deployable code; new work happens on separate branches so `main` is never
broken.

### 5.1 Create and switch to a feature branch

```bash
$ git checkout -b feature/add-social-links
```

This creates the branch **and** switches to it in one command.

### 5.2 Make a change on the branch

Add to `index.html`:

```html
  <div class="social">
    <a href="#">GitHub</a> | <a href="#">LinkedIn</a>
  </div>
```

```bash
$ git add index.html
$ git commit -m "Add social links section"
$ git push -u origin feature/add-social-links
```

Your `main` branch on GitHub is untouched — the new code lives only on
`feature/add-social-links` until it's merged.

### 5.3 Common branching strategies (know the names)

| Strategy | Idea | Good for |
|---|---|---|
| **Feature branching** | One branch per feature/fix, merged into `main` via Pull Request | Most small-to-medium teams |
| **Git Flow** | Long-lived `main` (production) + `develop` (integration), plus `feature/*`, `release/*`, `hotfix/*` branches | Scheduled releases, larger teams |
| **Trunk-based development** | Everyone commits small, frequent changes directly (or via very short-lived branches) to `main`/`trunk` | Teams with strong CI/CD and testing |
| **GitHub Flow** | `main` is always deployable; every change is a short-lived branch + Pull Request + merge | Continuous deployment, web apps |

For this tutorial's scale, think **GitHub Flow**: branch → commit → push →
Pull Request → review → merge → deploy.

### 5.4 Naming conventions worth adopting

```
feature/short-description
fix/short-description
hotfix/short-description
chore/short-description
```

---

## 6. Merging

Merging integrates the history of one branch into another.

### 6.1 Merge via GitHub (recommended for teams — Pull Requests)

1. On GitHub, open your repo → you'll see a prompt to **Compare & pull request**
   for `feature/add-social-links`
2. Fill in a title/description, click **Create pull request**
3. Review the diff, then click **Merge pull request** → **Confirm merge**

This is the real-world workflow: Pull Requests let teammates review code, run
automated checks (CI), and discuss changes *before* they land in `main`.

### 6.2 Merge locally (good to understand what's happening underneath)

```bash
$ git checkout main
$ git pull origin main                       # make sure main is current
$ git merge feature/add-social-links
$ git push origin main
```

### 6.3 Fast-forward vs. three-way merge

- **Fast-forward merge**: if `main` hasn't changed since you branched, Git simply
  moves the `main` pointer forward — no merge commit needed.
- **Three-way merge**: if both branches have new commits, Git creates a new
  **merge commit** with two parents, combining both histories.

```bash
# See it visually
$ git log --oneline --graph --all
```

### 6.4 Clean up after merging

```bash
$ git branch -d feature/add-social-links          # delete local branch
$ git push origin --delete feature/add-social-links  # delete remote branch
```

---

## 7. Merge Conflicts

A conflict happens when Git can't automatically decide how to combine changes —
usually because **two branches edited the same lines** of the same file.

### 7.1 Deliberately create a conflict (great learning exercise)

**Step 1 — On `main`, change the heading:**

```bash
$ git checkout main
```
Edit `index.html`, change:
```html
<h1>Jordan Rivera</h1>
```
to:
```html
<h1>Jordan Rivera — Web Developer</h1>
```
```bash
$ git add index.html
$ git commit -m "Update heading with title"
$ git push origin main
```

**Step 2 — On a new branch, change the *same line* differently:**

```bash
$ git checkout -b feature/rename-heading main~1
```
(`main~1` checks the branch out from *before* your last commit, guaranteeing a
collision.) Edit the same line to:
```html
<h1>Jordan Rivera, Frontend Engineer</h1>
```
```bash
$ git add index.html
$ git commit -m "Rename heading to Frontend Engineer"
```

**Step 3 — Try to merge:**

```bash
$ git checkout main
$ git merge feature/rename-heading
```

Git will output something like:

```
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

### 7.2 Resolving the conflict

Open `index.html` — Git has inserted conflict markers:

```html
<<<<<<< HEAD
<h1>Jordan Rivera — Web Developer</h1>
=======
<h1>Jordan Rivera, Frontend Engineer</h1>
>>>>>>> feature/rename-heading
```

- Everything between `<<<<<<< HEAD` and `=======` is **your current branch's version**
- Everything between `=======` and `>>>>>>> feature/rename-heading` is the
  **incoming branch's version**

Decide what the final content should be — you can keep one side, the other, or
blend both — then **delete the markers entirely**:

```html
<h1>Jordan Rivera — Frontend Engineer</h1>
```

Then finish the merge:

```bash
$ git add index.html
$ git commit -m "Merge feature/rename-heading, resolve heading conflict"
$ git push origin main
```

### 7.3 If you want to back out of a conflict instead

```bash
$ git merge --abort
```
This safely returns you to the state before the merge attempt.

### 7.4 Tips to avoid conflicts

- Pull/merge `main` into your feature branch **often** so it doesn't drift far
- Keep branches short-lived and focused on one change
- Communicate with teammates about who's touching which files

---

## 8. Tags & Releases

Tags mark a specific commit as significant — typically a **release** (`v1.0.0`).
Unlike branches, tags don't move as new commits are added.

### 8.1 Lightweight vs. annotated tags

```bash
# Lightweight tag — just a name pointing at a commit
$ git tag v0.1

# Annotated tag — stores tagger name, date, and a message (recommended)
$ git tag -a v1.0.0 -m "First public release of profile card"
```

### 8.2 List and inspect tags

```bash
$ git tag
$ git show v1.0.0
```

### 8.3 Push tags to GitHub

Tags are **not** pushed automatically with `git push`:

```bash
$ git push origin v1.0.0
# or push all tags at once:
$ git push origin --tags
```

### 8.4 Turn a tag into a GitHub Release

On GitHub: **Releases → Draft a new release** → choose your tag (`v1.0.0`) →
add release notes → **Publish release**. This gives users a downloadable
snapshot and changelog for that exact version.

### 8.5 Checking out a tag

```bash
$ git checkout v1.0.0
```
(Detached HEAD again — create a branch if you want to build from this point.)

### 8.6 Deleting a tag (if you made a mistake)

```bash
$ git tag -d v0.1
$ git push origin --delete v0.1
```

---

## 9. Reverting Changes

Git gives you several tools for undoing work — each behaves differently, so
picking the right one matters.

| Command | What it does | Rewrites history? | Safe on shared/pushed branches? |
|---|---|---|---|
| `git checkout -- <file>` / `git restore <file>` | Discards **uncommitted** changes to a file | No | Yes |
| `git reset --soft <commit>` | Moves branch pointer back, keeps changes staged | Yes | No |
| `git reset --hard <commit>` | Moves branch pointer back, **discards** changes | Yes | No |
| `git revert <commit>` | Creates a **new commit** that undoes a previous one | No (adds history) | Yes |

### 9.1 Discard an uncommitted mistake

```bash
$ git restore index.html
# older Git:
$ git checkout -- index.html
```

### 9.2 Undo the last commit but keep the edits staged

```bash
$ git reset --soft HEAD~1
```
Useful when you committed too early and want to add more before re-committing.

### 9.3 Safely undo a pushed commit: `git revert`

This is the **preferred way to undo work that's already on a shared branch**,
because it doesn't rewrite history — it adds a new commit that reverses the
change, which is safe for collaborators who already pulled.

```bash
$ git log --oneline
# suppose the footer commit is a1b2c3d
$ git revert a1b2c3d
```

Git opens an editor for the revert commit message — save and close it. The
footer is now removed, and both the original commit *and* the revert are
visible in history (nothing is hidden or lost).

```bash
$ git push origin main
```

### 9.4 When `git reset --hard` is appropriate

Only on **local, unpushed** commits you're certain you want to throw away:

```bash
$ git reset --hard HEAD~1     # danger: deletes uncommitted work permanently
```

> **Rule of thumb:** If the commit has already been pushed and others might have
> it, use `git revert`. If it's purely local and unshared, `git reset` is fine.

### 9.5 Viewing history to decide what to revert

```bash
$ git log --oneline --graph --decorate
$ git diff HEAD~2 HEAD          # compare two points in history
```

---

## 10. Putting It All Together: A Realistic Workflow

Here's the full lifecycle, using everything above, as you'd actually do it on a
small team:

```bash
# 1. Start from an up-to-date main
$ git checkout main
$ git pull origin main

# 2. Branch for new work
$ git checkout -b feature/add-contact-button

# 3. Edit files, then check in your work
$ git add .
$ git commit -m "Add contact button to profile card"

# 4. Push the branch and open a Pull Request on GitHub
$ git push -u origin feature/add-contact-button

# 5. Reviewer merges the PR on GitHub (or you merge locally)
$ git checkout main
$ git pull origin main       # brings in the merged PR

# 6. GitHub Pages auto-redeploys the live site

# 7. Tag a release once things are stable
$ git tag -a v1.1.0 -m "Add contact button"
$ git push origin v1.1.0

# 8. If something in the release breaks, revert safely
$ git revert <bad-commit-hash>
$ git push origin main

# 9. Clean up merged branches
$ git branch -d feature/add-contact-button
$ git push origin --delete feature/add-contact-button
```

---

## 11. Cheat Sheet

```bash
# Setup
git init                          # start a new repo
git clone <url>                   # copy an existing repo
git config --global user.name ""  # set identity
git config --global user.email "" # set identity

# Check-in (stage + commit)
git status                        # what's changed
git diff                          # line-by-line changes
git add <file>                    # stage a file
git add .                         # stage everything
git commit -m "message"           # save a snapshot

# Check-out
git checkout <branch>             # switch branches
git switch <branch>                # modern alternative
git checkout <commit-hash>        # view an old commit
git checkout -b <new-branch>      # create + switch

# Remote / GitHub
git remote add origin <url>
git push -u origin main
git push                          # subsequent pushes
git pull origin main              # fetch + merge

# Branching & merging
git branch                        # list branches
git branch -d <branch>            # delete local branch
git merge <branch>                # merge into current branch
git merge --abort                 # bail out of a conflicted merge
git log --oneline --graph --all   # visualize history

# Tags
git tag -a v1.0.0 -m "message"
git push origin v1.0.0
git push origin --tags

# Reverting
git restore <file>                # discard uncommitted change
git reset --soft HEAD~1           # undo commit, keep changes staged
git reset --hard HEAD~1           # undo commit, discard changes (local only!)
git revert <commit-hash>          # safely undo a shared/pushed commit
```

---

## 12. Practice Exercises

Work through these in order, using the `profile-card` project:

1. **Check-in practice**: Add a new `<p>` tag with a fun fact about yourself.
   Stage and commit it with a clear message.
2. **Deploy**: Confirm your change appears on your GitHub Pages URL after pushing.
3. **Branching**: Create `feature/dark-mode`, add a dark background color option
   in `style.css`, commit, and push the branch (don't merge yet).
4. **Conflict**: On `main`, change the `.card` background color. On
   `feature/dark-mode`, change the same property to a different value. Merge
   and resolve the conflict manually.
5. **Merge**: Open a Pull Request for `feature/dark-mode` on GitHub and merge it.
6. **Tag**: Once merged and deployed, tag the commit `v1.0.0` and publish it as
   a GitHub Release.
7. **Revert**: Intentionally commit a typo (e.g., break the HTML), push it,
   notice the site is broken on GitHub Pages, then use `git revert` to fix it
   without deleting history.
8. **Reflect**: Run `git log --oneline --graph --all` and identify: your initial
   commit, your merge commit, your conflict resolution commit, your revert
   commit, and your tag.

---

### Where to go next

- Practice **Pull Request reviews** with a friend or classmate on this same repo
- Explore `.gitignore` for excluding build files/secrets from version control
- Learn `git rebase` (an alternative to merging — rewrites branch history for a
  cleaner, linear log; use with care on shared branches)
- Look into GitHub Actions for automated testing/deployment on every push
