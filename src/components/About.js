import React from "react";


const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Rinish Reddy
                              </h2>
              <p className="mb-4 text-accent">Front-end developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
              Greetings! I am a budding front-end developer currently pursuing my master's degree at Saint Louis University. Having graduated with a major in IT from Vardhaman College of Engineering in Hyderabad, I am passionate about both front-end web development and machine learning. As I embark on this exciting journey, I am eager to combine my academic foundation with real-world experiences to contribute to the evolving world of technology.
                <br />
                <br />I am now a more confident web developer and person.
                I like to learn new things.
              </p>
            </div>
            <a href="https://www.linkedin.com/in/rinish-reddy-8b37ba219/" target="_blank">
             
              <button className="btn btn-md bg-accent hover:bg-secondary-hover transition-all">
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
