import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = "Your Mobile Dashboard for Google AdSense", 
  description = "AdPulse is your mobile dashboard for Google AdSense—delivering real-time insights on your ad earnings, wherever you are.",
  image = "/images/adpulse-og-image.png", 
  url = "",
  keywords = "AdSense, Google AdSense, mobile dashboard, iOS app, ad earnings, ad analytics, AdSense metrics" 
}) {
  const siteTitle = "AdPulse";
  const fullTitle = title === "AdPulse" ? siteTitle : title;
  const siteUrl = "https://adpulse.kantoprojects.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />
    </Helmet>
  );
} 