import React from "react";
import Bounded from "../components/Bounded";
import officeImg from "../Office  Background.png";
import Heading from "../components/Heading";
import ProfileCard from "../components/Profilecard";
import Line from "../components/Line";
const Company = () => {
  return (
    <Bounded>
      <div className='grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr] text-center md:text-start'>
        <Heading size='xl' className='col-start-1 pb-[3rem]'>
          About Blueto
        </Heading>
        <div className='prose prose-xl prose-slate prose-invert col-start-1'>
          <p className='pb-1'>
            We are the change. Where innovation meets functionality. We are a
            team of skilled software freelancers dedicated to providing
            cutting-edge solutions to propel your business forward.
          </p>
          <p className='pb-7'>
            With expertise in diverse technologies and a commitment to
            excellence, we deliver custom software solutions tailored to your
            unique needs.
          </p>
          <p className='font-bold pt-[2vh] text-[#72d6e5]'>
            Why Choose Blueto?
          </p>
          <p className='pb-2'>
            <b class='text-xl font-semibold text-blue-600/80 dark:text-blue-500/80'>
              Expertise:
            </b>{" "}
            Our team comprises skilled professionals with in-depth knowledge of
            the latest technologies.
          </p>
          <p className='pb-2'>
            <b class='text-xl font-semibold text-blue-600/80 dark:text-blue-500/80'>
              Custom Solutions:
            </b>{" "}
            We understand that every business is unique. Our solutions are
            tailor-made to fit your specific requirements.
          </p>
          <p className='pb-2'>
            <b class='text-xl font-semibold text-blue-600/80 dark:text-blue-500/80'>
              Quality Assurance:
            </b>{" "}
            Our commitment to delivering high-quality software ensures that your
            project meets the highest standards.
          </p>
        </div>
        {/* Image */}
        <div className='row-start-2 md:row-start-1 max-w-sm md:col-start-2 md:row-end-3 z-40 mt-0 md:mt-40'>
          <img
            src={officeImg}
            className='about-image  w-full rounded-[2.375rem] h-64 mx-auto [box-shadow:10px_10px_10px_#000000]'
            alt='aboutimage'
          />
        </div>
      </div>
      <Line />
      <div className='team'>
        <p className='font-bold pt-[2vh] text-[#72d6e5]'>Meet Our Team</p>
        <p className='pb-2'>
          Our talented team drives innovation and excellence. Each member brings
          unique expertise and a passion for technology, working collaboratively
          to deliver outstanding solutions. Get to know the faces behind our
          success and see how their skills and dedication shape our projects.
        </p>
      </div>
      <ProfileCard />
      {/* <ProfileCard /> */}
      {/* <Profilecard /> */}
    </Bounded>
  );
};

export default Company;
