import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { SiNike } from "react-icons/si";

const Signinpage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-50">
      <div className="flex flex-col w-full max-w-md px-6 py-8 space-y-8 bg-white rounded-lg shadow-md">
        {/* Nike Icon */}
        <div className="flex justify-center">
          <SiNike className="text-[70px] text-black" />
        </div>

        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">YOUR ACCOUNT</h1>
          <h1 className="text-2xl font-bold">FOR EVERYTHING</h1>
          <h1 className="text-2xl font-bold">NIKE</h1>
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          <Input
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <Input
            placeholder="Password"
            type="password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Options */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="w-4 h-4 mr-2 text-black border-gray-300 rounded focus:ring-black"
            />
            Keep me signed in
          </label>
          <Link href="/" className="text-gray-600 hover:underline">
            Forgot your password?
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-center text-sm text-gray-500">
            By logging in, you agree to Nike&#39;s{" "}
            <Link href="/" className="underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/" className="underline">
              Terms of Use.
            </Link>
          </p>
          <Button className="w-full py-3 text-white bg-black rounded-md hover:bg-gray-800">
            Sign In
          </Button>
          <p className="text-sm">
            Not a Member?{" "}
            <Link
              href="/signup"
              className="underline text-black hover:text-gray-800"
            >
              Join Us.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signinpage;
