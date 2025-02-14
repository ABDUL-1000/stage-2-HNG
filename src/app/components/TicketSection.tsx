"use client";
import { Button } from "@/components/ui/button";
import { Ticket } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Road_Rage } from "next/font/google";

const roadRage = Road_Rage({ subsets: ["latin-ext"], weight: "400" });

const TicketSection = () => {
  const [ticketType, setTicketType] = useState<string>("REGULAR ACCESS");
  const [ticketCount, setTicketCount] = useState(1);

  useEffect(() => {
    const savedTicketType = localStorage.getItem("ticketType");
    const savedTicketCount = localStorage.getItem("ticketCount");
    if (savedTicketType) setTicketType(savedTicketType);
    if (savedTicketCount) setTicketCount(Number(savedTicketCount));
  }, []);

  const handleTicketTypeChange = (type: string) => {
    setTicketType(type);
    localStorage.setItem("ticketType", type);
  };

  const handleTicketCountChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const count = Number(event.target.value);
    setTicketCount(count);
    localStorage.setItem("ticketCount", count.toString());
  };
  const handleNext = () => {
    const ticketData = {
      ticketType: ticketType,
      quantity: ticketCount,
    };
    localStorage.setItem("ticketData", JSON.stringify(ticketData));
  };

  return (
    <div className="w-[90%] lg:w-[70%]  flex items-center bg-navBar lg:border-[0.01rem] border-border  rounded-3xl p-1 lg:p-10 ">
      <div className="   lg:gap-4 w-full max-w-4xl">
        <div className="relative border-b-[0.01rem] border-border block lg:flex lg:flex-row justify-between  items-center lg:border-b-[0.01rem] lg:border-border">
          <h1 className="relative font-jejun text-white text-[1.3rem] lg:text-2xl  tracking-wide pb-2  before:absolute before:bottom-[-3px] before:left-0 before:w-full before:h-[4px] lg:before:bg-border1">
            Ticket Selection
          </h1>
          <p className="text-white text-sm font-roboto">Step 1/3</p>
        </div>
        <div className="lg:bg-[#08252B] rounded-3xl  lg:border-border lg:border-[0.01rem] mt-5 p-4">
          <div className=" border-b-[0.01rem] border-border pb-5 ">
            <div className=" flex flex-col space-y-10 bg-[#08252B] rounded-lg mt-7 items-center gap-2 p-4 border-border">
              <div className="border-border space-y-5 bg-gradient-to-r  from-[#0E464F] to-[#08252B] border-[0.01rem] w-full rounded-lg p-4  flex flex-col items-center">
                <div className=" flex flex-col items-center lg:gap-3 ">
                  <h1
                    className={`text-white ${roadRage.className} lg:text-[62px]  text-[2rem]   font-bold`}
                  >
                    Techember Fest ”25
                  </h1>
                  <p className="text-white text-[1.1rem] lg:text-2xl  pt-1 lg:pt-0 text-center">
                    Join us for an unforgettable experience at [Event Name]!
                    Secure your spot now.
                  </p>
                </div>
                <div className=" flex flex-col lg:flex-row gap-2 text-[0.5rem] pt-1 lg:pt-0 lg:text-cente ">
                  <p className="text-white lg:text-sm text-sm ">📍 [Event Location]</p>
                  <span className="text-white hidden lg:block lg:text-sm ">
                    | |
                  </span>
                  <p className="text-white lg:text-sm text-sm ">
                    March 15, 2025 | 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="relative font-jejun text-white text-xl lg:text-2xl pt-3 lg:pt-5">
            Select Ticket Type:
          </h1>
          <div className="flex flex-col lg:grid lg:grid-cols-3 bg-[#08252B]  rounded-lg mt-2 items-center gap-2 p-4">
            {[
              { name: "REGULAR ACCESS", price: "Free" },
              { name: "VIP ACCESS", price: "$500" },
              { name: "VVIP ACCESS", price: "$1000" },
            ].map((ticket) => (
              <div
                key={ticket.name}
                className={`flex w-full flex-col gap-2 p-2 justify-between hover:bg-[#2C545B]  cursor-pointer rounded-lg border-[0.01rem] ${
                  ticketType === ticket.name
                    ? "border-[#2BA4B9] bg-[#197686]"
                    : "border-[#0E464F] bg-[#08252B]"
                }`}
                onClick={() => handleTicketTypeChange(ticket.name)}
              >
                <p className="font-roboto text-white font-semibold text-[1rem] lg:text-[1.2rem] ">
                  {ticket.price}
                </p>
                <div className="flex flex-col items-start">
                  <p className="text-white text-[0.8rem] lg:text-[0.8rem] font-roboto">
                    {ticket.name}
                  </p>
                  <p className="text-white text-sm font-roboto ">20 left</p>
                </div>
              </div>
            ))}
          </div>

          <h1 className="relative font-jejun text-white text-xl lg:text-2xl pt-5">
            Number of Tickets:
          </h1>
          <div className="flex flex-col bg-[#08252B] rounded mt-2 items-center border-border">
            <select
              className="w-full p-2 lg:p-3 bg-[#08252B] text-white border border-border rounded focus:outline-none focus:ring-2 focus:ring-[#2BA4B9]"
              value={ticketCount}
              onChange={handleTicketCountChange}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option
                  key={num}
                  value={num}
                  className="text-[0.5rem] lg:text-xl"
                >
                  {num} Ticket{num > 1 ? "s" : ""}
                </option>
              ))}
            </select>
          </div>

          <div className="lg:flex hidden flex-col w-full p-4 items-center">
            <div className="flex flex-row w-full justify-center items-center space-x-10">
              <Button className="bg-deepDark w-[50%]  hover:bg-deepDark2 text-[#24A0B5] border-[0.01rem] border-[#24A0B5]">
                Cancel
              </Button>
              <Link href="/AttendeeForm" className="w-[50%]">
                <Button className="bg-[#197686]  w-full " onClick={handleNext}>
                  Next
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex lg:hidden flex-col mt-2 justify-center items-center gap-2 ">
            <Button className="bg-deepDark w-full  hover:bg-deepDark2 text-[#24A0B5] border-[0.01rem] border-[#24A0B5]">
              Cancel
            </Button>
            <Link href="/AttendeeForm" className="w-full">
              <Button className="bg-[#197686]  w-full hover:bg-deepDark2"  onClick={handleNext}>
                Next
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSection;
