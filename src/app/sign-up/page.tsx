// import AuthHeader from "@/components/auth/AuthLogoHeader/logoheader";
// import { SignUpForm } from "@/components/signup-form";



// const SignUpPage = () => {
//   return (
//     <>
//     <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300/80 dark:bg-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"></div>
//     <AuthHeader/>
//     <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
//     <div className="w-full max-w-sm">
       
//         <SignUpForm />
//       </div>
//     </div>
//     </>
//   );
// };

// export default SignUpPage;



import AuthHeader from "@/components/auth/AuthLogoHeader/logoheader";
import { SignUpForm } from "@/components/signup-form";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300/80 dark:bg-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 min-h-screen">
        <AuthHeader />
        <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <SignUpForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
