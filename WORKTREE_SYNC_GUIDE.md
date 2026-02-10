# Worktree Sync Guide

## Problem
You have 17+ Git worktrees that get out of sync with the main repository. When Cursor tries to apply changes between worktrees with different commit states, it fails with "Unable to read file" errors.

## Root Cause
- Main repo is at commit `0923755` (latest)
- Some worktrees are stuck on old commits (`125569d`, `39bb1cd`, etc.)
- Files created in newer commits don't exist in older worktrees
- Cursor can't reconcile the differences

## Quick Fix (When You See the Error)

### Option 1: Pull Latest in Main Repo (Recommended)
```powershell
cd C:\Projects\churchtown-media
git pull origin main
```

Then Cursor will use the latest main repo as the source of truth.

### Option 2: Sync Specific Worktree
If you need to work in a specific worktree:

```powershell
# Example: sync the 'iat' worktree
cd C:\Users\Idree\.cursor\worktrees\churchtown-media\iat
git fetch origin
git reset --hard origin/main
```

**⚠️ WARNING:** This will discard any uncommitted changes in that worktree!

## Prevention Strategy

### 1. Always Work from Main Repo
The main repository (`C:\Projects\churchtown-media`) is the canonical source. It's always on the `main` branch and stays in sync with `origin/main`.

### 2. Let Cursor Manage Worktrees
Cursor creates temporary worktrees automatically. You don't need to manually manage them. When you switch contexts, Cursor handles the worktree creation.

### 3. Clean Up Old Worktrees (Monthly)
Run this script to remove stale worktrees:

```powershell
cd C:\Projects\churchtown-media
git worktree prune
```

This removes worktrees for deleted directories.

### 4. Sync All Worktrees (Nuclear Option)
If you want to sync all worktrees to the latest commit:

```powershell
# PowerShell script to sync all worktrees
$mainRepo = "C:\Projects\churchtown-media"
$worktreeBase = "C:\Users\Idree\.cursor\worktrees\churchtown-media"

# Get latest from origin
cd $mainRepo
git pull origin main

# Get all worktree directories
$worktrees = Get-ChildItem -Path $worktreeBase -Directory

foreach ($worktree in $worktrees) {
    Write-Host "Syncing $($worktree.Name)..."
    cd $worktree.FullName
    git fetch origin
    git reset --hard origin/main
}

Write-Host "All worktrees synced to origin/main"
```

Save this as `sync-worktrees.ps1` and run when needed.

## Current Worktree Status (as of last check)

| Worktree | Commit | Status |
|----------|--------|--------|
| main | 0923755 | ✅ Up to date |
| kqm | 0923755 | ✅ Up to date |
| nak | 30feef4 | ⚠️ 1 commit behind |
| ugq | 30feef4 | ⚠️ 1 commit behind |
| wcm | 758a0aa | ⚠️ 2 commits behind |
| dfr, nra, prp, tdj | 53ad119 | ⚠️ 3 commits behind |
| pft | 14481f5 | ⚠️ 4 commits behind |
| iat, jjv, rmq | 125569d | ⚠️ 5 commits behind |
| goj, smz, yxw | 39bb1cd | ⚠️ 6+ commits behind |
| pkp | 7e3950f | ⚠️ 7+ commits behind |

## Files That Cause Issues

These files were created in recent commits and don't exist in old worktrees:
- `app/industries/page.tsx` (commit 125569d+)
- `app/industries/[slug]/page.tsx` (commit 125569d+)
- `app/components/ServicesDropdown.tsx` (commit 14481f5+)
- `app/components/WhoWeHelpMegaMenu.tsx` (commit 125569d+)
- `app/work/page.tsx` (redesign in commit 53ad119)
- `app/services/web-design/page.tsx` (redesign in commit 0923755)
- `app/services/seo/page.tsx` (redesign in commit 0923755)
- `lib/industries.ts` (commit 125569d+)

## Best Practice Moving Forward

1. **Always commit from main repo** (`C:\Projects\churchtown-media`)
2. **Let Cursor auto-manage worktrees** - don't manually switch between them
3. **Pull latest regularly** - run `git pull origin main` in main repo daily
4. **Clean up monthly** - run `git worktree prune` to remove stale worktrees

## Emergency Recovery

If a worktree is completely broken:

```powershell
# 1. Remove the worktree
cd C:\Projects\churchtown-media
git worktree remove --force C:\Users\Idree\.cursor\worktrees\churchtown-media\WORKTREE_NAME

# 2. Let Cursor recreate it automatically next time
# Just close and reopen Cursor - it will create a fresh worktree
```
