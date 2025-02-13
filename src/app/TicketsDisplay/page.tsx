"use client"; // Ensure it runs on the client-side

import { useEffect, useState } from "react";
import Image from "next/image";
import bg from "@/assets/TICKET.png";
import barcode from "@/assets/Bar Code.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Ticket = () => {
  // State to store retrieved data
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [ticketType, setTicketType] = useState("");
  const [ticketCount, setTicketCount] = useState("");
  const [parsedTicketData, setParsedTicketData] = useState<{
    ticketType: string;
    quantity: number;
  } | null>(null);
  const [parsedFormData, setParsedFormData] = useState<{
    name: string;
    email: string;
    description: string;
  } | null>(null);

  useEffect(() => {
    // Retrieve data from localStorage
    setUploadedImageUrl(localStorage.getItem("uploadedAvatarUrl") || "");
    setTicketType(localStorage.getItem("ticketType") || "");
    setTicketCount(localStorage.getItem("ticketCount") || "");

    // Parse JSON data if available
    

    const ticketData = localStorage.getItem("ticketData");
    const count = localStorage.getItem("ticketCount");
    setParsedTicketData(count ? JSON.parse(count) : null);
    setParsedTicketData(ticketData ? JSON.parse(ticketData) : null);

    const formData = localStorage.getItem("AttendeeForm");
    setParsedFormData(formData ? JSON.parse(formData) : null);
  }, []);
  console.log(parsedTicketData || "no  ticket data");
  console.log(parsedFormData || "no data");
  return (
    <div className="flex items-center  justify-center w-full min-h-screen bg-deepDark">
      
      <div className="relative  w-[75%] lg:w-[30%]  flex flex-col justify-center items-center">
      <div className="flex flex-col ">
          <div className="relative  border-border p-2 flex flex-col justify-between items-center">
            <div className="flex flex-row items-center justify-between  border-b-[0.09rem] border-border  w-full">
          <h1 className="font-jejun text-white text-[0.6rem] lg:text-sm tracking-wide lg:pb-2">Ready</h1>
          <p className="text-white text-[0.4rem] lg:text-[0.6rem]">Step 3/3</p>
          </div>
          <div className="lg:pb-5 ">
            <p className=" text-white text-roboto text-center pt-2  text-xl space-y-0 lg:text-2xl">Your Ticket is Booked!</p>
            <p className=" text-white text-roboto text-center text-[0.9rem] lg:text-sm ">You can download or Check your email for a copy</p>
            
          </div>
        </div>
          </div>
        {/* Background Image */}
        <Image
          src={bg}
          width={300}
          height={300}
          objectFit="contain"
          alt="Ticket page background"
          className="rounded-lg p-2  lg:h-[30rem] lg:w-[20rem] "
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex top-[7rem] lg:top-0 flex-col items-center w-full justify-start text-center border-border rounded-lg border-[0.01rem] p-4">
         
          <div className="absolute   lg:top-[9rem] lg:w-[60%] w-[80%] rounded-lg lg:p-1  ">
         
          
            <div className="border-border h-[20rem] lg:h-[22rem] border-[0.1rem] p-2 rounded-lg lg:p-2 ">
              <div className="flex flex-col items-center lg:gap-0 gap-1">
                <h1 className="text-white  font-roadRage lg:text-1xl text-[1rem] tracking-extraTight font-bold">
                  Techember Fest ’25
                </h1>
                <div className="flex flex-col  lg:pt-0 lg:text-center">
                  <p className="text-white text-[0.9rem] lg:text-[1rem]">
                  04 Rumens road, Ikoyi, Lagos
                  </p>
                  <p className="text-white text-[0.9rem] lg:text-[1rem]">
                   March 15, 2025 | 7:00 PM
                  </p>
                </div>

                {/* Uploaded Image from Cloudinary */}
                {uploadedImageUrl && (
                  <Image
                    src={uploadedImageUrl}
                    width={300}
                    height={100}
                    alt="Uploaded Ticket Image"
                    className="rounded-lg border border-border p-1 w-[120px] h-[120px]"
                  />
                )}

                {/* 2x2 Grid with Data */}
                <div className="grid grid-cols-2 w-full border border-border rounded-lg">
                  <div className="border-r border-b border-border lg:p-1 text-[0.4rem] lg:text-[0.5rem] flex flex-col text-[#24A0B5]  items-start justify-start">
                    Enter Your Name
                    <span className="text-white">
                      {" "}
                      {parsedFormData?.name || "N/A"}
                    </span>
                  </div>

                  <div className="border-r border-b border-border lg:p-1 text-[0.4rem] lg:text-[0.5rem] flex flex-col text-[#24A0B5]  items-start justify-start">
                    Enter Your Email
                    <span className="text-white">
                      {" "}
                      {parsedFormData?.email || "N/A"}
                    </span>
                  </div>

                  <div className="border-r border-b border-border lg:p-1 text-[0.4rem] lg:text-[0.5rem] flex flex-col text-[#24A0B5]  items-start justify-start">
                    Ticket Type
                    <span className="text-white">
                      {" "}
                      {parsedTicketData?.ticketType || "N/A"}
                    </span>
                  </div>

                  <div className="border-r border-b border-border lg:p-1 text-[0.4rem] lg:text-[0.5rem] flex flex-col text-[#24A0B5]  items-start justify-start">
                    Number of Tickets
                    <span className="text-white">
                      {" "}
                      {parsedTicketData?.quantity || "N/A"}
                    </span>
                  </div>
                </div>

                {/* Full-Width Grid for Description */}
                <div className="w-full border border-border mt-1 rounded-lg">
                  <div className="p-1 text-white text-[0.3rem] lg:text-[0.5rem] flex items-center  justify-center">
                    {parsedFormData?.description || "No description available"}
                  </div>
                </div>
              </div>
             
            
            </div>
          </div>
          <div className="flex flex-col items-center">
               <Image src={barcode} alt="logo" className='lg:w-[15rem] lg:h-[4rem] w-[10rem] h-[3rem] absolute bottom-[8rem] lg:bottom-[4rem]'/>
              
              </div>
        </div>
        
        <div className="lg:flex  flex-col p-2 w-full items-center">
          <div className="flex  flex-col lg:flex-row w-full justify-center items-center lg:space-x-10 gap-2 lg:gap-0">
            <Link href="/" className="lg:w-[50%] w-full">
            <Button className="bg-deepDark w-full hover:bg-deepDark2 text-[#24A0B5] border-[0.01rem] border-[#24A0B5]">Book Another Ticket</Button>
            </Link>
            <Link href="" className="lg:w-[50%] w-full">
            <Button className="bg-[#197686]  w-full " >
              Next
            </Button>
          </Link>
       
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Ticket;
