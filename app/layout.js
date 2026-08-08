import "./globals.css";
import { Poppins } from "next/font/google";
import NavbarComponent from "@/Components/NavbarComponent";
import Footer from "@/Components/Footer";
import Providers from "@/Components/Providers";

const poppins = Poppins({
     subsets: ["latin"],
     weight: ["400", "500", "700"],
     style: ["normal", "italic"],
     display: "swap",
});

export const metadata = {
     metadataBase: new URL("https://gravityfilms.space"),
     title: "Gravity Films | Creative Digital Content & Filmmaking Agency",
     description:
          "Gravity Films is a creative digital content agency specializing in fashion brands, e-commerce shoots, and comprehensive digital branding solutions. Based in Silvassa, India.",
     keywords:
          "digital content, filmmaking, e-commerce shoots, fashion brands, digital branding, creative agency, Silvassa, video production, photography, brand strategy",
     viewport: "width=device-width, initial-scale=1",
     themeColor: "#ffffff",
     colorScheme: "light dark",
     robots: {
          index: true,
          follow: true,
          googleBot: {
               index: true,
               follow: true,
               "max-video-preview": -1,
               "max-image-preview": "large",
               "max-snippet": -1,
          },
     },
     verification: {
          google: "your-google-verification-code",
          yandex: "your-yandex-verification-code",
          bing: "your-bing-verification-code",
     },
     openGraph: {
          title: "Gravity Films | Creative Digital Content & Filmmaking Agency",
          description:
               "Gravity Films is a creative digital content agency specializing in fashion brands, e-commerce shoots, and comprehensive digital branding solutions. Based in Silvassa, India.",
          url: "https://gravityfilms.space",
          siteName: "Gravity Films",
          type: "website",
          locale: "en_US",
          images: [
               {
                    url: "/share.png",
                    width: 1200,
                    height: 630,
                    alt: "Gravity Films Logo",
                    type: "image/png",
               },
          ],
     },
     twitter: {
          card: "summary_large_image",
          title: "Gravity Films | Creative Digital Content & Filmmaking Agency",
          description:
               "Gravity Films is a creative digital content agency specializing in fashion brands, e-commerce shoots, and comprehensive digital branding solutions. Based in Silvassa, India.",
          creator: "@gravityfilmsin",
          images: [
               {
                    url: "/share.png",
                    alt: "Gravity Films Logo",
               },
          ],
          site: "@gravityfilmsin",
     },
     other: {
          "geo.region": "IN-DN",
     },
};

export default function RootLayout({ children }) {
     return (
          <html lang="en" className={poppins.className}>
               <head>
                    <link
                         rel="preload"
                         href="/fonts/Poppins-700.woff2"
                         as="font"
                         type="font/woff2"
                         crossOrigin="anonymous"
                    />
                    <script
                         type="application/ld+json"
                         dangerouslySetInnerHTML={{
                              __html: JSON.stringify({
                                   "@context": "https://schema.org",
                                   "@type": ["Organization", "LocalBusiness"],
                                   "@id": "https://gravityfilms.space",
                                   name: "Gravity Films",
                                   url: "https://gravityfilms.space",
                                   logo: "https://gravityfilms.space/logo.png",
                                   image: "https://gravityfilms.space/share.png",
                                   description:
                                        "Creative digital content agency specializing in fashion brands and e-commerce shoots",
                                   foundingDate: "2020",
                                   address: {
                                        "@type": "PostalAddress",
                                        streetAddress:
                                             "Siyaram Skyline, Near Our Lady Of Help English School, Samarvarni",
                                        addressLocality: "Silvassa",
                                        addressRegion: "Dadra and Nagar Haveli",
                                        postalCode: "396230",
                                        addressCountry: "IN",
                                   },
                                   contactPoint: {
                                        "@type": "ContactPoint",
                                        telephone: "+919033535655",
                                        email: "info@gravityfilms.space",
                                        contactType: "customer service",
                                   },
                                   sameAs: [
                                        "https://instagram.com/gravityfilmsin",
                                        "https://www.linkedin.com/company/gravityfilms",
                                        "https://twitter.com/gravityfilmsin",
                                   ],
                                   priceRange: "₹₹₹",
                                   serviceType: [
                                        "Digital Content Creation",
                                        "Photography",
                                        "Videography",
                                        "Brand Strategy",
                                   ],
                              }),
                         }}
                    />
                    <script
                         type="application/ld+json"
                         dangerouslySetInnerHTML={{
                              __html: JSON.stringify({
                                   "@context": "https://schema.org",
                                   "@type": "WebSite",
                                   url: "https://gravityfilms.space",
                                   potentialAction: {
                                        "@type": "SearchAction",
                                        target: "https://gravityfilms.space/search?q={search_term_string}",
                                        "query-input": "required name=search_term_string",
                                   },
                              }),
                         }}
                    />
               </head>

               <body style={{ margin: 0, padding: 0, width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
                    <style>{`
                         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

                         html, body {
                              margin: 0 !important;
                              padding: 0 !important;
                              width: 100vw !important;
                              height: 100vh !important;
                              overflow: hidden !important;
                              background: #000 !important;
                         }

                         * { box-sizing: border-box; }

                         @keyframes floatUp {
                              0%   { transform: translateY(100vh) scale(0); opacity: 0; }
                              10%  { opacity: 0.5; }
                              90%  { opacity: 0.15; }
                              100% { transform: translateY(-10vh) scale(1.2); opacity: 0; }
                         }

                         @keyframes pulseGlow {
                              0%, 100% {
                                   filter: invert(1) drop-shadow(0 0 8px rgba(255,255,255,0.25));
                                   transform: scale(1);
                              }
                              50% {
                                   filter: invert(1) drop-shadow(0 0 24px rgba(255,255,255,0.6));
                                   transform: scale(1.03);
                              }
                         }

                         @keyframes fadeSlideUp {
                              0%   { opacity: 0; transform: translateY(28px); }
                              100% { opacity: 1; transform: translateY(0); }
                         }

                         @keyframes blink {
                              0%, 100% { opacity: 1; }
                              50%       { opacity: 0; }
                         }

                         @keyframes orbitRing {
                              from { transform: translate(-50%, -50%) rotate(0deg); }
                              to   { transform: translate(-50%, -50%) rotate(360deg); }
                         }

                         @keyframes shimmer {
                              0%   { background-position: -200% center; }
                              100% { background-position: 200% center; }
                         }

                         .maintenance-bg {
                              position: fixed;
                              inset: 0;
                              width: 100vw;
                              height: 100vh;
                              background: #000;
                              display: flex;
                              flex-direction: column;
                              align-items: center;
                              justify-content: center;
                              font-family: 'Inter', 'Poppins', sans-serif;
                              overflow: hidden;
                         }

                         .particle {
                              position: absolute;
                              border-radius: 50%;
                              background: radial-gradient(circle, rgba(255,255,255,0.6), transparent);
                              animation: floatUp linear infinite;
                              pointer-events: none;
                         }

                         .orbit-ring {
                              position: absolute;
                              top: 50%;
                              left: 50%;
                              border-radius: 50%;
                              border: 1px solid rgba(255,255,255,0.07);
                              animation: orbitRing linear infinite;
                              pointer-events: none;
                         }

                         .logo-img {
                              width: clamp(160px, 55vw, 360px);
                              max-width: 88vw;
                              height: auto;
                              display: block;
                              animation: pulseGlow 3s ease-in-out infinite, fadeSlideUp 1s ease 0.2s both;
                         }

                         .maintenance-title {
                              font-size: clamp(1.4rem, 6vw, 3rem);
                              font-weight: 700;
                              letter-spacing: -0.02em;
                              margin: 0;
                              background: linear-gradient(90deg, #ffffff, #888888, #ffffff, #cccccc);
                              background-size: 200% auto;
                              -webkit-background-clip: text;
                              -webkit-text-fill-color: transparent;
                              background-clip: text;
                              animation: fadeSlideUp 1s ease 0.5s both, shimmer 4s linear infinite;
                         }

                         .maintenance-sub {
                              font-size: clamp(0.7rem, 3vw, 1rem);
                              color: rgba(255, 255, 255, 0.58);
                              font-weight: 300;
                              letter-spacing: 0.12em;
                              text-transform: uppercase;
                              margin: 0;
                              animation: fadeSlideUp 1s ease 0.8s both;
                         }

                         .divider-line {
                              width: clamp(48px, 18vw, 110px);
                              height: 1px;
                              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
                              border: none;
                              margin: 0;
                              animation: fadeSlideUp 1s ease 1.1s both;
                         }

                         .cursor-blink {
                              display: inline-block;
                              width: 3px;
                              height: 0.9em;
                              background: #fff;
                              margin-left: 6px;
                              vertical-align: middle;
                              animation: blink 1s step-end infinite;
                         }

                         .status-pill {
                              display: flex;
                              align-items: center;
                              gap: 8px;
                              background: rgba(255,255,255,0.04);
                              border: 1px solid rgba(255,255,255,0.12);
                              border-radius: 999px;
                              padding: 7px 18px;
                              font-size: clamp(0.6rem, 2.5vw, 0.78rem);
                              color: rgba(255,255,255,0.5);
                              letter-spacing: 0.14em;
                              text-transform: uppercase;
                              font-weight: 600;
                              animation: fadeSlideUp 1s ease 1.4s both;
                              backdrop-filter: blur(8px);
                         }

                         .status-dot {
                              width: 7px;
                              height: 7px;
                              border-radius: 50%;
                              background: #fff;
                              flex-shrink: 0;
                              animation: blink 1.5s ease-in-out infinite;
                         }

                         .maintenance-content {
                              display: flex;
                              flex-direction: column;
                              align-items: center;
                              gap: clamp(8px, 1.5vw, 14px);
                              position: relative;
                              z-index: 10;
                              padding: 24px 20px;
                              text-align: center;
                              width: 100%;
                              max-width: 680px;
                         }

                         @media (max-width: 480px) {
                              .orbit-ring { border-width: 0.5px; }
                              .maintenance-content { padding: 20px 16px; }
                         }
                    `}</style>

                    <div className="maintenance-bg">

                         {/* Orbit rings */}
                         <div className="orbit-ring" style={{ width: 'min(560px, 88vmin)', height: 'min(560px, 88vmin)', animationDuration: '30s' }} />
                         <div className="orbit-ring" style={{ width: 'min(840px, 130vmin)', height: 'min(840px, 130vmin)', animationDuration: '50s', animationDirection: 'reverse', opacity: 0.6 }} />
                         <div className="orbit-ring" style={{ width: 'min(1120px, 170vmin)', height: 'min(1120px, 170vmin)', animationDuration: '80s' }} />

                         {/* Floating particles */}
                         {[
                              { w: 4, h: 4, l: '8%', d: '0s', dur: '9s' },
                              { w: 7, h: 7, l: '22%', d: '2s', dur: '13s' },
                              { w: 3, h: 3, l: '38%', d: '5s', dur: '11s' },
                              { w: 6, h: 6, l: '52%', d: '1s', dur: '15s' },
                              { w: 4, h: 4, l: '68%', d: '3.5s', dur: '10s' },
                              { w: 8, h: 8, l: '80%', d: '6s', dur: '14s' },
                              { w: 3, h: 3, l: '91%', d: '4s', dur: '12s' },
                              { w: 5, h: 5, l: '15%', d: '7s', dur: '16s' },
                         ].map((p, i) => (
                              <div key={i} className="particle" style={{
                                   width: p.w, height: p.h,
                                   left: p.l,
                                   animationDelay: p.d,
                                   animationDuration: p.dur,
                              }} />
                         ))}

                         {/* Main content */}
                         <div className="maintenance-content">

                              <img
                                   src="/GravityFull2.png"
                                   alt="Gravity Films"
                                   className="logo-img"
                              />

                              <hr className="divider-line" />

                              <h1 className="maintenance-title">
                                   Under Maintenance<span className="cursor-blink" />
                              </h1>

                              <p className="maintenance-sub">
                                   We&apos;ll be back soon — bigger &amp; better
                              </p>

                              <div className="status-pill">
                                   <span className="status-dot" />
                                   Work in progress
                              </div>

                         </div>
                    </div>
               </body>
          </html>
     );
}
