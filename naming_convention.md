# 📘 Naming Convention Guide

This document outlines the standardized naming conventions for all scripts, folders, and files in the `arehman-dev/my-scripts` repository. These conventions ensure consistency, maintainability, and cross-platform compatibility.

---

## ✅ Prefix Conventions

| Prefix | Meaning        | Used For                           | Examples |
|--------|----------------|------------------------------------|----------|
| `s01-` | Script         | Sequential or standalone scripts   | `s01-backup-files.sh`, `s15-log-parser.py` |
| `c01-` | Chapter        | Course chapters and lessons        | `c03-arrays-tutorial.js`, `c10-functions.cpp` |
| `p01-` | Project        | Projects or web extensions         | `p01-weather-app.js`, `p05-task-manager` |
| `d01-` | Daily          | Daily practice tasks               | `d12-leetcode-solution.py`, `d08-algorithm-practice` |

### Prefix Rules:
- All prefixes are **lowercase**
- Numbers are **zero-padded to two digits** for natural sorting
- Use **sequential numbering** within each category
- **Required** for all main files and project directories

---

## 📂 Directory Structure & Naming

### Language Directories:
```
a.bash/     # Bash/Shell scripts
a.js/       # JavaScript projects
a.py/       # Python scripts
a.cpp/      # C++ programs
```

### Organizational Directories:
```
courses/         # Learning materials
projects/        # Complete applications
z.bash-playground/  # Experimental bash scripts
z.debris/           # Work-in-progress items
```

### Directory Naming Rules:
- Use **lowercase only**
- Use **kebab-case** (`-` as separator)
- Use **ASCII characters only**
- Keep names **descriptive but concise**

**Examples:**
- ✅ `web-scraping-tools`
- ✅ `data-analysis-scripts`
- ✅ `course-javascript-basics`
- ❌ `WebScrapingTools` (no camelCase)
- ❌ `data_analysis` (no underscores)

---

## 📄 File Naming Standards

### Core Rules:
1. **Lowercase only**
2. **Hyphen-separated** (kebab-case)
3. **ASCII characters only**
4. **Clear, descriptive extensions**
5. **No spaces or special characters**

### File Type Examples:

**Scripts:**
- `reverse-string.sh`
- `api-data-fetcher.py`
- `file-organizer.js`

**Projects:**
- `p01-todo-app.html`
- `p03-weather-dashboard.css`
- `p05-rss-reader.js`

**Course Materials:**
- `c01-introduction.md`
- `c12-advanced-functions.cpp`
- `c08-dom-manipulation.js`

### Special Cases:
- **Multi-word concepts**: `binary-search-tree.cpp`
- **Version handling**: `api-client-v2.js`
- **Utilities**: `string-utils.py`, `date-helpers.js`
- **Tests**: `test-string-utils.py`, `unit-tests.js`

---

## 🏷️ Special Directory Conventions

### Experimental & Temporary:
- `z.bash-playground/` - Bash experimentation
- `z.debris/` - Work-in-progress and temporary files
- `z.archive/` - Deprecated or old material

### Organization:
- `docs/` - Documentation and guides
- `templates/` - Reusable code templates
- `config/` - Configuration files

### Prefix Meanings:
- `z.` prefix indicates **experimental or temporary** content
- `a.` prefix indicates **primary language directories**

---

## 📋 Quality Guidelines

### Do's ✅:
- Use consistent prefixes for related files
- Keep filenames under 50 characters when possible
- Use descriptive names that explain the file's purpose
- Group related files in appropriately named directories
- Include file extensions that match the actual content

### Don'ts ❌:
- Avoid spaces in any file or folder names
- Don't use special characters (`@`, `#`, `$`, etc.)
- Don't use uppercase letters
- Don't use underscores (prefer hyphens)
- Don't create deeply nested directory structures

---

## 🔧 Implementation Notes

### VS Code Integration:
- Use the included `my-scripts.code-workspace` for consistent development
- Leverage file explorer sorting with proper number padding

### Git Considerations:
- The `.megaignore` file handles repository-specific exclusions
- Consistent naming aids in meaningful commit messages

### Cross-Platform Compatibility:
- ASCII-only names ensure compatibility across all operating systems
- Lowercase conventions prevent case-sensitivity issues
- Hyphen separators work universally

---

## 📊 Examples by Category

### Scripts (s01-):
```
s01-system-backup.sh
s02-log-analyzer.py
s03-file-converter.js
s04-network-scanner.cpp
```

### Course Materials (c01-):
```
c01-bash-basics.md
c02-variables-tutorial.sh
c03-functions-practice.py
c04-oop-concepts.cpp
```

### Projects (p01-):
```
p01-weather-app/
├── p01-main.js
├── p01-styles.css
└── p01-index.html
```

### Daily Practice (d01-):
```
d01-fibonacci-sequence.py
d02-palindrome-checker.js
d03-sorting-algorithms.cpp
d04-regex-practice.sh
```

---

> 🎯 **Goal**: This convention ensures clarity, consistency, and maintainability across the entire `arehman-dev/my-scripts` repository while supporting efficient development workflows and cross-platform compatibility.

---

**Last Updated**: August 2025  
**Repository**: [arehman-dev/my-scripts](https://github.com/arehman-dev/my-scripts)