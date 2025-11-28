# Deployment Guide - Freedom Exploration Project

This guide provides step-by-step instructions for deploying your Freedom exploration website to Netlify.

## Prerequisites

Before you begin, ensure you have:
- A Netlify account (sign up at https://www.netlify.com)
- Git installed on your computer
- GitHub, GitLab, or Bitbucket account (for continuous deployment)

## Method 1: Continuous Deployment from Git (Recommended)

This method automatically rebuilds your site whenever you push changes to your repository.

### Step 1: Push to Git Repository

If you haven't already:

```bash
cd freedom-ui
git init
git add .
git commit -m "Initial commit: Freedom exploration project"
```

Create a new repository on GitHub/GitLab/Bitbucket and push:

```bash
git remote add origin <your-repository-url>
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Netlify

1. Log in to [Netlify](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose your Git provider (GitHub/GitLab/Bitbucket)
4. Authorize Netlify to access your repositories
5. Select your `freedom-ui` repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist/freedom-ui/browser`
   - **Node version**: 20

   (These settings are already configured in `netlify.toml`, so Netlify should auto-detect them)

7. Click "Deploy site"

Your site will be deployed! Netlify will assign you a random URL like `random-name-123.netlify.app`.

### Step 3: Custom Domain (Optional)

1. In your site dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the instructions to configure your domain's DNS

## Method 2: Manual Deployment

If you prefer not to use Git or want to deploy manually:

### Step 1: Build the Project

```bash
cd freedom-ui
npm install
npm run build
```

### Step 2: Deploy via Netlify Drop

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag and drop the `dist/freedom-ui/browser` folder onto the upload area
3. Your site will be deployed instantly

**Note**: Manual deployment doesn't support automatic updates when you make changes.

### Step 3: Deploy via Netlify CLI

Install Netlify CLI:

```bash
npm install -g netlify-cli
```

Login to Netlify:

```bash
netlify login
```

Build and deploy:

```bash
npm run build
netlify deploy --prod --dir=dist/freedom-ui/browser
```

## Post-Deployment Checklist

After deployment, complete these validation steps:

### ✅ 1. HTML Validation

1. Go to https://validator.w3.org/
2. Enter your Netlify URL
3. Click "Check"
4. Fix any errors or warnings

### ✅ 2. CSS Validation

1. Go to https://jigsaw.w3.org/css-validator/
2. Enter your Netlify URL
3. Click "Check"
4. Review results (warnings about vendor prefixes are normal)

### ✅ 3. Accessibility Testing

1. Go to https://wave.webaim.org/
2. Enter your Netlify URL
3. Review the accessibility report
4. Ensure no critical errors exist

### ✅ 4. Mobile Responsiveness

Test your site on various devices:
- Mobile phones (320px - 480px)
- Tablets (768px - 1024px)
- Desktops (1280px+)

Use Chrome DevTools device emulation to test different screen sizes.

### ✅ 5. Performance Testing

1. Go to https://pagespeed.web.dev/
2. Enter your Netlify URL
3. Check both mobile and desktop scores
4. Review recommendations

### ✅ 6. SEO Check

1. Search for "site:your-domain.netlify.app" in Google (after a few days)
2. Verify meta tags appear correctly in search results
3. Use https://www.opengraph.xyz/ to preview Open Graph tags

## Troubleshooting

### Build Fails on Netlify

**Issue**: Build command fails
**Solution**: Check the build logs in Netlify. Common issues:
- Missing dependencies: Make sure `package.json` is committed
- Node version mismatch: Verify Node version in `netlify.toml`

### Site Shows 404 Error

**Issue**: Navigation returns 404
**Solution**: This is handled by the redirect rule in `netlify.toml`. Verify the file is in your repository.

### Styles Not Loading

**Issue**: Page loads but has no styling
**Solution**:
1. Check browser console for errors
2. Verify `dist/freedom-ui/browser` contains CSS files
3. Clear browser cache and hard reload (Ctrl+Shift+R)

### Images Not Loading

**Issue**: Images show broken
**Solution**: Ensure images are in the `public` folder and referenced correctly in your code

## Updating Your Site

### With Continuous Deployment

Simply push changes to your repository:

```bash
git add .
git commit -m "Update content"
git push
```

Netlify will automatically rebuild and deploy.

### Manual Updates

1. Make your changes
2. Run `npm run build`
3. Upload the new `dist/freedom-ui/browser` folder to Netlify

## Custom Domain Setup

### Option 1: Netlify DNS (Easiest)

1. Buy a domain from any registrar
2. In Netlify, go to Domain settings → Add custom domain
3. Follow instructions to point your domain's nameservers to Netlify

### Option 2: External DNS

1. In your domain registrar's DNS settings, add:
   - A record: `@` → Netlify's load balancer IP
   - CNAME record: `www` → `your-site.netlify.app`
2. In Netlify, verify domain ownership

## Environment Variables (If Needed)

If your project needs environment variables:

1. In Netlify dashboard, go to Site settings → Environment variables
2. Add your variables
3. Redeploy the site

## Monitoring and Analytics

Consider adding:
- **Netlify Analytics**: Built-in analytics (paid feature)
- **Google Analytics**: Free analytics and insights
- **Netlify Forms**: If you add contact forms later

## Support

- Netlify Documentation: https://docs.netlify.com/
- Netlify Community: https://answers.netlify.com/
- Netlify Status: https://www.netlifystatus.com/

## Submission Checklist

Before submitting your project, verify:

- [ ] Site is live and accessible
- [ ] HTML validates with W3C validator
- [ ] CSS validates with W3C validator
- [ ] Accessibility passes WAVE test
- [ ] Responsive on mobile, tablet, and desktop
- [ ] All sections load correctly
- [ ] No console errors in browser DevTools
- [ ] Meta tags and SEO are properly configured
- [ ] README.md is updated with your live URL

## Final Notes

Congratulations! Your Freedom exploration project is now live. Share your URL:

```
https://your-site-name.netlify.app
```

Remember to update the URL in your README.md and submission materials.

---

**Need Help?** Check the troubleshooting section or consult Netlify's documentation.
