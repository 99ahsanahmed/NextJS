import Image from "next/image";
const About = () => {
  return (
    // ABOUT
    <div
      id="About"
      className="bg-black h-screen flex flex-wrap flex-col items-center justify-center relative"
    >
      {/* ABOUT HEADING */}
      <div className="Heading flex flex-col items-center xs:text-3xl md:text-6xl lg:text-5xl xl:text-9xl">
        <h1 className="text-white uppercase mb-3 ">about me</h1>
        <div className="border-b border-slate-500/30 w-40"></div>
      </div>

      {/* ABOUT DETAILS */}
      <div className="About text-white xs:text-base md:text-xl my-4 xs:mx-6 md:mx-10 md:my-8 lg:text-xl tt:text-4xl tt:mx-32 xl:mx-44 xl:text-5xl">
        <h3 className="">
          I am pursuing a{" "}
          <span className="text-black  bg-white/90 rounded-lg">
            {" "}
            Bachelor&#39;s in Computer Science
          </span>{" "}
          at GUtech enhancing my skills as a developer. Simultaneously&#44; I am
          studying Dars-e-Nizami at Hikmah Institute&#44; gaining timeless
          wisdom to address contemporary challenges. I am currently focused on
          building expertise in HTML&#44; CSS&#44; TypeScript&#44; Tailwind&#44;
          ReactJS&#44; Next.js&#44; Node.js&#44; Git&#44; and MongoDB.
          Additionally&#44; I am doing certifications in GenAI from GIAIC&#44;
          and web development from NED PITP and Udemy.
        </h3>

        {/* RESUME */}
        <div className="flex  bg-orange-600 transition ease-in-out   hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-500 text-white text-lg w-fit p-1 rounded-xl mt-3">
          <a download href="/cv.pdf" target="blank">
            Download CV
          </a>
        </div>
      </div>

      {/* EDUCATION PICTURES */}
      <div className="Pictures flex flex-wrap items-center gap-5 xs:mt-4 lg:mt-0">
        <div className="gutech">
          <Image
            src="/gu.webp"
            width={200}
            height={0}
            alt="Picture"
            className="xs:w-36 md:w-52 lg:w-40 "
          />
        </div>

        <div className="hikmah">
          <Image
            src="/hikmah.png"
            width={200}
            height={0}
            alt="Picture"
            className="xs:w-24 md:w-36 lg:w-32"
          />
        </div>
      </div>
    </div>
  );
}

export default About
