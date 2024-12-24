// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { ArrowRight, Briefcase, Building2, FileText } from "lucide-react";

// const SleekJobForm = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     jobRole: "",
//     company: "",
//     resumeLink: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     router.push("/success");
//   };

//   const inputVariants = {
//     focus: { scale: 1.02, transition: { type: "spring", stiffness: 300 } },
//   };

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-white-50 p-4">
   


//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl"
//       >
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//           Your Career Journey
//         </h2>
//         <p className="text-gray-600 mb-8 text-center">
//           Share your current role and let's shape your future together.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* Job Role */}
//           <div className="space-y-2">
//             <Label
//               htmlFor="jobRole"
//               className="text-sm font-medium text-gray-700 flex items-center"
//             >
//               <Briefcase className="w-4 h-4 mr-2" />
//               Current Job Role
//             </Label>
//             <motion.div variants={inputVariants} whileFocus="focus">
//               <Input
//                 id="jobRole"
//                 name="jobRole"
//                 value={formData.jobRole}
//                 onChange={handleChange}
//                 placeholder="e.g. Software Engineer"
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 required
//               />
//             </motion.div>
//           </div>

//           {/* Company */}
//           <div className="space-y-2">
//             <Label
//               htmlFor="company"
//               className="text-sm font-medium text-gray-700 flex items-center"
//             >
//               <Building2 className="w-4 h-4 mr-2" />
//               Current Company
//             </Label>
//             <motion.div variants={inputVariants} whileFocus="focus">
//               <Input
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 placeholder="e.g. Tech Innovations Inc."
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 required
//               />
//             </motion.div>
//           </div>

//           {/* Resume Link */}
//           <div className="space-y-2">
//             <Label
//               htmlFor="resumeLink"
//               className="text-sm font-medium text-gray-700 flex items-center"
//             >
//               <FileText className="w-4 h-4 mr-2" />
//               Resume Link
//             </Label>
//             <motion.div variants={inputVariants} whileFocus="focus">
//               <Input
//                 id="resumeLink"
//                 name="resumeLink"
//                 type="url"
//                 value={formData.resumeLink}
//                 onChange={handleChange}
//                 placeholder="https://your-resume-link.com"
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 required
//               />
//             </motion.div>
//           </div>

//           {/* Submit Button */}
//           <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//             <Button
//               type="submit"
//               className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg text-lg px-8 py-3 transition-colors flex items-center justify-center"
//             >
//               Submit
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//           </motion.div>
//         </form>
//       </motion.div>
//     </section>
//   );
// };

// export default SleekJobForm;


//
//
// 'use client';
//
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { ArrowRight, Briefcase, Building2, FileText } from 'lucide-react';
//
// const SleekJobForm = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     jobRole: '',
//     company: '',
//     resumeLink: '',
//   });
//
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     router.push('/success');
//   };
//
//   const inputVariants = {
//     focus: { scale: 1.02, transition: { type: 'spring', stiffness: 300 } },
//   };
//
//   return (
//     <section className="min-h-screen flex items-center justify-center bg-white-50 p-4 pl-64">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl mx-auto"
//       >
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Career Journey</h2>
//         <p className="text-gray-600 mb-8 text-center">Share your current role and let's shape your future together.</p>
//
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <Label htmlFor="jobRole" className="text-sm font-medium text-gray-700 flex items-center">
//               <Briefcase className="w-4 h-4 mr-2" />
//               Current Job Role
//             </Label>
//             <motion.div variants={inputVariants} whileFocus="focus">
//               <Input
//                 id="jobRole"
//                 name="jobRole"
//                 value={formData.jobRole}
//                 onChange={handleChange}
//                 placeholder="e.g. Software Engineer"
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 required
//               />
//             </motion.div>
//           </div>
//
//           <div className="space-y-2">
//             <Label htmlFor="company" className="text-sm font-medium text-gray-700 flex items-center">
//               <Building2 className="w-4 h-4 mr-2" />
//               Current Company
//             </Label>
//             <motion.div variants={inputVariants} whileFocus="focus">
//               <Input
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 placeholder="e.g. Tech Innovations Inc."
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 required
//               />
//             </motion.div>
//           </div>
//
//           <div className="space-y-2">
//             <Label htmlFor="resumeLink" className="text-sm font-medium text-gray-700 flex items-center">
//               <FileText className="w-4 h-4 mr-2" />
//               Resume Link
//             </Label>
//             <motion.div variants={inputVariants} whileFocus="focus">
//               <Input
//                 id="resumeLink"
//                 name="resumeLink"
//                 type="url"
//                 value={formData.resumeLink}
//                 onChange={handleChange}
//                 placeholder="https://your-resume-link.com"
//                 className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 required
//               />
//             </motion.div>
//           </div>
//
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <Button
//               type="submit"
//               className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg text-lg px-8 py-3 transition-colors flex items-center justify-center"
//             >
//               Submit
//               <ArrowRight className="ml-2 w-5 h-5" />
//             </Button>
//           </motion.div>
//         </form>
//       </motion.div>
//     </section>
//   );
// };
//
// export default SleekJobForm;
//


//
// 'use client';
//
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { ArrowRight, Briefcase, Building2, FileText } from 'lucide-react';
//
// const SleekJobForm = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     jobRole: '',
//     company: '',
//     resumeLink: '',
//   });
//
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };
//
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     router.push('/success');
//   };
//
//   const inputVariants = {
//     focus: { scale: 1.02, transition: { type: 'spring', stiffness: 300 } },
//   };
//
//   return (
//       <section className="min-h-screen flex items-center justify-center bg-white-50 p-4 pl-64">
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl mx-auto"
//         >
//           <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//             Your Career Journey
//           </h2>
//           <p className="text-gray-600 mb-8 text-center">
//             Share your current role and let's shape your future together.
//           </p>
//
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Job Role Input */}
//             <div className="space-y-2">
//               <Label
//                   htmlFor="jobRole"
//                   className="text-sm font-medium text-gray-700 flex items-center"
//               >
//                 <Briefcase className="w-4 h-4 mr-2" />
//                 Current Job Role
//               </Label>
//               <motion.div variants={inputVariants} whileFocus="focus">
//                 <Input
//                     id="jobRole"
//                     name="jobRole"
//                     value={formData.jobRole}
//                     onChange={handleChange}
//                     placeholder="e.g. Software Engineer"
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                     required
//                 />
//               </motion.div>
//             </div>
//
//             {/* Company Input */}
//             <div className="space-y-2">
//               <Label
//                   htmlFor="company"
//                   className="text-sm font-medium text-gray-700 flex items-center"
//               >
//                 <Building2 className="w-4 h-4 mr-2" />
//                 Current Company
//               </Label>
//               <motion.div variants={inputVariants} whileFocus="focus">
//                 <Input
//                     id="company"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     placeholder="e.g. Tech Innovations Inc."
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                     required
//                 />
//               </motion.div>
//             </div>
//
//             {/* Resume Link Input */}
//             <div className="space-y-2">
//               <Label
//                   htmlFor="resumeLink"
//                   className="text-sm font-medium text-gray-700 flex items-center"
//               >
//                 <FileText className="w-4 h-4 mr-2" />
//                 Resume Link
//               </Label>
//               <motion.div variants={inputVariants} whileFocus="focus">
//                 <Input
//                     id="resumeLink"
//                     name="resumeLink"
//                     type="url"
//                     value={formData.resumeLink}
//                     onChange={handleChange}
//                     placeholder="https://your-resume-link.com"
//                     className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                     required
//                 />
//               </motion.div>
//             </div>
//
//             {/* Submit Button */}
//             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <Button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg text-lg px-8 py-3 transition-colors flex items-center justify-center"
//               >
//                 Submit
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </Button>
//             </motion.div>
//           </form>
//         </motion.div>
//       </section>
//   );
// };
//
// export default SleekJobForm;



'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight, Briefcase, Building2, FileText } from 'lucide-react';

const SleekJobForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    jobRole: '',
    company: '',
    resumeLink: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // router.push('/success');
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-lg p-8 bg-white rounded-2xl shadow-xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Your Career Journey
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Share your current role and let's shape your future together.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Job Role Input */}
            <div className="space-y-2">
              <Label
                  htmlFor="jobRole"
                  className="text-sm font-medium text-gray-700 flex items-center"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                Current Job Role
              </Label>
              <motion.div variants={inputVariants} whileFocus="focus">
                <Input
                    id="jobRole"
                    name="jobRole"
                    value={formData.jobRole}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                />
              </motion.div>
            </div>

            {/* Company Input */}
            <div className="space-y-2">
              <Label
                  htmlFor="company"
                  className="text-sm font-medium text-gray-700 flex items-center"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Current Company
              </Label>
              <motion.div variants={inputVariants} whileFocus="focus">
                <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Tech Innovations Inc."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                />
              </motion.div>
            </div>

            {/* Resume Link Input */}
            <div className="space-y-2">
              <Label
                  htmlFor="resumeLink"
                  className="text-sm font-medium text-gray-700 flex items-center"
              >
                <FileText className="w-4 h-4 mr-2" />
                Resume Link
              </Label>
              <motion.div variants={inputVariants} whileFocus="focus">
                <Input
                    id="resumeLink"
                    name="resumeLink"
                    type="url"
                    value={formData.resumeLink}
                    onChange={handleChange}
                    placeholder="https://your-resume-link.com"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                />
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg text-lg px-8 py-3 transition-colors flex items-center justify-center"
              >
                Submit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </section>
  );
};

export default SleekJobForm;
