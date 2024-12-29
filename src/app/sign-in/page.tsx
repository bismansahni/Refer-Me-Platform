// import AuthHeader from "@/components/auth/AuthLogoHeader/logoheader";
// import { LoginForm } from "@/components/login-form";


// const SignInPage = () => {
//   return (
//     <>
//     <AuthHeader/>
//     <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
//     <div className="w-full max-w-sm">
       
//         <LoginForm />
//       </div>
//     </div>
//     </>
//   );
// };

// export default SignInPage;



import AuthHeader from "@/components/auth/AuthLogoHeader/logoheader";
import { LoginForm } from "@/components/login-form";

const SignInPage = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300/80 dark:bg-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <AuthHeader />
        <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
