type Name = {
  name: string;
  shortName: string;
};

type College = {
  name: string;
  shortName: string;
  url: string;
  location: string;
  locationUrl: string;
  previously?: Name;
  currently?: Name;
};

type University = {
  name: string;
  shortName: string;
  url: string;
  location: string;
  locationUrl: string;
  previously?: Name;
  currently?: Name;
};

export type Education = {
  college: College;
  university: University;
  stream: string;
  degree: string;
  startDate: string;
  endDate?: string;
  percentage?: number;
  CGPA?: number;
};

export const EDUCATION_DATA: Education[] = [
  {
    college: {
      name: "Darbhanga College of Engineering",
      shortName: "DCE",
      url: "https://www.dce-darbhanga.org",
      location: "Darbhanga",
      locationUrl:
        "https://www.google.com/maps/place/Darbhanga+College+of+Engineering,+Darbhanga/@26.1794718,85.8600587,17z/data=!3m1!4b1!4m6!3m5!1s0x39edb75b85cc6827:0x6323aca3b97a9fe1!8m2!3d26.1794671!4d85.8649296!16s%2Fm%2F0j435kx?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
    },
    university: {
      name: "Bihar Engineering University",
      shortName: "BEU",
      url: "https://beu-bih.ac.in",
      location: "Patna",
      locationUrl:
        "https://www.google.com/maps/place/Bihar+Engineering+University,+Patna/@25.5925986,85.1324696,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed595512a81bc3:0x5e020117679b27f3!8m2!3d25.5925938!4d85.1350445!16s%2Fg%2F11twxns8lc?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
      previously: {
        name: "Aryabhatta Knowledge University",
        shortName: "AKU",
      },
    },
    stream: "Computer Science Engineering",
    degree: "B.Tech",
    startDate: "2020",
    endDate: "2023",
    CGPA: 8.3,
  },
  {
    college: {
      name: "Delhi Institute of Tool Engineering",
      shortName: "DITE",
      url: "https://www.dseu.ac.in/campus/dseu-wazirpur-campus",
      location: "New Delhi",
      locationUrl:
        "https://www.google.com/maps/dir/28.6130176,77.2308992/DSEU+Wazirpur-I+Campus+%26+DSEU+Okhla-II+Campus,+AG-18,+Mahatma+Gandhi+Rd,+%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A5%80+%E0%A4%B6%E0%A4%BE%E0%A4%B2%E0%A5%80%E0%A4%AE%E0%A4%BE%E0%A4%B0+%E0%A4%AC%E0%A4%BE%E0%A4%98,+Shalimar+Bagh,+New+Delhi,+Delhi+110052/@28.6613751,77.1286354,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d022484bf6f49:0xe9aeece4d5bbbbc8!2m2!1d77.1649905!2d28.700841?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
      currently: {
        name: "Delhi Skill and Entrepreneurship University",
        shortName: "DSEU",
      },
    },
    university: {
      name: "Board of Technical Education",
      shortName: "BTE",
      url: "http://www.degs.delhi.gov.in/bte/index.html",
      location: "Delhi",
      locationUrl:
        "https://www.google.com/maps/dir/28.6130176,77.2308992/Board+of+Technical+Education,+Muni+Mayaram+Marg,+New+T+V+Tower,+Muni+Maya+Ram+Jain+Marg,+Near+Tv+Tower,+Pitampura,+Delhi,+110088/@28.6613751,77.118412,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d022e6d24d71b:0xde16bd496860bede!2m2!1d77.1549113!2d28.699966?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D",
      currently: {
        name: "Delhi Skill and Entrepreneurship University",
        shortName: "DSEU",
      },
    },
    stream: "Mechanical Engineering",
    degree: "Diploma",
    startDate: "2017",
    endDate: "2020",
    percentage: 78.5,
  },
];
