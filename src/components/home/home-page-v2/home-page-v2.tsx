"use client";

import ProjectCardV2 from "@/components/projects/project-cards/projects-card-v2";
import ExperienceCardV2 from "@/components/experience-cards/experience-card-v2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import FadeDown from "@/components/animation/fade-down";
import HeaderV3 from "@/components/header/header-v3";
import FooterV1 from "@/components/footer/footer-v1";
import { EXPERIENCE_DATA } from "@/data/experience";
import { PROJECT_DATA } from "@/data/projects";
// import { Icons } from "@/components/icons";
import { motion } from "motion/react";

export default function HomePageV2() {
  return (
    <FadeDown>
      <main className="mx-auto mt-16 max-w-xl px-4 py-4 text-zinc-900 dark:text-zinc-100">
        <HeaderV3 />
        <Tabs defaultValue="projects">
          <motion.div variants={fadeDownChildVariants}>
            <TabsList className="mb-4 -ml-[8px] border-none bg-transparent p-0">
              <TabsTrigger value="projects" className="!border-none !bg-transparent !shadow-none">
                Projects
              </TabsTrigger>
              <TabsTrigger value="experience" className="!border-none !bg-transparent !shadow-none">
                Experience
              </TabsTrigger>
              <TabsTrigger value="open-source" className="!border-none !bg-transparent !shadow-none">
                Open Source
              </TabsTrigger>
              <TabsTrigger value="tools" className="!border-none !bg-transparent !shadow-none">
                Skills
              </TabsTrigger>
            </TabsList>
          </motion.div>
          <TabsContent value="projects">
            <div className="flex flex-col gap-3">
              {PROJECT_DATA.map(project => (
                <ProjectCardV2
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  icon={project.icon}
                  image={project.image}
                  url={project.url}
                  tags={project.tags}
                  github={project.github}
                  featured={project.featured}
                  screenshot={project.screenshot}
                />
              ))}
            </div>
            {/* <AnimateIn variant="fadeUp" delay={0}>
              <section className="mb-12">
                <div className="space-y-8">
                  <ul className="space-y-8">
                    {PROJECT_DATA.map((project, index) => {
                      const delay = 0.1 + index * 0.1;
                      return (
                        <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                          <li className="group transition-all duration-300 ease-out hover:translate-x-1">
                            <div className="mb-1 flex items-baseline justify-between">
                              <h3 className="text-md font-medium">{project.name}</h3>
                              <div className="flex flex-row gap-2">
                                {project.github ? (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                                    onClick={() => track(`project_${project.name}_github_clicked`)}
                                  >
                                    GitHub <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : null}
                                {project.url ? (
                                  <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                                    onClick={() => track(`project_${project.name}_clicked`)}
                                  >
                                    View <ExternalLink className="h-3 w-3" />
                                  </a>
                                ) : null}
                              </div>
                            </div>
                            <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag, techIndex) => (
                                <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                                  {tag.name}
                                  {techIndex < project.tags.length - 1 ? " /" : ""}
                                </span>
                              ))}
                            </div>
                          </li>
                        </AnimateIn>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </AnimateIn> */}
          </TabsContent>
          <TabsContent value="experience">
            <div className="flex flex-col gap-3">
              {EXPERIENCE_DATA.filter(experience => experience.featured).map(experience => (
                <ExperienceCardV2
                  key={experience.company}
                  company={experience.company}
                  position={experience.position}
                  shortPosition={experience.shortPosition}
                  location={experience.location}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  url={experience.url}
                  github={experience.github}
                  icon={experience.icon}
                  image={experience.image}
                  jobDescription={experience.jobDescription}
                  tags={experience.tags}
                  headingTags={experience.headingTags}
                />
              ))}
            </div>
            {/* <AnimateIn variant="fadeUp" delay={0}>
              <section className="mb-12">
              <div className="space-y-8">
              <ul className="space-y-8">
              {EXPERIENCE_DATA.map((job, index) => {
                      const delay = 0.1 + index * 0.1;
                      return (
                        <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                          <li className="group transition-all duration-300 ease-out hover:translate-x-1">
                            <div className="mb-1 flex flex-col justify-between sm:flex-row sm:items-baseline">
                              <h3 className="text-md font-medium">
                                {job.position} {job.position.toLowerCase().includes("freelance") ? "" : "at"}{" "}
                                {job.company}
                              </h3>
                              <span className="text-xs text-zinc-400 dark:text-zinc-500">{job.startDate}</span>
                            </div>
                            <p className="mb-2 text-sm text-zinc-500 dark:text-zinc-400">{job.jobDescription[0]}</p>
                            <div className="flex flex-wrap gap-2">
                              {job.tags?.map((tag, techIndex) => (
                                <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                                  {tag.name}
                                  {techIndex < job.tags.length - 1 ? " /" : ""}
                                </span>
                              ))}
                            </div>
                          </li>
                        </AnimateIn>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </AnimateIn> */}
          </TabsContent>
          <TabsContent value="tools">
            {/* <AnimateIn variant="fadeUp" delay={0}>
              <h2 className="text-md mb-4 font-medium">Frontend</h2>
              <section className="mb-12">
                <div className="flex flex-wrap justify-start gap-x-4 gap-y-6">
                  {tools.frontend.map(({ Logo, title }, index) => (
                    <AnimateIn
                      key={index}
                      variant="scale"
                      delay={0.1 + index * 0.03}
                      className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]"
                    >
                      <div className="group flex flex-col items-center">
                        <div className="relative mb-3 h-7 w-7 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 sm:h-8 sm:w-8">
                          <Logo className="h-full w-full" />
                        </div>
                        <span className="text-center text-xs whitespace-nowrap text-zinc-500 dark:text-zinc-400">
                          {title}
                        </span>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </section>
            </AnimateIn>
            <AnimateIn variant="fadeUp" delay={0}>
              <h2 className="text-md mb-4 font-medium">Backend and Infrastructure</h2>
              <section className="mb-12">
                <div className="flex flex-wrap justify-start gap-x-4 gap-y-6">
                  {tools.backend_and_infrastructure.map(({ Logo, title }, index) => (
                    <AnimateIn
                      key={index}
                      variant="scale"
                      delay={0.1 + index * 0.03}
                      className="w-[calc(25%-12px)] sm:w-[calc(20%-13px)]"
                    >
                      <div className="group flex flex-col items-center">
                        <div className="relative mb-3 h-7 w-7 transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110 sm:h-8 sm:w-8">
                          <Logo className="h-full w-full" />
                        </div>
                        <span className="text-center text-xs whitespace-nowrap text-zinc-500 dark:text-zinc-400">
                          {title}
                        </span>
                      </div>
                    </AnimateIn>
                  ))}
                </div>
              </section>
            </AnimateIn> */}
          </TabsContent>
        </Tabs>
        <FooterV1 />
      </main>
    </FadeDown>
  );
}

// const tools = {
//   frontend: [
//     {
//       Logo: (props: React.SVGProps<SVGSVGElement>) => <Icons.react {...props} />,
//       title: "React",
//     },
//     {
//       Logo: (props: React.SVGProps<SVGSVGElement>) => <Icons.next {...props} />,
//       title: "NextJS",
//     },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <ReactRouter {...props} />,
//   title: "React Router",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Vue {...props} />,
//   title: "VueJS",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Nuxt {...props} />,
//   title: "NuxtJS",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Html {...props} />,
//   title: "HTML",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Css {...props} />,
//   title: "CSS",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <JavaScript {...props} />,
//   title: "Javascript",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Icons.typescript {...props} />,
//   title: "Typescript",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Sass {...props} />,
//   title: "Sass",
// },
//   {
//     Logo: (props: React.SVGProps<SVGSVGElement>) => <Icons.tailwindcss {...props} />,
//     title: "TailwindCSS",
//   },
// ],
// backend_and_infrastructure: [
//   {
//     Logo: (props: React.SVGProps<SVGSVGElement>) => <Icons.trpc {...props} />,
//     title: "TRPC",
//   },
// {
//   Logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
//   title: "Google Cloud",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <AmazonWebServices {...props} />,
//   title: "AWS",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Cloudflare {...props} />,
//   title: "Cloudflare",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Vercel {...props} />,
//   title: "Vercel",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <DrizzleORM {...props} />,
//   title: "DrizzleORM",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Bun {...props} />,
//   title: "Bun",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Nodejs {...props} />,
//   title: "NodeJS",
// },
// {
//   Logo: (props: React.SVGProps<SVGSVGElement>) => <Postgres {...props} />,
//   title: "PostgreSQL",
// },
//   ],
// };
