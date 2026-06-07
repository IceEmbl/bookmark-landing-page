import hamburgerIcon from '../assets/icon-hamburger.svg';
import closeIcon from '../assets/icon-close.svg';
import BookmarkLogo from './BookmarkLogo';

const Header = ({ activeMenu, setActiveMenu }) => {
  const desktopMenuOptions = ["Features", "Pricing", "Contact"];
  const primaryNavigationStyles = `uppercase hover:text-[hsl(0,94%,66%)] focus-visible:text-[hsl(0,94%,66%)] focus-visible:ring-2 
  focus-visible:ring-[hsl(0,94%,66%)]`

  return (
    <header className="relative z-10 flex justify-between items-center pt-8 md:mt-12 md:pt-0">
      <BookmarkLogo classAttributes={"ml-7 md:ml-32"} activeMenu={activeMenu} footerLogo={false}/>
      <button
      className="md:hidden"
      onClick={() => setActiveMenu(prev => !prev)}
      type="button"
      aria-expanded={activeMenu}
      aria-label={activeMenu ? "Close menu" : "Open menu"}
      >
        <img className="mr-8" src={activeMenu ? closeIcon : hamburgerIcon} alt=""/>
      </button>
      <nav aria-label="Primary navigation" className="max-md:hidden">
        <ul className="flex items-center gap-10 mr-20 tracking-[2px]">
          {desktopMenuOptions.map((option) => (
              <li key={option}>
                <a href="#" className={`text-sm ${primaryNavigationStyles}`}> 
                {option}
                </a>
              </li>
          ))}
          <li>
            <button className={`text-white bg-[hsl(0,94%,66%)] rounded-md py-3 px-9 hover:bg-white focus-visible:bg-white border-2 
            border-transparent hover:border-[hsl(0,94%,66%)] focus-visible:border-[hsl(0,94%,66%)] ${primaryNavigationStyles}`} 
            type="button">
             Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header