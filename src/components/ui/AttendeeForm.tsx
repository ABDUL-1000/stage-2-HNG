"use client";
import { useState, useEffect } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { FaCloudUploadAlt } from "react-icons/fa";
import Link from "next/link";
import msg from "@/assets/envelope.png";
import Image from "next/image";

interface FormData {
  name: string;
  description: string;
  email: string;
  avatarUrl: string;
}

export default function AttendeeForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    description: "",
    avatarUrl: "",
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  // Load stored data
  useEffect(() => {
    const storedData = localStorage.getItem("AttendeeForm");
    if (storedData) setFormData(JSON.parse(storedData));
  }, []);

  // Save data on change
  useEffect(() => {
    localStorage.setItem("AttendeeForm", JSON.stringify(formData));
  }, [formData]);
  console.log(formData);
  // Handle Cloudinary upload success
  const handleUploadSuccess = (result: any) => {
    if (result.event === "success") {
      const uploadedImageUrl = result.info.secure_url;
      setFormData((prev) => ({ ...prev, avatarUrl: uploadedImageUrl }));
      localStorage.setItem("uploadedAvatarUrl", uploadedImageUrl);
    }
  };

  // Form validation
  const validateForm = () => {
    let newErrors: { name?: string; email?: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (
      !formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    )
      newErrors.email = "Invalid email address";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="lg:w-[40%] w-[90%] bg-navBar lg:border-[0.01rem] border-border rounded-3xl p-1 lg:p-10">
      <div className=" lg:gap-4 w-full bg-navBarr rounded-3xl max-w-4xl">
        <div className="relative border-b-[0.01rem] border-border pl-1 flex flex-row justify-between items-center">
          <h1 className="font-jejun text-white text-[0.6rem] lg:text-sm tracking-wide pb-2">
            Attendee Details
          </h1>
          <p className="text-white text-[0.4rem] lg:text-[0.6rem]">Step 2/3</p>
        </div>

        <div className="lg:bg-[#08252B] rounded-3xl flex flex-col items-center lg:border-border lg:border-[0.01rem] mt-5 p-2">
          <p className="text-white text-[0.6rem] lg:text-sm">
            Upload your picture
          </p>

          <CldUploadWidget
            uploadPreset="my-uploads" // Replace with your actual upload preset
            options={{ sources: ["local", "url"], cropping: false }}
            onSuccess={handleUploadSuccess}
          >
            {({ open }) => (
              <div
                className="flex flex-col items-center justify-center bg-[#052228] w-[60%] border-[0.01rem] border-border rounded-2xl mt-2 h-[10rem] cursor-pointer"
                onClick={() => open?.()}
              >
                {formData.avatarUrl ? (
                  <img
                    src={formData.avatarUrl}
                    alt="Uploaded Avatar"
                    className="w-32 h-32 rounded-lg"
                  />
                ) : (
                  <FaCloudUploadAlt className="w-10 h-10 text-white" />
                )}
              </div>
            )}
          </CldUploadWidget>

          <form onSubmit={handleSubmit} className="w-full space-y-1">
            <div className="mt-2 w-full">
              <label className="block text-[0.6rem] lg:text-sm p-2 text-white">
                Enter your name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-[0.2rem] lg:p-2 border rounded bg-navBar text-white"
              />
              {errors.name && (
                <p className="text-red-400 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-[0.6rem] lg:text-sm p-2 text-white">
                Enter your email *
              </label>
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-[0.2rem] pl-7 lg:p-2 lg:pl-10  border rounded bg-navBar text-white "
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
                <span className="absolute left-1 lg:left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Image
                    src={msg}
                    alt="logo"
                    className="w-4  h-4 lg:w-5 lg:h-5 "
                  />
                </span>
              </div>
            </div>

            <div>
              <label className="block text-[0.6rem] lg:text-sm p-2 text-white">
                About the project
              </label>
              <textarea
                className="w-full p-[0.2rem] lg:p-2 border rounded-lg bg-navBar text-white"
                placeholder="Textarea"
                value={formData.description || ""}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>

            <div className="flex flex-col lg:flex-row-reverse justify-center lg:gap-2 space-y-4 lg:space-y-0">
              <Link href="/TicketsDisplay" className="w-full">
                <button
                  type="submit"
                  className="p-1 rounded w-full bg-[#24A0B5] text-white text-[0.6rem] lg:text-[0.5rem]"
                >
                  Get My Free Ticket
                </button>
              </Link>
              <Link href="/" className="w-full">
                <button
                  type="button"
                  className="p-1 rounded w-full text-white text-[0.6rem] lg:text-[0.6rem] bg-navBar border-[0.01rem] border-border"
                >
                  Back
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
