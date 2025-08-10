# 🎧 Podcaster

A modern web application for discovering and listening to podcasts, built with React and TypeScript following Clean Architecture principles.

## 📋 Table of Contents

- [🎧 Podcaster](#-podcaster)
  - [📋 Table of Contents](#-table-of-contents)
  - [🎯 Overview](#-overview)
  - [🏗️ Architecture](#️-architecture)
  - [🛠️ Tech Stack](#️-tech-stack)
    - [Core Technologies](#core-technologies)
    - [State Management \& Data Fetching](#state-management--data-fetching)
    - [Routing \& SEO](#routing--seo)
    - [Development Tools](#development-tools)
    - [Internationalization](#internationalization)
  - [📁 Project Structure](#-project-structure)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Development](#development)
    - [Production](#production)
    - [Testing](#testing)
  - [✨ Features](#-features)

## 🎯 Overview

Podcaster is a single-page application that allows users to browse podcasts, view detailed information about shows, and listen to episodes. The application follows Clean Architecture principles to ensure maintainability, testability, and separation of concerns.

## 🏗️ Architecture

This project implements **Clean Architecture** with the following layers:

- **Domain**: Business entities and repository interfaces
- **Application**: Use cases and business logic
- **Infrastructure**: External services and data adapters
- **Adapters**: UI components, routes, and view controllers

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - UI library with modern hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework

### State Management & Data Fetching
- **SWR** - Data fetching with caching and revalidation
- **Zustand** (via store) - Lightweight state management

### Routing & SEO
- **React Router DOM** - Client-side routing
- **React Helmet Async** - SEO and meta tag management

### Development Tools
- **ESLint** - Code linting with TypeScript support
- **Jest** - Testing framework
- **Babel** - JavaScript transpilation

### Internationalization
- **i18next** - Internationalization framework with Spanish and English support

## 📁 Project Structure

```
src/
├── adapters/                 # External interfaces
│   ├── routes/              # Application routing
│   └── views/               # React components and pages
├── application/             # Business logic
│   └── use-cases/          # Application use cases
├── domain/                  # Core business logic
│   ├── entities/           # Business entities (Podcast, Episode)
│   └── repositories/       # Repository interfaces
├── infrastructure/         # External services
│   ├── adapters/           # Data mappers and transformers
│   └── repositories/       # Repository implementations
├── layouts/                # Page layouts
├── libs/                   # External library configurations
│   ├── axios.ts           # HTTP client setup
│   └── i18n/              # Internationalization config
├── shared/                 # Shared components and utilities
└── store/                  # Global state management
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd podcaster
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at the URL shown in the terminal.

### Production

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Testing

Run the test suite:
```bash
npm test
```

## ✨ Features

- 🔍 **Podcast Discovery** - Browse and search for podcasts
- 📱 **Responsive Design** - Optimized for desktop and mobile devices
- 🎵 **Episode Playback** - Listen to podcast episodes
- 🌍 **Internationalization** - Support for Spanish and English
- ⚡ **Performance Optimized** - Lazy loading and code splitting
- 🔄 **Data Caching** - Smart caching with SWR for better UX
- 🎨 **Modern UI** - Clean interface built with TailwindCSS

Made using Clean Architecture principles