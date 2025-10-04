import { Icons } from "@/components/icons";

export type LEARNINGS = {
  title: string;
  description: string;
  date: string;
  url: string;
  image?: string;
  icon?: keyof typeof Icons;
};

export const LEARNINGS_DATA: LEARNINGS[] = [
  {
    title: "Understanding kafka architecture and components in depth",
    description:
      "Kafka is a distributed streaming platform that is used for building real-time data pipelines and streaming applications. In this article, we will explore the architecture and components of Kafka in depth, including the producer, consumer, and broker.",
    date: "Oct 2023",
    url: "https://learnings.abhiarya.in/current/kafka",
    icon: "kafka",
  },
  {
    title: "Deep dive into caching and Redis",
    description:
      "Redis is a popular in-memory data store that is used for caching and session management. In this article, we will explore the architecture and components of Redis in depth, including the data structures, commands, and performance.",
    date: "Oct 2023",
    url: "https://learnings.abhiarya.in/current/redis",
    icon: "redis",
  },
  {
    title: "Docker architecture and commands",
    description:
      "Docker is a containerization platform that is used for building, deploying, and managing applications. In this article, we will explore the architecture and components of Docker in depth, including the containers, images, and networks.",
    date: "Oct 2023",
    url: "https://learnings.abhiarya.in/current/docker",
    icon: "docker",
  },
];
