//
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
// const SentRequestsPage = () => {
//   // Example list of companies with job URLs and resume links
//   const sentRequests = [
//     {
//       id: 1,
//       name: "Tech Innovations Inc.",
//       jobUrl: "https://techinnovations.com/job/software-engineer",
//       resumeLink: "https://resume-storage.com/user/resume1",
//     },
//     {
//       id: 2,
//       name: "Innovative Solutions Ltd.",
//       jobUrl: "https://innovativesolutions.com/job/frontend-developer",
//       resumeLink: "https://resume-storage.com/user/resume2",
//     },
//     {
//       id: 3,
//       name: "Future Tech Corp.",
//       jobUrl: "https://futuretech.com/job/data-scientist",
//       resumeLink: "https://resume-storage.com/user/resume3",
//     },
//   ];
//
//   return (
//     <div className="min-h-screen bg-white-50 p-6">
//       <h1 className="text-2xl font-bold text-center mb-6">Received Requests</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {sentRequests.map((request) => (
//           <Card key={request.id} className="shadow-md">
//             <CardHeader>
//               <CardTitle>{request.name}</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {/* Dialog Trigger and Content */}
//               <Dialog>
//                 <DialogTrigger asChild>
//                   <Button>View Sent Request</Button>
//                 </DialogTrigger>
//                 <DialogContent>
//                   <DialogHeader>
//                     <DialogTitle>Request Details</DialogTitle>
//                   </DialogHeader>
//                   <DialogDescription>
//                     <p>
//                       <strong>Job URL:</strong>{" "}
//                       <a
//                         href={request.jobUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-500 underline"
//                       >
//                         {request.jobUrl}
//                       </a>
//                     </p>
//                     <p>
//                       <strong>Resume Link:</strong>{" "}
//                       <a
//                         href={request.resumeLink}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-500 underline"
//                       >
//                         {request.resumeLink}
//                       </a>
//                     </p>
//                   </DialogDescription>
//                 </DialogContent>
//               </Dialog>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };
//
// export default SentRequestsPage;



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

const SentRequestsPage = () => {
  const sentRequests = [
    {
      id: 1,
      name: "Tech Innovations Inc.",
      jobUrl: "https://techinnovations.com/job/software-engineer",
      resumeLink: "https://resume-storage.com/user/resume1",
    },
    {
      id: 2,
      name: "Innovative Solutions Ltd.",
      jobUrl: "https://innovativesolutions.com/job/frontend-developer",
      resumeLink: "https://resume-storage.com/user/resume2",
    },
    {
      id: 3,
      name: "Future Tech Corp.",
      jobUrl: "https://futuretech.com/job/data-scientist",
      resumeLink: "https://resume-storage.com/user/resume3",
    },
  ];

  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-center mb-8">Inbox Requests</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sentRequests.map((request) => (
                <Card key={request.id} className="shadow-md">
                  <CardHeader>
                    <CardTitle>{request.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>View Request</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Request Details</DialogTitle>
                        </DialogHeader>
                        <DialogDescription>
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
                          <p>
                            <strong>Resume Link:</strong>{" "}
                            <a
                                href={request.resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                              {request.resumeLink}
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
