import illustration_hero from '../assets/illustration-hero.svg'

const BookmarkManager = () => {
  const bookmarkButtonStyles = `p-4 rounded-lg font-medium hover:bg-white focus-visible:bg-white border-2 border-transparent 
  focus-visible:ring-2`

  return (
    <section className="mt-14 md:grid md:grid-cols-2 md:grid-rows-3 md:mt-30">
        <div className="relative md:row-span-full md:col-2 md:self-center">
            <div aria-hidden="true" className="absolute right-0 top-16 h-52 w-[80%] bg-[hsl(231,69%,60%)] rounded-l-full -z-1 
            md:top-24 md:h-88"/>
            <img className="w-full h-auto md:-translate-y-10" src={illustration_hero} alt="" width="657" height="466"/>
        </div>
        <h1 className="text-center text-blue-950 font-semibold text-3xl leading-10 mt-12 md:row-1 md:col-1 md:text-5xl 
        md:max-w-[20ch] md:text-left md:ml-30 md:leading-14">A Simple Bookmark Manager</h1>
        <p className="text-center text-gray-400 mt-4 max-w-[30ch] mx-auto md:row-2 md:col-1 md:text-left md:ml-30 md:text-lg
        md:max-w-[42ch] md:leading-8">A clean and simple interface to organize your favourite websites. Open
        a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="flex justify-evenly md:items-start md:justify-start md:ml-30 md:gap-5 mt-8 md:row-3 md:col-1 md:mt-0">
            <button className={`bg-[hsl(231,69%,60%)] text-white hover:text-[hsl(231,69%,60%)] 
            focus-visible:text-[hsl(231,69%,60%)] hover:border-[hsl(231,69%,60%)] focus-visible:ring-[hsl(231,69%,60%)] 
            ${bookmarkButtonStyles}`} type="button">
              Get it on Chrome
            </button>
            <button className={`bg-[hsl(0,0%,97%)] text-gray-600 hover:text-gray-700 hover:border-gray-600
            focus-visible:border-gray-600 focus-visible:ring-gray-600 focus-visible:text-gray-900 ${bookmarkButtonStyles}`} 
            type="button">
              Get it on Firefox
            </button>
        </div>
    </section>
  )
}

export default BookmarkManager