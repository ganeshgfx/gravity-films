import "./globals.css";
import { Poppins } from "next/font/google";
import NavbarComponent from "@/Components/NavbarComponent";
import Footer from "@/Components/Footer";
import Providers from "@/Components/Providers";
import Head from "next/head";

const poppins = Poppins({
     subsets: ["latin"],
     weight: ["400", "500", "700"],
     style: ["normal", "italic"],
     display: "swap",
});

export const metadata = {
     title: "Gravity Films | Creative Digital Content & Filmmaking Agency",
     description:
          "Gravity Films is a creative digital content agency specializing in fashion brands, e-commerce shoots, and comprehensive digital branding solutions. Based in Silvassa, India.",
     keywords:
          "digital content, filmmaking, e-commerce shoots, fashion brands, digital branding, creative agency, Silvassa",
     viewport: "width=device-width, initial-scale=1",
     themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
     return (
          <html lang="en" className={poppins.className}>
               <Head>
                    {/* Primary Meta Tags */}
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                    <meta name="keywords" content={metadata.keywords} />
                    <meta name="viewport" content={metadata.viewport} />
                    <meta name="theme-color" content={metadata.themeColor} />

                    {/* Canonical URL */}
                    <link rel="canonical" href="https://gravityfilms.space" />

                    {/* Geo Tags */}
                    <meta name="geo.region" content="IN-DN" />

                    {/* Open Graph */}
                    <meta property="og:title" content={metadata.title} />
                    <meta
                         property="og:description"
                         content={metadata.description}
                    />
                    <meta
                         property="og:url"
                         content="https://gravityfilms.space"
                    />
                    <meta property="og:site_name" content="Gravity Films" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:image" content="share.png" />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={metadata.title} />
                    <meta
                         name="twitter:description"
                         content={metadata.description}
                    />
                    <meta name="twitter:creator" content="@gravityfilmsin" />
                    <meta name="twitter:image" content="share.png" />

                    {/* Preload Font */}
                    <link
                         rel="preload"
                         href="/fonts/Poppins-700.woff2"
                         as="font"
                         type="font/woff2"
                         crossOrigin="anonymous"
                    />

                    {/* JSON-LD Organization */}
                    <script type="application/ld+json">
                         {JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": ["Organization", "LocalBusiness"],
                              "@id": "https://gravityfilms.space",
                              name: "Gravity Films",
                              url: "https://gravityfilms.space",
                              description:
                                   "Creative digital content agency specializing in fashion brands and e-commerce shoots",
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
                              ],
                              priceRange: "₹₹₹",
                         })}
                    </script>

                    {/* JSON-LD Website SearchAction */}
                    <script type="application/ld+json">
                         {JSON.stringify({
                              "@context": "https://schema.org",
                              "@type": "WebSite",
                              url: "https://gravityfilms.space",
                              potentialAction: {
                                   "@type": "SearchAction",
                                   target: "https://gravityfilms.space/search?q={search_term_string}",
                                   "query-input":
                                        "required name=search_term_string",
                              },
                         })}
                    </script>
               </Head>
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
