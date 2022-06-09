import React from "react";
import "./this.css";
import ThemeCard from "./themeCard";

const Conference = () => {
  return (
    <>
      <div
        className="py-20 bg-cover bg-no-repeat bg-fixed" id="head"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1582192903020-8a5e59dcdcf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        <div className="container m-auto text-center px-6 opacity-100">
          <h2 className="text-4xl font-bold mb-2 text-white">
            13th International Conference - Hybird Mode
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Co-hosted by Association of International Business and Professional
            Management (AIBPM), Indonesia
          </h3>
          <a href="#overview">
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800">
            Jarvis, do you copy?
          </button>
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 p-10" id="overview">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 underline decoration-sky-500">
          Prestige Institute of Management & Research, Gwalior
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 pr-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Overview of the Conference - Hybrid Mode
            </h4>
            <p className="text-gray-600 mb-8">
              Industry 4.0 is used interchangeably with the fourth industrial
              revolution and represents a new stage in the organization and
              control of the industrial value chain. Industry 4.0 is intelligent
              networking of machines and processes for industry with the help of
              information and communication technology. Sustainable Business
              practices are the business practices that “meets the needs of the
              present world without compromising the ability of future
              generations to meet their own needs. <br />
              <br /> PIMRG has decided to address the issues and concerns in
              relation to Industry 4.0 and sustainable business practices aiming
              towards the growth of the organizations and mitigating the
              challenges.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://pbs.twimg.com/media/CR45LOXVEAADG5E.jpg"
              alt="Vortex"
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1600320844678-43cebba1cdfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="use the force"
            />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Conference Objectives
            </h4>
            <p className="mb-8">
              {/* <StyledOl>
                <StyledLi>Item 1</StyledLi>

                <StyledLi2>Item 2</StyledLi2>

                <StyledLi3>More Item 6</StyledLi3>

                <StyledLi4>More Item 7</StyledLi4>
              </StyledOl> */}
              <ol className="style_1">
                <li>
                  To identify and acknowledge pioneering and innovative efforts
                  in the area of Industry 4.0
                </li>
                <li>
                  To explore the association between Industry 4.0 & sustainable
                  business practices.
                </li>
                <li>
                  To discuss issues related to innovation, Industry 4.0,
                  sustainable business practices, organizational growth and
                  effectiveness.
                </li>
                <li>
                  To bring plethora of speakers, academicians, researchers,
                  management thinkers, and businessman at one platform.
                </li>
                <li>
                  To motivate, recognize, appreciate and guide the budding
                  researchers and contribute towards the pool of research and
                  benefit the society.
                </li>
              </ol>
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 pr-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Publication Opportunities
            </h4>
            <p className="mb-8">
              <ol className="style_1">
                <li>
                  International Journal of Globalization and small Business
                </li>
                <li>
                  World Review of Entrepreneurship, Management and Sustainable
                  Development
                </li>
                <li>
                  International Journal of Technology Transfer and
                  Commercialization.
                </li>
                <li>
                  International Journal of Public Sector Performance Management.
                </li>
                <li>FIIB Business Review</li>
                <li>International Journal of Professional Business Review</li>
                <li>Journal of Content, Community & Communication</li>
              </ol>
              <br />
              All the submitted papers will have the opportunity to be presented
              during the conference. The selected papers will be considered for
              publication after a proper peer review process. We also request
              you to motivate your colleagues and scholars to attend this
              workshop and circulate/forward this communication among your
              colleagues and scholars
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Syncing"
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80"
              alt="use the force"
            />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Who Should Attend the Conference ?
            </h4>
            <p className="mb-8">
              <ol className="style_1">
                <li>
                  Academicians and policymakers seeking to gain a broader
                  insight into innovations which have resulted in digital
                  innovation, organizational growth and effectiveness.
                </li>
                <li>
                  Industrial executives and innovative leaders seeking to gain
                  broader insight on the issue.
                </li>
                <li>
                  Researchers and Doctoral/Post-Doctoral students who are
                  looking for expert knowledge and guidance related to
                  digitalization for innovations, growth and organizational
                  effectiveness
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
        <div className="container flex flex-wrap flex-col items-center justify-center">
          <h4 className="text-2xl text-gray-800 font-bold mb-3">Theme</h4>
          <p className="mb-8">
            Industry 4.0 & Key Drivers of Sustainable Global Business Practices
            (ICSGBP)
          </p>
        </div>
        <div className="container flex flex-wrap flex-col items-center justify-center">
          <h4 className="text-2xl text-gray-800 font-bold mb-3">Call for Papers</h4>
          <p className="mb-8">
          Original papers in different areas are invited on the following themes:
          </p>
        </div>

      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 underline decoration-pink-500">
            Themes
          </h2>
          <div className="flex flex-wrap">
            {/* <themeCard title="Industry 4.0 opportunities and challenges:" description="Digital Supply chain, Digital Ecosystem, optimization, customization, cost reduction, technology, cybersecurity, change management, employment, human capital development, customer behavior & CRM, capital investment, carbon Trading, Sustainable Development - Climate Change and related topics."/> */}
            <ThemeCard
              title="Industry 4.0 opportunities and challenges:"
              description="Digital Supply chain, Digital Ecosystem, optimization, customization, cost reduction, technology, cybersecurity, change management, employment, human capital development, customer behavior & CRM, capital investment, carbon Trading, Sustainable Development - Climate Change and related topics."
            />
            <ThemeCard
              title="Industry 4.0 technologies:"
              description="Big data analytics HR/ Marketing/ Finance; autonomous robots; simulation or digital twins; industrial Internet of things [IIoT], artificial intelligence, cultural intelligence communication technologies, Fintech, Digital Banking, Banking in 4.0 Robotic Automation, Talent Management, HRIS, Payrolls and related topics."
            />
            <ThemeCard
              title="Organizational, managerial, and social characteristics in industry 4.0"
              description="Demand Control Support system, home care organizations, managerial learning, mental health, psychological resilience, servant leadership, transformational leadership and related topics."
            />
            <ThemeCard
              title="Sustainable Business Practices:"
              description="Redefining Sustainable Business, CSR sustainable development, Waste Management & Sustainability, Ethics and sustainability, Sustainability in the Changing Global Environment, Sustainability in MSME Sector, Digital Marketing, Social Media Marketing and related topics."
            />
            <ThemeCard
              title="Sustainable Development:"
              description="Legal Principles, Practices, and Prospects: Environmental law and management, intellectual property law and competition law, Litigation Verses mediation, human rights and religious freedom, Cybercrime and security, Media and entertainment law: Contemporary development in the age of digitalization, Human rights and gender and social justice, changing dimensions of law and right to health, Public health and pandemics: Challenging dimensions to right to health, Legal Protection of Biodiversity: Challenges and Prospects"
            />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#667eea" }}>
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Headquarters Prestige
          </h2>
          <h3 className="my-4 text-2xl text-white">
            Report to command center. Take it easy.
          </h3>
          <a href="#head">
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600">
            Back To Up !
          </button>
          </a>
        </div>
      </div>
    </>
  );
};


export default Conference;
