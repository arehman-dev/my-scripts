# 🚀 My Scripts - Ironman's Workspace

A comprehensive collection of scripts, projects, and learning materials spanning multiple programming languages and technologies. This repository serves as both a personal development workspace and a showcase of coding journey across various domains.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Languages](https://img.shields.io/badge/Languages-6-blue.svg)](#technology-stack)
[![Scripts](https://img.shields.io/badge/Scripts-94+-green.svg)](#repository-structure)

## 📋 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Projects Showcase](#projects-showcase)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎯 Overview

This repository contains a diverse collection of:
- **Learning Scripts**: Practice exercises from various programming courses
- **Browser Extensions**: Chrome extensions for productivity and utilities
- **Daily Coding Challenges**: 100 days of scripting challenges
- **Project Implementations**: Complete projects showcasing different technologies
- **Experimental Code**: Sandbox area for testing new concepts

The workspace follows a strict naming convention and organizational structure to ensure maintainability and easy navigation.

## 📁 Repository Structure

```
my-scripts/
├── 📂 a.bash/           # Bash scripting practice and utilities
│   ├── 100-days-of-scripting/  # Daily coding challenges
│   └── *.sh                    # Individual bash scripts
├── 📂 a.cpp/            # C++ learning and practice files
├── 📂 a.js/             # JavaScript exercises and utilities
├── 📂 a.py/             # Python scripts and learning materials
├── 📂 courses/          # Course-related learning materials
│   ├── course-linux-handbook/
│   └── course-prashant-shell/
├── 📂 projects/         # Complete projects and applications
│   ├── p01-weather-extension/    # Weather Chrome extension
│   ├── p00b-budget-tracker/     # Budget tracking extension
│   ├── p00x-rss-feed/          # RSS feed reader scripts
│   └── ...                     # More projects
├── 📂 z.bash-playground/ # Experimental bash work
├── 📂 z.debris/         # Work-in-progress and experimental files
├── 📄 naming_convention.md  # Detailed naming guidelines
├── 📄 CONTRIBUTING.md       # Contribution guidelines
└── 📄 README.md            # This file
```

### Folder Naming Convention

| Prefix | Purpose | Examples |
|--------|---------|----------|
| `a.` | Language-specific scripts | `a.bash/`, `a.js/`, `a.py/` |
| `p##-` | Projects (numbered) | `p01-weather-extension/` |
| `s##-` | Individual scripts | `s01-helloworld.cpp` |
| `c##-` | Course chapters | `c01-introduction/` |
| `d##-` | Daily challenges | `d01-hello.sh` |
| `z.` | Experimental/sandbox | `z.debris/`, `z.bash-playground/` |

## 🛠 Technology Stack

| Language | Percentage | Use Cases |
|----------|------------|-----------|
| **Shell Script** | 40.9% | System automation, daily challenges, utilities |
| **JavaScript** | 33.7% | Browser extensions, web development, DOM manipulation |
| **HTML** | 14.0% | Extension UI, web project structure |
| **CSS** | 9.5% | Styling for extensions and web projects |
| **Python** | 1.4% | Scripting, automation, learning exercises |
| **C++** | 0.5% | System programming, algorithm practice |

### Key Technologies & Frameworks
- **Browser Extensions**: Chrome Extension APIs, Manifest V3
- **Web Technologies**: Vanilla JavaScript, jQuery, HTML5, CSS3
- **Shell Scripting**: Bash, system utilities, automation
- **Development Tools**: VS Code workspace configuration
- **Version Control**: Git with structured branching

## 🚀 Getting Started

### Prerequisites
- **For Shell Scripts**: Bash 4.0+ (Linux/macOS/WSL)
- **For JavaScript**: Modern web browser, Node.js (optional)
- **For Python**: Python 3.6+
- **For C++**: GCC/Clang compiler
- **For Browser Extensions**: Chrome/Chromium browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/arehman-dev/my-scripts.git
   cd my-scripts
   ```

2. **Set up environment** (optional)
   ```bash
   # Make scripts executable
   find . -name "*.sh" -exec chmod +x {} \;
   
   # Install Node.js dependencies (if any)
   # npm install  # Currently no package.json
   ```

3. **Open in VS Code** (recommended)
   ```bash
   code my-scripts.code-workspace
   ```

## 📖 Usage

### Running Scripts

**Bash Scripts:**
```bash
cd a.bash
./test-proxy.sh
```

**Python Scripts:**
```bash
cd a.py
python3 calculator.py
```

**C++ Programs:**
```bash
cd a.cpp
g++ s01-helloworld.cpp -o hello
./hello
```

**JavaScript (Node.js):**
```bash
cd a.js
node s01-area-calc.js
```

### Installing Browser Extensions

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select any project folder (e.g., `projects/p01-weather-extension/`)
5. Extension will be loaded and ready to use

### Daily Challenges

Follow the 100-day scripting challenge:
```bash
cd a.bash/100-days-of-scripting
./d01-hello.sh
./d02-calculator.sh
```

## 🌟 Projects Showcase

### Featured Projects

1. **🌤 Weather Extension** (`p01-weather-extension/`)
   - Real-time weather data display
   - Clean, responsive UI
   - Chrome extension with background scripts

2. **💰 Budget Tracker** (`p00b-budget-tracker/`)
   - Personal finance management
   - Local storage persistence
   - Category-based expense tracking

3. **📰 RSS Feed Reader** (`p00x-rss-feed/`)
   - Shell-based RSS parser
   - Multiple feed sources
   - Automated article fetching

4. **📝 Todo Extension** (`p00y-to-do-extension/`)
   - Simple task management
   - Browser-based persistence
   - Clean minimalist design

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details on:
- Code style and conventions
- Pull request process
- Issue reporting
- Development setup

### Quick Contribution Steps
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the [naming convention](naming_convention.md)
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Developer**: arehman-dev  
**Repository**: [github.com/arehman-dev/my-scripts](https://github.com/arehman-dev/my-scripts)

---

### 🎯 Repository Goals
- **Learning**: Document programming journey across multiple languages
- **Practice**: Daily coding challenges and skill improvement
- **Sharing**: Open-source solutions and reusable scripts
- **Growth**: Continuous improvement and best practices

---

*⚡ Powered by Ironman's determination to code better every day!*
