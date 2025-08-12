# 📘 Naming Convention Guide (Ironman's Workspace)

This comprehensive document outlines the strict naming conventions implemented across all scripts, projects, and folders in Ironman's coding workspace. These standards ensure consistency, maintainability, and cross-platform compatibility.

---

## 🎯 Core Principles

1. **Consistency**: All naming follows the same patterns across languages
2. **Clarity**: Names should be descriptive and self-documenting
3. **Compatibility**: ASCII-only, Linux-friendly naming
4. **Scalability**: Support for growing collections with proper numbering
5. **Organization**: Clear separation between different types of content

---

## ✅ Prefix Conventions (Standardized)

| Prefix | Meaning | Used For | Examples |
|--------|---------|----------|----------|
| `s##-` | Script | Individual standalone scripts | `s01-helloworld.cpp`, `s05-to-do-list.js` |
| `c##-` | Chapter | Course lessons and chapters | `c01-introduction/`, `c15-advanced-topics/` |
| `p##-` | Project | Complete projects and applications | `p01-weather-extension/`, `p00b-budget-tracker/` |
| `d##-` | Daily | Daily practice and challenges | `d01-hello.sh`, `d25-file-parser.py` |
| `a.` | Language | Language-specific collections | `a.bash/`, `a.js/`, `a.py/`, `a.cpp/` |
| `z.` | Experimental | Work-in-progress and sandbox | `z.debris/`, `z.bash-playground/` |

### Numbering System
- **Two-digit padding**: `01`, `02`, `15`, `99` (enables natural sorting)
- **Sequential**: Numbers increase chronologically or by complexity
- **Lowercase letters**: For sub-categories (`p00a-`, `p00b-`, etc.)

---

## 📂 Folder Naming Standards

### Primary Rules
- **lowercase only**: No uppercase letters ever
- **kebab-case**: Use hyphens (`-`) as separators
- **ASCII characters**: No unicode, emojis, or special characters
- **descriptive**: Name should indicate contents clearly

### Language Folders
```
a.bash/          # Bash scripts and learning
a.cpp/           # C++ programs and exercises  
a.js/            # JavaScript files and projects
a.py/            # Python scripts and utilities
```

### Course Folders
```
courses/
├── course-linux-handbook/
├── course-prashant-shell/
└── course-web-development/
```

### Project Folders
```
projects/
├── p01-weather-extension/
├── p00b-budget-tracker/
├── p00x-rss-feed/
└── p05-guess-number/
```

### Special Folders
```
z.bash-playground/    # Bash experimentation
z.debris/            # Work-in-progress files
archive/             # Deprecated content (optional)
temp/               # Temporary files (gitignored)
```

---

## 📄 File Naming Standards

### Core Rules
- **lowercase**: All filenames use lowercase letters
- **hyphen-separated**: Use `-` to separate words
- **descriptive**: Name should indicate file purpose
- **proper extensions**: Always use correct file extensions

### Language-Specific Examples

#### Shell Scripts (`.sh`)
```bash
# ✅ Good examples
s01-hello-world.sh
d15-backup-script.sh
test-proxy.sh
fetch-articles.sh

# ❌ Bad examples
HelloWorld.sh
backup_script.sh
Test.Proxy.sh
```

#### JavaScript Files (`.js`)
```javascript
// ✅ Good examples
s01-area-calc.js
popup.js
background.js
fetch-data.js

// ❌ Bad examples
areaCalc.js
PopUp.js
fetchData.js
```

#### Python Scripts (`.py`)
```python
# ✅ Good examples
s01-adaab.py
calculator.py
hello-user.py
exercise1.py

# ❌ Bad examples
Hello_User.py
Calculator.PY
exercise-1.py
```

#### C++ Programs (`.cpp`, `.h`)
```cpp
// ✅ Good examples
s01-helloworld.cpp
s02-hello-arabic.cpp
string-utils.h

// ❌ Bad examples
HelloWorld.cpp
stringUtils.h
String_Utils.cpp
```

#### Web Files (`.html`, `.css`)
```html
<!-- ✅ Good examples -->
popup.html
style.css
main-layout.html

<!-- ❌ Bad examples -->
Popup.HTML
mainLayout.html
Style.CSS
```

---

## 🗂 Organization Patterns

### By Language
```
a.bash/
├── 100-days-of-scripting/
│   ├── d01-hello.sh
│   └── d02-calculator.sh
└── s##-*.sh files
```

### By Project Type
```
projects/
├── browser-extensions/
│   ├── p01-weather-extension/
│   └── p00b-budget-tracker/
└── command-line-tools/
    └── p00x-rss-feed/
```

### By Course
```
courses/
├── course-linux-handbook/
│   └── linux-handbook-bash-tutorials/
│       ├── c01-introduction/
│       └── c02-basic-commands/
```

---

## 🔧 Implementation Guidelines

### For New Scripts
1. **Identify type**: Script, project, daily challenge, or course material
2. **Choose prefix**: Use appropriate prefix from the table above
3. **Number sequentially**: Find next available number in sequence
4. **Name descriptively**: Use clear, hyphenated names
5. **Add extension**: Use proper file extension for the language

### For New Projects
1. **Use `p##-` prefix**: Start with next available project number
2. **Create folder**: Use kebab-case naming
3. **Organize internally**: Follow same conventions within project
4. **Document structure**: Add README.md if project is complex

### For Course Materials
1. **Use `course-` prefix**: For top-level course folders
2. **Chapter numbering**: Use `c##-` for individual chapters
3. **Maintain hierarchy**: Preserve course structure
4. **Include metadata**: Add course source and date information

---

## 🎨 Advanced Patterns

### Sub-categorization
When you need subcategories within the same type:
```
p00a-hello-extension-v1/
p00b-budget-tracker/
p00c-wiki-search/
p00x-rss-feed/          # 'x' for experimental
p00y-to-do-extension/   # 'y' for yet-another
p00z-prototype/         # 'z' for temporary
```

### Version Management
```
p00a-hello-extension-v1/
p00a-hello-extension-v1.1/
projects-archive/
└── p00a-hello-extension-v0/
```

### Multi-language Projects
```
p01-calculator/
├── calculator.py
├── calculator.js
├── calculator.cpp
└── calculator.sh
```

---

## 🚀 Language-Specific Guidelines

### New Language Addition
When adding a new programming language:

1. **Create language folder**: `a.{language}/`
   ```
   a.rust/          # For Rust files
   a.go/            # For Go files  
   a.php/           # For PHP files
   ```

2. **Follow existing patterns**: Use same prefixes and numbering
3. **Use standard extensions**: `.rs`, `.go`, `.php`, etc.
4. **Document conventions**: Add language-specific notes if needed

### Framework-Specific Projects
```
projects/
├── react-projects/
│   └── p##-{project-name}/
├── node-projects/
│   └── p##-{project-name}/
└── chrome-extensions/
    └── p##-{extension-name}/
```

---

## 📋 Validation Checklist

Before committing any new files or folders, verify:

- [ ] **Lowercase**: All characters are lowercase
- [ ] **ASCII**: No special characters or unicode
- [ ] **Hyphens**: Word separation uses `-` not `_` or spaces
- [ ] **Prefix**: Correct prefix for content type
- [ ] **Extension**: Proper file extension for language
- [ ] **Sequential**: Numbers follow existing sequence
- [ ] **Descriptive**: Name clearly indicates purpose
- [ ] **Consistent**: Follows established patterns

---

## 🛠 Tools and Automation

### Validation Scripts
```bash
# Check naming convention compliance
find . -name "*" | grep -E "[A-Z]|_|\s" | head -10
```

### File Creation Templates
```bash
# Create new script with proper naming
new_script() {
    local lang=$1
    local name=$2
    local num=$(ls a.${lang}/s*.${lang} | wc -l)
    printf -v padded "%02d" $((num + 1))
    touch "a.${lang}/s${padded}-${name}.${lang}"
}
```

---

## 🎯 Benefits of This System

1. **Predictable Structure**: Anyone can navigate the workspace intuitively
2. **Scalable Organization**: System grows naturally with more content
3. **Cross-Platform**: Works on all operating systems
4. **Version Control Friendly**: Git handles these names efficiently  
5. **IDE Compatible**: Works well with all editors and IDEs
6. **Search Optimized**: Easy to find files using patterns

---

## 📚 Quick Reference

### Common Patterns
```bash
# Scripts
s01-hello-world.sh
s05-data-parser.py
s10-http-client.js

# Projects  
p01-weather-app/
p05-task-manager/
p10-file-organizer/

# Daily challenges
d01-fizzbuzz.sh
d15-word-counter.py
d30-api-client.js

# Course materials
course-linux-handbook/
course-web-development/
course-data-structures/
```

### File Extensions Map
| Language | Extensions | Example |
|----------|------------|---------|
| Bash | `.sh` | `backup-files.sh` |
| JavaScript | `.js` | `dom-manipulator.js` |
| Python | `.py` | `data-analyzer.py` |
| C++ | `.cpp`, `.h` | `sorting-algo.cpp` |
| HTML | `.html` | `popup.html` |
| CSS | `.css` | `dark-theme.css` |
| JSON | `.json` | `manifest.json` |
| Markdown | `.md` | `project-readme.md` |

---

> ✅ **This convention ensures clarity, consistency, and maintainability across Ironman's entire coding workspace. Following these guidelines creates a professional, scalable, and collaborative development environment.**

*Last updated: 2024 | Version: 2.0 | Status: Active Implementation*