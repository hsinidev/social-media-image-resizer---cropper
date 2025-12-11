import React, { useState, ReactNode } from 'react';

type ModalType = 'About' | 'Contact' | 'Guide' | 'Privacy' | 'Terms' | 'DMCA' | null;

interface ThemeLayoutProps {
  children: ReactNode;
}

const Modal: React.FC<{ title: string; onClose: () => void; children: ReactNode }> = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-gray-900 border border-purple-500/50 rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.3)] w-full max-w-3xl max-h-[85vh] overflow-y-auto p-8 relative animate-fadeIn" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4 sticky top-0 bg-gray-900 z-10">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-4xl leading-none transition-transform hover:rotate-90">&times;</button>
        </div>
        <div className="text-gray-300 space-y-6 leading-relaxed font-light text-justify">
          {children}
        </div>
      </div>
    </div>
  );
};


const ThemeLayout: React.FC<ThemeLayoutProps> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  
  const modalLinks: { name: ModalType; label: string }[] = [
    { name: 'About', label: 'About' },
    { name: 'Contact', label: 'Contact' },
    { name: 'Guide', label: 'Guide' },
    { name: 'Privacy', label: 'Privacy Policy' },
    { name: 'Terms', label: 'Terms of Service' },
    { name: 'DMCA', label: 'DMCA' },
  ];

  const getModalContent = (modal: ModalType) => {
    switch (modal) {
        case 'About': return (
            <>
                <p>Welcome to <strong>Image Resizer Pro</strong>, the ultimate client-side solution for social media content creators, marketers, and digital enthusiasts. Our mission is simple: to provide a secure, fast, and accessible tool that empowers you to optimize your visual content without compromising privacy.</p>
                <h3 className="text-xl font-bold text-white mt-4">Why We Built This</h3>
                <p>In an era where data privacy is paramount, we noticed a gap in the market. Most image resizing tools require you to upload your personal photos to a remote server. This creates unnecessary risk and latency. We built this tool using advanced HTML5 Canvas technology to ensure that <strong>your images never leave your device</strong>. All processing happens locally in your browser.</p>
                <h3 className="text-xl font-bold text-white mt-4">Our Technology</h3>
                <p>Powered by React 18, TypeScript, and Tailwind CSS, we leverage the raw power of modern web browsers to perform complex image manipulations instantly. Whether you are resizing for Instagram, cropping for Twitter, or formatting for YouTube, our algorithms calculate precise aspect ratios to ensure your content looks pixel-perfect every time.</p>
            </>
        );
        case 'Contact': return (
            <>
                <p>We value your feedback, questions, and partnership opportunities. Whether you have a feature request, need technical support, or just want to say hello, we are here to help.</p>
                
                <div className="bg-gray-800 p-6 rounded-lg mt-4 border border-purple-500/20">
                    <h3 className="text-xl font-bold text-purple-400 mb-2">Get in Touch</h3>
                    <ul className="space-y-3">
                        <li>
                            <strong className="text-white">Email:</strong> <a href="mailto:hsini.web@gmail.com" className="text-purple-300 hover:text-white transition-colors">hsini.web@gmail.com</a>
                        </li>
                        <li>
                            <strong className="text-white">Website:</strong> <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-white transition-colors">doodax.com</a>
                        </li>
                        <li>
                            <strong className="text-white">Developer:</strong> HSINI MOHAMED
                        </li>
                        <li>
                            <strong className="text-white">Location:</strong> Global (Remote)
                        </li>
                    </ul>
                </div>
                <p className="mt-4 text-sm text-gray-400">We aim to respond to all inquiries within 24-48 hours.</p>
            </>
        );
        case 'Guide': return (
            <>
                <p>Mastering social media visuals doesn't have to be complicated. Follow this step-by-step guide to get the most out of our Image Resizer Pro.</p>
                
                <h3 className="text-lg font-bold text-white mt-4">1. Uploading Your Image</h3>
                <p>Click the large dashed upload area or drag and drop your file directly onto it. We support high-resolution JPEG, PNG, and GIF formats. Since processing is local, there are no strict file size limits, though extremely large files (50MB+) may depend on your device's RAM.</p>

                <h3 className="text-lg font-bold text-white mt-4">2. Selecting a Platform</h3>
                <p>Use the dropdown menu to select your target social media platform. We have pre-configured the exact dimensions for Instagram (Square, Portrait, Story), Facebook, Twitter/X, YouTube, LinkedIn, and Pinterest. The tool automatically calculates the best crop strategy.</p>

                <h3 className="text-lg font-bold text-white mt-4">3. Preview & Process</h3>
                <p>Click the "Resize & Crop" button. The tool analyzes your image's aspect ratio against the target ratio. It performs a smart center-crop to ensure the main subject remains in frame while fitting the new dimensions perfectly.</p>

                <h3 className="text-lg font-bold text-white mt-4">4. Download</h3>
                <p>Once satisfied with the preview, click "Download Image". The file will be saved to your device as a high-quality JPEG, ready for instant upload to your social media account.</p>
            </>
        );
        case 'Privacy': return (
            <>
                <p className="text-sm text-gray-400 mb-4">Last Updated: October 27, 2023</p>
                <p>Your privacy is our top priority. This Privacy Policy describes how <strong>doodax.com</strong> ("we", "us", or "our") handles your information when you use our Social Media Image Resizer.</p>
                
                <h3 className="text-lg font-bold text-white mt-4">1. No Data Collection</h3>
                <p>Unlike other online tools, we utilize a <strong>client-side only</strong> architecture. This means:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Your images are <strong>never</strong> uploaded to our servers.</li>
                    <li>Your images are <strong>never</strong> stored in any database.</li>
                    <li>We do not view, access, or share your content.</li>
                </ul>
                <p className="mt-2">All image processing occurs within your web browser's memory on your local device.</p>

                <h3 className="text-lg font-bold text-white mt-4">2. Local Storage & Cookies</h3>
                <p>We use standard local storage technologies solely to improve user experience (e.g., remembering your preferred theme). We do not use cookies for tracking or advertising purposes.</p>

                <h3 className="text-lg font-bold text-white mt-4">3. Third-Party Links</h3>
                <p>Our website may contain links to external sites (e.g., GitHub, Social Media Platforms). We are not responsible for the privacy practices of these external sites.</p>

                <h3 className="text-lg font-bold text-white mt-4">4. Changes to Policy</h3>
                <p>We may update this policy occasionally. Continued use of the tool signifies your acceptance of any changes.</p>
            </>
        );
        case 'Terms': return (
            <>
                 <p className="text-sm text-gray-400 mb-4">Last Updated: October 27, 2023</p>
                <p>By accessing and using <strong>doodax.com</strong>, you accept and agree to be bound by the terms and provision of this agreement.</p>

                <h3 className="text-lg font-bold text-white mt-4">1. License to Use</h3>
                <p>We grant you a non-exclusive, non-transferable, revocable license to use our Image Resizer tool for personal and commercial purposes, subject to these terms.</p>

                <h3 className="text-lg font-bold text-white mt-4">2. User Responsibilities</h3>
                <p>You agree not to use the tool to process content that is illegal, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable. You are solely responsible for the content you process using this tool.</p>

                <h3 className="text-lg font-bold text-white mt-4">3. Intellectual Property</h3>
                <p>You retain all rights and ownership of the images you upload and process. We claim no ownership over your content. The design, code, and graphics of this website are the property of HSINI MOHAMED Development.</p>

                <h3 className="text-lg font-bold text-white mt-4">4. Disclaimer of Warranties</h3>
                <p>The service is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties, express or implied, including the warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

                <h3 className="text-lg font-bold text-white mt-4">5. Limitation of Liability</h3>
                <p>In no event shall we be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use this tool.</p>
            </>
        );
        case 'DMCA': return (
            <>
                <p>We respect the intellectual property rights of others and expect our users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond expeditiously to claims of copyright infringement.</p>

                <h3 className="text-lg font-bold text-white mt-4">Important Note on Architecture</h3>
                <p>Please be aware that <strong>doodax.com</strong> is a client-side tool. We do not host, store, or transmit user-uploaded content on our servers. Users process their own files locally on their devices. Therefore, we effectively have no ability to "take down" content that we do not possess.</p>

                <h3 className="text-lg font-bold text-white mt-4">Reporting Infringement</h3>
                <p>If you believe that materials accessible on this website infringe your copyright (e.g., logo misuse in our branding, text content), please send a notice of copyright infringement to our designated agent:</p>
                <div className="bg-gray-800 p-4 rounded mt-2">
                    <p><strong>Email:</strong> hsini.web@gmail.com</p>
                    <p><strong>Subject:</strong> DMCA Notice - doodax.com</p>
                </div>
                
                <p className="mt-4">Your notice must include:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>A physical or electronic signature of the copyright owner.</li>
                    <li>Identification of the copyrighted work claimed to have been infringed.</li>
                    <li>Identification of the material that is claimed to be infringing.</li>
                    <li>Your contact information (address, telephone number, email).</li>
                    <li>A statement that you have a good faith belief that use of the material is not authorized.</li>
                </ul>
            </>
        );
        default: return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0f0c29] text-white overflow-x-hidden font-sans">
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="nebula"></div>
      </div>
      <style>{`
        /* Galaxy Background Animation */
        @keyframes move-twink-back {
            from {background-position:0 0;}
            to {background-position:-10000px 5000px;}
        }
        @keyframes move-clouds-back {
            from {background-position:0 0;}
            to {background-position:10000px 0;}
        }
        @keyframes fade-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }

        .animate-fadeIn {
            animation: fade-in 0.3s ease-out forwards;
        }

        .stars, .twinkling, .nebula {
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          width:100%;
          height:100%;
          display:block;
        }

        .stars {
          background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
          z-index:0;
        }

        .twinkling{
          background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
          z-index:1;
          animation:move-twink-back 200s linear infinite;
          opacity: 0.4;
        }

        .nebula {
            background: 
                radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.2), transparent 60%),
                radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.15), transparent 50%),
                radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15), transparent 50%);
            z-index: 2;
            filter: blur(60px);
            animation: pulse-nebula 10s ease-in-out infinite alternate;
        }
        
        @keyframes pulse-nebula {
            0% { opacity: 0.5; transform: scale(1); }
            100% { opacity: 0.8; transform: scale(1.1); }
        }
        
        /* Custom Scrollbar for Modal */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1f2937; 
        }
        ::-webkit-scrollbar-thumb {
          background: #8b5cf6; 
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #7c3aed; 
        }
      `}</style>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 transition-all duration-300">
          <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl font-bold shadow-lg shadow-purple-500/30">
                    IR
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    doodax<span className="text-purple-400">.com</span>
                </h1>
            </div>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {modalLinks.map(link => (
                 <li key={link.name}>
                    <button 
                        onClick={() => setActiveModal(link.name)} 
                        className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-all duration-300 border border-transparent hover:border-white/20"
                    >
                        {link.label}
                    </button>
                 </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
            {children}
        </main>

        <footer className="bg-black/40 backdrop-blur-md border-t border-white/5 pt-12 pb-8 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
                    <div>
                        <h4 className="text-xl font-bold text-white mb-4">Social Image Resizer</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            The most secure, client-side tool for optimizing your social media presence. Crop, resize, and conquer the algorithm without sacrificing privacy.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <button onClick={() => setActiveModal('Privacy')} className="text-gray-400 hover:text-purple-400 text-sm">Privacy</button>
                            <button onClick={() => setActiveModal('Terms')} className="text-gray-400 hover:text-purple-400 text-sm">Terms</button>
                            <button onClick={() => setActiveModal('Contact')} className="text-gray-400 hover:text-purple-400 text-sm">Contact</button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-end">
                        <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
                        <a href="mailto:hsini.web@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors mb-2">hsini.web@gmail.com</a>
                        <a href="https://doodax.com" className="text-gray-400 hover:text-purple-400 transition-colors">doodax.com</a>
                    </div>
                </div>
                
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500 text-sm mb-4">
                        &copy; {new Date().getFullYear()} doodax.com. All rights reserved.
                    </p>
                    <div className="flex justify-center items-center gap-2 text-sm">
                        <span className="text-gray-400">Powered by</span>
                        <a 
                            href="https://github.com/hsinidev" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-300 hover:to-pink-400 transition-all"
                        >
                            HSINI MOHAMED
                        </a>
                    </div>
                </div>
            </div>
        </footer>
      </div>
      {activeModal && (
        <Modal title={activeModal} onClose={() => setActiveModal(null)}>
            {getModalContent(activeModal)}
        </Modal>
      )}
    </div>
  );
};

export default ThemeLayout;