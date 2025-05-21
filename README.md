<div align="center">

# AIFITWEAR

*Unleash Your Creativity with Personalized 3D Apparel*

<img src="https://img.shields.io/github/last-commit/Vruxak21/AIFitWear" alt="last commit">
<img src="https://img.shields.io/github/languages/top/Vruxak21/AIFitWear" alt="top language">
<img src="https://img.shields.io/github/languages/count/Vruxak21/AIFitWear" alt="languages count">

## Built with the tools and technologies:

<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=express&query=$.dependencies.express&prefix=v&logo=express&logoColor=white&color=black" alt="Express">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=react&query=$.dependencies.react&prefix=v&logo=react&logoColor=white&color=blue" alt="React">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=three.js&query=$.dependencies.three&prefix=v&logo=three.js&logoColor=white&color=black" alt="ThreeJS">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=npm&query=$.engines.npm&prefix=v&logo=npm&logoColor=white&color=red" alt="npm">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=autoprefixer&query=$.dependencies.autoprefixer&prefix=v&logo=autoprefixer&logoColor=white&color=orange" alt="Autoprefixer">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=mongodb&query=$.dependencies.mongodb&prefix=v&logo=mongodb&logoColor=white&color=green" alt="MongoDB">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=postcss&query=$.dependencies.postcss&prefix=v&logo=postcss&logoColor=white&color=red" alt="PostCSS">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=eslint&query=$.devDependencies.eslint&prefix=v&logo=eslint&logoColor=white&color=yellow" alt="ESLint">
<br>
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=next.js&query=$.dependencies.next&prefix=v&logo=next.js&logoColor=white&color=green" alt="NextJS">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=tailwindcss&query=$.dependencies.tailwindcss&prefix=v&logo=tailwindcss&logoColor=white&color=blue" alt="Tailwind CSS">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=cloudinary&query=$.dependencies.cloudinary&prefix=v&logo=cloudinary&logoColor=white&color=blue" alt="Cloudinary">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=vite&query=$.devDependencies.vite&prefix=v&logo=vite&logoColor=white&color=purple" alt="Vite">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=prisma&query=$.dependencies.prisma&prefix=v&logo=prisma&logoColor=white&color=blue" alt="Prisma">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=replicate&query=$.dependencies.replicate&prefix=v&logo=replicate&logoColor=white&color=purple" alt="Replicate">
<img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/Vruxak21/AIFitWear/master/package.json&label=openai&query=$.dependencies.openai&prefix=v&logo=openai&logoColor=white&color=black" alt="OpenAI">
</div>

</div>

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Testing](#testing)

## Overview

AifitWear is an innovative developer tool that empowers users to create and customize apparel through an interactive 3D interface.

### Why AifitWear?

This project revolutionizes apparel design by integrating cutting-edge technology for a seamless and engaging user experience. The core features include:

- **Interactive 3D Customization**: Design and personalize apparel in real-time, enhancing user creativity.
- **Seamless Integration with AI**: Effortlessly generate unique designs using DALL-E for image creation.
- **Responsive UI with React and Tailwind CSS**: Enjoy a modern, visually appealing experience across all devices.
- **Centralized State Management**: Utilize Vulio for efficient state handling, improving performance and maintainability.
- **Dynamic Visual Effects**: Enhance aesthetics with realistic shadows and lighting in 3D environments.
- **File Management Capabilities**: Simplify the process of uploading and managing design assets seamlessly.

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language**: JavaScript
- **Package Manager**: Npm

### Installation

Build AifitWear from the source and install dependencies:

1. Clone the repository:
```bash
git clone https://github.com/Vruxak21/AIFitWear
```

2. Navigate to the project directory:
```bash
cd AIfitWear
```

3. Install the dependencies:

Using npm:
```bash
npm install
```

4. Create a `.env` file in the root directory and add your Replicate API key:
```
REPLICATE_API_KEY=your_replicate_api_key
```

### Usage

Run the project with:

Using npm:
```bash
# Terminal 1 - Start the client
cd client
npm run dev

# Terminal 2 - Start the server
cd server
npm start
```

### Testing

AifitWear uses the `test_framework` test framework. Run the test suite with:

Using npm:
```bash
npm test
```

[⬆ Return](#table-of-contents)
