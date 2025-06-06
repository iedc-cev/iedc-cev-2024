import React from 'react';

function Team() {
  const groupedTeam = {
    'Student Lead': [
      {
        name: "Abhin C",
        image: "/images/teamimg/abhin.jpg",
        social: {
          Instagram: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
      {
        name: "Ashwini",
        image: "/images/teamimg/aswini.jpg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
    ],
    'Tech Lead': [
      {
        name: "Anandhu Ashok",
        image: "/images/teamimg/anandhu.jpeg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
      {
        name: "Thaj",
        image: "/images/teamimg/thaj.jpg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
    ],
    "Quality and Operation Lead": [
      {
        name: "Sooraj B S",
        image: "/images/teamimg/sooraj.jpg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
      {
        name: "Muhammad Hijas M",
        image: "/images/teamimg/hijas.jpg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
    ],
    "IPR and Research Lead": [
      {
        name: "Lekshmikrishna M",
        image: "/images/teamimg/lekshmi.jpg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
      {
        name: "Dhanush S Gireesh",
        image: "/images/teamimg/dhanush.jpg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
    ],
    "Community Lead": [
      {
        name: "Jomin Binny",
        image: "/images/teamimg/jomin.jpg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          twitter: "https://www.instagram.com/iedc_cev/",
        },
      },
    ],
    "Branding and Marketing": [
      {
        name: "Anaswara A",
        image: "/images/teamimg/anaswara.jpg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
    ],
    "Innovation and Creative Lead": [
      {
        name: "Maisa Ismail",
        image: "/images/teamimg/maisa.jpeg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
    ],
    'Finance Lead': [
      {
        name: "Thejus Santhosh",
        image: "/images/teamimg/thejus.jpeg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
    ],
    'Women innovation Lead': [
      {
        name: "Zeenath K P",
        image: "/images/teamimg/zeenth.jpeg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
    ],
    "Media Lead": [
      {
        name: "Adith J P",
        image: "/images/teamimg/adith.jpeg",
        social: {
          facebook: "https://www.instagram.com/iedc_cev/",
          linkedin: "https://www.instagram.com/iedc_cev/",
        },
      },
    ]
  };

  return (
    <div className="p-8 flex flex-col items-center text-center">
      <h1 className=" text-[#094395] text-3xl font-semibold mb-6 border-b-2 uppercase p-3">Executive Committee</h1>

      {Object.entries(groupedTeam).map(([role, members]) => (
        <div key={role} className="mb-10 sm:max-w-[500px] max-w-[280px]">
          <h2 className="text-2xl font-semibold mb-4">{role.toUpperCase()}</h2>

          <div className={`grid gap-12 ${members.length === 1? "grid-cols-1 justify-items-center" : "sm:grid-cols-2 grid-cols-1"}`}>
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center hover:scale-103 duration-300 hover:shadow-xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[180px] h-[180px] rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <div className="flex gap-3 mt-2">
                  {Object.entries(member.social).map(([platform, link], i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-sm"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
