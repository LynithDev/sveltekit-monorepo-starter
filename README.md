# sveltekit-monorepo-starter
Pretty basic template for a monorepo with SvelteKit + TypeScript + ESLint + TailwindCSS preconfigured.

## Setup
1. Clone the repository
2. `pnpm install` - Install dependencies
3. `pnpm frontend dev` - Start the frontend server
4. Eventually add new workspace packages to the monorepo by creating a new folder in the `apps/` directory and adding a package.json to it.
You can also create a new package in the `packages/` directory if you want to share code between multiple apps. 

## Running
`pnpm frontend <command>` - Run commands in the frontend package
`pnpm backend <command>` - Run commands in the backend package

The above are shorthand for `pnpm --filter frontend <command>` and `pnpm --filter backend <command>` respectively.