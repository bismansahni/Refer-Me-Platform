//
// "use client";
//
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
//
// interface referral{
//   companyName: string;
//   jobUrl: string;
// }
//
// const SentRequestsPage = () => {
//   const [sentRequests, setSentRequests] = useState([]);
//
//   useEffect(() => {
//     const fetchSentRequests = async () => {
//       try {
//         const response = await fetch(
//             `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-referral`,
//             {
//               method: "POST",
//               headers: {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 "Content-Type": "application/json",
//               },
//             }
//         );
//
//         if (!response.ok) {
//           throw new Error("Failed to fetch sent requests");
//         }
//
//         const data = await response.json();
//         // Adjusted to only map relevant fields
//         setSentRequests(
//             data.referrals.map((referral) => ({
//               companyName: referral.company_name,
//               jobUrl: referral.job_url,
//             }))
//         );
//       } catch (error) {
//         console.error("Error fetching sent requests:", error);
//       }
//     };
//
//     fetchSentRequests();
//   }, []);
//
//   return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="w-full max-w-4xl">
//           <h1 className="text-3xl font-bold text-center mb-8">Sent Requests</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {sentRequests.map((request, index) => (
//                 <Card key={index} className="shadow-md">
//                   <CardHeader>
//                     <CardTitle>{request.companyName}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <Button>View Sent Request</Button>
//                       </DialogTrigger>
//                       <DialogContent>
//                         <DialogHeader>
//                           <DialogTitle>Request Details</DialogTitle>
//                         </DialogHeader>
//                         <DialogDescription>
//                           <p>
//                             <strong>Company Name:</strong> {request.companyName}
//                           </p>
//                           <p>
//                             <strong>Job URL:</strong>{" "}
//                             <a
//                                 href={request.jobUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 underline"
//                             >
//                               {request.jobUrl}
//                             </a>
//                           </p>
//                         </DialogDescription>
//                       </DialogContent>
//                     </Dialog>
//                   </CardContent>
//                 </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//   );
// };
//
// export default SentRequestsPage;

//
// "use client";
//
// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
//
// // Interface for referral structure
// interface Referral {
//   companyName: string;
//   jobUrl: string;
// }
//
// const SentRequestsPage = () => {
//   const [sentRequests, setSentRequests] = useState<Referral[]>([]); // Properly typed state
//
//   useEffect(() => {
//     const fetchSentRequests = async () => {
//       try {
//         const response = await fetch(
//             `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-referral`,
//             {
//               method: "POST",
//               headers: {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`,
//                 "Content-Type": "application/json",
//               },
//             }
//         );
//
//         if (!response.ok) {
//           throw new Error("Failed to fetch sent requests");
//         }
//
//         const data = await response.json();
//         // Map and transform API data to Referral structure
//         setSentRequests(
//             data.referrals.map((referral: any) => ({
//               companyName: referral.company_name,
//               jobUrl: referral.job_url,
//             }))
//         );
//       } catch (error) {
//         console.error("Error fetching sent requests:", error);
//       }
//     };
//
//     fetchSentRequests();
//   }, []);
//
//   return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
//         <div className="w-full max-w-4xl">
//           <h1 className="text-3xl font-bold text-center mb-8">Sent Requests</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {sentRequests.map((request, index) => (
//                 <Card key={index} className="shadow-md">
//                   <CardHeader>
//                     <CardTitle>{request.companyName}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <Button>View Sent Request</Button>
//                       </DialogTrigger>
//                       <DialogContent>
//                         <DialogHeader>
//                           <DialogTitle>Request Details</DialogTitle>
//                         </DialogHeader>
//                         <DialogDescription>
//                           <p>
//                             <strong>Company Name:</strong> {request.companyName}
//                           </p>
//                           <p>
//                             <strong>Job URL:</strong>{" "}
//                             <a
//                                 href={request.jobUrl}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 underline"
//                             >
//                               {request.jobUrl}
//                             </a>
//                           </p>
//                         </DialogDescription>
//                       </DialogContent>
//                     </Dialog>
//                   </CardContent>
//                 </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//   );
// };
//
// export default SentRequestsPage;


"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Interface for API response
interface ApiResponse {
  referrals: {
    company_name: string;
    job_url: string;
  }[];
}

// Interface for referral structure
interface Referral {
  companyName: string;
  jobUrl: string;
}

const SentRequestsPage = () => {
  const [sentRequests, setSentRequests] = useState<Referral[]>([]);

  useEffect(() => {
    const fetchSentRequests = async () => {
      try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/get-referral`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
              },
            }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch sent requests");
        }

        const data: ApiResponse = await response.json();
        setSentRequests(
            data.referrals.map((referral) => ({
              companyName: referral.company_name,
              jobUrl: referral.job_url,
            }))
        );
      } catch (error) {
        console.error("Error fetching sent requests:", error);
      }
    };

    fetchSentRequests();
  }, []);

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-center mb-8">Sent Requests</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sentRequests.map((request, index) => (
                <Card key={index} className="shadow-md">
                  <CardHeader>
                    <CardTitle>{request.companyName}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>View Sent Request</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Request Details</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
                          <p>
                            <strong>Company Name:</strong> {request.companyName}
                          </p>
                          <p>
                            <strong>Job URL:</strong>{" "}
                            <a
                                href={request.jobUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                              {request.jobUrl}
                            </a>
                          </p>
                        </DialogDescription>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </div>
  );
};

export default SentRequestsPage;
