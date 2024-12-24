//
//
//
// 'use client';
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useState, useEffect } from "react"; // Import useState and useEffect for managing form input values
// import { useRouter } from "next/navigation"; // Correctly import useRouter from next/navigation
//
// export function SignUpForm({
//   className,
//   ...props
// }: React.ComponentPropsWithoutRef<"div">) {
//   // State to handle form values
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//
//   const router = useRouter(); // Initialize the useRouter hook for navigation
//
//   // Use useEffect to check if email exists in query params
//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const emailParam = urlParams.get("email");
//     if (emailParam) {
//       setEmail(emailParam); // Set email from query param if available
//     }
//   }, []); // Empty dependency array means it runs once after the component mounts
//
//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic (e.g., API request)
//     console.log("Form submitted with:", { email, name, password });
//
//     // Redirect user to verify email page with the email in query params
//     router.push(`/verify-email?email=${encodeURIComponent(email)}`);
//   };
//
//   const asynchandleSignup=()=>{
//     try{
//       await https://orf65197m8.execute-api.us-east-1.amazonaws.com/register{
//       name,password,email
//     }
//     catch(err){
//       console.error(err);
//     }
//   }
//
//
//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-2xl">Sign Up</CardTitle>
//           <CardDescription>Enter your email below to start!</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleFormSubmit}>
//             <div className="flex flex-col gap-6">
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="m@example.com"
//                   required
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)} // Handle email change
//                 />
//               </div>
//
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   type="text"
//                   placeholder="John Doe"
//                   required
//                   value={name}
//                   onChange={(e) => setName(e.target.value)} // Handle name change
//                 />
//               </div>
//
//               <div className="grid gap-2">
//                 <Label htmlFor="password">Password</Label>
//                 <Input
//                   id="password"
//                   type="password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)} // Handle password change
//                 />
//               </div>
//
//               <Button onclick={handleSignup(name,email,password)} type="submit" className="w-full">
//                 Sign Up
//               </Button>
//             </div>
//             <div className="mt-4 text-center text-sm">
//               Already have an account?{" "}
//               <a href="/login" className="underline underline-offset-4">
//                 Login
//               </a>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }




'use client';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function SignUpForm({
                             className,
                             ...props
                           }: React.ComponentPropsWithoutRef<"div">) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const emailParam = urlParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handleSignup(name, email, password);
      // router.push(`/verify-email?email=${encodeURIComponent(email)}`);

      router.push(`/dashboard?email=${encodeURIComponent(email)}`);
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  const handleSignup = async (name: string, email: string, password: string) => {
    try {
      const response = await fetch(
          // "https://orf65197m8.execute-api.us-east-1.amazonaws.com/register",
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
          }
      );

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      console.log("Signup successful");
    } catch (err) {
      console.error(err);
      throw err; // Re-throw to handle in form submission
    }
  };

  return (
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Sign Up</CardTitle>
            <CardDescription>Enter your details below to get started!</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <a href="/sign-in" className="underline underline-offset-4">
                  Login
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
  );
}
