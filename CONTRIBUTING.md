# Contributing to abhiarya

Thank you for your interest in contributing to abhiarya! This guide will help you set up the development environment.

## Prerequisites

- [Node](https://nodejs.org) (JavaScript runtime)
- [Git](https://git-scm.com/)

## Quickstart

### 1. Clone the Repository

```bash
git clone https://github.com/AbhiArya20/abhiarya.git
cd abhiarya
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the `.env.example` file to `.env` using this command, `cp .env.example .env` and fill in these values.

<details>
<summary>How to setup github token?</summary>
<br>

- Navigate to github [settings](https://github.com/settings/personal-access-tokens).

- Generate a new token with required scopes.

- Set the token as `GITHUB_TOKEN` in `.env` file.
</details>

### 7. Start the Development Server

In a new terminal, start the development server:

```bash
npm run dev
```

The application should now be running at http://localhost:3000

## Making Changes

### Fork the repo

- On GitHub, click the "Fork" button and make your own fork of the repo

### Clone your fork locally

```bash
git clone https://github.com/<yourusername>/abhiarya.git
cd abhiarya
```

### Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

Add the original repo as a remote:

```bash
git remote add upstream https://github.com/AbhiArya20/abhiarya.git
```

> Make sure to pull from the upstream repo to keep your fork up to date using `git pull upstream main`

### Commit your changes

```bash
git add .
git commit -m "Your commit message"
```

### Push to the branch

```bash
git push origin feature/your-feature-name
```

### Open a pull request

- Go to GitHub and open a pull request from your feature branch

> Note: If you open a pull request, try to minimize the amount of repo wide changes you make. It will highly increase
> the chances that we just review and merge.

## License

By contributing to this project, you agree that your contributions will be licensed under its [MIT License](LICENSE).

---