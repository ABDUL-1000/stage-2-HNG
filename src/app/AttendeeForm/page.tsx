import AttendeeForm from "@/components/ui/AttendeeForm";
import React from "react";
import MobileNavbar from "../components/MobileNavbar";
import DesktopNavbar from "../components/DesktopNavbar";

const page = () => {
  return (
    <div>
      <div className=" flex items-center justify-center bg-deepDark">
        <AttendeeForm />
      </div>
    </div>
  );
};

export default page;
