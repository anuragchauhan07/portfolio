import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const ProjectsSection = () => {
  const projectLinks = [
    {
      title: "Neko Nest",
      subtitle: "Fully functional anime website",
      bgColor: "bg-black",
      image: "/1.png",
      link: "https://nekonest.vercel.app",
    },
    {
      title: "PixelMind AI",
      subtitle: "All in one AI tool",
      bgColor: "bg-purple-600",
      image: "/2.png",
      link: "https://pixelmindai.vercel.app",
    },
    {
      title: "PixelMind AI",
      subtitle: "Multi link website",
      bgColor: "bg-gray-400",
      image: "/3.png",
      link: "https://unilinkweb.vercel.app",
    },
    {
      title: "Snap Shelf",
      subtitle: "Image posting site",
      bgColor: "bg-blue-400",
      image: "/4.png",
      link: "https://snapshelf-ac.vercel.app",
    },
  ];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projectLinks.map((key) => {
        return (
          <div className="overflow-hidden rounded-xl ">
            <div
              className={`${key.bgColor} h-full rounded-xl gap-4 flex flex-col p-6 hover:scale-105 transition ease-in-out duration-700`}
            >
              <div className="flex justify-between items-start">
                <div className="text-white">
                  <p className="font-semibold">{key.title}</p>
                  <p className="text-sm">{key.subtitle}</p>
                </div>
                <Link
                  href={key.link}
                  className="bg-white text-xl p-3 rounded-full hover:bg-gray-50"
                >
                  <GoArrowUpRight />
                </Link>
              </div>
              <Image
                className="rounded-md w-full"
                width={400}
                height={400}
                src={key.image}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsSection;
