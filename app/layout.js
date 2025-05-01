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
                                        "query-input":
                                             "required name=search_term_string",
                                   },
                              }),
                         }}
                    />
               </head>
               <body className="flex flex-col min-h-screen">
                    <Providers>
                         <NavbarComponent />
                         {children}
                         <Footer />
                    </Providers>
               </body>
          </html>
     );
}
