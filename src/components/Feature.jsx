import illustrationFeaturesTab1 from '../assets/illustration-features-tab-1.svg'
import illustrationFeaturesTab2 from '../assets/illustration-features-tab-2.svg'
import illustrationFeaturesTab3 from '../assets/illustration-features-tab-3.svg'

const FEATURE_DETAILS = [
    {id: 1, image: illustrationFeaturesTab1, imageWidth: 536, imageHeight: 346, heading: "Bookmark in one click", 
    paragraph: `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage 
    your favourite sites.`},
    {id: 2, image: illustrationFeaturesTab2, imageWidth: 478, imageHeight: 416, heading: "Intelligent search", paragraph: `Our 
    powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`},
    {id: 3, image: illustrationFeaturesTab3, imageWidth: 440, imageHeight: 380, heading: "Share your bookmarks", paragraph: `Easily 
    share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`}
];

const Feature = ( {activeFeature} ) => {
  const currentFeature = FEATURE_DETAILS.find(feature => feature.id === activeFeature) ?? FEATURE_DETAILS[0];
  
  return (
    <section role="tabpanel" id={`feature-panel-${activeFeature}`} aria-labelledby={`tab-${activeFeature}`} className="mt-20 md:grid 
    md:grid-rows-1 md:grid-cols-2">
        <div className="relative md:col-1">
          <div aria-hidden="true" className="absolute left-0 top-9 h-52 w-[80%] bg-[hsl(231,69%,60%)] rounded-r-full -z-1 md:h-72 md:top-24"/>
          <img className="w-[86%] h-auto ml-7 md:-translate-y-10" src={currentFeature.image} alt="" 
          width={currentFeature.imageWidth} height={currentFeature.imageHeight}/>
        </div>
        <div className="md:ml-20 md:-translate-y-10">
          <h3 className="text-center text-blue-950 font-semibold mt-20 text-2xl md:col-2 md:text-4xl md:text-left">
          {currentFeature.heading}
          </h3>
          <p className="text-center text-gray-400 mt-4 max-w-[32ch] mx-auto md:col-2 md:text-left md:text-xl md:max-w-[39ch]
          md:mt-6 md:ml-0">
          {currentFeature.paragraph}
          </p>
          <button className="hidden md:block col-2 bg-[hsl(231,69%,60%)] text-white p-4 rounded-lg self-center w-fit ml-7 md:ml-0
          md:mt-8 focus-visible:ring-2 focus-visible:ring-[hsl(231,69%,60%)] focus-visible:ring-offset-2" type="button">
            More Info
          </button>
        </div>
     </section>
  )
}

export default Feature