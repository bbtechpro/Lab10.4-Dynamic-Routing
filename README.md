# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

Dynamic Routing
Scenario
You are tasked with building a small but feature-rich blog application. This will require you to implement a core feature of modern web applications: dynamic routing. You’ll create a system where a list of blog posts links to individual, dynamically generated pages for each post.

Furthermore, you will implement a basic authentication system and create a “protected” admin area that is only accessible to logged-in users, a common requirement in real-world applications.

This lab will give you hands-on experience with React Router and handling URL parameters.

Learning Objectives
Upon successful completion of this lab, you will be able to:

Implement dynamic routes in React Router to generate pages from data.
Create a main “index” page that links to multiple dynamic detail pages.
Read and use route parameters (slugs or IDs) to fetch and display data for a specific page.
Structure a basic client-side authentication system using React Context.
Create a protected route that redirects unauthenticated users.
Conditionally render UI elements based on the user’s authentication status.
(Bonus) Implement simple animated page transitions.
Requirements
Build a simple blog application with the following features.

1. Mock Blog Data
Create a simple in-memory array of blog post objects. You can create this in a separate file (e.g., lib/posts.ts).
Each post object should have at least an id, slug (a URL-friendly string), title, and content.
2. Public Blog Pages
Blog Index Page (/blog):
This page should display a list of all available blog posts.
Each item in the list should be a link that navigates to the specific post’s page using its slug (e.g., /blog/my-first-post).
Dynamic Blog Post Page (/blog/[slug]):
This is a dynamic route that should render a single blog post.
It must use the slug from the URL to find and display the correct post’s title and content from your mock data.
If a post with the given slug cannot be found, it should display a “Post not found” message.
3. Authentication System (AuthContext)
Auth Context:
Create a context (AuthContext) to manage the authentication state.
The context should provide:
isAuthenticated: A boolean indicating the user’s login status.
login(): A function to simulate logging in (sets isAuthenticated to true).
logout(): A function to simulate logging out (sets isAuthenticated to false).
Login Page (/login):
A simple page with a “Log In” button that calls the login() function from the context.
Navbar/Header:
The application’s main navigation should display a “Log In” link if the user is logged out, and a “Log Out” button and a link to the “Admin” page if the user is logged in.
Actual authentication is not required, but you should use the AuthContext to manage the authentication state and switch between the login and logout states when the buttons are clicked.
4. Protected Admin Route
Admin Page (/admin):
This page should be protected. It should only be accessible to authenticated users.
If an unauthenticated user tries to access /admin directly, they should be redirected to the /login page.
The content can be simple, for example: “Welcome to the Admin Dashboard.”
5. (Bonus) Page Transitions
As a bonus, add simple fade-in/fade-out transitions when navigating between pages. Libraries like framer-motion (specifically its AnimatePresence component) are excellent for this.

