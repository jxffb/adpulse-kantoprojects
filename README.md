# AdPulse Website

A landing page for AdPulse, a mobile dashboard app for Google AdSense.

## Features

- Modern React app built with Vite
- Responsive design with Tailwind CSS
- Dark/light mode support
- Animated components with Framer Motion
- Simple contact form with FormSubmit.co

## Setup & Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run development server:
   ```
   npm run dev
   ```

## Contact Form Setup

The contact form uses FormSubmit.co to handle submissions without a backend server. No additional setup is required as it's pre-configured with:

- Form action pointing to FormSubmit.co endpoint
- Customized success redirect
- Spam protection with honeypot field
- Optional captcha
- Proper subject line formatting

For more information, visit [FormSubmit.co](https://formsubmit.co/).

## Building for Production

```
npm run build
```

The build files will be in the `dist` directory, ready to be deployed.

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
