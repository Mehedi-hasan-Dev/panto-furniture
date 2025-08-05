import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    fetch("/AboutFake.json")
      .then((res) => res.json())
      .then((data) => setAboutData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="container mx-auto py-12 md:flex gap-6 items-center">
      <h2 className="text-4xl font-bold flex-shrink-0 min-w-[16rem] mb-5 text-center md:text-start">
        Why <br />
        Choosing Us
      </h2>

      <div className="grid lg:grid-cols-3 gap-3">
        {aboutData.map((item) => (
          <div key={item.id} className="p-6">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700 pb-2">{item.details}</p>
            {item.link && (
              <a
                href={item.link}
                className="text-orange-600 hover:underline inline-flex items-center gap-1"
              >
                More Info <ArrowRight size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
