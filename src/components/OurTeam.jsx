import React from "react";
import {
  FaAward,
  FaHammer,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import assets from "../assets/assets";

const OurTeam = () => {
  const team = [
    {
      name: "Sibusiso Masilela",
      role: "Founder & Master Carpenter",
      image: assets.sbu,
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
      name: "Ntsizwa",
      role: "Apprentice Carpenter",
      image: assets.ntsizwa,
      experience: "1+ Year",
      projects: "40+ Projects",
      email: "ntsizwa@woodcraft.co.za",
      phone: "+27 73 111 2233",
      location: "Pretoria",
      description:
        "Ntsizwa transforms ideas into elegant, functional spaces that perfectly balance style and practicality. Her passion lies in creating interiors tailored to every client's lifestyle.",
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
      name: "Themba Masilela",
      role: "Apprentice Carpenter",
      image: assets.themba,
      experience: "2+ Years",
      projects: "50+ Projects",
      email: "themba@woodcraft.co.za",
      phone: "+27 71 456 8899",
      location: "Mbombela, Mpumalanga",
      description:
        "Themba is a skilled apprentice carpenter with a keen eye for detail and a passion for creating high-quality custom furniture and installations.",
      quote:
        "Every piece of wood has a story to tell, and it's my job to bring that story to life.",
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
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-amber-100 px-6 py-2 text-sm font-bold uppercase tracking-[0.25em] text-amber-700">
            Meet Our Professionals
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-stone-900">
            Passionate Experts Dedicated To
            <span className="block text-amber-600">
              Exceptional Craftsmanship
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            Behind every custom kitchen, wardrobe, office installation and
            handcrafted furniture piece is a passionate team committed to
            delivering quality workmanship, innovative designs and outstanding
            customer service.
          </p>

        </div>

        <div className="mt-20 space-y-14">

          {team.map((member, index) => (

            <div
              key={member.name}
              className={`group overflow-hidden rounded-[32px] bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl lg:flex ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
            >

              {/* IMAGE COLUMN */}

              <div className="relative lg:w-2/5">

                <div className="relative h-[420px] overflow-hidden bg-stone-900 sm:h-[520px] lg:h-full lg:min-h-[720px]">

                  {/* Image */}

                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
        object-center
        transition-all
        duration-700
        ease-out
        group-hover:scale-110
      "
                  />

                  {/* Overlays */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />

                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent" />

                  {/* Founder */}

                  {member.role.includes("Founder") && (
                    <div className="absolute left-4 top-4 sm:left-6 sm:top-6">

                      <div className="rounded-full bg-amber-500 px-4 py-2 shadow-xl sm:px-5">

                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black sm:text-xs">
                          Founder
                        </span>

                      </div>

                    </div>
                  )}

                  {/* Floating Stats */}

                  <div className="absolute left-4 right-4 top-4 flex justify-between sm:left-6 sm:right-6 sm:top-6">

                    {/* Experience */}

                    <div className="rounded-2xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-xl shadow-2xl sm:px-5 sm:py-4">

                      <div className="flex items-center gap-2">

                        <FaAward className="text-sm text-amber-400 sm:text-base" />

                        <span className="hidden text-[10px] uppercase tracking-[0.25em] text-white/80 sm:block">
                          Experience
                        </span>

                      </div>

                      <h3 className="mt-1 text-lg font-black text-white sm:mt-2 sm:text-3xl">
                        {member.experience}
                      </h3>

                    </div>

                    {/* Projects */}

                    <div className="rounded-2xl bg-amber-500 px-3 py-3 shadow-2xl sm:px-5 sm:py-4">

                      <p className="hidden text-[10px] font-bold uppercase tracking-[0.25em] text-black sm:block">
                        Projects
                      </p>

                      <h3 className="text-lg font-black text-black sm:mt-2 sm:text-3xl">
                        {member.projects}
                      </h3>

                    </div>

                  </div>

                  {/* Bottom Name */}

                  <div className="absolute inset-x-0 bottom-0">

                    <div className="bg-gradient-to-t from-black via-black/90 to-transparent px-5 pb-6 pt-20 sm:px-8 sm:pb-10 sm:pt-24">

                      <h3 className="text-2xl font-bold text-white sm:text-4xl">
                        {member.name}
                      </h3>

                      <p className="mt-2 text-sm font-medium text-amber-300 sm:text-lg">
                        {member.role}
                      </p>

                      <div className="mt-4 h-1 w-16 rounded-full bg-amber-500 sm:mt-5 sm:w-24"></div>

                    </div>

                  </div>

                </div>

              </div>

              {/* CONTENT COLUMN */}
              <div className="flex-1 p-10 lg:p-14">
                <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
                  {member.role}
                </span>

                <h3 className="mt-5 text-4xl font-bold text-stone-900">
                  {member.name}
                </h3>

                <div className="mt-6 flex flex-wrap gap-6">

                  <div className="flex items-center gap-3 rounded-xl bg-stone-100 px-5 py-3">
                    <FaHammer className="text-amber-500" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-stone-500">
                        Projects
                      </p>
                      <p className="font-bold text-stone-900">
                        {member.projects}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl bg-stone-100 px-5 py-3">
                    <FaMapMarkerAlt className="text-amber-500" />
                    <div>
                      <p className="text-xs uppercase tracking-widest text-stone-500">
                        Location
                      </p>
                      <p className="font-bold text-stone-900">
                        {member.location}
                      </p>
                    </div>
                  </div>

                </div>

                <p className="mt-8 text-lg leading-8 text-stone-600">
                  {member.description}
                </p>

                <div className="mt-8 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6 italic text-stone-700 shadow-sm">
                  "{member.quote}"
                </div>

                {/* Skills */}

                <div className="mt-10">

                  <h4 className="mb-5 text-xl font-bold text-stone-900">
                    Core Expertise
                  </h4>

                  <div className="flex flex-wrap gap-3">

                    {member.skills.map((skill) => (

                      <div
                        key={skill}
                        className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-700 transition duration-300 hover:-translate-y-1 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-700"
                      >
                        <FaCheckCircle className="text-amber-500" />
                        {skill}
                      </div>

                    ))}

                  </div>

                </div>

                {/* Contact */}

                <div className="mt-10 grid gap-6 border-t border-stone-200 pt-8 md:grid-cols-2">

                  <div className="flex items-center gap-4 rounded-2xl bg-stone-50 p-5 transition hover:bg-amber-50">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                      <FaPhoneAlt className="text-lg text-amber-600" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-stone-400">
                        Phone
                      </p>

                      <p className="font-semibold text-stone-900">
                        {member.phone}
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl bg-stone-50 p-5 transition hover:bg-amber-50">

                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-100">
                      <FaEnvelope className="text-lg text-amber-600" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-stone-400">
                        Email
                      </p>

                      <p className="break-all font-semibold text-stone-900">
                        {member.email}
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Statistics */}

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              number: "15+",
              label: "Years Experience",
              color: "from-amber-500 to-amber-600",
            },
            {
              number: "250+",
              label: "Projects Completed",
              color: "from-stone-900 to-stone-700",
            },
            {
              number: "100%",
              label: "Client Satisfaction",
              color: "from-emerald-500 to-emerald-600",
            },
            {
              number: "5★",
              label: "Commitment to Quality",
              color: "from-orange-500 to-orange-600",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${stat.color} p-8 text-center shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl`}
            >
              {/* Decorative circles */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10"></div>
              <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-black/10"></div>

              <div className="relative">
                <h3 className="text-5xl font-black text-white">
                  {stat.number}
                </h3>

                <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-white/40 transition-all duration-300 group-hover:w-24"></div>

                <p className="mt-5 text-lg font-medium text-white/90">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
