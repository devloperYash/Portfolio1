# replit.md

## Overview

This is a modern full-stack web application built with React and Express.js, featuring an AI/ML developer portfolio with advanced animations and responsive design. The application is set up as a monorepo with a React frontend, Express backend, and shared schema definitions using Drizzle ORM for PostgreSQL database management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Animations**: Framer Motion for advanced animations and transitions
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite with custom configuration for development and production

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-based session storage
- **Development**: Hot reload with custom Vite integration

### Database Architecture
- **ORM**: Drizzle ORM with TypeScript support
- **Schema**: Centralized schema definitions in `/shared` directory
- **Validation**: Zod schemas for runtime type validation
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated introduction with floating avatar
2. **About Section**: Personal information and education details
3. **Skills Section**: Interactive 3D skill cubes with hover effects
4. **Projects Section**: Featured AI/ML projects with detailed descriptions
5. **Achievements Section**: Timeline of accomplishments and awards
6. **Internships Section**: Professional experience and learning outcomes
7. **Contact Section**: Contact form and social media links

### UI Components
- **shadcn/ui**: Complete set of accessible, customizable UI components
- **Custom 3D Components**: Floating avatar, skill cubes with 3D effects
- **Animation Components**: Scroll-triggered animations, parallax effects
- **Theme System**: Dark/light mode with CSS custom properties

### Backend Storage
- **In-Memory Storage**: Development storage implementation with user management
- **Interface-Based Design**: Easily swappable storage implementations
- **CRUD Operations**: Complete user management functionality

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **Server Processing**: Express routes handle business logic and data validation
3. **Database Operations**: Drizzle ORM manages PostgreSQL interactions
4. **Response Handling**: TanStack Query caches and manages server responses
5. **UI Updates**: React components re-render based on state changes

## External Dependencies

### UI and Styling
- **Radix UI**: Unstyled, accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library

### Database and Backend
- **Neon Database**: PostgreSQL serverless database
- **Drizzle ORM**: Type-safe database toolkit
- **Express Session**: Session management middleware

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Fast JavaScript bundling for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React app to static assets
2. **Backend Build**: ESBuild bundles Express server for Node.js
3. **Database Setup**: Drizzle migrations run against PostgreSQL

### Environment Configuration
- **Development**: Local Vite dev server with Express API
- **Production**: Bundled Express server serving static React build
- **Database**: PostgreSQL connection via environment variables

### File Structure
```
├── client/           # React frontend
├── server/           # Express backend
├── shared/           # Shared types and schemas
├── dist/             # Production build output
└── migrations/       # Database migrations
```

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```