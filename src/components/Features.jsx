const FEATURES = [
    { id: 1, name: "Simple Bookmarking" },
    { id: 2, name: "Speedy Searching" },
    { id: 3, name: "Easy Sharing" }
];

const Features = ({ activeFeature, setActiveFeature }) => {
  
  return (
    <section className="mt-30 md:flex md:flex-col md:items-center">
        <h2 className="text-center text-blue-950 font-semibold text-2xl md:text-3xl">Features</h2>
        <p className="text-center text-gray-400 mt-4 max-w-[32ch] mx-auto mb-8 md:max-w-[45ch] md:text-lg md:mt-6">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <div className="w-full max-w-182.5 md:border-b md:border-gray-200">
          <ul role="tablist" className="md:flex"> 
            {FEATURES.map((feature) => ( 
              <li key={feature.id} className={`${activeFeature === feature.id ? "text-blue-950" : "text-gray-500"} relative flex-1 
              text-center font-medium md:py-6 py-5 hover:text-[hsl(0,94%,66%)] focus-visible:text-[hsl(0,94%,66%)] max-md:border-t 
              max-md:border-gray-300 w-[85%] mx-auto`}> 
                <button role="tab" id={`tab-${feature.id}`} className="focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2" 
                onClick={() => setActiveFeature(feature.id)} type="button" aria-selected={activeFeature === feature.id}
                aria-controls={`feature-panel-${feature.id}`}>{feature.name}</button>
                {(activeFeature === feature.id) && <div className="absolute bottom-0 h-1 bg-[hsl(0,94%,66%)] w-[37%] left-1/2 
                -translate-x-1/2 md:w-full md:left-0 md:translate-x-0" />}
              </li>
            ))}
          </ul>
          <hr className="border-t border-gray-300 w-[85%] mx-auto md:hidden"/>
        </div>
    </section>
  )
}

export default Features