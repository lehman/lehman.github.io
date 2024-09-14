# Louise Lehman's Personal Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load a variable Google Font.

## Setup

After cloning, run the following commands to get set up and run locally:

```
npm install
```

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the app in production mode, run the following commands to generate an optimized production build and then start the app in production mode:

```
npm run build
npm run start
```

## Deploying

This project used to use [gh-pages](https://www.npmjs.com/package/gh-pages) for deployment, according to GitHub Pages documentation, and built and deployed from the `build` branch. However, now that this site uses the Next.js framework, it instead uses Github Actions to automatically build and deploy whenever changes are pushed to the `master` branch.