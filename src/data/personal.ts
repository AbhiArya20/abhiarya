export type Address = {
  state: string;
  country: string;
  url: string;
};

export type Personal = {
  name: string;
  nickname: string;
  avatar: string;
  githubAvatar?: string;
  title: string;
  address: Address;
  github?: string;
  portfolio: string;
  description: string;
  descriptionRaw: string;
};

export const PERSONAL_DATA: Personal = {
  name: "Abhishek Kumar",
  nickname: "Abhi Arya",
  avatar: "avatar.webp",
  githubAvatar: "https://avatars.githubusercontent.com/u/188953429?v=4",
  title: "Software Engineer",
  address: {
    state: "New Delhi",
    country: "India",
    url: "https://www.google.com/maps/place/new-delhi",
  },
  portfolio: "https://abhiarya.in",
  github: "AbhiArya20",
  description: `Full Stack Developer with a passion for building high-quality products.`,
  descriptionRaw: `Hi, I'm Abhishek Kumar from New Delhi, India. I work as a part-time Full-stack Developer at Hi Interns. I love building websites with good UI/UX, and I'm also passionate about new technologies, open-source software, and contributing to the community.`,
};
