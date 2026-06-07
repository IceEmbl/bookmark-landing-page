import { useState } from "react";
import { 
  Header, 
  BookmarkManager, 
  MobileMenu, 
  Features, 
  Feature, 
  Downloads, 
  FAQ, 
  Contact, 
  Footer, 
} from './components';

function App() {
  const [activeFeature, setActiveFeature] = useState(1);
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <main className="font-['Rubik'] w-full overflow-x-hidden">
      <div className="relative">
        <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        <BookmarkManager/>
        {activeMenu && (<MobileMenu activeMenu={activeMenu}/>)}
      </div>
      <Features activeFeature={activeFeature} setActiveFeature={setActiveFeature}/>
      <Feature activeFeature={activeFeature}/>
      <Downloads/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
