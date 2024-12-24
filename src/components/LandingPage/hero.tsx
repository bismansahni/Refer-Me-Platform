

// 'use client';

// import { useRouter } from 'next/navigation'; // Import the router hook
// import { useRef } from 'react';
// import { Button } from '../ui/button';

// const Hero = () => {
//   const router = useRouter(); // Define the router hook
//   const sectionsRef = useRef([]); // Define sectionsRef if you need it for scrolling or other tasks

//   return (
//     <section
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//     //   ref={(el) => (sectionsRef.current[0] = el)} // Ensure sectionsRef is used properly
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-xy"></div>
//       <div className="container mx-auto px-4 text-center relative z-10">
//         <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
//         Give a Hand, Get a Hand
        
//         </h2>
//         <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
//          Refer and Get Referred.
//         </p>
//         <Button
//           onClick={() => router.push("/sign-up")}
//           className="bg-blue-500 text-white hover:bg-blue-600 transition-colors text-lg px-8 py-3 rounded-full animate-pulse"
//         >
//           {/* Start Practicing Now <ArrowRight className="ml-2" /> */}
//         </Button>
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
//     </section>
//   );
// };

// export default Hero;

// 'use client';

// import { useRouter } from 'next/navigation';
// import { Button } from '../ui/button';

// const Hero = () => {
//   const router = useRouter(); // Define the router hook

//   return (
//     <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300">
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-100/60 via-gray-200/60 to-gray-300/60"></div>
//       <div className="container mx-auto px-6 text-center relative z-10">
//         <h2 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
//           Give a Hand, Get a Hand
//         </h2>
//         <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
//           Refer and Get Referred.
//         </p>
//         <Button
//           onClick={() => router.push("/sign-up")}
//           className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg text-lg px-8 py-3 transition-colors"
//         >
//           Get Started
//         </Button>
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
//     </section>
//   );
// };

// export default Hero;




'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useState } from 'react';

const Hero = () => {
  const router = useRouter(); // Define the router hook

  const[email, setEmail] = useState(""); // Define the email state
  const handleSubmit = () => {
    if (email) {
      // Redirect to the signup page with the email as a query param
      router.push(`/sign-up?email=${encodeURIComponent(email)}`);
    } else {
      alert("Please enter a valid email.");
    }
  };


return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300/80"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-semibold text-gray-900 mb-6 leading-tight tracking-tight">
          Give a Hand, Get a Hand
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
       Refer and Get Referred.
        </p>
        {/* <div className="flex justify-center mb-6">
        <Input/>
        </div> */}

<div className="flex justify-center mb-6">
          <Input
            placeholder="Enter your email"
            value={email} // Bind the email value to the state
            onChange={(e) => setEmail(e.target.value)}
            className="text-gray-900 p-4 rounded-lg w-full max-w-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button
          onClick={handleSubmit}
          className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg text-lg px-8 py-3 transition-colors"
        >
          Get Started
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
