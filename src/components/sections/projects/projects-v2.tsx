// import ImageWithLoader from "@/components/animation/loadingimage";
import { PROJECT_DATA, type Project } from "@/data/projects";
import FadeIn from "@/components/animation/fade-in";
import { PERSONAL_DATA } from "@/data/personal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import Image from "next/image";

export default function ProjectsV2({ onlyFeatured = false }: { onlyFeatured?: boolean }) {
  const projects = onlyFeatured ? PROJECT_DATA.filter(project => project.featured) : PROJECT_DATA;

  return (
    <div className="animate-slide-from-down-and-fade-3 flex flex-col gap-3">
      <h2 className="font-semibold">Featured Projects</h2>
      {projects.map(project => (
        <ProjectCard
          key={project.name}
          name={project.name}
          description={project.description}
          icon={project.icon}
          image={project.image}
          url={project.url}
          tags={project.tags}
          github={project.github}
          featured={project.featured}
        />
      ))}
    </div>
  );
}
const ProjectCard = ({ name, icon, description, image, tags }: Project) => {
  const Icon = Icons[icon!];
  return (
    <Card className="group bg-accent/60 rounded-none border-none from-neutral-800/10 p-4 sm:rounded-lg dark:bg-neutral-900 dark:hover:bg-gradient-to-bl">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-2">
            {/* Start */}

            <div className="grid gap-6 md:grid-cols-2">
              <div
              // style="opacity: 1; will-change: opacity, transform; transform: none"
              >
                <div className="bg-card text-card-foreground from-primary/10 to-secondary/10 overflow-hidden rounded-xl border border-none bg-gradient-to-br p-4 shadow transition-all duration-300 hover:shadow-lg">
                  <div className="space-y-4 p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      {/* <Image
                        alt="abhi-arya"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="transition-transform duration-300 hover:scale-105"
                        sizes="100vw"
                        src={PERSONAL_DATA.avatar}
                        width={200}
                        height={100}
                      /> */}
                      {/* 
                      <ImageWithLoader
                        width={200}
                        height={100}
                        alt="InvoiceMailer project screenshot"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="transition-transform duration-300 hover:scale-105"
                        sizes="100vw"
                        src={PERSONAL_DATA.avatar}
                      ></ImageWithLoader> */}
                      {/* <Image
                        width={200}
                        height={100}
                        alt="InvoiceMailer project screenshot"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="transition-transform duration-300 hover:scale-105"
                        sizes="100vw"
                        src={PERSONAL_DATA.avatar}
                      /> */}
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">InvoiceMailer</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">A full-featured invoicemailer solution</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Next.js
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        TypeScript
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        PostgreSQL
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        TailwindCSS
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Prisma
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-8 w-full items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://github.com/geekyharsh05/invoicemailer"
                      >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path
                            fill="currentColor"
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          ></path>
                        </svg>
                        GitHub
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-full items-center justify-center gap-2 rounded-md border px-3 text-xs font-medium whitespace-nowrap shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://invoicemailer.theharsh.xyz"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-globe mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Live Demo
                      </a>
                      <button className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground inline-flex h-8 flex-shrink-0 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
              // style="opacity: 1; will-change: opacity, transform; transform: none"
              >
                <div className="bg-card text-card-foreground from-primary/10 to-secondary/10 overflow-hidden rounded-xl border border-none bg-gradient-to-br p-4 shadow transition-all duration-300 hover:shadow-lg">
                  <div className="space-y-4 p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        width={200}
                        height={100}
                        alt="QuikWallet project screenshot"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="transition-transform duration-300 hover:scale-105"
                        // style="
                        //   position: absolute;
                        //   height: 100%;
                        //   width: 100%;
                        //   left: 0;
                        //   top: 0;
                        //   right: 0;
                        //   bottom: 0;
                        //   object-fit: cover;
                        //   color: transparent;
                        // "
                        src={PERSONAL_DATA.avatar}
                        sizes="100vw"
                        // srcset="
                        //   /_next/Image?url=%2Fimages%2Fquikwallet.png&amp;w=640&amp;q=75   640w,
                        //   /_next/Image?url=%2Fimages%2Fquikwallet.png&amp;w=750&amp;q=75   750w,
                        //   /_next/Image?url=%2Fimages%2Fquikwallet.png&amp;w=828&amp;q=75   828w,
                        //   /_next/Image?url=%2Fimages%2Fquikwallet.png&amp;w=1080&amp;q=75 1080w,
                        //   /_next/Image?url=%2Fimages%2Fquikwallet.png&amp;w=1200&amp;q=75 1200w,
                        //   /_next/Image?url=%2Fimages%2Fquikwallet.png&amp;w=1920&amp;q=75 1920w,
                        //   /_next/Image?url=%2Fimages%2Fquikwallet.png&amp;w=2048&amp;q=75 2048w,
                        //   /_next/Image?url=%2Fimages%2Fquikwallet.png&amp;w=3840&amp;q=75 3840w
                        // "
                        // src="/_next/Image?url=%2Fimages%2Fquikwallet.png&amp;w=3840&amp;q=75"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">QuikWallet</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">Extension for instant Solana wallet access</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        TypeScript
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Solana
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Raycast
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Tanstack Query
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-8 w-full items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://github.com/devsargam/quick-wallet"
                      >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path
                            fill="currentColor"
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          ></path>
                        </svg>
                        GitHub
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-full items-center justify-center gap-2 rounded-md border px-3 text-xs font-medium whitespace-nowrap shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://www.quikwallet.app"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-globe mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Live Demo
                      </a>
                      <button className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground inline-flex h-8 flex-shrink-0 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
              // style="opacity: 1; will-change: opacity, transform; transform: none"
              >
                <div className="bg-card text-card-foreground from-primary/10 to-secondary/10 overflow-hidden rounded-xl border border-none bg-gradient-to-br p-4 shadow transition-all duration-300 hover:shadow-lg">
                  <div className="space-y-4 p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      <FadeIn>
                        <Image
                          width={200}
                          height={100}
                          alt="Redditz project screenshot"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="transition-transform duration-300 hover:scale-105"
                          // style="
                          //   position: absolute;
                          //   height: 100%;
                          //   width: 100%;
                          //   left: 0;
                          //   top: 0;
                          //   right: 0;
                          //   bottom: 0;
                          //   object-fit: cover;
                          //   color: transparent;
                          // "
                          src={PERSONAL_DATA.avatar}
                          sizes="100vw"
                          // srcset="
                          //   /_next/Image?url=%2Fimages%2Fredditz.png&amp;w=640&amp;q=75   640w,
                          //   /_next/Image?url=%2Fimages%2Fredditz.png&amp;w=750&amp;q=75   750w,
                          //   /_next/Image?url=%2Fimages%2Fredditz.png&amp;w=828&amp;q=75   828w,
                          //   /_next/Image?url=%2Fimages%2Fredditz.png&amp;w=1080&amp;q=75 1080w,
                          //   /_next/Image?url=%2Fimages%2Fredditz.png&amp;w=1200&amp;q=75 1200w,
                          //   /_next/Image?url=%2Fimages%2Fredditz.png&amp;w=1920&amp;q=75 1920w,
                          //   /_next/Image?url=%2Fimages%2Fredditz.png&amp;w=2048&amp;q=75 2048w,
                          //   /_next/Image?url=%2Fimages%2Fredditz.png&amp;w=3840&amp;q=75 3840w
                          // "
                          // src="/_next/Image?url=%2Fimages%2Fredditz.png&amp;w=3840&amp;q=75"
                        />
                      </FadeIn>
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Redditz</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">Social media for communities.</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Nextjs
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        TypeScript
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Prisma
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        ShadCn UI
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        PostgresSQL
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-8 w-full items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://github.com/geekyharsh05/Redditz"
                      >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path
                            fill="currentColor"
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          ></path>
                        </svg>
                        GitHub
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-full items-center justify-center gap-2 rounded-md border px-3 text-xs font-medium whitespace-nowrap shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://redditz.theharsh.xyz/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-globe mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Live Demo
                      </a>
                      <button className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground inline-flex h-8 flex-shrink-0 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
              // style="opacity: 1; will-change: opacity, transform; transform: none; transform-origin: 50% 50% 0px"
              >
                <div className="bg-card text-card-foreground from-primary/10 to-secondary/10 overflow-hidden rounded-xl border border-none bg-gradient-to-br p-4 shadow transition-all duration-300 hover:shadow-lg">
                  <div className="space-y-4 p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        width={200}
                        height={100}
                        alt="RealTalk project screenshot"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="transition-transform duration-300 hover:scale-105"
                        // style="
                        //   position: absolute;
                        //   height: 100%;
                        //   width: 100%;
                        //   left: 0;
                        //   top: 0;
                        //   right: 0;
                        //   bottom: 0;
                        //   object-fit: cover;
                        //   color: transparent;
                        // "
                        src={PERSONAL_DATA.avatar}
                        sizes="100vw"
                        // srcset="
                        //   /_next/Image?url=%2Fimages%2Frealtalk.png&amp;w=640&amp;q=75   640w,
                        //   /_next/Image?url=%2Fimages%2Frealtalk.png&amp;w=750&amp;q=75   750w,
                        //   /_next/Image?url=%2Fimages%2Frealtalk.png&amp;w=828&amp;q=75   828w,
                        //   /_next/Image?url=%2Fimages%2Frealtalk.png&amp;w=1080&amp;q=75 1080w,
                        //   /_next/Image?url=%2Fimages%2Frealtalk.png&amp;w=1200&amp;q=75 1200w,
                        //   /_next/Image?url=%2Fimages%2Frealtalk.png&amp;w=1920&amp;q=75 1920w,
                        //   /_next/Image?url=%2Fimages%2Frealtalk.png&amp;w=2048&amp;q=75 2048w,
                        //   /_next/Image?url=%2Fimages%2Frealtalk.png&amp;w=3840&amp;q=75 3840w
                        // "
                        // src="/_next/Image?url=%2Fimages%2Frealtalk.png&amp;w=3840&amp;q=75"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">RealTalk</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">RealTalk is a realtime chat app.</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        TypeScript
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Express
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Typegoose
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Zustand
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Socket.io
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-8 w-full items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://github.com/geekyharsh05/RealTalk"
                      >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path
                            fill="currentColor"
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          ></path>
                        </svg>
                        GitHub
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-full items-center justify-center gap-2 rounded-md border px-3 text-xs font-medium whitespace-nowrap shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://realtalk.theharsh.xyz/"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-globe mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Live Demo
                      </a>
                      <button className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground inline-flex h-8 flex-shrink-0 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
              // style="opacity: 1; will-change: opacity, transform; transform: none"
              >
                <div className="bg-card text-card-foreground from-primary/10 to-secondary/10 overflow-hidden rounded-xl border border-none bg-gradient-to-br p-4 shadow transition-all duration-300 hover:shadow-lg">
                  <div className="space-y-4 p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        width={200}
                        height={100}
                        alt="gURL project screenshot"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="transition-transform duration-300 hover:scale-105"
                        // style="
                        //   position: absolute;
                        //   height: 100%;
                        //   width: 100%;
                        //   left: 0;
                        //   top: 0;
                        //   right: 0;
                        //   bottom: 0;
                        //   object-fit: cover;
                        //   color: transparent;
                        // "
                        src={PERSONAL_DATA.avatar}
                        sizes="100vw"
                        // srcset="
                        //   /_next/Image?url=%2Fimages%2Fgurl.png&amp;w=640&amp;q=75   640w,
                        //   /_next/Image?url=%2Fimages%2Fgurl.png&amp;w=750&amp;q=75   750w,
                        //   /_next/Image?url=%2Fimages%2Fgurl.png&amp;w=828&amp;q=75   828w,
                        //   /_next/Image?url=%2Fimages%2Fgurl.png&amp;w=1080&amp;q=75 1080w,
                        //   /_next/Image?url=%2Fimages%2Fgurl.png&amp;w=1200&amp;q=75 1200w,
                        //   /_next/Image?url=%2Fimages%2Fgurl.png&amp;w=1920&amp;q=75 1920w,
                        //   /_next/Image?url=%2Fimages%2Fgurl.png&amp;w=2048&amp;q=75 2048w,
                        //   /_next/Image?url=%2Fimages%2Fgurl.png&amp;w=3840&amp;q=75 3840w
                        // "
                        // src="/_next/Image?url=%2Fimages%2Fgurl.png&amp;w=3840&amp;q=75"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">gURL</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">Inspired by curl, but with a modern touch</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Go
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Cobra
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Goreleaser
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        GH Actions
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-8 w-full items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://github.com/geekyharsh05/gurl"
                      >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path
                            fill="currentColor"
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          ></path>
                        </svg>
                        GitHub
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-full items-center justify-center gap-2 rounded-md border px-3 text-xs font-medium whitespace-nowrap shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://gurl.theharsh.xyz"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-globe mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Live Demo
                      </a>
                      <button className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground inline-flex h-8 flex-shrink-0 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
              // style="opacity: 1; will-change: opacity, transform; transform: none"
              >
                <div className="bg-card text-card-foreground from-primary/10 to-secondary/10 overflow-hidden rounded-xl border border-none bg-gradient-to-br p-4 shadow transition-all duration-300 hover:shadow-lg">
                  <div className="space-y-4 p-0">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg">
                      <Image
                        width={200}
                        height={100}
                        alt="Trim It project screenshot"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="transition-transform duration-300 hover:scale-105"
                        // style="
                        //   position: absolute;
                        //   height: 100%;
                        //   width: 100%;
                        //   left: 0;
                        //   top: 0;
                        //   right: 0;
                        //   bottom: 0;
                        //   object-fit: cover;
                        //   color: transparent;
                        // "
                        src={PERSONAL_DATA.avatar}
                        sizes="100vw"
                        // srcset="
                        //   /_next/Image?url=%2Fimages%2Ftrimit.png&amp;w=640&amp;q=75   640w,
                        //   /_next/Image?url=%2Fimages%2Ftrimit.png&amp;w=750&amp;q=75   750w,
                        //   /_next/Image?url=%2Fimages%2Ftrimit.png&amp;w=828&amp;q=75   828w,
                        //   /_next/Image?url=%2Fimages%2Ftrimit.png&amp;w=1080&amp;q=75 1080w,
                        //   /_next/Image?url=%2Fimages%2Ftrimit.png&amp;w=1200&amp;q=75 1200w,
                        //   /_next/Image?url=%2Fimages%2Ftrimit.png&amp;w=1920&amp;q=75 1920w,
                        //   /_next/Image?url=%2Fimages%2Ftrimit.png&amp;w=2048&amp;q=75 2048w,
                        //   /_next/Image?url=%2Fimages%2Ftrimit.png&amp;w=3840&amp;q=75 3840w
                        // "
                        // src="/_next/Image?url=%2Fimages%2Ftrimit.png&amp;w=3840&amp;q=75"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Trim It</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">URL Shortener with custom URLs.</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        React
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        Supabase
                      </div>
                      <div className="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                        TypeScript
                      </div>
                    </div>
                    <div className="mt-4 flex gap-2">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-8 w-full items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://github.com/geekyharsh05/Trimit"
                      >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                          <path
                            fill="currentColor"
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          ></path>
                        </svg>
                        GitHub
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-8 w-full items-center justify-center gap-2 rounded-md border px-3 text-xs font-medium whitespace-nowrap shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                        href="https://trim.ink"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-globe mr-2"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                          <path d="M2 12h20"></path>
                        </svg>
                        Live Demo
                      </a>
                      <button className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground inline-flex h-8 flex-shrink-0 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-chevron-down"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* End */}

            {icon && <Icon className="h-12 w-12 shrink-0 transition-all group-hover:saturate-100 sm:saturate-0" />}
            {image && (
              <Image
                width={200}
                height={100}
                src={image}
                alt="fds"
                className="h-12 w-auto shrink-0 transition-all group-hover:saturate-100 sm:saturate-0"
              />
            )}
            <div>
              <h3>{name}</h3>
              {description.length > 0 && <p className="text-muted-foreground text-sm">{description[0]}</p>}
            </div>
          </div>
        </div>
        <div>
          {tags && (
            <ul className="mt-2 flex flex-wrap gap-1">
              {tags.map((tag, idx) => {
                const Icon = Icons[tag.icon];
                return (
                  <li key={idx}>
                    <Badge variant={"outline"}>
                      <Icon className="mr-1.5 h-3 w-3 transition-all group-hover:saturate-100 sm:saturate-0" />{" "}
                      {tag.name}
                    </Badge>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
};
