'use client';
import React, { useState } from "react";
import SocialCards from "../../Components/Socialmedia";
import Link from "next/link";
import Map from "@/Components/Map";
import Reveal from "@/Components/anime/Reveal";
import { SendHorizonal, SendIcon } from "lucide-react";

const page = () => {
     const [form, setForm] = useState({
          name: "",
          organization: "",
          address: "",
          phone: "",
          email: "",
          service: "",
          social: "",
     });

     const handleChange = (e) => {
          setForm({ ...form, [e.target.id]: e.target.value });
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          try {
               // Convert form data to URL parameters
               const params = new URLSearchParams({
                    name: form.name,
                    organization: form.organization,
                    address: form.address,
                    email: form.email,
                    phone: form.phone,
                    link: form.social,
                    message: form.service
               });

               const response = await fetch(
                    `https://srdgas.online/api/gravity-form?${params.toString()}`,
                    {
                         method: 'GET',
                         headers: {
                              'Content-Type': 'application/json',
                         }
                    }
               );

               if (response.ok) {
                    alert('Form submitted successfully!');
                    // Reset form
                    setForm({
                         name: "",
                         organization: "",
                         address: "",
                         phone: "",
                         email: "",
                         service: "",
                         social: "",
                    });
               } else {
                    throw new Error('Form submission failed');
               }
          } catch (error) {
               console.error('Error submitting form:', error);
               alert('Failed to submit form. Please try again.');
          }
     };

     return (
          <main>
               <article
                    itemScope
                    itemType="http://schema.org/Article"
                    aria-label="Contact Gravity Films"
                    className="main-content flex flex-col items-center justify-center"
                    role="main"
               >
                    <meta
                         itemProp="headline"
                         content="Gravity Films - Contact Us"
                    />
                    <meta
                         itemProp="description"
                         content="Get in touch with Gravity Films for your creative digital content needs."
                    />
                    <meta itemProp="author" content="Gravity Films" />
                    <Reveal>
                         <div>
                              <h2 className="text-2xl font-bold text-gray-800 text-center lg:pt-4 mt-4">
                                   CONTACT US
                              </h2>
                              <div className="text-center">
                                   <p className="text-sm sm:text-lg text-black mt-2 sm:mt-4 text-justify-center px-4 lg:px-8">
                                        Get in touch with Gravity
                                   </p>
                              </div>

                              {/* Contact Form Start */}
                              <section className="contact-form mt-8 flex justify-center">
                                   <form
                                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xl"
                                        onSubmit={handleSubmit}
                                   >
                                        <div className="mb-4">
                                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                                  Name
                                             </label>
                                             <input
                                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                  id="name"
                                                  name="name"
                                                  type="text"
                                                  placeholder="Your Name"
                                                  required
                                                  value={form.name}
                                                  onChange={handleChange}
                                             />
                                        </div>
                                        <div className="mb-4">
                                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organization">
                                                  Organization Name
                                             </label>
                                             <input
                                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                  id="organization"
                                                  name="organization"
                                                  type="text"
                                                  required
                                                  placeholder="Organization Name"
                                                  value={form.organization}
                                                  onChange={handleChange}
                                             />
                                        </div>
                                        <div className="mb-4">
                                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                                                  Address
                                             </label>
                                             <input
                                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                  id="address"
                                                  name="address"
                                                  type="text"
                                                  required
                                                  placeholder="Address"
                                                  value={form.address}
                                                  onChange={handleChange}
                                             />
                                        </div>
                                        <div className="mb-4">
                                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                                                  Phone
                                             </label>
                                             <input
                                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                  id="phone"
                                                  name="phone"
                                                  type="number"
                                                  placeholder="Phone Number"
                                                  required
                                                  value={form.phone}
                                                  onChange={handleChange}
                                             />
                                        </div>
                                        <div className="mb-4">
                                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                                  Email
                                             </label>
                                             <input
                                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                  id="email"
                                                  name="email"
                                                  type="email"
                                                  placeholder="Email Address"
                                                  required
                                                  value={form.email}
                                                  onChange={handleChange}
                                             />
                                        </div>
                                        <div className="mb-4">
                                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="service">
                                                  Service Requirement
                                             </label>
                                             <textarea
                                                  required
                                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                  id="service"
                                                  name="service"
                                                  placeholder="Describe your service requirement"
                                                  rows={3}
                                                  value={form.service}
                                                  onChange={handleChange}
                                             />
                                        </div>
                                        <div className="mb-4">
                                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="social">
                                                  Social Media / Website
                                             </label>
                                             <input
                                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                  id="social"
                                                  name="social"
                                                  type="text"
                                                  required
                                                  placeholder="Social Media or Website Link"
                                                  value={form.social}
                                                  onChange={handleChange}
                                             />
                                        </div>
                                        <div className="flex items-center justify-end">
                                             <button
                                                  className="border border-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-200 hover:bg-black hover:text-white hover:scale-105 flex items-center gap-2 group"
                                                  type="submit"
                                             >
                                                  <span className="transition-transform duration-200 group-hover:-translate-x-1">
                                                       Submit
                                                  </span>
                                                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                                                       <SendHorizonal />
                                                  </span>
                                             </button>
                                        </div>
                                   </form>
                              </section>
                              {/* Contact Form End */}

                              <section className="Socialmedialinks mt-8">
                                   <h2 className="text-2xl font-bold text-gray-800 text-center">
                                        CONNECT WITH US
                                   </h2>
                                   <SocialCards />
                              </section>

                              <section className="location mt-8">
                                   <h2 className="text-2xl font-bold text-gray-800 text-center">
                                        VISIT US
                                   </h2>
                                   <div className="flex flex-col lg:items-center lg:px-10 mt-4">
                                        <div className="left-side">
                                             <Link href="https://maps.app.goo.gl/ya5vhXJA29HZLBN69">
                                                  <div className="flex flex-col text-sm sm:text-lg text-black px-1 mt-2 sm:mt-4">
                                                       <span>Siyaram Skyline,</span>
                                                       <span>Near, At, near Our Lady Of Help English School,</span>
                                                       <span>Samarvarni, Silvassa,</span>
                                                       <span>Dadra and Nagar Haveli and Daman and Diu </span>
                                                       <span>396230 India</span>
                                                  </div>
                                             </Link>
                                        </div>
                                        <div className="right-side justify-center mx-2">
                                             <Map />
                                        </div>
                                   </div>
                              </section>
                         </div>
                    </Reveal>
               </article>
          </main>
     );
};

export default page;
