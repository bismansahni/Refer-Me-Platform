import AuthHeader from "@/components/auth/AuthLogoHeader/logoheader";
import { SignUpForm } from "@/components/signup-form";



const SignUpPage = () => {
  return (
    <>
    <AuthHeader/>
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
    <div className="w-full max-w-sm">
       
        <SignUpForm />
      </div>
    </div>
    </>
  );
};

export default SignUpPage;
