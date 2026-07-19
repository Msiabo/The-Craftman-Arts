import React from "react";
import {
  FaAward,
  FaHammer,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

const OurTeam = () => {
  const team = [
    {
      name: "Sibusiso Masilela",
      role: "Founder & Master Carpenter",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
      experience: "9+ Years",
      projects: "750+ Projects",
      email: "Sbssibusio@gmail.com",
      phone: "+27 72 456 7890",
      location: "Mbombela, Mpumalanga",
      description:
        "With over a decade of experience in bespoke carpentry, Sibusiso specializes in handcrafted kitchens, wardrobes, luxury furniture, and precision woodworking. His dedication to craftsmanship ensures every project exceeds client expectations.",
      quote:
        "Quality is never an accident; it is built into every piece we create.",
      skills: [
        "Custom Furniture",
        "Luxury Kitchens",
        "Joinery",
        "Cabinet Making",
        "Wood Finishing",
      ],
    },
    {
      name: "Naledi Khumalo",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
      experience: "8+ Years",
      projects: "500+ Designs",
      email: "naledi@woodcraft.co.za",
      phone: "+27 73 111 2233",
      location: "Pretoria",
      description:
        "Naledi transforms ideas into elegant, functional spaces that perfectly balance style and practicality. Her passion lies in creating interiors tailored to every client's lifestyle.",
      quote:
        "Beautiful spaces begin with thoughtful planning and timeless design.",
      skills: [
        "Interior Planning",
        "Space Design",
        "Kitchen Layouts",
        "Color Consultation",
        "3D Concepts",
      ],
    },
    {
      name: "Sibusiso Dlamini",
      role: "Installation Manager",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
      experience: "10+ Years",
      projects: "1000+ Installations",
      email: "sibusiso@woodcraft.co.za",
      phone: "+27 71 456 8899",
      location: "Durban",
      description:
        "Sibusiso leads our installation team, ensuring every cabinet, wardrobe, and fitted kitchen is installed with exceptional precision and care.",
      quote:
        "A perfect installation is the finishing touch that defines excellence.",
      skills: [
        "Installations",
        "Quality Control",
        "Measurements",
        "Site Management",
        "Project Delivery",
      ],
    },
    {
      name: "Lerato Ndlovu",
      role: "Project Coordinator",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
      experience: "6+ Years",
      projects: "400+ Clients",
      email: "lerato@woodcraft.co.za",
      phone: "+27 76 555 9900",
      location: "Johannesburg",
      description:
        "Lerato ensures every project runs smoothly from consultation to completion. She keeps clients informed every step of the way and coordinates schedules with precision.",
      quote:
        "Exceptional customer experiences are built through clear communication.",
      skills: [
        "Customer Service",
        "Scheduling",
        "Project Planning",
        "Communication",
        "After-sales Support",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-stone-100 via-white to-stone-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700 uppercase tracking-[0.25em]">
            Meet Our Professionals
          </span>

          <h2 className="mt-6 text-5xl font-bold text-stone-900 leading-tight">
            Passionate Experts Dedicated to
            <span className="block text-amber-600">
              Exceptional Craftsmanship
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            Behind every custom kitchen, wardrobe, office installation, and
            handcrafted furniture piece is a passionate team committed to
            delivering quality workmanship, innovative designs, and outstanding
            customer service.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 space-y-10">

          {team.map((member, index) => (

            <div
              key={member.name}
              className={`group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex`}
            >

              {/* Image */}

              <div className="relative lg:w-2/5 overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                <div className="absolute bottom-6 left-6">

                  <div className="flex items-center gap-2 bg-amber-500 text-black px-4 py-2 rounded-full font-bold shadow-lg">
                    <FaAward />
                    {member.experience}
                  </div>

                </div>

              </div>

              {/* Content */}

              <div className="flex-1 p-10">

                <p className="uppercase tracking-[0.25em] text-amber-600 text-sm font-bold">
                  {member.role}
                </p>

                <h3 className="mt-2 text-4xl font-bold text-stone-900">
                  {member.name}
                </h3>

                <div className="mt-6 flex flex-wrap gap-4">

                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <FaHammer className="text-amber-500" />
                    {member.projects}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-stone-600">
                    <FaMapMarkerAlt className="text-amber-500" />
                    {member.location}
                  </div>

                </div>

                <p className="mt-8 text-stone-600 leading-8">
                  {member.description}
                </p>

                <div className="mt-8 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-5 italic text-stone-700">
                  "{member.quote}"
                </div>

                {/* Skills */}

                <div className="mt-8">

                  <h4 className="font-bold text-stone-900 mb-4">
                    Core Expertise
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {member.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2 text-sm font-medium hover:bg-amber-100 transition"
                      >
                        <FaCheckCircle className="text-amber-500" />
                        {skill}
                      </div>
                    ))}

                  </div>

                </div>

                {/* Contact */}

                <div className="mt-10 border-t pt-6 grid md:grid-cols-2 gap-5">

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center">
                      <FaPhoneAlt className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-stone-400">
                        Phone
                      </p>
                      <p className="font-semibold">{member.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center">
                      <FaEnvelope className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs uppercase text-stone-400">
                        Email
                      </p>
                      <p className="font-semibold">{member.email}</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Stats */}

        <div className="mt-24 grid gap-8 md:grid-cols-4">

          {[
            ["15+", "Years of Experience"],
            ["250+", "Projects Completed"],
            ["100%", "Client Satisfaction"],
            ["5★", "Commitment to Quality"],
          ].map(([number, label]) => (

            <div
              key={label}
              className="rounded-2xl bg-stone-900 p-8 text-center text-white hover:bg-amber-600 transition duration-300"
            >
              <h3 className="text-5xl font-bold">{number}</h3>
              <p className="mt-3 text-stone-300 group-hover:text-white">
                {label}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default OurTeam;