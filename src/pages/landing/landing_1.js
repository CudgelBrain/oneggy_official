import Image from "next/image";
import React, { useState } from "react";
import Projectlogos from "./projectlogos";
import MarginBotton from "./marginBotton";
import TechCompo from "./techCompo";
import GetFreeProp from "./getFreeProp";
import Headline from "../components/headline";
import Marksheet from "./marksheet";
import Testimonials from "./testimonials";
import ContactUs from './contactUs'
import Footer from './footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = (skill) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const comments =[
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    ];


  const skillsArray = [
    {
      title: "Website Development",
      imageSrc: "/landingComponent/1.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "Application Development",
      imageSrc: "/landingComponent/2.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "UI/UX Designing",
      imageSrc: "/landingComponent/3.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "DevOps Services",
      imageSrc: "/landingComponent/4.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "QA & Testing",
      imageSrc: "/landingComponent/5.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
    {
      title: "Cloud Manage Services",
      imageSrc: "/landingComponent/6.png",
      icon: "faArrowRight",
      learnMoreLink: "#",
    },
  ];

  const mapIcons = {
    faArrowRight,
  };

  const title = "Services";
  const desc =
    "At our firm, we provide a variety of services to assist businesses in growing and succeeding online. These services include";

  return (
    <div className="landingPage1">
      <nav className="py-4 flex justify-between mx-auto max-w-7xl">
        <Image
          src="/logo.png"
          alt="Logo"
          width="165"
          height="55"
          className="logo_img"
        />
        <ul className="flex justify-end py-4 align-center">
          <li className="mx-5 cursor-pointer pt-2">About us</li>
          <li className="mx-5 cursor-pointer pt-2">Service</li>
          <li className="mx-5 cursor-pointer pt-2">Team</li>
          <li className="mx-5 cursor-pointer pt-2">Portfolio</li>
          <li className="mx-5 cursor-pointer pt-2">Blog</li>

          <button className="text-black py-2 px-6 rounded-md border border-black">
            Request a Quote
          </button>
        </ul>
      </nav>
      <div className="bg-cover bg-right sm:min-h-screen container mx-auto px-6 sm:px-20 absolute">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
        <main>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-4 pt-12">
              <h1 className="text-6xl font-semibold">
                Transforming Technology with a Human Touch
              </h1>
              <p className="pt-10 w-7/12">
                With OnEggy's IT services, you can leave your mark in the
                digital world. Transform your company with our cutting-edge and
                effective digital solutions to set you on the way to success.
              </p>
              <div className="buttons">
                <button className="bg-l_black text-white hover:bg-white border hover:border-l_black hover:text-l_black px-6 py-4 mt-8 rounded-xl">
                  Book a Consultation
                </button>
              </div>
            </div>
            <div className="m-auto">
              <Image src="/ai.png" alt="aiImage" width={450} height={450} />
            </div>
          </div>
        </main>
        <Projectlogos />
        <Headline title={title} desc={desc} />
        <div className="flex flex-wrap sm:flex-row justify-center flex-col mt-10 overflow-hidden">
          {skillsArray.map((skill, index) => (
            <TechCompo key={index} skill={skill} index={index} />
          ))}
        </div>

        <div className="flex justify-end overflow-hidden">
          <div className="mr-5 mt-5 rounded-full p-1 bg-l_black transform -rotate-[30deg] text-[4px] cursor-pointer">
            <span className="text-white">
              <FontAwesomeIcon icon={faArrowRight} size="4x" />
            </span>
          </div>
          <div className="mr-8 mt-5 cursor-pointer">
            <a href={skill.learnMoreLink}>Learn More</a>
          </div>
        </div>

        <GetFreeProp />
        <Marksheet />
        <Testimonials comments={comments}/>
        <ContactUs/>
        <Footer/>
        <MarginBotton/>
      </div>
    </div>
  );
};

export default Home;
