import logoChrome from "../assets/logo-chrome.svg"
import logoFirefox from "../assets/logo-firefox.svg"
import logoOpera from "../assets/logo-opera.svg"

const DOWNLOADS = [
    {id: 1, image: logoChrome, browser: "Chrome", version: "62", offset: ""},
    {id: 2, image: logoFirefox, browser: "Firefox", version: "55", offset: "md:translate-y-10"},
    {id: 3, image: logoOpera, browser: "Opera", version: "46", offset: "md:translate-y-20"}
];

const Downloads = () => {
  
  return (
    <section className="mt-30 md:flex md:flex-col md:items-center md:mb-56">
        <h2 className="text-center text-2xl text-blue-950 font-semibold">Download the extension</h2>
        <p className="text-center text-gray-400 mt-4 max-w-[30ch] mx-auto mb-8 md:max-w-[50ch]">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
        <ul className="md:flex md:justify-center md:gap-8">
            {DOWNLOADS.map((download) => (
                <li key={download.id} className={`block bg-white pt-4 pb-7 px-5 shadow-xl rounded-xl ${download.offset}`}>
                    <img className="mx-auto" src={download.image} alt={download.browser + " logo"} width="100" height="100"/>
                    <h3 className="text-center text-xl text-blue-950 font-semibold mt-6">Add to {download.browser}</h3>
                    <p className="text-gray-400 text-center mt-2 mb-6">Minimum version {download.version}</p>
                    <div aria-hidden="true" className="flex justify-center gap-3 text-gray-300 text-xl mt-8 mb-4">
                        {Array.from({ length: 16 }).map((_, index) => (
                            <span key={index}>•</span>
                        ))}
                    </div>
                    <button className="bg-[hsl(231,69%,60%)] p-4 px-12 rounded-xl text-white text-nowrap font-semibold md:ml-5 
                    hover:bg-white focus-visible:bg-white hover:text-[hsl(231,69%,60%)] focus-visible:text-[hsl(231,69%,60%)] 
                    hover:border-2 focus-visible:border-2 focus-visible:ring-2 focus-visible:ring-offset-2 
                    focus-visible:ring-[hsl(231,69%,60%)] focus-visible:border-[hsl(231,69%,60%)] block mx-auto" type="button">
                        Add & Install Extension
                    </button>
                </li>
            ))}
        </ul>
    </section>
  )
}

export default Downloads