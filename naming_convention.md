# 📘 Naming Convention (Ironman’s Workspace)

This document outlines the conventions Ironman has been following and now strictly implements across all scripts and folders under `~/a.my-scripts`.

---

## ✅ Prefix Conventions (Now Standardized)

| Prefix | Meaning        | Used For                           |
|--------|----------------|------------------------------------|
| `s01-` | Script         | Sequential or standalone scripts   |
| `c01-` | Chapter        | Course chapters and lessons        |
| `p01-` | Project        | Projects or web extensions         |
| `d01-` | Daily          | Daily practice tasks               |

- All prefixes are now **lowercase**.
- All numbers are **padded to two digits** for natural sorting.

---

## 📂 Folder Naming Rules

- Use **lowercase**.
- Use **kebab-case** (`-` as separator).
- Use **ASCII characters only**.
- Example folders:
  - `langs/bash`
  - `course-linux-handbook`
  - `p03-weather-extension`

---

## 📄 File Naming Rules

- Filenames must be:
  - Lowercase
  - Hyphen-separated
  - ASCII only
  - With clear extension (`.sh`, `.py`, `.cpp`, etc.)

- Examples:
  - `reverse-words.sh`
  - `string-compare.py`
  - `p03-rss-reader.js`

---

## 📁 Workspace Practices

- Special folders:
  - `z.todo/`: Work-in-progress or placeholders
  - `archive/`: Deprecated or old material
  - `sandbox/`: Experiments

- Optional: place this `naming_convention.md` in any folder to guide structure maintenance.

---

> ✅ This convention ensures clarity, consistency, and Linux compatibility across Ironman's coding workspace.