import React from "react";
import TemplatesSection from "@/components/home/TemplateSection";

const Home: React.FC = () => {
  return (
    <>
      <section className="relative md:py-52 py-36 items-center overflow-hidden bg-gradient-to-br to-orange-600/20 via-fuchsia-600/20 from-indigo-600/20">
        <div className="absolute inset-0 ltr:bg-[url('../../assets/images/nft/hero.png')] rtl:bg-[url('../../assets/images/nft/hero-rtl.png')] bg-no-repeat bg-bottom bg-cover"></div>

        <div className="container relative">
          <div className="grid grid-cols-1 items-center mt-10">
            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">
              Online invitations for <br />
              all the moments that matter
            </h4>
            <p className="text-lg max-w-xl">
              Whichever you pick, you’ll have access to instant RSVP tracking,
              guest messaging, and more.
            </p>

            <div className="mt-8">
              <a
                href=""
                className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
              >
                Discover
              </a>
            </div>
          </div>
        </div>
      </section>
      <TemplatesSection />
    </>
  );
};

export default Home;
