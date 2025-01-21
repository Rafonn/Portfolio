import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Full-Stack Developer</span>
              <h1 className="h1 mb-6">
                Hi! I'm <br /> <span className="text-blue-500">Rafael Carneiro</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
              Full-Stack Developer with expertise in TypeScript, JavaScript, ASP.NET, React, and Next.js. Skilled in REST APIs, SQL, Git, Docker, and Python.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-blue-500 rounded-full flex justify-center items-center text-blue-500 text-base hover:bg-blue-500 hover:text-primary hover:transition-all duration-500" 
                  />
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
    </section>
  )
}

export default Home;