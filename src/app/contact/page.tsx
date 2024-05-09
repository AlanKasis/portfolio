import Link from "next/link";
import React from "react";

type ContactProps = {};

const Contact = (props: ContactProps) => {
  return (
    <div className="min-h-screen w-full flex flex-column justify-center items-center absolute top-0">
      <div className="animate-fadein lg:w-1/2 z-20 flex flex-wrap flex-column px-10 space-y-4 border-l-2">
        <span className="text-3xl font-bold border-b-2">Contact</span>
        <span className="w-full text-3xl">Mail</span>
        <Link href="mailto:alankasis@gmail.com" className="text-xl">
          alankasis@gmail.com
        </Link>
        <span className="w-full text-3xl">Social Media</span>
        <Link
          href="https://www.linkedin.com/in/alan-kasis/"
          target="_blank"
          className="w-full text-xl"
        >
          LinkedIn
        </Link>
        <Link
          href="https://www.instagram.com/alankasis/"
          target="_blank"
          className="text-xl"
        >
          Instagram
        </Link>
        <span className="w-full text-3xl">Calendly</span>
        <span className="text-xl">
          <Link
            href="https://calendly.com/alankasis/initial-consultation"
            target="_blank"
            className="text-xl underline"
          >
            Schedule a meeting
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Contact;
