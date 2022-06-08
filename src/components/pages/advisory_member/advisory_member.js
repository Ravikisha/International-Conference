import React from "react";
import Profile from "./profile";

const memebers = [
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Davish Jain",
    position: "Chairman-Governing Body, Prestige Education Society",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. S.G. Deshmukh",
    position: "Director, ABV-IIITM, Gwalior, India",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. G. Raguram",
    position: "Director, IIM-Bangalore, India",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Gautam Sinha",
    position: "Director, IIM-Kashipur, India",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Dogan Gursoy",
    position:
      "Professor, Taco Bell Distinguished Professor, Washington State University, WA",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Nimit Chowdhary",
    position: "Professor, Jamia Millia Islamia, Delhi",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Justin Paul",
    position: "Professor, Graduate School of Business, University of PR, USA",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Shyam S. Lodha",
    position:
      "Southern Connecticut State University, New Haven, Connecticut, USA",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Sanjeev Prashar",
    position: "Professor, IIM-Raipur, India",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. S. K. Singh",
    position: "Head & Dean, SOS in CBS, Jiwaji University, Gwalior",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Yogesh Upadhyay",
    position:
      "Head & Dean, School of Studies (Management), Jiwaji University, Gwalior",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Yogesh Kumar Dwivedi",
    position: "Professor, Swansea University, Swansea, Wales, UK",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Suvijna Awasthi",
    position: "School of Studies, Management, Jiwaji University, Gwalior",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Jochen Wirtz",
    position: "National University of Singapore, Singapore",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Umesh Holani",
    position: "Professor, SOS in CBS, Jiwaji University, Gwalior, MP",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. K. S. Thakur",
    position: "Professor, HOD SOS in CBS, Jiwaji University, Gwalior, (M.P.)",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Seema Gupta",
    position: "Associate Professor, IIM-B, India",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Prasadini Gamage",
    position: "Professor, University of Kelaniya, Sri Lanka",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Harsh Dwivedi",
    position:
      "Director, R.A. Poddar Institute of Management, Rajasthan University, Jaipur",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Mr. Puneet Singh Bhatia",
    position: "Director, Axtria Inc, India",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Dr. Marianna Sigala",
    position: "Professor, University of South Australia, Australia",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Sanjay Sehgal",
    position:
      "Professor, Department of Financial Studies, University of Delhi, India",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. AKM Tafzal Haque",
    position:
      "Professor, Department of Management, University of Chittagong, Bangladesh",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr Manoj Madhava Gore",
    position: "Professor, Dept. of CSE, MNNIT, Allahabad, India",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. Robert L. Williams",
    position:
      "Jr., Sigmund Weis School of Business, Susquehanna University, USA",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/canadian-man-smiling-mountains-173719126.jpg",
    title: "Dr. M. Alfred,",
    position:
      "Dean, Faculty of Management, University of Peradeniya, Sri Lanka",
  },
];

const advisory_member = () => {
  return (
    <>
      <div>
        <div className="relative h-64 m-8 overflow-hidden rounded-lg bg-indigo-500">
          <div className="absolute z-30 flex w-full h-full">
            <div className="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
              <h2 className="text-5xl text-center font-bold">
                Advisory Memebers
              </h2>
              <span></span>
            </div>
            <div className="absolute top-0 right-0 flex w-full h-full">
              <div className="w-1/3 h-full bg-indigo-500"></div>
              <div className="relative w-1/3">
                <svg
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  className="absolute inset-y-0 z-20 h-full text-indigo-500"
                >
                  <polygon
                    id="diagonal"
                    points="0,0 100,0 50,100 0,100"
                  ></polygon>
                </svg>
                <svg
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  className="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50"
                >
                  <polygon points="0,0 100,0 50,100 0,100"></polygon>
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 block w-9/12 h-full">
            <img
              alt="Snowy mountain lake"
              className="object-cover min-w-full h-full"
              src="https://images.unsplash.com/photo-1607025952930-da2ac6748e7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {memebers.map((member, index) => {
          return (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 m-2"
            >
              <Profile
                key={index}
                image={member.image}
                title={member.title}
                position={member.position}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default advisory_member;
