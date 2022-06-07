import React from "react";

const Pricing = () => {
  return (
    <>
      <main className="max-w-6xl mx-auto pt-10 pb-36 px-8">
        <div className="max-w-md mx-auto mb-14 text-center">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
            <span className="text-indigo-600">Flexible</span> Plans
          </h1>
          <p className="text-xl text-gray-500 font-medium">
            Choose a plan that works best for you.
          </p>
        </div>

        <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
          <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">
                  Research Scholars (Doctoral / Post -Doctoral)
                </span>
                {/* <span><span className="font-medium text-gray-500 text-xl align-top">Online - ₹&thinsp;</span><span className="text-2xl font-bold">2500 </span></span><span className="text-gray-500 font-medium">/ user</span><hr></hr>
          <span><span className="font-medium text-gray-500 text-xl align-top">Offline - ₹&thinsp;</span><span className="text-2xl font-bold">3500 </span></span><span className="text-gray-500 font-medium">/ user</span> */}
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt="check-grey"
                />
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top ">
                    Online - ₹&thinsp;
                  </span>
                  <span className="text-2xl font-bold">2500</span>
                </span>
                <span className="text-gray-500 font-medium">/ user</span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt="check-grey"
                />
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top ">
                    Offline - ₹&thinsp;
                  </span>
                  <span className="text-2xl font-bold">3500 </span>
                </span>
                <span className="text-gray-500 font-medium">/ user</span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt="check-grey"
                />
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top ">
                    Online - $&thinsp;
                  </span>
                  <span className="text-2xl font-bold">150 </span>
                </span>
                <span className="text-gray-500 font-medium">/ user</span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt="check-grey"
                />
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top ">
                    Offline - $&thinsp;
                  </span>
                  <span className="text-2xl font-bold">180 </span>
                </span>
                <span className="text-gray-500 font-medium">/ user</span>
              </li>
            </ul>
          </div>

          <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
            <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-3xl font-semibold text-white">
                  Business Executives & Academicians (Faculty)
                </span>
                {/* <span><span className="font-medium text-xl align-top">Online - ₹&thinsp;</span><span className="text-2xl font-bold text-white">3500 </span></span><span className="font-medium">/ user</span><hr></hr>
          <span><span className="font-medium text-xl align-top">Offline - ₹&thinsp;</span><span className="text-2xl font-bold text-white">4500 </span></span><span className="font-medium">/ user</span> */}
              </div>
            </div>
            <ul className="mb-10 font-medium text-xl">
              <li className="flex mb-6">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  alt="check white"
                />
                <span>
                  <span className="font-medium text-xl align-top">
                    Online - ₹&thinsp;
                  </span>
                  <span className="text-2xl font-bold text-white">3500 </span>
                </span>
                <span className="font-medium">/ user</span>
              </li>
              <li className="flex mb-6">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  alt="check white"
                />
                <span>
                  <span className="font-medium text-xl align-top">
                    Offline - ₹&thinsp;
                  </span>
                  <span className="text-2xl font-bold text-white">4500 </span>
                </span>
                <span className="font-medium">/ user</span>
              </li>
              <li className="flex mb-6">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  alt="check white"
                />
                <span>
                  <span className="font-medium text-xl align-top">
                    Offline - $&thinsp;
                  </span>
                  <span className="text-2xl font-bold text-white">200 </span>
                </span>
                <span className="font-medium">/ user</span>
              </li>
              <li className="flex mb-6">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  alt="check white"
                />
                <span>
                  <span className="font-medium text-xl align-top">
                    Offline - $&thinsp;
                  </span>
                  <span className="text-2xl font-bold text-white">250 </span>
                </span>
                <span className="font-medium">/ user</span>
              </li>
            </ul>
          </div>

          <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
            <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                alt=""
                className="rounded-3xl w-20 h-20"
              />
              <div className="ml-5">
                <span className="block text-2xl font-semibold">
                  Regular Students
                </span>
                {/* <span><span className="font-medium text-gray-500 text-xl align-top">Online - ₹&thinsp;</span><span className="text-2xl font-bold">2000 </span></span><span className="text-gray-500 font-medium">/ user</span><hr></hr>
          <span><span className="font-medium text-gray-500 text-xl align-top">Offline - ₹&thinsp;</span><span className="text-2xl font-bold">3000 </span></span><span className="text-gray-500 font-medium">/ user</span> */}
              </div>
            </div>
            <ul className="mb-7 font-medium text-gray-500">
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt="check-grey"
                />
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top ">
                    Online - ₹&thinsp;
                  </span>
                  <span className="text-2xl font-bold">2000 </span>
                </span>
                <span className="text-gray-500 font-medium">/ user</span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt="check-grey"
                />
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top ">
                    Offline - ₹&thinsp;
                  </span>
                  <span className="text-2xl font-bold">3000 </span>
                </span>
                <span className="text-gray-500 font-medium">/ user</span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt="check-grey"
                />
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top ">
                    Online - $&thinsp;
                  </span>
                  <span className="text-2xl font-bold">50 </span>
                </span>
                <span className="text-gray-500 font-medium">/ user</span>
              </li>
              <li className="flex text-lg mb-2">
                <img
                  src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  alt="check-grey"
                />
                <span>
                  <span className="font-medium text-gray-500 text-xl align-top ">
                    Offline - $&thinsp;
                  </span>
                  <span className="text-2xl font-bold">70 </span>
                </span>
                <span className="text-gray-500 font-medium">/ user</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full bg-white rounded-3xl my-10 sm:align-center text-xl font-bold font-medium shadow-xl rounded-3xl p-10 flex flex-1 ml-4">
          <img
            src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
            alt="check-grey"
            className="rounded-3xl w-20 h-20 mr-5 sm:mr-0 sm:w-24 sm:h-24"
          />
          <div>
            Early Bird Registration can avail a discount of 10% in registration
            fees valid only before November 20th 2021. Advance booking for
            accommodation will be arranged on request. The charges of different
            Hotel/guest houses will be communicated after obtaining the
            confirmation. Early Bird Registration can avail a discount of 10% in
            registration fee.
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 text-center p-3 ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
              <div
                className="bg-cover h-48"
                style={{
                  backgroundImage:
                    "url(" +
                    "https://cdn.cdnlogo.com/logos/p/79/punjab-national-bank.svg" +
                    ")",
                }}
              ></div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="mb-4 text-3xl font-bold">Payment Details !</h3>
                <div className="mb-4 text-grey-darker text-sm flex-1">
                  <p>
                    *Registration fee can be paid online in the Account No. :
                    <span className="font-bold text-grey-darker text-xl ml-2">
                      0328002100028783
                    </span>
                    , Bank -{" "}
                    <span className="font-bold text-grey-darker text-xl ml-2">
                      PNB
                    </span>
                    , IFSC No.:{" "}
                    <span className="font-bold text-grey-darker text-xl ml-2">
                      PUNB0032800
                    </span>
                    , Bank Code : 024, Branch Code : 032800, MICR Code :
                    474024006 or Paytm or payable by DD drawn in favor of{" "}
                    <span className="font-bold text-grey-darker text-blue-700 text-xl">
                      Prestige Institute of Management, Gwalior{" "}
                    </span>
                    , Conference Account, payable at Gwalior.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pricing;
