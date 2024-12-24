




'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

const OtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // State to hold OTP digits
  const router = useRouter(); // Initialize the router hook for navigation

  // Handle input change for each individual input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Allow only numbers
    const newOtp = [...otp];
    newOtp[index] = value; // Update the OTP value at the specified index
    setOtp(newOtp);

    // Focus the next input if a value is entered
    if (index < otp.length - 1 && value) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  // Handle paste event: auto-distribute the OTP across the input fields
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    const pastedData = e.clipboardData.getData('Text');
    if (pastedData.length === otp.length) {
      // Split the pasted string into individual characters and update the OTP
      setOtp(pastedData.split(''));
    }
  };

  // Handle backspace event: if the user presses backspace and the field is empty, move focus to the previous input
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
      prevInput?.focus();
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit OTP logic here (validation or API call)
    console.log('OTP Submitted:', otp.join(''));

    // Redirect to the dashboard page
    router.push('/dashboard'); // Redirect to the dashboard after submission
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>Please enter the code sent to your email</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                  {otp.map((digit, index) => (
                    <div key={index} className="w-16 h-16">
                      <input
                        id={`otp-${index}`}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        value={digit}
                        onChange={(e) => handleInputChange(e, index)}
                        onPaste={(e) => handlePaste(e, index)} // Handle paste event
                        onKeyDown={(e) => handleKeyDown(e, index)} // Handle backspace event
                        maxLength={1}
                        autoFocus={index === 0} // Automatically focus the first input
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col space-y-5">
                  <div>
                    <button
                      type="submit"
                      className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                    >
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive the code?</p>
                    <a className="flex flex-row items-center text-blue-600" href="#" target="_blank" rel="noopener noreferrer">
                      Resend
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
