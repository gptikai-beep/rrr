# AI Rules for Tech Stack and Library Usage

## Tech Stack Overview

- **Frontend Framework**: React with TypeScript for building interactive user interfaces
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS for utility-first styling approach with PostCSS for processing
- **Routing**: React Router for client-side navigation between pages
- **Icons**: Lucide React for consistent, lightweight SVG icons
- **UI Components**: shadcn/ui library for accessible, customizable components built on Radix UI
- **Deployment**: Static site generation compatible with any modern hosting platform
- **Type Safety**: Full TypeScript support with strict typing throughout the codebase

## Library Usage Rules

### Icons
- **Primary Choice**: Use `lucide-react` for all icons
- **Usage**: Import individual icons directly from the package
- **Styling**: Apply Tailwind classes for sizing and coloring

### UI Components
- **Primary Choice**: Use `shadcn/ui` components when available
- **Customization**: Extend components with Tailwind classes rather than creating new ones
- **Consistency**: Maintain the existing design system's color palette and spacing

### Styling
- **Primary Choice**: Tailwind CSS utility classes
- **Custom Styles**: Use `@layer` directives in `index.css` for global utilities
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### State Management
- **Local State**: Use React's built-in `useState` and `useReducer`
- **Global State**: Context API for simple global state needs
- **Complex State**: Consider lightweight solutions before adding external libraries

### Data Fetching
- **API Calls**: Native `fetch` API or `axios` for HTTP requests
- **Caching**: Built-in browser caching or service workers
- **Real-time**: WebSocket connections for live data when needed

### Form Handling
- **Validation**: React Hook Form for complex forms
- **Simple Forms**: Native HTML form elements with React state

### Animations
- **Micro-interactions**: CSS transitions and Tailwind animation classes
- **Complex Animations**: Framer Motion only when necessary
- **Page Transitions**: CSS-based solutions preferred

### Routing
- **Navigation**: React Router for all client-side routing
- **Code Splitting**: Built-in React.lazy and Suspense for route-based code splitting

### Testing
- **Unit Tests**: Jest with React Testing Library
- **E2E Tests**: Cypress for end-to-end testing
- **Type Checking**: TypeScript for compile-time error detection

### Performance
- **Optimization**: React.memo for component memoization
- **Bundle Size**: Regular audits using Vite's built-in analyzer
- **Images**: Native lazy loading and modern formats (WebP) when possible

## Prohibited Libraries

- No heavy UI libraries like Material-UI or Ant Design
- No jQuery or other DOM manipulation libraries
- No class-based state management solutions
- No additional CSS-in-JS libraries beyond Tailwind
- No redundant icon libraries (only lucide-react allowed)