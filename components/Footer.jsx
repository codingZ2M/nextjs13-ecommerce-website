import { NavLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {

  return (
    <footer className="bg-white py-12 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
       <span className="text-black font-normal text-xl">CZ2M Store</span>
        <div className="flex items-center">          
          <ul className="flex flex-wrap space-x-4 text-sm">
            {NavLinks.map((navLink) => (
              <li key={navLink.id}>
                <Link
                  href={navLink.link}
                  className="text-black hover:text-red-500"
                >
                  {navLink.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-black mt-4 text-sm">
          &copy; {new Date().getFullYear()} CZ2M Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
