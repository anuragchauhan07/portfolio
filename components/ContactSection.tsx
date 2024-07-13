import { contactLinks } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
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

  return (
    <section className="background-main p-6 rounded-xl flex flex-col gap-10 ">
      <div>
        <p className="font-bold text-3xl ">Get in touch</p>
        <p className="text-sm">anuragchauhan1923@gmail.com</p>
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
  );
};

export default ContactSection;
