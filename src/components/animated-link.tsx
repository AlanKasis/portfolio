import Link from "next/link";
import React from "react";

interface AnimatedLinkProps {
  content: string;
  href: string;
}

const AnimatedLink = ({ content, href }: AnimatedLinkProps) => {
  return (
    <li className="py-10">
      <Link className="text-6xl" href={href}>
        {content}
      </Link>
    </li>
  );
};

export default AnimatedLink;
