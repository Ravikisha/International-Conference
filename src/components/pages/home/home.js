import React from "react";
import "./this.css";

const Home = () => {
  return (
    <>
      <div
        className="py-20 bg-cover bg-no-repeat bg-fixed"
        id="head"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1532649538693-f3a2ec1bf8bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        }}
      >
        <div className="container m-auto text-center px-6 opacity-100">
          <h2 className="text-4xl font-bold mb-2 text-gray-800">
            Prestige Institute of Management & Research
          </h2>
          <h3 className="text-2xl mb-8 text-black">Gwalior, MP, India</h3>
          <a href="https://prestigegwl.org/index.php" target="blank">
            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800">
              Let's Go !
            </button>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6 p-10" id="overview">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10 underline decoration-sky-500">
          PIMG: Substantiate Globally
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 pr-10">
            {/* <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Overview of the Conference - Hybrid Mode
            </h4> */}
            <p className="text-gray-600 mb-8">
              Prestige Institute of Management is an Autonomous, UGC NAAC
              accredited 'A' Grade institute and MBA Course is accredited by
              NBA. It was set up in the year 1997 by Prestige Education Society,
              Indore registered under the Societies Registration Act 1860.The
              Society was setup by Prestige Group of Industries with an
              objective to meet the widely felt need for globally oriented
              Management and Information Technology education and training for
              professionals. The Institute has grown to be recognized as a
              premier Institute for higher learning. It is a major learning
              center in Central India. The Institute has approval of All India
              Council for Technical Education & the State Government and is
              affiliated to Jiwaji University, Gwalior.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://www.prestigegwl.org/img/banner/slide_-_6.jpg"
              alt="Vortex"
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg"
              src="https://www.prestigegwl.org/img/banner/slide_-_5.jpg"
              alt="use the force"
            />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            {/* <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Conference Objectives
            </h4> */}
            <p className="mb-8 text-gray-800">
              Prestige Institute of Management, Gwalior is a premier institute
              in Central India offering post graduate and under graduate
              programs in commerce, Management and Computer applications. The
              Institute was set up in the year 1997. The Institute has achieved
              “Platinum” Rating among Top Industry Linked Technical Institutions
              in India (AICTE-CII Survey of Industry Linked Technical
              Institutes-2019, Report Issued in November, 2019),Ranked 16th
              among Top MBA Full Time Masters in Central Asia(Ed Universal,
              Paris, July, 2019), Ranked 21st among India's Top B-Schools(The
              Academic Insights, July 2020),Ranked 23rd among Top Private
              B-Schools in India (Times B-School Survey, Issue: February 2020),
              Ranked 23rd among Top B-Schools in India (Higher Education Review
              Beyond IIMs Survey, Issue: May, 2019), Ranked 2nd among Top
              Private B-Schools in Madhya Pradesh (Competition Success Review,
              Issue: November, 2018)
            </p>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mb-10 mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-16xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <iframe
                className="h-48 w-full md:h-full md:w-96"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.029560978101!2d78.21559331486853!3d26.2607039834127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c1273e3c14e9%3A0x17301bfd69162e2a!2sPrestige%20Institute%20of%20Management%20%26%20Research!5e0!3m2!1sen!2sin!4v1654794768141!5m2!1sen!2sin"
                // width="800"
                // height="750"
                frameBorder="0"
                style={{ border: "0" }}
                title="map"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-8 ">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Geographic projection
              </div>

              <p className="mt-2 text-slate-500">
                Prestige Institute of Management (UGC NAAC accredited 'A' Grade
                and An Autonomous Institute) was set up in the year 1997 by
                Prestige Education Society, Indore registered under the
                Societies Registration Act 1860. <br></br>
                Prestige Institute of Management, Gwalior is currently located
                in{" "}
                <span className="underline text-xl decoration-sky-500">
                  Airport Rd, D.D. Nagar, Deen Dayal Nagar, Gwalior, Madhya
                  Pradesh 474020
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
