import React, { useState } from 'react';
import ThemeLayout from './components/ThemeLayout';
import ImageResizerTool from './components/ImageResizerTool';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);

  return (
    <ThemeLayout>
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
        <div className="text-center mb-10 md:mb-16 max-w-4xl px-4 animate-fadeIn">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg">
            Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Image Resizer</span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            The professional's choice for instant, private, and pixel-perfect cropping. No uploads. No quality loss.
          </p>
        </div>
        
        <div className="w-full mb-20 animate-slideUp">
             <ImageResizerTool />
        </div>

        <div className="w-full max-w-4xl bg-gray-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden relative group">
            <div
              className={`relative overflow-hidden transition-all duration-1000 ease-in-out ${isArticleVisible ? 'max-h-[20000px]' : 'max-h-[160px]'}`}
            >
                <div className="p-8 sm:p-12">
                    <SeoArticle />
                </div>
                {!isArticleVisible && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900 flex items-end justify-center pb-8 z-10 transition-opacity duration-500">
                     {/* Gradient Overlay for Fade Effect */}
                  </div>
                )}
            </div>
            
            {/* Control Button Area */}
            <div className={`relative z-20 w-full flex justify-center pb-8 ${isArticleVisible ? 'pt-8 bg-gray-900/50' : 'absolute bottom-0'}`}>
                <button
                    onClick={() => setIsArticleVisible(!isArticleVisible)}
                    className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-purple-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 hover:bg-purple-700 hover:scale-105 shadow-[0_0_20px_rgba(147,51,234,0.5)]"
                >
                    {isArticleVisible ? (
                        <span className="flex items-center gap-2">Show Less <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></span>
                    ) : (
                        <span className="flex items-center gap-2">Read The Ultimate SEO Guide <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span>
                    )}
                    <div className="absolute -inset-3 rounded-xl bg-purple-400 opacity-20 group-hover:opacity-40 blur transition duration-200"></div>
                </button>
            </div>
        </div>
      </div>
    </ThemeLayout>
  );
};

export default App;