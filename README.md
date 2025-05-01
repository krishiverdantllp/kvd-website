# Krishiv Verdant LLP Website

## Project Info

**Website**: https://krishiverdant.in

## About

This is the official website for Krishiv Verdant LLP, a new-age agri-market enterprise focused on building and operating regulated market yards designed for scale, transparency, and farmer-centricity.

## Development

### Local Development

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/krishiverdantllp/kvd-website.git

# Step 2: Navigate to the project directory.
cd kvd-website

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Deployment

This website is configured to automatically deploy to GitHub Pages with the custom domain krishiverdant.in when changes are pushed to the main branch.

### Manual Deployment

If you need to manually deploy the website, you can run:

```sh
# Build the website
npm run build

# Push changes to GitHub
git add .
git commit -m "Your commit message"
git push
```

The GitHub Actions workflow will automatically build and deploy the website to the custom domain.

### Custom Domain Setup

This website uses the custom domain krishiverdant.in. The domain is configured through:

1. A CNAME file in the public directory
2. GitHub Pages settings in the repository
3. DNS configuration with your domain provider

#### DNS Configuration

To properly set up the custom domain, you need to configure the following DNS records with your domain provider:

- Type: A records
  - Point to GitHub Pages IP addresses:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153

- Type: CNAME record
  - Name: www
  - Value: krishiverdantllp.github.io

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI Components
- React Router
