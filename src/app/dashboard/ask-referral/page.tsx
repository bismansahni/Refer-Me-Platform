


'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Building, Link, Send } from 'lucide-react';

const AskReferral = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    jobUrl: '',
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state before new submission

    try {
      const token = localStorage.getItem('token'); // Retrieve token from localStorage

      if (!token) {
        throw new Error('User not authenticated. Please login.');
      }

      const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/request-referral`, // Use environment variable for base URL
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Send token in Authorization header
            },
            body: JSON.stringify({
              company_name: formData.companyName,
              job_url: formData.jobUrl,
            }),
          }
      );

      if (!response.ok) {
        throw new Error('Failed to request referral. Please try again.');
      }

      const data = await response.json();
      console.log("Referral requested successfully:", data);
      alert("Your referral request has been submitted!");
    } catch (error: any) {
      console.error("Referral request error:", error);
      setError(error.message || "An unexpected error occurred.");
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
      <section className="min-h-screen flex items-center justify-center bg-white-50 p-4">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Ask for a Referral</h2>
          <p className="text-gray-600 mb-8 text-center">
            Provide the company and job details to request a referral.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label
                  htmlFor="companyName"
                  className="text-sm font-medium text-gray-700 flex items-center"
              >
                <Building className="w-4 h-4 mr-2" />
                Company Name
              </Label>
              <motion.div variants={inputVariants} whileFocus="focus">
                <Input
                    id="companyName"
                    name="companyName"
                    type="text"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Tech Innovations Inc."
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                />
              </motion.div>
            </div>

            <div className="space-y-2">
              <Label
                  htmlFor="jobUrl"
                  className="text-sm font-medium text-gray-700 flex items-center"
              >
                <Link className="w-4 h-4 mr-2" />
                Job URL
              </Label>
              <motion.div variants={inputVariants} whileFocus="focus">
                <Input
                    id="jobUrl"
                    name="jobUrl"
                    type="url"
                    value={formData.jobUrl}
                    onChange={handleChange}
                    placeholder="https://company.com/job-posting"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    required
                />
              </motion.div>
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg text-lg px-8 py-3 transition-colors flex items-center justify-center"
              >
                Get Referred!
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </section>
  );
};

export default AskReferral;
