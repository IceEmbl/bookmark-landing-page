import { useState } from "react";
import error_icon from "../assets/icon-error.svg"

const Contact = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <section className="mt-30 bg-[hsl(231,69%,60%)] pb-14">
        <h2 className="pt-16 text-center text-white uppercase tracking-[5px] text-xs">35,000+ already joined</h2>
        <p className="pt-4 text-center text-white text-2xl px-2">Stay up-to-date with what we’re doing</p>
        <form
        noValidate
        onSubmit={handleSubmit}
        className="md:mt-8 md:flex mx-auto md:flex-row md:max-w-112.5 md:items-start md:gap-4"
        > 
        <div className="relative">
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input id="email" className={`py-3 pl-4 pr-30 bg-white block mx-auto mt-6 text-sm text-gray-400 md:mt-4.25
          rounded-lg ${error ? "border-2 border-red-500" : ""}`} value={email} aria-invalid={error}
          aria-describedby={error ? "email-error" : undefined}
          onChange={(e) => {setEmail(e.target.value); if(error) setError(false);}} type="email" placeholder="Enter your email address"/>
          {error && <img className="absolute right-12 top-3 md:top-7.5 md:right-4" src={error_icon} alt="" aria-hidden="true" width="20" 
          height="20"/>}
          {error && <p id="email-error" className="bg-[hsl(0,94%,66%)] text-white w-[82%] mx-auto text-xs py-1.5 rounded-b-lg -mt-1 pl-3 
          md:w-full">
          <em>Whoops, make sure it's an email</em></p>}
        </div>
        <button className="bg-[hsl(0,94%,66%)] mt-4 block mx-auto w-[80%] text-white rounded-lg py-3 text-sm hover:bg-white 
        focus-visible:bg-white hover:border-2 focus-visible:border-2 hover:text-[hsl(0,94%,66%)] focus-visible:text-[hsl(0,94%,66%)]
        focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[hsl(0,94%,66%)]" 
        type="submit">Contact Us</button>
        </form>
    </section>
  )
}

export default Contact

