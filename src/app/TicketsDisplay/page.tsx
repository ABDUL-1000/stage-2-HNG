"use client"; // Ensure it runs on the client-side

import { useEffect, useState } from "react";
import Image from "next/image";
import bg from '@/assets/TICKET.png';

const Ticket = () => {
  // State to store retrieved data
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [ticketCount, setTicketCount] = useState("");
  const [parsedTicketData, setParsedTicketData] = useState<{ ticketType: string; ticketCount: number } | null>(null);
  const [parsedFormData, setParsedFormData] = useState<{ name: string; email: string; description: string } | null>(null);

  useEffect(() => {
    // Retrieve data from localStorage
    setUploadedImageUrl(localStorage.getItem("uploadedAvatarUrl") || "");
    setTicketType(localStorage.getItem("ticketType") || "");
    setTicketCount(localStorage.getItem("ticketCount") || "");

    // Parse JSON data if available
    const ticketData = localStorage.getItem("ticketData");
    setParsedTicketData(ticketData ? JSON.parse(ticketData) : null);

    const formData = localStorage.getItem("AttendeeForm");
    setParsedFormData(formData ? JSON.parse(formData) : null);
  }, []);
console.log(parsedTicketData)
console.log(parsedFormData || "no data")
  return (
    <div className="flex items-center justify-center min-h-screen bg-deepDark">
      <div className="relative w-[20%] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src={bg}
          width={300}
          height={300}
          objectFit="contain"
          alt="Ticket page background"
          className="rounded-lg p-2"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-start text-center border-border rounded-lg border-[0.01rem] p-4">
          <div className="absolute top-3 w-[80%] rounded-lg p-1">
            <div className="border-border border-[0.01rem] rounded-lg p-2">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-white font-roadRage lg:text-1xl text-sm tracking-extraTight font-bold">
                  Techember Fest ’25
                </h1>
                <div className="flex flex-col text-[0.5rem] pt-1 lg:pt-0 lg:text-center">
                  <p className="text-white lg:text-[0.5rem]">📍 [Event Location]</p>
                  <p className="text-white lg:text-[0.5rem]">📆 March 15, 2025 | 7:00 PM</p>
                </div>

                {/* Uploaded Image from Cloudinary */}
                {uploadedImageUrl && (
                  <Image
                    src={uploadedImageUrl}
                    width={100}
                    height={100}
                    alt="Uploaded Ticket Image"
                    className="rounded-full border border-border p-1"
                  />
                )}

                {/* 2x2 Grid with Data */}
                <div className="grid grid-cols-2 w-full border border-border rounded-lg">
                  <div className="border-r border-b border-border p-1 text-[0.4rem] lg:text-[0.5rem] flex flex-col text-[#24A0B5]  items-start justify-start">
                   Enter Your Name
                    <span className="text-white"> {parsedFormData?.name || "N/A"}</span>
                  </div>
                 
                  <div className="border-r border-b border-border p-1 text-[0.4rem] lg:text-[0.5rem] flex flex-col text-[#24A0B5]  items-start justify-start">
                   Enter Your Email
                    <span className="text-white"> {parsedFormData?.email || "N/A"}</span>
                  </div>
                 
                  
                  <div className="border-border p-4 text-white text-xs flex items-center justify-center">
                    {parsedTicketData?.ticketType || "N/A"}
                  </div>
                  <div className="border-r border-border p-4 text-white text-xs flex items-center justify-center">
                    Ticket Number
                  </div>
                  <div className="border-border p-4 text-white text-[0.4rem] flex items-center justify-center">
                    {parsedTicketData?.ticketCount || "N/A"}
                  </div>
                </div>

                {/* Full-Width Grid for Description */}
                <div className="grid grid-cols-1 w-full border border-border rounded-lg">
                  <div className="p-4 text-white text-xs flex items-center justify-center">
                    {parsedFormData?.description || "No description available"}
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Ticket;
