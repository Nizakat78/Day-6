import React from "react";


interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const teamMembers: TeamMemberProps[] = [
  { name: "Mark Henry", role: "Owner", imageUrl: "/Teamview1.svg" },
  { name: "Lucky Helen", role: "Chef", imageUrl: "/Teamview1.svg" },
  { name: "Moon Henry", role: "Founder", imageUrl: "/Teamview1.svg" },
  { name: "Tom Monrow", role: "Specialist", imageUrl: "/Teamview1.svg" },
];

const TeamMember: React.FC = () => {
  return (
    <section className="bg-yellow-400 py-16">
      {/* Section Header */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">Team Member</h2>
        <p className="text-white mt-4 text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="flex flex-col gap-6 items-center px-4 sm:hidden">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-64 text-center"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex sm:flex-wrap sm:justify-center sm:gap-8 sm:px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-72 text-center"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-base">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMember;
