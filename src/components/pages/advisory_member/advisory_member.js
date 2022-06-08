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
      <div class="flex flex-wrap m-10">
        {memebers.map((member, index) => {
          return (
            <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 m-2">
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
