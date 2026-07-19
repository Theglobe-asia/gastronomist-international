// components/data/gastronomist-members.ts

export type ChefDirectoryMember = {
  name: string
  role: string
  blurb: string
  img: string
  region: string
  specialty: string
}

export type AboutLeaderMember = {
  name: string
  role: string
  blurb: string
  img: string
  region: string
  focus: string
}

export const chefDirectoryMembers: ChefDirectoryMember[] = [
  {
    name: "Chef Noor",
    role: "International Member",
    blurb:
      "Representing the new wave of modern Middle Eastern gastronomy from the GCC, with a focus on culinary excellence, cultural identity, and professional recognition.",
    img: "/images/gcc_noor.png",
    region: "GCC — Middle East",
    specialty: "Modern Gastronomy",
  },
  {
    name: "Chef Mar",
    role: "International Member",
    blurb: "Specializes in modernizing traditional recipes with innovative techniques.",
    img: "/images/chefmar.png",
    region: "Asia",
    specialty: "Modern Heritage",
  },
  {
    name: "Chef Arman",
    role: "International Member",
    blurb: "Passionate about sustainable cooking and seasonal ingredients.",
    img: "/images/chefarman.png",
    region: "Europe",
    specialty: "Sustainability",
  },
  {
    name: "Chef Sandar",
    role: "International Member",
    blurb: "Renowned for artistic pastry creations blending flavor and design.",
    img: "/images/chefsandar.png",
    region: "Asia",
    specialty: "Pastry Arts",
  },
  {
    name: "Chef Deric",
    role: "International Member",
    blurb: "Expert in precision cooking and creative plating aesthetics.",
    img: "/images/chefderic.png",
    region: "Americas",
    specialty: "Modern Plating",
  },
  {
    name: "Chef Francis",
    role: "International Member",
    blurb: "Known for curating immersive dining experiences worldwide.",
    img: "/images/cheffrancis.png",
    region: "Europe",
    specialty: "Fine Dining",
  },
  {
    name: "Chef Rommel",
    role: "International Member",
    blurb: "Dedicated to training and mentoring the next generation of chefs.",
    img: "/images/chefrommel.png",
    region: "Asia",
    specialty: "Mentorship",
  },
  {
    name: "Chef Kono",
    role: "International Member",
    blurb: "Blends global culinary heritage with modern techniques.",
    img: "/images/chefkono.png",
    region: "Oceania",
    specialty: "Fusion",
  },
]

export const aboutLeadershipMembers: AboutLeaderMember[] = [
  {
    name: "Chef Alexander Hardinan",
    role: "Founder — Gastronomist International",
    blurb:
      "Founder and visionary behind Gastronomist International, building a global platform for culinary innovation, recognition, and professional connection.",
    img: "/images/president.png?v=2",
    region: "Global",
    focus: "Modern Gastronomy",
  },
  {
    name: "Chef Alan Coxon",
    role: "Culinary Advisor",
    blurb:
      "Renowned culinary consultant and television presenter, supporting global food heritage, education, and culinary innovation.",
    img: "/images/chefcox.png?v=2",
    region: "Global",
    focus: "Food Heritage",
  },
  {
    name: "Yulia Antonova — Mystic Mask",
    role: "Russia Representative — Honorary Cultural Partner",
    blurb:
      "Representing Gastronomist International in Russia through cultural leadership, artistic exchange, international collaboration, and professional recognition.",
    img: "/images/yulia.png",
    region: "Russia",
    focus: "Cultural Representation",
  },
  {
    name: "Chef Hamid Aloyev",
    role: "Azerbaijan Representative",
    blurb:
      "Representing Gastronomist International through regional culinary leadership, professional connection, and global collaboration.",
    img: "/images/chefhamid.png?v=2",
    region: "Azerbaijan",
    focus: "Representation",
  },
  {
    name: "Chef Luzach H Hubert",
    role: "France Representative",
    blurb:
      "Supporting the organization’s international presence through culinary representation, professional standards, and community engagement.",
    img: "/images/chefluzac.png?v=2",
    region: "France",
    focus: "Representation",
  },
  {
    name: "Chef Thet Aung Zaw",
    role: "Myanmar Representative",
    blurb:
      "Contributing to Gastronomist International’s mission by connecting culinary professionals and strengthening regional visibility.",
    img: "/images/chefthet.png?v=2",
    region: "Myanmar",
    focus: "Representation",
  },
  {
    name: "Chef Wael Alyzed",
    role: "Saudi Arabia Representative",
    blurb:
      "Representing professional culinary excellence and supporting global recognition across hospitality and gastronomy communities.",
    img: "/images/chefwael.png?v=2",
    region: "Saudi Arabia",
    focus: "Representation",
  },
]

export const activeMembersTotal =
  chefDirectoryMembers.length + aboutLeadershipMembers.length
