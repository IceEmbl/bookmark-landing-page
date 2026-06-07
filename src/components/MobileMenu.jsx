import { useEffect } from "react";
import twitterIcon from "../assets/icon-twitter.svg";
import facebookIcon from "../assets/icon-facebook.svg";

const MobileMenu = ({ activeMenu }) => {
  useEffect(() => {
    document.body.style.overflow = activeMenu ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [activeMenu]);

  const menuOptions = ["Features", "Pricing", "Contact"];
  const mobileMenuStyles = "text-white uppercase tracking-[3px] w-[83%]"

  return (
    <div className="fixed inset-0 bg-[hsla(229,31%,21%,0.95)]">
        <nav aria-label="Mobile menu navigation">
            <ul className="mt-25">
            {menuOptions.map((option) => (
                <li key={option} className={`text-xl text-center border-t border-gray-500 pt-6 mx-auto my-6 ${mobileMenuStyles}`}>
                    <a className="focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none" href="#">{option}</a>
                </li>
            ))}
            <li className="text-center">
                <hr className="mx-auto w-[83%] border-gray-500 border-0 border-t"/>
                <button className={`border-white border-3 rounded-md py-2 text-xl my-6  focus-visible:ring-2 focus-visible:ring-white
                ${mobileMenuStyles}`} 
                type="button">
                    Login
                </button>
            </li>
            </ul>
        </nav>
        <footer className="flex justify-center gap-12 mt-43">
            <a className="self-center focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none" 
            aria-label="Facebook link" href="#"><img src={facebookIcon} alt="" width="24" height="24"/></a>
            <a className="self-center focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none" 
            aria-label="Twitter link" href="#"><img src={twitterIcon} alt="" width="24" height="20"/></a>
        </footer>
    </div>
  )
}

export default MobileMenu