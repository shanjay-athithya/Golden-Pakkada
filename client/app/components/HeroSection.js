// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { BsWhatsapp } from "react-icons/bs";

// const CustomSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(true);
//   const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile

//   const imagesDesktop = [
//     "/images/web1.jpg",
//     "/images/web2.jpg",
//     "/images/web3.jpg",
//     "/images/web4.jpg",
//     "/images/web5.jpg",
//     "/images/web6.jpg",
//   ];

//   const imagesMobile = [
//     "/images/mobile1.jpg",
//     "/images/mobile2.jpg",
//     "/images/mobile3.jpg",
//     "/images/mobile4.jpg",
//     "/images/mobile5.jpg",
//     "/images/mobile6.jpg",
//   ];

//   const router = useRouter();

//   const images = isMobile ? imagesMobile : imagesDesktop;

//   const nextSlide = () => {
//     if (currentIndex === images.length - 1) {
//       setTimeout(() => {
//         setIsTransitioning(false);
//         setCurrentIndex(0);
//       }, 600);
//     } else {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsTransitioning(true);
//       nextSlide();
//     }, 4000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   // Check for screen size only on the client side
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     handleResize(); // Initial check on component mount
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section className="relative h-screen overflow-hidden mt-4 md:mt-5 lg:mt-5">
//       <div className="absolute inset-0 flex">
//         <div
//           className="flex w-full h-full"
//           style={{
//             transform: `translateX(-${currentIndex * 100}%)`,
//             transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
//           }}
//         >
//           {images.map((image, index) => (
//             <div key={index} className="relative w-full h-full flex-shrink-0">
//               <Image
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 layout="fill"
//                 objectFit="cover"
//                 sizes="(max-width: 640px) 100vw, 50vw"
//               />
//               <div className="absolute inset-0 bg-black opacity-0 "></div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>

//       {/* WhatsApp Button */}
//       <a
//         href="https://wa.me/919176229559"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 z-30"
//       >
//         <BsWhatsapp size={30} />
//       </a>
//     </section>
//   );
// };

// export default CustomSlider;
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";

const CustomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const imagesDesktop = [
    "/images/web1.jpg",
    "/images/web2.jpg",
    "/images/web3.jpg",
    "/images/web4.jpg",
    "/images/web5.jpg",
    "/images/web6.jpg",
  ];

  const imagesMobile = [
    "/images/mobile1.jpg",
    "/images/mobile2.jpg",
    "/images/mobile3.jpg",
    "/images/mobile4.jpg",
    "/images/mobile5.jpg",
    "/images/mobile6.jpg",
  ];

  const router = useRouter();

  const images = isMobile ? imagesMobile : imagesDesktop;

  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 600);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden mt-4 md:mt-5 lg:mt-5">
      <div className="absolute inset-0 flex">
        <div
          className="flex w-full h-full"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? "transform 0.6s ease-in-out" : "none",
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                layout="responsive"
                width={isMobile ? 420 : 1920}
                height={isMobile ? 390 : 1080}
                objectFit="cover"
                sizes={isMobile ? "100vw" : "50vw"}
              />
              <div className="absolute inset-0 bg-black opacity-0"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>

      <a
        href="https://wa.me/919176229559"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-110 z-30"
      >
        <BsWhatsapp size={30} />
      </a>
    </section>
  );
};

export default CustomSlider;
