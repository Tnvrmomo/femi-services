
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          {/* Hero section */}
          <div className="bg-gradient-to-r from-rose-100 to-lavender-100 rounded-2xl p-8 md:p-12 mb-10 text-center">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold mb-4">
              About GlowUp
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Connecting women-centric businesses with customers looking for beauty, events, baking and more.
            </p>
          </div>
          
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-center">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-muted-foreground mb-4">
                  GlowUp was founded in 2023 with a simple mission: to create a platform that empowers women entrepreneurs 
                  in the beauty, events, and service industries to connect with customers who value their skills and talents.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a small directory of local beauty services has grown into a comprehensive marketplace 
                  that showcases thousands of women-owned businesses across Bangladesh.
                </p>
                <p className="text-muted-foreground">
                  Our platform provides opportunities for women to grow their businesses, gain financial independence, 
                  and connect with a community of like-minded entrepreneurs and satisfied customers.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-soft">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80" 
                  alt="Team meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Our Mission */}
          <div className="mb-16 bg-gradient-to-r from-lavender-50 to-rose-50 rounded-2xl p-8 md:p-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-center">Our Mission</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-muted-foreground mb-6">
                Our mission is to empower women entrepreneurs by providing them with a platform to showcase their services,
                connect with customers, and grow their businesses. We believe that by supporting women-owned businesses,
                we can contribute to economic growth and promote gender equality.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl shadow-soft">
                  <h3 className="font-semibold text-lg mb-3">Empower</h3>
                  <p className="text-muted-foreground text-sm">Giving women entrepreneurs the tools they need to succeed</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-soft">
                  <h3 className="font-semibold text-lg mb-3">Connect</h3>
                  <p className="text-muted-foreground text-sm">Bridging the gap between service providers and customers</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-soft">
                  <h3 className="font-semibold text-lg mb-3">Grow</h3>
                  <p className="text-muted-foreground text-sm">Facilitating business growth and economic independence</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-10 text-center">Meet Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Fatima Rahman",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmdsYWRlc2hpJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
                },
                {
                  name: "Nadia Khan",
                  role: "Chief Operations Officer",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbmdsYWRlc2hpJTIwd29tYW58ZW58MHx8MHx8fDA%3D"
                },
                {
                  name: "Tasneem Ahmed",
                  role: "Head of Marketing",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww"
                },
                {
                  name: "Samira Begum",
                  role: "Customer Relations",
                  image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fHww"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-rose-600 to-lavender-600 rounded-2xl p-8 text-white text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
              Get in Touch
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:info@glowup.com" className="bg-white text-rose-600 hover:bg-white/90 px-6 py-2 rounded-full font-medium">
                Email Us
              </a>
              <a href="tel:+8801234567890" className="bg-transparent border border-white text-white hover:bg-white/10 px-6 py-2 rounded-full font-medium">
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
