import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 transition-colors duration-300 overflow-hidden footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="max-w-5xl sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className='mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* About Me Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">About Me</h2>
            <p className="text-slate-200">I'm a passionate developer focused on creating beautiful and functional web applications.</p>
          </div>


          {/* Contact Me Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Contact Me</h2>
            <p className="text-slate-200">
              Email: <a href="mailto:nikhil0080012005@gmail.com" className="text-slate-300 hover:underline">nikhil0080012005@gmail.com</a>
            </p>
            <p className="text-slate-200">Phone: 7703850245</p>
          </div>

          {/* Follow Me Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-100 mb-4">Follow Me</h2>
            <div className="flex space-x-4 justify-center items-center">
              {/* LinkedIn Icon */}
              <div className="flex items-center gap-2 cursor-pointer group">
                <a href="https://www.linkedin.com/in/nikhil-chopra-238334270/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin transition-transform duration-500 ease-in-out transform group-hover:scale-125">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>

              {/* Twitter Icon */}
              <div className="flex items-center gap-2 cursor-pointer group">
                <a href="https://x.com/NikhilChopra08" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x transition-transform duration-500 ease-in-out transform group-hover:scale-125">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </a>
              </div>

              {/* Instagram Icon */}
              <div className="flex items-center gap-2 cursor-pointer group">
                <a href="https://www.instagram.com/nikhil_chopra08" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="purple" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram transition-transform duration-500 ease-in-out transform group-hover:scale-125">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-slate-200">© 2024 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
