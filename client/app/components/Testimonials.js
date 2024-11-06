"use client";

import { FaStar, FaUserCircle } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Soundarphil",
      testimonial: "Despite its small size, this shop offers a wide variety of sweets with excellent service and affordable prices.",
      rating: 4,
    },
    {
      name: "Prithivi Ram T",
      testimonial: "Yummy sweets and savouries at low cost. One of the best places to eat evening snacks in this area.",
      rating: 5,
    },
    {
      name: "Multilab India",
      testimonial: "Very tasty, hygienically prepared, well-maintained outlet in New Washermenpet, lots of variety.",
      rating: 5,
    },
    {
      name: "Sundara Pandian",
      testimonial: "The small sweet stall with delicious items. If you want taste, you may ignore the small shop size.",
      rating: 4,
    },
    {
      name: "Kandhavelu S",
      testimonial: "Very good, tasty, quality, variety of sweets, snacks available. Bulk orders for school/office functions delivered on time.",
      rating: 5,
    },
    {
      name: "Manoj Selvam",
      testimonial: "Every sweet and savoury is too good and yummy! Don&apos;t miss out on the boli, and they also have refreshing drinks.",
      rating: 5,
    },
    {
      name: "Praveen Chidambaram",
      testimonial: "Sweets and snacks with reasonable prices. Dry jamun is my favorite and must-try dish there.",
      rating: 4,
    },
    {
      name: "Krishna Kumar",
      testimonial: "Good taste for median pricing. A great spot for snacks and sweets.",
      rating: 4,
    },
    {
      name: "Murale Subbiah",
      testimonial: "Good and delicious sweets and snacks. Especially the evening sweet poli was very nice.",
      rating: 5,
    },
    {
      name: "AKR",
      testimonial: "Try Ghee Mysore-pak. I recommend it and would say it is existing at its best. All the sweets are fresh and affordable.",
      rating: 5,
    },
  ];
  
  return (
    <section 
      className="relative bg-byellow py-12 overflow-hidden"
      style={{ backgroundImage: `url('/images/pattern.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
    >
      <div className="absolute inset-0 bg-pgreen opacity-100"></div>
      
      <div className="relative max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-royal mt-10 text-center text-pyellow mb-12">Our Customers Love Us</h2>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-marquee">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white text-pred p-6 rounded-lg shadow-lg min-w-[350px] min-h-[250px] flex flex-col justify-between"
              >
                
                <div className="flex-grow">
                  <p className="text-lg font-medium italic mb-4 break-words">
                    &quot;{testimonial.testimonial}&quot;
                  </p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < testimonial.rating ? 'text-pred' : 'text-gray-300'
                        }`}
                        size={20}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center mt-auto">
                  <FaUserCircle className="text-pyellow text-3xl mr-2" />
                  <p className="text-xl text-pred ">- {testimonial.name}</p>
                </div>
                
              </div>
            ))}
            {testimonials.map((testimonial, index) => (
              <div
                key={`repeat-${index}`}
                className="bg-pgreen text-byellow p-6 rounded-lg shadow-lg min-w-[350px] min-h-[250px] flex flex-col justify-between"
              >
                <div className="flex-grow">
                  <p className="text-lg font-medium italic mb-4 break-words">
                    &quot;{testimonial.testimonial}&quot;
                  </p>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${
                          i < testimonial.rating ? 'text-pyellow' : 'text-gray-300'
                        }`}
                        size={20}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center mt-auto">
                  <FaUserCircle className="text-pyellow text-3xl mr-2" />
                  <p className="text-xl font-semibold">- {testimonial.name}</p>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
          <p className="text-xl  text-center font-semibold italic text-pgreen">&quot;Quality you can taste, love you can feel.&quot;</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
