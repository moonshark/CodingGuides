# GIT Commands

## Branches

Create New Branch
```
git branch [branch name]
```

Check the status
```
git status
```

Move to another branch
```
git checkout [branch name]
```
Commit to branch
```
git commit -a -m “getting started”
```

Checkout branch
```
git checkout -b  [branch name]
```
View all branches
```
git branch
```

Delete Branch. Cannot delete whilst in branch
```
git branch -D [branch name]
```

See what has been done on the branch
```
git log 
```

## Merging

Go into branch want to be merged into.

Merge branch
```
git merge [branch name]
```

## Conflicts

This is the master branch or main branch content
```
<<< HEAD 
This is some text
======
```
Below this is the changes that have been made and been in conflict with the main branch
```
======
This is another change of text
>>> [branch name]
```

## Remotes

* This is called cloning a repo. Able to work on the code whilst someone else can.
* Push or Change from a repo when working with other people.

## Cloning

This is a way to pull the code from a central repo to be able to work on your own machine. This makes a copy without changing it at all.

Clone a Repo from a URL
```
git clone "URL"
```

Clone a Repo from local machine
```
git clone -/my_project
```

Clone a Repo from local machine and rename
```
git clone -/our_project
```

Look inside the directory after cloning
```
ls
```

View all remotes. When you clone a repo it automatically creates origin
```
git remote
```

To be able to have projects talking to each other. Manually add a remote.
```
git remove add our_clone -/my_project
```

## Pushing and Pulling

Send all changes from current repo to remote repo

```
git push
```
If made a new branch, have to tell GIT that a branch has been made as it cannot see it.  First it would be the remote, which would be 'origin' and then the branch name

```
git push origin [branch name]
```

To pull any changes from another coder who has committed, do the following. First do a 'git push'. It will say not up to date, so do the following so working on the latest code. First it would be the remote, which would be 'origin' and then the branch name

```
git pull origin [branch]
```
Add repo to a remote from a URL with the remote being called tommy
```
git remote add tommy http://tommysgitstuff.com/git_basics/cool_stuff.git
```

## GitFlow

This gets the workflow setup and which branch we want as the prod release, development and the branch prefixes setup. Accept all defaults.

```
git flow init
```

If working on new feature
```
git flow feature start [feature name]
```

Finish on a feature
```
git flow feature finish [feature name]
```

To make a quick fix
```
git flow hotfix start oh_no_not_a_bug
```

To finish hotfix
```
git flow hotfix finish
```