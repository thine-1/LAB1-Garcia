1. Setting Identity & Initializing

git config --global user.name "Your Name"
Configures the author name attached to all your Git commits across your system.

git config --global user.email "your.email@example.com"
Configures the email address attached to your Git commits (matching your GitHub account).

mkdir dynamic-webpage
Creates a new local directory (folder) for your project files.

cd dynamic-webpage
Navigates your terminal inside the newly created project folder.

code .
Opens the current project folder directly in Visual Studio Code.

git init
Initializes a brand-new, empty local Git repository inside your project directory.

2. Staging & Committing Files

git add index.html / git add .
Adds changed or new files to the staging area, preparing them to be included in the next commit.

git commit -m "commit message"
Saves a snapshot of your staged files into Git history with a descriptive message.

git status
Displays the state of your working directory and staging area (shows modified, untracked, or staged files).

git commit --amend --no-edit
Updates your previous commit by including newly staged changes without altering the original commit message.

3. Branching & Navigation

git branch
Lists all local branches in your repository and highlights the one you are currently on.

git branch no-style
Creates a new branch named no-style from your current commit to keep the plain HTML version intact.

git branch -m master main
Renames your local master branch to main so it matches standard GitHub branch naming conventions.

git checkout main
Switches your active working environment to the main branch.

4. Remote GitHub Configuration & Pushing

git remote add origin <URL>
Links your local Git repository to a remote repository URL on GitHub for the first time.

git remote set-url origin [https://github.com/thine-1/LAB1-Garcia.git](https://github.com/thine-1/LAB1-Garcia.git)
Updates the destination address of origin to match your actual GitHub repository name (LAB1-Garcia).

git remote -v
Displays the current remote fetch and push URLs associated with your local repository.

git push -u origin main
Uploads the main branch to GitHub and sets origin/main as the default remote tracking target.

git push -u origin no-style
Uploads the no-style branch to GitHub so both versions are preserved in your online repository.
