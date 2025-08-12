# 📘 Naming Convention Guide

This document outlines the comprehensive naming conventions used across all scripts, projects, and folders in this repository. Following these conventions ensures consistency, clarity, and cross-platform compatibility.

---

## ✅ Prefix Conventions

All files and folders use standardized prefixes for clear organization and natural sorting:

| Prefix | Meaning        | Used For                           | Examples                    |
|--------|----------------|------------------------------------|----------------------------|
| `s01-` | Script         | Sequential or standalone scripts   | `s01-hello.sh`, `s02-calculator.js` |
| `c01-` | Chapter        | Course chapters and lessons        | `c01-basics.sh`, `c02-variables.py` |
| `p01-` | Project        | Complete projects and applications | `p01-weather-extension/`, `p02-todo-app/` |
| `d01-` | Daily          | Daily practice tasks               | `d01-hello.sh`, `d02-calculator.sh` |

### Prefix Rules:
- All prefixes are **lowercase**
- All numbers are **padded to two digits** (01, 02, 03, etc.) for natural sorting
- Use hyphens (`-`) to separate prefix from descriptive name

---

## 📂 Folder Naming Rules

### General Rules:
- Use **lowercase** letters only
- Use **kebab-case** (`-` as separator)
- Use **ASCII characters only** (no special characters, spaces, or Unicode)
- Be descriptive but concise

### Folder Categories:

#### Language Directories:
```
a.bash/           # Bash/Shell scripting practice
a.js/             # JavaScript exercises
a.py/             # Python scripts
a.cpp/            # C++ programming
```

#### Project Directories:
```
projects/
├── p00a-hello-extension-v1/     # Browser extension v1
├── p00b-budget-tracker/         # Finance tracking app
├── p01-weather-extension/       # Weather browser extension
└── p00d-wiki-search/           # Wikipedia search extension
```

#### Course Materials:
```
courses/
├── course-linux-handbook/       # Linux learning materials
└── course-prashant-shell/      # Shell scripting course
```

#### Special Directories:
```
z.bash-playground/              # Bash experimentation
z.debris/                       # Work-in-progress/experimental
```

---

## 📄 File Naming Rules

### General File Rules:
- **Lowercase** letters only
- **Hyphen-separated** words (kebab-case)
- **ASCII only** - no spaces, special characters, or Unicode
- **Clear file extensions** that match the language/content type

### By File Type:

#### Shell Scripts (`.sh`):
```
✅ Good Examples:
hello-world.sh
reverse-words.sh
file-backup.sh
system-info.sh
d01-calculator.sh

❌ Avoid:
HelloWorld.sh
reverse_words.sh
file backup.sh
sys@info.sh
```

#### JavaScript Files (`.js`):
```
✅ Good Examples:
area-calculator.js
dom-manipulation.js
api-fetch.js
s01-variables.js
popup.js (for extensions)

❌ Avoid:
areaCalculator.js
DOM_manipulation.js
api fetch.js
```

#### Python Scripts (`.py`):
```
✅ Good Examples:
string-operations.py
data-analysis.py
web-scraper.py
s03-loops.py

❌ Avoid:
stringOperations.py
data_analysis.py
web scraper.py
```

#### C++ Files (`.cpp`, `.h`):
```
✅ Good Examples:
hello-world.cpp
sorting-algorithms.cpp
data-structures.cpp

❌ Avoid:
HelloWorld.cpp
sorting_algorithms.cpp
```

#### Web Files:

**HTML Files (`.html`):**
```
✅ Good Examples:
popup.html
index.html
settings.html
about.html
```

**CSS Files (`.css`):**
```
✅ Good Examples:
style.css
popup-styles.css
responsive.css
theme.css
```

#### Configuration Files:
```
✅ Good Examples:
manifest.json (browser extensions)
package.json (Node.js projects)
config.json
settings.json
```

---

## 🎯 Project-Specific Guidelines

### Browser Extensions:
- Use `p` prefix for project folders: `p01-weather-extension/`
- Standard files in each extension:
  ```
  p01-weather-extension/
  ├── manifest.json        # Extension configuration
  ├── popup.html          # Extension popup interface
  ├── popup.js            # Popup functionality
  ├── style.css           # Popup styling
  ├── background.js       # Background scripts
  ├── content.js          # Content scripts
  └── icons/              # Extension icons
      ├── icon16.png
      ├── icon48.png
      └── icon128.png
  ```

### Course Materials:
- Course folders: `course-{course-name}/`
- Chapter/lesson files: `c01-topic-name.ext`
- Practice files: `s01-practice-name.ext`

### Daily Practice:
- Use `d` prefix: `d01-hello.sh`, `d02-calculator.sh`
- Include day number for tracking progress
- Keep file names descriptive of the exercise

---

## 🚀 Language-Specific Conventions

### Shell/Bash:
- Always use `.sh` extension
- Start with shebang: `#!/bin/bash`
- File name should describe the script's purpose
- Examples: `backup-files.sh`, `install-packages.sh`

### JavaScript:
- Use `.js` extension for all JavaScript files
- For browser extensions, use standard names: `popup.js`, `background.js`, `content.js`
- Examples: `dom-utils.js`, `api-client.js`

### Python:
- Use `.py` extension
- Follow Python's PEP 8 style guide for internal naming
- Examples: `data-processor.py`, `file-organizer.py`

### HTML/CSS:
- HTML files: descriptive names like `popup.html`, `settings.html`
- CSS files: match HTML or use descriptive names like `popup-styles.css`

---

## 📁 Special Directory Conventions

### Experimental Areas:
```
z.debris/                  # Work-in-progress, broken, or experimental code
z.bash-playground/         # Bash learning and experimentation
sandbox/                   # General experimentation (if created)
```

### Archive and Backup:
```
archive/                   # Deprecated or old material
backup/                    # Backup copies
```

### Documentation:
```
docs/                      # Project documentation
README.md                  # Project overview
CONTRIBUTING.md            # Contribution guidelines
naming_convention.md       # This file
```

---

## ✨ Best Practices

### Do's:
✅ Use consistent naming across all files and folders  
✅ Include version numbers when appropriate (`v1`, `v2`)  
✅ Use descriptive names that explain the purpose  
✅ Follow the prefix system for easy categorization  
✅ Keep names concise but meaningful  
✅ Use ASCII characters only for maximum compatibility  

### Don'ts:
❌ Mix naming conventions within the same project  
❌ Use spaces or special characters in names  
❌ Use uppercase letters (except in specific cases like README)  
❌ Create names that are too long or too abbreviated  
❌ Forget file extensions  
❌ Use underscores instead of hyphens  

---

## 🔄 Migration Guidelines

When adding new files or renaming existing ones:

1. **Check existing patterns** in the target directory
2. **Follow the prefix system** appropriate for the content type
3. **Use lowercase and hyphens** consistently
4. **Include appropriate file extensions**
5. **Update any references** to renamed files
6. **Document any special naming decisions** if they deviate from this guide

---

> ✅ **This convention ensures clarity, consistency, and Linux/Unix compatibility across the entire coding workspace.**

*Last updated: 2024 - Keep this guide current with repository changes*