import React from 'react';

const SeoArticle: React.FC = () => {
    
  const dimensionsData = [
    { platform: "Instagram", type: "Profile Picture", dimensions: "320 x 320" },
    { platform: "Instagram", type: "Feed Post (Square)", dimensions: "1080 x 1080" },
    { platform: "Instagram", type: "Feed Post (Portrait)", dimensions: "1080 x 1350" },
    { platform: "Instagram", type: "Story / Reel", dimensions: "1080 x 1920" },
    { platform: "Facebook", type: "Profile Picture", dimensions: "170 x 170" },
    { platform: "Facebook", type: "Cover Photo", dimensions: "851 x 315" },
    { platform: "Facebook", type: "Feed Post", dimensions: "1200 x 630" },
    { platform: "Twitter (X)", type: "Header Photo", dimensions: "1500 x 500" },
    { platform: "Twitter (X)", type: "In-stream Photo", dimensions: "1600 x 900" },
    { platform: "YouTube", type: "Channel Art", dimensions: "2560 x 1440" },
    { platform: "YouTube", type: "Video Thumbnail", dimensions: "1280 x 720" },
    { platform: "LinkedIn", type: "Company Logo", dimensions: "300 x 300" },
    { platform: "LinkedIn", type: "Cover Image", dimensions: "1128 x 191" },
    { platform: "Pinterest", type: "Standard Pin", dimensions: "1000 x 1500" },
    { platform: "TikTok", type: "Video/Story", dimensions: "1080 x 1920" },
  ];

  return (
    <article className="text-gray-300 prose prose-invert prose-lg max-w-none prose-headings:text-purple-300 prose-a:text-purple-400 prose-strong:text-white leading-loose">
      <header className="mb-12 border-b border-gray-700 pb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            The Ultimate Guide to Social Media Image Sizes: Master Visual Marketing in 2024
        </h1>
        <p className="text-xl text-gray-400 italic">
            Stop the dreaded auto-crop. Master the pixel-perfect dimensions, understand aspect ratios, and leverage the power of visual consistency to drive engagement and build a powerful brand presence across every major platform.
        </p>
      </header>

      <div className="bg-gray-900/80 p-6 rounded-xl border border-purple-500/30 mb-12 shadow-lg">
        <h2 className="text-2xl font-bold mt-0 mb-4 text-white">Table of Contents</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base">
            <li><a href="#introduction" className="hover:text-pink-400 transition-colors">1. The Visual Economy</a></li>
            <li><a href="#why-sizes-matter" className="hover:text-pink-400 transition-colors">2. Why Dimensions are Non-Negotiable</a></li>
            <li><a href="#aspect-ratio-mastery" className="hover:text-pink-400 transition-colors">3. Mastering Aspect Ratios</a></li>
            <li><a href="#instagram-guide" className="hover:text-pink-400 transition-colors">4. Instagram: The Visual Heavyweight</a></li>
            <li><a href="#facebook-guide" className="hover:text-pink-400 transition-colors">5. Facebook: The Universal Platform</a></li>
            <li><a href="#twitter-guide" className="hover:text-pink-400 transition-colors">6. X (Twitter): Real-Time Visuals</a></li>
            <li><a href="#youtube-guide" className="hover:text-pink-400 transition-colors">7. YouTube: The Click-Through King</a></li>
            <li><a href="#linkedin-guide" className="hover:text-pink-400 transition-colors">8. LinkedIn: Professional Imagery</a></li>
            <li><a href="#pinterest-guide" className="hover:text-pink-400 transition-colors">9. Pinterest: The Search Engine for Images</a></li>
            <li><a href="#data-table" className="hover:text-pink-400 transition-colors">10. Quick Reference Data Table</a></li>
            <li><a href="#tools-workflow" className="hover:text-pink-400 transition-colors">11. Tools & Workflow Optimization</a></li>
            <li><a href="#faq" className="hover:text-pink-400 transition-colors">12. Frequently Asked Questions (FAQ)</a></li>
        </ul>
      </div>

      <section id="introduction" className="mb-12">
        <p className="text-lg">
            In the digital age, the internet is primarily a visual medium. Before a user reads a single word of your headline, their brain processes the image associated with it. In fact, studies show that the human brain processes images 60,000 times faster than text. This is the "Visual Economy," and in this economy, the currency is attention. 
        </p>
        <p>
            However, gaining that attention is becoming increasingly difficult. Social media algorithms are ruthless. They prioritize high-quality, native-looking content while burying posts that look amateurish, pixelated, or poorly cropped. If you are uploading a single image size to Facebook, Instagram, and LinkedIn simultaneously, you are likely failing to engage a significant portion of your audience. This comprehensive guide serves as your roadmap to navigating the complex terrain of social media specifications in 2024.
        </p>
      </section>

      <section id="why-sizes-matter" className="mb-12">
        <h2>Why Correct Image Dimensions Are Non-Negotiable</h2>
        <p>You might ask, "Why can't I just upload a high-resolution photo and let the platform figure it out?" It's a valid question, but the answer lies in the mechanics of compression and user experience.</p>
        <h3 className="text-xl font-semibold text-white mt-6">1. The "Safe Zone" and Auto-Cropping</h3>
        <p>Social platforms are designed to display content uniformly. If your image doesn't fit their container, they will force it to fit. This often results in "center-cropping," where the edges of your image are sliced off. If your logo, text, or main subject is near the edge, it disappears. Using a tool like our <strong>Social Media Image Resizer</strong> allows you to control exactly what gets cropped before you upload.</p>
        
        <h3 className="text-xl font-semibold text-white mt-6">2. Compression Artifacts</h3>
        <p>When you upload a 4000px wide image to a slot designed for 1080px, the platform's algorithm aggressively compresses the file to save bandwidth. This server-side compression is often brutal, resulting in "artifacts"—fuzzy noise around text and sharp edges. By resizing your image to the exact target dimensions <em>before</em> uploading, you bypass much of this aggressive compression, keeping your visuals crisp.</p>

        <h3 className="text-xl font-semibold text-white mt-6">3. Algorithmic Preference</h3>
        <p>Social media algorithms track engagement signals (time spent viewing, clicks, likes). An image that fills the screen perfectly (like a 4:5 portrait on Instagram) physically takes longer to scroll past than a landscape image. This split-second difference counts as increased "dwell time," signaling to the algorithm that your content is valuable and should be shown to more people.</p>
      </section>

      <section id="aspect-ratio-mastery" className="mb-12">
        <h2>Decoding Aspect Ratios: The Key to Visual Consistency</h2>
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-lg border-l-4 border-purple-500 my-6">
            <p className="font-bold text-white mb-2">Definition:</p>
            <p className="m-0">An <strong>Aspect Ratio</strong> describes the proportional relationship between the width and height of an image. It is not the physical size in pixels, but the <em>shape</em> of the image.</p>
        </div>
        <ul className="space-y-4">
            <li><strong>1:1 (Square):</strong> The standard for Instagram grids and carousel posts. It offers a balanced, symmetrical look.</li>
            <li><strong>9:16 (Vertical/Portrait):</strong> The golden ratio for mobile. Used in Stories, Reels, TikToks, and Snapchat. It occupies the full mobile screen.</li>
            <li><strong>4:5 (Vertical/Portrait):</strong> The optimal size for Instagram Feed posts. It takes up more vertical space than a square, maximizing visibility on mobile feeds.</li>
            <li><strong>16:9 (Landscape/Widescreen):</strong> The standard for video (YouTube, TV) and Twitter in-stream images. It mimics the human field of view.</li>
        </ul>
        <p>Understanding these ratios allows you to repurpose a single photo shoot into dozens of content pieces. A wide landscape shot can be cropped into a 4:5 for the feed and a 9:16 for a Story, provided the resolution is high enough.</p>
      </section>

      <section id="instagram-guide" className="mb-12">
        <h2>Instagram: The Visual Heavyweight</h2>
        <p>Instagram remains the most demanding platform regarding visual quality. It is strictly a visual-first medium.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-gray-800 p-5 rounded-lg">
                <h4 className="text-pink-400 font-bold text-lg mb-2">Feed Posts</h4>
                <p className="text-sm">While 1080x1080 (1:1) is classic, we highly recommend <strong>1080x1350 (4:5)</strong>. It occupies nearly 30% more screen space on a smartphone than a square image, giving you more room to capture attention.</p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg">
                <h4 className="text-pink-400 font-bold text-lg mb-2">Stories & Reels</h4>
                <p className="text-sm">Must be <strong>1080x1920 (9:16)</strong>. Anything smaller will be upscaled (pixelated) or have ugly color gradients added to the background. Keep text elements away from the top and bottom 250px to avoid covering UI elements.</p>
            </div>
        </div>
      </section>

      <section id="facebook-guide" className="mb-12">
        <h2>Facebook: The Versatile Giant</h2>
        <p>Facebook supports almost any aspect ratio, but specific dimensions perform better for link clicks and shares.</p>
        <ul className="list-disc pl-5 space-y-3 mt-4">
            <li><strong>Shared Links:</strong> If you are sharing a URL, your Open Graph image should be <strong>1200x630</strong>. This ensures the large preview card is generated.</li>
            <li><strong>Event Covers:</strong> These are tricky. 1920x1005 is recommended, but test on mobile as corners are often rounded or cropped.</li>
            <li><strong>Stories:</strong> Facebook Stories are synced with Instagram, so the same <strong>1080x1920</strong> dimensions apply.</li>
        </ul>
      </section>

      <section id="twitter-guide" className="mb-12">
        <h2>X (Twitter): Real-Time Visuals</h2>
        <p>Tweets with images receive 150% more retweets than those without. However, X has a history of awkward cropping.</p>
        <p><strong>The Golden Rule:</strong> Stick to <strong>1600x900 (16:9)</strong>. X now displays these uncropped in the timeline on mobile and desktop. This prevents the "open to see full image" friction that reduces engagement.</p>
      </section>

      <section id="youtube-guide" className="mb-12">
        <h2>YouTube: The Click-Through King</h2>
        <p>Your video thumbnail is more important than your video title. It is the sole factor determining whether a user clicks or scrolls.</p>
        <p><strong>Dimensions: 1280x720.</strong> While this seems small, it must look good when shrunk down to mobile size. Use high-contrast colors, easy-to-read text (less than 6 words), and emotive faces. Keep the file size under 2MB.</p>
      </section>

      <section id="data-table" className="mb-12">
          <h2>Quick Reference: Social Media Image Dimensions Data Table</h2>
          <p className="mb-4">Use the <strong>doodax.com</strong> Resizer Tool at the top of this page to instantly fit your images to these specs.</p>
          <div className="overflow-x-auto rounded-xl shadow-2xl border border-gray-700">
              <table className="w-full text-left border-collapse">
                  <thead className="bg-gradient-to-r from-gray-800 to-gray-900 text-purple-300">
                      <tr>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Platform</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Placement</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Dimensions (px)</th>
                          <th className="p-4 font-bold uppercase tracking-wider text-sm">Aspect Ratio</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700 bg-gray-900/40">
                      {dimensionsData.map((item, index) => (
                          <tr key={index} className="hover:bg-white/5 transition-colors">
                              <td className="p-4 font-medium text-white">{item.platform}</td>
                              <td className="p-4 text-gray-300">{item.type}</td>
                              <td className="p-4 font-mono text-pink-400">{item.dimensions}</td>
                              <td className="p-4 text-gray-400 text-sm">
                                  {item.dimensions.includes('1080 x 1080') ? '1:1' : 
                                   item.dimensions.includes('1920') ? '9:16' : 
                                   item.dimensions.includes('1350') ? '4:5' : 'Various'}
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
      </section>

      <section id="tools-workflow" className="mb-12">
        <h2>Tools & Workflow Optimization</h2>
        <p>Efficiency is key. Here is a recommended workflow for 2024 content creators:</p>
        <ol className="list-decimal pl-6 space-y-4 mt-4">
            <li><strong>Capture High Fidelity:</strong> Always shoot in the highest resolution possible. You can scale down, but you cannot scale up without losing quality.</li>
            <li><strong>Master Edit:</strong> Perform your color grading and retouching on the master file using software like Lightroom or Photoshop.</li>
            <li><strong>The "Doodax" Step:</strong> Use our <strong>Social Media Image Resizer</strong> to create your specific assets. Upload your master, select "Instagram Portrait", crop, and download. Then select "Twitter Header", adjust the crop, and download.</li>
            <li><strong>Organize:</strong> Save files with clear naming conventions (e.g., `Campaign_Name_Insta_Portrait.jpg`).</li>
        </ol>
      </section>
      
      <section id="faq" className="mb-12">
        <h2>Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-8 mt-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">Q: Does this tool reduce image quality?</h3>
                <p>A: No. We use high-quality HTML5 Canvas resampling algorithms (Bi-cubic smoothing). While we optimize the file size for web performance (essential for loading speeds), the visual integrity of your image is maintained specifically for screen viewing.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">Q: Is my data safe?</h3>
                <p>A: Absolutely. This is a <strong>client-side</strong> tool. Your image never leaves your browser. It is processed using your computer's own processing power, ensuring 100% privacy and zero data leakage.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">Q: What is the best file format for logos vs photos?</h3>
                <p>A: Use <strong>JPG</strong> for photographs (people, landscapes) as it handles complex color gradients efficiently. Use <strong>PNG</strong> for logos, text-heavy graphics, or images requiring a transparent background to avoid compression "noise" around sharp lines.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-2">Q: Why do my images look blurry on Instagram Stories?</h3>
                <p>A: This usually happens if your image is smaller than 1080x1920 pixels (Instagram stretches it) or if your internet connection was weak during upload (Instagram uploads a low-res preview). Always resize to exactly 1080x1920 before uploading.</p>
            </div>
        </div>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>This guide is updated regularly to reflect the latest changes in social media platform algorithms and layout designs. © 2024 doodax.com</p>
      </footer>

    </article>
  );
};

export default SeoArticle;