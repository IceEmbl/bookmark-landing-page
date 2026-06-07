import { useState } from "react"

const FAQ_ELEMENTS = [
    {id: 1, question: "What is Bookmark?", answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget 
    ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`}, 
    {id: 2, question: "How can I request a new browser?", answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
    ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non 
    ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse 
    imperdiet.`}, 
    {id: 3, question: "Is there a mobile app?", answer: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, 
    ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex 
    et ultricies bibendum.`}, 
    {id: 4, question: "What about other Chromium browsers?", answer: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi,
    at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.`}
];

const FAQ = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);
   
  return (
    <section className="mt-30">
        <h2 className="mx-auto text-center text-blue-950 font-semibold text-2xl max-w-[20ch] md:max-w-[25ch] md:text-3xl md:mb-6">
            Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-400 mx-auto text-center max-w-[32ch] mb-12 md:max-w-[45ch]">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
        <ul className="md:max-w-[45%] md:mx-auto">
            {FAQ_ELEMENTS.map((element) => {
                const isOpen = element.id === activeFAQ;
                return (
                    <li key={element.id} className="mb-8">
                        <h3 className="text-blue-950 ml-8 text-sm md:text-lg md:ml-0 mb-5">
                            <button className="flex justify-between w-full focus-visible:ring-2 focus-visible:ring-[hsl(231,69%,60%)]
                            focus-visible:ring-offset-2 hover:text-[hsl(0,94%,66%)] focus-visible:text-[hsl(0,94%,66%)]"
                            onClick={() => setActiveFAQ(isOpen ? null : element.id)} 
                            id={`faq-button-${element.id}`} type="button" aria-expanded={isOpen} 
                            aria-controls={`faq-panel-${element.id}`}>
                                <span>{element.question}</span>
                                <svg className={`ml-auto mr-8 w-4.5 h-4 object-contain transition-transform duration-300 mt-1 md:mt-2 
                                ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                                width="18" height="12">
                                    <path fill="none" stroke={isOpen ? "hsl(0,94%,66%)" : "#5267DF"} strokeWidth="3" 
                                    d="M1 1l8 8 8-8"/>
                                </svg>
                            </button>
                        </h3>
                        {isOpen && 
                        <div id={`faq-panel-${element.id}`} role="region" aria-labelledby={`faq-button-${element.id}`}>
                            <p className="mx-auto max-w-[30ch] text-gray-400 leading-7 mb-6 md:max-w-[55ch]">
                              {element.answer}
                            </p>
                        </div>
                        }
                        <hr className="border-0 border-t border-gray-300 w-[85%] mx-auto md:w-full"/>
                    </li>
                );
            })}
        </ul>
        <button className="bg-[hsl(231,69%,60%)] block mx-auto mb-8 py-3 px-6 rounded-lg text-white text-sm focus-visible:ring-2 
        focus-visible:ring-[hsl(231,69%,60%)] focus-visible:ring-offset-2" type="button">More Info</button>
    </section>
  )
}

export default FAQ

