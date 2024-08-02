import Image from "next/image";

const TemplatesSection = () => {
  return (
    <section
      className="relative md:py-24 py-16 bg-gray-900 text-white dark:bg-gray-800 dark:text-gray-200"
      id="portfolio"
    >
      <div className="container mx-auto px-4">
        <div className="text-center pb-8">
          <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">
            Invitations
          </h6>
          <h3 className="mb-4 md:text-3xl text-dark dark:text-white text-2xl font-semibold leading-normal">
            Wedding Invitations
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Beautiful invitations anyone can create. Whichever you pick, you’ll
            have access to instant RSVP tracking, guest messaging, and more.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
            <div
              key={index}
              className="group relative block overflow-hidden rounded-md duration-500"
            >
              <Image
                src="/assets/images/templates/1.jpg"
                className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 duration-500"
                width={300}
                height={400}
                alt={`Template ${index + 1}`}
                layout="responsive" // Ensures image scales properly
              />
              <div className="absolute inset-0 group-hover:bg-black opacity-50 duration-500 z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;
