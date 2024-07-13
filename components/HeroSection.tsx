import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaStripe } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { TbApi, TbBrandNextjs } from "react-icons/tb";

const HeroSection = () => {
  const router = useRouter();
  const contactLinks = [
    {
      name: "Github",
      bgColor: "hover:bg-black",
      icon: <FaGithub />,
      link: "https://github.com/anuragchauhan07",
    },
    {
      name: "LinkedIn",
      bgColor: "hover:bg-blue-600",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/anuragchauhan07/",
    },
  ];
  const servicesLink = [
    { icon: <TbBrandNextjs />, title: "Next Js", bgColor: "bg-black" },
    {
      icon: <BsFiletypeHtml />,
      title: "Html, Css, Js",
      bgColor: "bg-orange-600",
    },
    {
      icon: <FaStripe />,
      title: "Stripe Payment",
      bgColor: "bg-[#635BFF]",
    },
    {
      icon: <SiMongodb />,
      title: "Mongo Database",
      bgColor: "bg-green-500",
    },
    {
      icon: <TbApi />,
      title: "API Intigration",
      bgColor: "bg-blue-500",
    },
  ];
  return (
    <section className="flex flex-col sm:flex-row gap-6">
      <section className="flex-1 flex flex-col background-main h-[500px] rounded-xl p-6 justify-between sm:pr-20">
        <div>
          <p className="text-4xl font-semibold tracking-wide">
            Hi, I’m Anurag Chauhan, fullstack web developer.
          </p>
          <p className="text-sm mt-10 tracking-wide mb-10">
            I am a passionate web developer based in India 📍.
          </p>
        </div>

        <div className="flex w-full  items-center gap-4">
          <div>
            <button
              type="button"
              className="bg-black text-sm text-white px-10 py-3 rounded-full hover:bg-gray-900 transition"
              onClick={() => router.push("mailto:anuragchauhan1923@gmail.com")}
            >
              Contact Me
            </button>
          </div>

          {contactLinks.map((key) => {
            return (
              <Link
                href={key.link}
                className={` ${key.bgColor} hover:text-white transition duration-300 bg-gray-100 p-3 text-2xl rounded-full `}
              >
                {key.icon}
              </Link>
            );
          })}
        </div>
      </section>
      <section className="flex-0 flex flex-col sm:w-[300px] gap-4 background-secondary rounded-xl p-6">
        <p className="font-semibold text-white text-2xl">Services</p>
        <div className="flex flex-col gap-4 ">
          {servicesLink.map((key) => {
            return (
              <div className="flex items-center ">
                <div
                  className={` ${key.bgColor} text-white font-bold p-3 z-10 rounded-full text-2xl`}
                >
                  {key.icon}
                </div>
                <p className="bg-white flex-1 rounded py-1 font-bold px-6 -ml-4">
                  {key.title}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
