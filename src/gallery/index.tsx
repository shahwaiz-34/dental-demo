import { useState } from "react";
import { Sparkles, ArrowLeft, ArrowRight, Layers } from "lucide-react";

import Img_1 from "../assets/img-1.jfif";
import Img_2 from "../assets/img-2.jfif";
import Img_3 from "../assets/img-3.jfif";
import Img_4 from "../assets/img-4.jfif";
import Img_5 from "../assets/img-5.jfif";
import Img_6 from "../assets/img-6.jfif";

// 1. DYNAMIC ASSET PATH CONFIGURATION
// Update these paths to your local images (e.g., "/src/assets/smile-1.jpg")
const GALLERY_IMAGES = [
  {
    id: "case-1",
    tag: "Case 01",
    title: "Full Arch Contour",
    description: "Structural realignment displaying optimized tooth proportion and shade harmony.",
    imgSrc: Img_1,
  },
  {
    id: "case-2",
    tag: "Case 02",
    title: "Porcelain Veneers",
    description:
      "Minimal preparation cosmetic design creating perfectly symmetrical natural contours.",
    imgSrc: Img_2,
  },
  {
    id: "case-3",
    tag: "Case 03",
    title: "Laser Whitening",
    description: "Advanced advanced enamel whitening safe therapy targeting deep internal stains.",
    imgSrc: Img_3,
  },
  {
    id: "case-4",
    tag: "Case 04",
    title: "Composite Bonding",
    description:
      "Direct restorative layering addressing minor micro-fractures and surface textures.",
    imgSrc: Img_4,
  },
  {
    id: "case-5",
    tag: "Case 05",
    title: "Implant Restorations",
    description:
      "Precision engineered structural tooth replacement anchoring seamlessly along the gumline.",
    imgSrc: Img_5,
  },
  {
    id: "case-6",
    tag: "Case 06",
    title: "Orthodontic Finishing",
    description:
      "Final post-alignment micro-abrasion detailing for a pristine vertical balance line.",
    imgSrc: Img_6,
  },
];

export const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <section
      id="gallery"
      className="bg-[#121212] text-white py-16 lg:py-24 border-t border-zinc-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Clinical Portfolio
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Smile <span className="text-orange-500">Gallery.</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Explore our curated gallery showcasing 6 custom aesthetic transformations and clinical
            results.
          </p>
        </div>

        {/* 3D Focal Deck Container */}
        <div className="relative max-w-5xl mx-auto min-h-[380px] sm:min-h-[480px] flex items-center justify-center my-8">
          {GALLERY_IMAGES.map((item, index) => {
            // Logic to calculate spatial offset layouts
            let offset = index - activeIndex;
            if (offset < -1) offset += GALLERY_IMAGES.length;
            if (offset > 1) offset -= GALLERY_IMAGES.length;

            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isHidden = !isCenter && !isLeft && !isRight;

            return (
              <div
                key={item.id}
                onClick={() => !isCenter && setActiveIndex(index)}
                className={`absolute w-full max-w-[280px] sm:max-w-[480px] aspect-[4/3] rounded-2xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer ${
                  isCenter
                    ? "z-30 scale-100 opacity-100 border-orange-500 shadow-[0_20px_50px_rgba(249,115,22,0.15)] pointer-events-auto"
                    : isLeft
                      ? "z-20 -translate-x-[40%] sm:-translate-x-[60%] scale-85 opacity-40 border-zinc-800 blur-[1px] hover:opacity-60"
                      : isRight
                        ? "z-20 translate-x-[40%] sm:translate-x-[60%] scale-85 opacity-40 border-zinc-800 blur-[1px] hover:opacity-60"
                        : "z-10 opacity-0 pointer-events-none scale-75"
                }`}
              >
                {/* Image Mask */}
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover select-none"
                />

                {/* Corner Quick Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md border border-zinc-800 px-3 py-1 rounded-md text-xs font-semibold tracking-wider text-orange-400">
                  {item.tag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Controls & Metadata */}
        <div className="max-w-xl mx-auto text-center mt-8">
          {/* Active Label Description */}
          <div className="min-h-[85px] mb-6">
            <h3 className="text-xl font-bold text-white tracking-wide transition-all duration-300">
              {GALLERY_IMAGES[activeIndex].title}
            </h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed max-w-md mx-auto">
              {GALLERY_IMAGES[activeIndex].description}
            </p>
          </div>

          {/* Navigation Arrows & Pagination Track */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all active:scale-95"
              aria-label="Previous image"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Visual Dot Progress Track */}
            <div className="flex gap-2">
              {GALLERY_IMAGES.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? "w-6 bg-orange-500"
                      : "w-1.5 bg-zinc-800 hover:bg-zinc-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all active:scale-95"
              aria-label="Next image"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
