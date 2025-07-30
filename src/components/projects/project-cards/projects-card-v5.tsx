// "use client";

// import { fadeDownChildVariants } from "@/lib/animation-variants";
// import Tags from "@/components/tags/tags";
// import { Project } from "@/data/projects";
// import { motion } from "motion/react";
// import Image from "next/image";

// export default function ProjectsCardV3({ name, icon, description, github, url, image, tags }: Project) {
//   return (
//     <></>
//     // <motion.div variants={fadeDownChildVariants}>
//     //   <div className="relative h-full rounded-2xl border border-zinc-200 bg-white p-6 backdrop-blur-sm transition-all duration-300 dark:border-zinc-800 dark:bg-[#141415]">
//     //     <div className="mb-3 flex items-start justify-between">
//     //       <div>
//     //         <h3 className="font-meidum text-zinc-900 dark:text-white">{name}</h3>
//     //         <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
//     //       </div>
//     //     </div>
//     //     <div className="mb-3 flex items-center gap-2">
//     //       <div className="flex -space-x-2">
//     //         <div className="group/member relative">
//     //           <Image
//     //             alt="Tanay"
//     //             loading="lazy"
//     //             width="24"
//     //             height="24"
//     //             decoding="async"
//     //             data-nimg="1"
//     //             className="rounded-full ring-2 ring-white transition-transform duration-200 hover:-translate-y-1 dark:ring-zinc-900"
//     //             src={"/abhi-arya.webp"}
//     //           />
//     //           <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-zinc-900 px-2 py-1 text-[10px] text-white opacity-0 transition-opacity duration-200 group-hover/member:opacity-100 dark:bg-zinc-100 dark:text-zinc-900">
//     //             Tanay
//     //           </span>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div className="mb-3 grid grid-cols-2 gap-2">
//     //       <div className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200/50 bg-zinc-50 p-1 dark:border-zinc-800/50 dark:bg-zinc-800/50">
//     //         <svg
//     //           xmlns="http://www.w3.org/2000/svg"
//     //           width="24"
//     //           height="24"
//     //           viewBox="0 0 24 24"
//     //           fill="none"
//     //           stroke="currentColor"
//     //           stroke-width="2"
//     //           stroke-linecap="round"
//     //           stroke-linejoin="round"
//     //           className="lucide lucide-code-xml h-3 w-3 text-red-500 dark:text-red-400"
//     //         >
//     //           <path d="m18 16 4-4-4-4"></path>
//     //           <path d="m6 8-4 4 4 4"></path>
//     //           <path d="m14.5 4-5 16"></path>
//     //         </svg>
//     //         <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">GO</span>
//     //       </div>
//     //       <div className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200/50 bg-zinc-50 p-1 dark:border-zinc-800/50 dark:bg-zinc-800/50">
//     //         <svg
//     //           xmlns="http://www.w3.org/2000/svg"
//     //           width="24"
//     //           height="24"
//     //           viewBox="0 0 24 24"
//     //           fill="none"
//     //           stroke="currentColor"
//     //           stroke-width="2"
//     //           stroke-linecap="round"
//     //           stroke-linejoin="round"
//     //           className="lucide lucide-frame h-3 w-3 text-yellow-500 dark:text-yellow-400"
//     //         >
//     //           <line x1="22" x2="2" y1="6" y2="6"></line>
//     //           <line x1="22" x2="2" y1="18" y2="18"></line>
//     //           <line x1="6" x2="6" y1="2" y2="22"></line>
//     //           <line x1="18" x2="18" y1="2" y2="22"></line>
//     //         </svg>
//     //         <span className="text-sm text-zinc-700 dark:text-zinc-300">None</span>
//     //       </div>
//     //       <div className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200/50 bg-zinc-50 p-1 dark:border-zinc-800/50 dark:bg-zinc-800/50">
//     //         <svg
//     //           xmlns="http://www.w3.org/2000/svg"
//     //           width="24"
//     //           height="24"
//     //           viewBox="0 0 24 24"
//     //           fill="none"
//     //           stroke="currentColor"
//     //           stroke-width="2"
//     //           stroke-linecap="round"
//     //           stroke-linejoin="round"
//     //           className="lucide lucide-database h-3 w-3 text-indigo-500 dark:text-indigo-400"
//     //         >
//     //           <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
//     //           <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
//     //           <path d="M3 12A9 3 0 0 0 21 12"></path>
//     //         </svg>
//     //         <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">None</span>
//     //       </div>
//     //       <div className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200/50 bg-zinc-50 p-1 dark:border-zinc-800/50 dark:bg-zinc-800/50">
//     //         <svg
//     //           xmlns="http://www.w3.org/2000/svg"
//     //           width="24"
//     //           height="24"
//     //           viewBox="0 0 24 24"
//     //           fill="none"
//     //           stroke="currentColor"
//     //           stroke-width="2"
//     //           stroke-linecap="round"
//     //           stroke-linejoin="round"
//     //           className="lucide lucide-cloud h-3 w-3 text-emerald-500 dark:text-emerald-400"
//     //         >
//     //           <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
//     //         </svg>
//     //         <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">None</span>
//     //       </div>

//     //       <TagsV1 tags={tags} />
//     //     </div>
//     //     <div className="space-y-2">
//     //       <div className="flex items-center justify-between text-sm">
//     //         <span className="font-medium text-zinc-700 dark:text-zinc-300">Progress</span>
//     //         <span className="text-zinc-500 dark:text-zinc-400">90%</span>
//     //       </div>
//     //       <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-800">
//     //         <div
//     //           className="h-full rounded-full bg-indigo-500 transition-all duration-1000 ease-out dark:bg-indigo-400"
//     //           //   style="width: 90%;"
//     //         ></div>
//     //       </div>
//     //     </div>
//     //     <div className="mt-6 space-y-4 border-t border-zinc-200 pt-4 dark:border-zinc-800">
//     //       <a
//     //         target="_blank"
//     //         className="inline-flex items-center gap-2 text-sm text-zinc-600 transition-colors duration-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
//     //         href="https://github.com/tanayvaswani/tcp-go"
//     //       >
//     //         <svg
//     //           width="15"
//     //           height="15"
//     //           viewBox="0 0 15 15"
//     //           fill="none"
//     //           xmlns="http://www.w3.org/2000/svg"
//     //           className="h-4 w-4"
//     //         >
//     //           <path
//     //             d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
//     //             fill="currentColor"
//     //             fill-rule="evenodd"
//     //             clip-rule="evenodd"
//     //           ></path>
//     //         </svg>{" "}
//     //         View Project Details
//     //         <svg
//     //           xmlns="http://www.w3.org/2000/svg"
//     //           width="24"
//     //           height="24"
//     //           viewBox="0 0 24 24"
//     //           fill="none"
//     //           stroke="currentColor"
//     //           stroke-width="2"
//     //           stroke-linecap="round"
//     //           stroke-linejoin="round"
//     //           className="lucide lucide-arrow-up-right h-4 w-4"
//     //         >
//     //           <path d="M7 7h10v10"></path>
//     //           <path d="M7 17 17 7"></path>
//     //         </svg>
//     //       </a>
//     //     </div>
//     //   </div>
//     // </motion.div>

//     // TODO: Fix this
//     // <a
//     //   target="_blank"
//     //   className="group relative flex w-full items-start gap-3 rounded-2xl border border-white/20 bg-white/50 p-4 shadow-sm backdrop-blur-lg transition-all duration-300 ease-out hover:bg-white/80 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/30"
//     //   href="https://tanayvaswani.medium.com/databases-overview-of-row-vs-column-oriented-e7bf2fd0af6f"
//     // >
//     //   <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 p-3 text-indigo-600 shadow-sm transition-transform duration-300 group-hover:scale-105 hover:border-zinc-700 dark:border-zinc-800 dark:from-indigo-400/20 dark:to-indigo-400/10 dark:text-indigo-400">
//     //     <svg
//     //       xmlns="http://www.w3.org/2000/svg"
//     //       width="24"
//     //       height="24"
//     //       viewBox="0 0 24 24"
//     //       fill="none"
//     //       stroke="currentColor"
//     //       stroke-width="2"
//     //       stroke-linecap="round"
//     //       stroke-linejoin="round"
//     //       className="lucide lucide-database-zap h-5 w-5"
//     //     >
//     //       <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
//     //       <path d="M3 5V19A9 3 0 0 0 15 21.84"></path>
//     //       <path d="M21 5V8"></path>
//     //       <path d="M21 12L18 17H22L19 22"></path>
//     //       <path d="M3 12A9 3 0 0 0 14.59 14.87"></path>
//     //     </svg>
//     //   </div>
//     //   <div className="min-w-0 flex-1 pt-0.5">
//     //     <div className="mb-1 flex items-center gap-2">
//     //       <h3 className="text-base font-medium text-zinc-900 dark:text-[#EEEEEE]">
//     //         Databases: Overview of Row vs Column Oriented
//     //       </h3>
//     //       <span className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-light text-indigo-600 shadow-sm transition-all duration-300 dark:bg-indigo-400/10 dark:text-indigo-300">
//     //         Database
//     //       </span>
//     //     </div>
//     //     <span className="block text-xs font-light text-zinc-400 italic dark:text-[#B4B4B4]">Nov 15, 2024</span>
//     //   </div>
//     //   <svg
//     //     width="15"
//     //     height="15"
//     //     viewBox="0 0 15 15"
//     //     fill="none"
//     //     xmlns="http://www.w3.org/2000/svg"
//     //     className="mt-4 h-4 w-4 text-zinc-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-zinc-400 dark:text-[#B4B4B4] dark:group-hover:text-[#EEEEEE]"
//     //   >
//     //     <path
//     //       d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
//     //       fill="currentColor"
//     //       fill-rule="evenodd"
//     //       clip-rule="evenodd"
//     //     ></path>
//     //   </svg>
//     // </a>

//     // TODO: Fix this
//     // <div className="relative mx-auto w-full rounded-2xl border border-dashed border-zinc-300 bg-[#141415] px-4 sm:px-6 md:px-8 dark:border-zinc-800">
//     //   <div className="absolute top-4 left-0 -z-0 h-px w-full bg-zinc-400 sm:top-6 md:top-8 dark:bg-zinc-800"></div>
//     //   <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 sm:bottom-6 md:bottom-8 dark:bg-zinc-800"></div>
//     //   <div className="relative w-full border-x border-zinc-400 dark:border-zinc-800">
//     //     <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
//     //       <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
//     //         <div className="-mx-[2.5px] my-4 size-1 rounded-full bg-green-400 outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-zinc-950"></div>
//     //         <div className="-mx-[2px] my-4 size-1 place-self-end rounded-full bg-green-400 outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-zinc-950"></div>
//     //         <div className="-mx-[2.5px] my-4 size-1 rounded-full bg-green-400 outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-zinc-950"></div>
//     //         <div className="-mx-[2px] my-4 size-1 place-self-end rounded-full bg-green-400 outline outline-8 outline-gray-50 sm:my-6 md:my-8 dark:outline-zinc-950"></div>
//     //       </section>
//     //     </div>
//     //     <div className="relative z-20 mx-auto py-8">
//     //       <div className="center w-full p-3">
//     //         <div className="p-4 text-left">
//     //           <h3 className="mb-3 font-medium text-gray-900 dark:text-[#EEEEEE]">Quote of the day</h3>
//     //           <p className="text-gray-700 italic dark:text-[#B4B4B4]">
//     //             To be insanely hopeful even after all that, you call it madness, I call it strength.
//     //           </p>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     // TODO: Fix this
//     // <div className="w-full rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-[#141415]">
//     //   <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
//     //     <div className="p-6">
//     //       <div className="mb-4 flex items-center justify-between">
//     //         <div className="flex items-center gap-3">
//     //           <Image
//     //             alt="TanayVaswani"
//     //             loading="lazy"
//     //             width="42"
//     //             height="42"
//     //             decoding="async"
//     //             data-nimg="1"
//     //             className="h-10 w-10 rounded-full ring-2 ring-white dark:ring-zinc-800"
//     //             src="/abhi-arya.web"
//     //           />
//     //           <div>
//     //             <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Tanay Vaswani</h3>
//     //             <p className="text-xs text-zinc-500 dark:text-[#B4B4B4]">@iTanayVaswani · 24th Sep</p>
//     //           </div>
//     //         </div>
//     //       </div>
//     //       <p className="mb-4 text-sm text-zinc-600 dark:text-[#B4B4B4]">
//     //         Subscribe by entering your email below to stay updated about the latest things I've created and discover the
//     //         great finds I've come across on the internet.
//     //       </p>
//     //       <form className="flex h-full w-full flex-col items-center gap-2 md:flex-row">
//     //         <div className="w-full space-y-2 md:w-5/12">
//     //           <input
//     //             className="w-full rounded-lg border border-zinc-500 bg-white px-3 py-2 text-sm text-zinc-900 transition-all duration-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-500/20 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950/20 dark:text-zinc-100 dark:placeholder:text-zinc-600"
//     //             placeholder="John Doe"
//     //             id=":r3:-form-item"
//     //             aria-describedby=":r3:-form-item-description"
//     //             aria-invalid="false"
//     //             value=""
//     //             name="name"
//     //           />
//     //         </div>
//     //         <div className="w-full space-y-2">
//     //           <input
//     //             className="w-full rounded-lg border border-zinc-500 bg-white px-3 py-2 text-sm text-zinc-900 transition-all duration-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-zinc-500/20 focus:outline-none dark:border-zinc-800 dark:bg-zinc-950/20 dark:text-zinc-100 dark:placeholder:text-zinc-600"
//     //             placeholder="your@email.com"
//     //             id=":r4:-form-item"
//     //             aria-describedby=":r4:-form-item-description"
//     //             aria-invalid="false"
//     //             value=""
//     //             name="email"
//     //           />
//     //         </div>

//     //         <button
//     //           className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 w-full items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium whitespace-nowrap shadow transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:w-3/12"
//     //           type="submit"
//     //         >
//     //           Join now!
//     //         </button>
//     //       </form>
//     //     </div>
//     //     <div className="flex flex-col items-center justify-between gap-3 border-t border-dashed p-6 md:flex-row">
//     //       <span className="w-full text-sm text-zinc-600 dark:text-[#B4B4B4]">
//     //         Alternatively, you can schedule a call with me to discuss anything you'd like. I'm always open to new ideas
//     //         and opportunities.
//     //       </span>
//     //       <button
//     //         className="focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 inline-flex h-9 w-full items-center justify-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium whitespace-nowrap text-emerald-600 shadow transition-colors hover:bg-emerald-100 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:w-[117px] dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 dark:hover:bg-emerald-900"
//     //         data-cal-namespace="about-me"
//     //         data-cal-link="tanayvaswani/about-me"
//     //         data-cal-config='{"layout":"month_view"}'
//     //       >
//     //         <svg
//     //           xmlns="http://www.w3.org/2000/svg"
//     //           width="24"
//     //           height="24"
//     //           viewBox="0 0 24 24"
//     //           fill="none"
//     //           stroke="currentColor"
//     //           stroke-width="2"
//     //           stroke-linecap="round"
//     //           stroke-linejoin="round"
//     //           className="lucide lucide-phone-call h-4 w-4"
//     //         >
//     //           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
//     //           <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
//     //           <path d="M14.05 6A5 5 0 0 1 18 10"></path>
//     //         </svg>
//     //         Cal.com
//     //       </button>
//     //     </div>
//     //   </div>
//     // </div>

//     // <></>

//     // TODO: Fix this
//     // <a
//     //   href="https://github.com/selemondev/spark-ui"
//     //   target="_blank"
//     //   className="group animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards relative flex w-full flex-col space-y-3 rounded-lg border-[1px] border-gray-300 p-4 shadow-xs delay-200 duration-500 dark:border-[#262626]"
//     //   // name="spark-ui"
//     // >
//     //   <div className="flex items-center justify-between">
//     //     <div className="flex items-center space-x-3">
//     //       <button
//     //         type="button"
//     //         name="spark-ui"
//     //         className="text-primary hover:text-primary/75 disabled:text-primary aria-disabled:text-primary focus-visible:ring-primary flex items-center justify-center gap-1.5 rounded-md bg-gray-200 p-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:bg-[#202020]"
//     //       >
//     //         <span className="iconify i-noto:magic-wand h-5 w-5" aria-hidden="true"></span>
//     //       </button>
//     //       <h3 className="font-medium capitalize decoration-dotted underline-offset-[5px] group-hover:underline">
//     //         spark ui
//     //       </h3>
//     //     </div>
//     //     <div className="flex items-center space-x-3">
//     //       <div className="flex items-center space-x-1">
//     //         <span className="iconify i-line-md:star-alt-filled h-4.5 w-4.5 text-yellow-500" aria-hidden="true"></span>
//     //         <p className="text-[15px] font-medium text-[#324158] dark:text-white">604</p>
//     //       </div>
//     //       <div className="flex items-center space-x-1">
//     //         <span className="iconify i-tabler:git-fork h-4.5 w-4.5" aria-hidden="true"></span>
//     //         <p className="text-[15px] font-medium text-[#324158] dark:text-white">14</p>
//     //       </div>
//     //       <span className="iconify i-mdi:github h-5 w-5" aria-hidden="true"></span>
//     //     </div>
//     //   </div>
//     //   <div>
//     //     <p className="text-sm dark:text-[#A3A3A3]">Experience The Magic Of Animated Vue Components.</p>
//     //   </div>
//     //   <div className="flex items-center space-x-4 overflow-auto">
//     //     <button
//     //       type="button"
//     //       name="Vue"
//     //       className="disabled:text-primary aria-disabled:text-primary focus-visible:ring-primary inline-flex cursor-default items-center gap-1.5 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-1 font-mono text-xs font-medium text-neutral-700 transition-colors hover:text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:border-[#262626] dark:bg-[#202020] dark:text-neutral-300 dark:hover:text-neutral-300"
//     //     >
//     //       <span className="iconify i-logos:vue h-4 w-4" aria-hidden="true"></span>
//     //       <p>Vue</p>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       name="TailwindCss"
//     //       className="disabled:text-primary aria-disabled:text-primary focus-visible:ring-primary inline-flex cursor-default items-center gap-1.5 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-1 font-mono text-xs font-medium text-neutral-700 transition-colors hover:text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:border-[#262626] dark:bg-[#202020] dark:text-neutral-300 dark:hover:text-neutral-300"
//     //     >
//     //       <span className="iconify i-devicon:tailwindcss h-4 w-4" aria-hidden="true"></span>
//     //       <p>TailwindCss</p>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       name="Vueuse"
//     //       className="disabled:text-primary aria-disabled:text-primary focus-visible:ring-primary inline-flex cursor-default items-center gap-1.5 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-1 font-mono text-xs font-medium text-neutral-700 transition-colors hover:text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:border-[#262626] dark:bg-[#202020] dark:text-neutral-300 dark:hover:text-neutral-300"
//     //     >
//     //       <span className="iconify i-logos:vueuse h-4 w-4" aria-hidden="true"></span>
//     //       <p>Vueuse</p>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       name="Motion"
//     //       className="disabled:text-primary aria-disabled:text-primary focus-visible:ring-primary inline-flex cursor-default items-center gap-1.5 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-1 font-mono text-xs font-medium text-neutral-700 transition-colors hover:text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:border-[#262626] dark:bg-[#202020] dark:text-neutral-300 dark:hover:text-neutral-300"
//     //     >
//     //       <span className="iconify i-tabler:brand-framer-motion h-4 w-4 text-[#6ABCED]" aria-hidden="true"></span>
//     //       <p>Motion</p>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       name="Vitepress"
//     //       className="disabled:text-primary aria-disabled:text-primary focus-visible:ring-primary inline-flex cursor-default items-center gap-1.5 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-1 font-mono text-xs font-medium text-neutral-700 transition-colors hover:text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:border-[#262626] dark:bg-[#202020] dark:text-neutral-300 dark:hover:text-neutral-300"
//     //     >
//     //       <span className="iconify i-simple-icons:vitepress h-4 w-4 text-[#9E59FD]" aria-hidden="true"></span>
//     //       <p>Vitepress</p>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       name="Pnpm"
//     //       className="disabled:text-primary aria-disabled:text-primary focus-visible:ring-primary inline-flex cursor-default items-center gap-1.5 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-1 font-mono text-xs font-medium text-neutral-700 transition-colors hover:text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:border-[#262626] dark:bg-[#202020] dark:text-neutral-300 dark:hover:text-neutral-300"
//     //     >
//     //       <span className="iconify i-vscode-icons:file-type-light-pnpm h-4 w-4" aria-hidden="true"></span>
//     //       <p>Pnpm</p>
//     //     </button>
//     //     <button
//     //       type="button"
//     //       name="TypeScript"
//     //       className="disabled:text-primary aria-disabled:text-primary focus-visible:ring-primary inline-flex cursor-default items-center gap-1.5 rounded-md border border-neutral-300 bg-neutral-200/50 px-2 py-1 font-mono text-xs font-medium text-neutral-700 transition-colors hover:text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 dark:border-[#262626] dark:bg-[#202020] dark:text-neutral-300 dark:hover:text-neutral-300"
//     //     >
//     //       <span className="iconify i-logos:typescript-icon h-4 w-4" aria-hidden="true"></span>
//     //       <p>TypeScript</p>
//     //     </button>
//     //   </div>
//     // </a>

//     // TODO: Fix this
//     // <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards flex items-center gap-2 delay-200 duration-500 sm:gap-4">
//     //   <a
//     //     href="https://github.com/selemondev/spark-ui"
//     //     rel="noopener noreferrer"
//     //     target="_blank"
//     //     // relative=""
//     //     className="size-10 shrink-0 overflow-hidden rounded-full border border-gray-200 shadow-sm sm:size-12 dark:border-gray-800"
//     //   >
//     //     <img src="https://github.com/selemondev.png" alt="selemondev/spark-ui" className="size-full" />
//     //   </a>
//     //   <div className="flex min-w-0 flex-1 justify-between gap-2 lg:gap-4">
//     //     <div className="flex min-w-0 flex-col gap-0.5 sm:gap-1">
//     //       <a
//     //         href="https://github.com/selemondev/spark-ui/pull/94"
//     //         rel="noopener noreferrer"
//     //         target="_blank"
//     //         className="flex items-center gap-0.5 text-sm text-gray-900 hover:underline sm:gap-1 sm:text-base dark:text-white"
//     //       >
//     //         <span
//     //           className="iconify i-lucide:git-merge size-4 shrink-0 text-purple-500 sm:size-5 dark:text-purple-400"
//     //           aria-hidden="true"
//     //         ></span>
//     //         <span className="truncate">feat: add post-hog plugin</span>
//     //       </a>
//     //       <div className="items-bottom flex gap-2">
//     //         <a
//     //           href="https://github.com/selemondev/spark-ui"
//     //           rel="noopener noreferrer"
//     //           target="_blank"
//     //           className="inline-flex gap-1 truncate text-sm hover:text-black sm:text-base dark:hover:text-white"
//     //         >
//     //           <span className="opacity-75">selemondev</span>
//     //           <span className="opacity-50">/</span>
//     //           <span className="truncate">spark-ui</span>
//     //         </a>
//     //         <a
//     //           href="https://github.com/selemondev/spark-ui"
//     //           rel="noopener noreferrer"
//     //           target="_blank"
//     //           className="hidden items-center gap-0.5 space-x-0.5 truncate text-center text-gray-500 hover:text-black sm:inline-flex dark:text-gray-400 dark:hover:text-white"
//     //         >
//     //           <span className="iconify i-lucide:star size-3 shrink-0" aria-hidden="true"></span>
//     //           <span className="text-xs">604</span>
//     //         </a>
//     //       </div>
//     //     </div>
//     //     <div className="flex shrink-0 flex-col justify-between text-right">
//     //       <a
//     //         href="https://github.com/selemondev/spark-ui/pull/94"
//     //         rel="noopener noreferrer"
//     //         target="_blank"
//     //         className="text-xs hover:underline sm:text-sm"
//     //       >
//     //         #94
//     //       </a>
//     //       <time datatime="2025-07-07T22:19:06Z" className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
//     //         last week
//     //       </time>
//     //     </div>
//     //   </div>
//     // </div>

//     // <div>
//     //   <h2 className="mb-4">Timeline</h2>
//     //   <div>
//     //     <ul className="flex flex-col gap-2">
//     //       <li className="my-2 flex flex-col justify-between sm:flex-row sm:items-center">
//     //         <div className="flex items-center">
//     //           <div className="text-surface-8">August 2024 – current</div>
//     //           <div className="border-surface-6 ml-4 flex-1 shrink-0 border-b-[0.5px] border-dashed sm:hidden"></div>
//     //         </div>
//     //         <div className="flex flex-1 items-center sm:ml-auto">
//     //           <div className="border-surface-6 mr-4 flex-1 shrink-0 border-b-[0.5px] border-dashed sm:ml-4"></div>
//     //           <div className="text-surface-10 ml-auto flex items-baseline gap-2">
//     //             Founded Uiuno
//     //             <svg
//     //               viewBox="0 0 292 45"
//     //               fill="none"
//     //               xmlns="http://www.w3.org/2000/svg"
//     //               className="text-surface-12 h-2.5 overflow-visible"
//     //             >
//     //               <g>
//     //                 <path
//     //                   d="M20.8084 17.9595L0.683594 30.6193C0.683594 30.6193 0.683594 23.3851 4.46181 20.8532L30.0612 3.8531C32.4515 2.22541 33.2225 4.75737 32.143 7.65103L26.0516 25.1937C24.8179 28.8108 25.2035 29.5342 26.8998 28.8108C33.2996 25.9171 46.0993 17.9597 64.9904 3.8531C67.8433 1.68285 68.4602 3.67224 67.0723 7.65103L59.5158 29.1725L70.6526 20.8688C70.6526 20.8688 80.7056 21.9719 76.9274 24.5039L50.2631 43.2791C47.8728 44.9068 47.1017 42.3748 48.1812 39.3003L55.7376 18.1404C42.7066 28.8108 27.2853 38.396 18.1097 42.5557C13.0206 44.9068 12.0954 42.7365 14.4857 35.8641L20.8084 17.9595Z"
//     //                   fill="currentColor"
//     //                 ></path>
//     //                 <path
//     //                   d="M112.786 14.2253C112.786 14.2253 111.833 21.6137 108.055 24.1456L81.2989 42.231C78.8315 44.0396 77.8291 42.5928 79.217 38.614L86.7735 17.0923L76.3897 24.9086L66.7258 29.7521C66.7258 29.7521 66.8743 23.2864 70.6526 20.8688L96.0263 2.98574C98.4166 1.35805 99.1876 3.89001 98.1081 6.96453L90.5517 28.4861L112.786 14.2253ZM116.999 -39.3341L113.915 -33.5468L101.347 -35.717C96.8744 -36.2596 101.347 -41.1426 101.347 -41.1426L116.999 -45.8448C118.696 -46.2065 118.696 -42.7703 116.999 -39.3341Z"
//     //                   fill="currentColor"
//     //                 ></path>
//     //                 <path
//     //                   d="M118.399 17.9595L98.2745 30.6193C98.2745 30.6193 97.6133 24.7855 103.429 20.9083L127.652 3.8531C130.042 2.22541 130.813 4.75737 129.734 7.65103L123.643 25.1937C122.409 28.8108 122.794 29.5342 124.491 28.8108C130.891 25.9171 143.69 17.9597 162.581 3.8531C165.434 1.68285 166.051 3.67224 164.663 7.65103L157.107 29.1725L178.311 15.4277C178.311 15.4277 178.311 22.6617 174.533 25.1937L147.854 43.2791C145.464 44.9068 144.693 42.3748 145.772 39.3003L153.329 18.1404C140.298 28.8108 124.876 38.396 115.701 42.5557C110.612 44.9068 109.686 42.7365 112.077 35.8641L118.399 17.9595Z"
//     //                   fill="currentColor"
//     //                 ></path>
//     //                 <path
//     //                   d="M244.689 15.4277C244.689 15.4277 244.689 22.6617 240.911 25.1937L214.155 43.2791C211.764 44.9068 210.993 42.3748 212.073 39.4811L218.164 21.9383C219.398 18.3212 219.012 17.417 217.316 18.3212C208.68 22.6617 198.117 29.1725 179.225 43.2791C176.373 45.4493 175.756 43.4599 177.144 39.4811L184.7 17.9595L164.652 30.6193C164.652 30.6193 164.652 23.3851 168.431 20.8532L193.953 3.8531C196.343 2.22541 197.114 4.75736 196.035 7.83188L188.478 28.9916C201.509 18.3212 216.931 8.73615 226.106 4.57651C231.195 2.22541 232.121 4.39565 229.73 11.2681L223.408 29.1725L244.689 15.4277Z"
//     //                   fill="currentColor"
//     //                 ></path>
//     //                 <path
//     //                   d="M291.473 11.0873C291.473 23.5662 274.278 43.2791 255.31 44.0025C250.066 44.1834 244.9 42.7365 244.361 36.4066C243.744 29.3533 250.298 19.5874 253.459 15.9703L231.407 30.6193C231.407 25.7362 233.566 21.9383 235.262 20.8532C242.51 15.7893 250.683 10.7255 261.632 5.84249C285.15 -4.46619 291.473 2.58711 291.473 11.0873ZM282.683 13.8001C282.683 10.5447 280.138 9.27871 277.439 9.27871C267.493 9.27871 254.384 23.566 255.31 31.7044C255.618 34.2364 257.392 34.9598 260.245 34.9598C268.109 34.9598 282.683 24.2896 282.683 13.8001Z"
//     //                   fill="currentColor"
//     //                 ></path>
//     //               </g>
//     //             </svg>
//     //           </div>
//     //         </div>
//     //       </li>
//     //       <li className="my-2 flex flex-col justify-between sm:flex-row sm:items-center">
//     //         <div className="flex items-center">
//     //           <div className="text-surface-8">August 2024 – current</div>
//     //           <div className="border-surface-6 ml-4 flex-1 shrink-0 border-b-[0.5px] border-dashed sm:hidden"></div>
//     //         </div>
//     //         <div className="flex flex-1 items-center sm:ml-auto">
//     //           <div className="border-surface-6 mr-4 flex-1 shrink-0 border-b-[0.5px] border-dashed sm:ml-4"></div>
//     //           <div className="text-surface-10 ml-auto flex items-baseline gap-2">
//     //             Building ui/pub
//     //             <svg
//     //               viewBox="0 0 1061 655"
//     //               fill="none"
//     //               xmlns="http://www.w3.org/2000/svg"
//     //               className="h-3.5 overflow-visible"
//     //             >
//     //               <rect width="608.214" height="655" fill="#BCF800"></rect>
//     //               <rect x="701.787" y="296.308" width="358.69" height="358.69" fill="#BCF800"></rect>
//     //               <rect x="701.787" width="358.69" height="202.738" fill="#BCF800"></rect>
//     //             </svg>
//     //           </div>
//     //         </div>
//     //       </li>
//     //       <li className="my-2 flex flex-col justify-between sm:flex-row sm:items-center">
//     //         <div className="flex items-center">
//     //           <div className="text-surface-8">Febrary 2020 – November 2023</div>
//     //           <div className="border-surface-6 ml-4 flex-1 shrink-0 border-b-[0.5px] border-dashed sm:hidden"></div>
//     //         </div>
//     //         <div className="flex flex-1 items-center sm:ml-auto">
//     //           <div className="border-surface-6 mr-4 flex-1 shrink-0 border-b-[0.5px] border-dashed sm:ml-4"></div>
//     //           <div className="text-surface-10 ml-auto flex items-baseline gap-2">
//     //             Front-end at Nuxt Labs
//     //             <svg viewBox="0 0 100 67" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4">
//     //               <path
//     //                 d="M56 67H93C94.1807 67 95.3107 66.5833 96.3333 65.995C97.356 65.4067 98.41 64.6687 99 63.65C99.59 62.6313 100.001 61.4758 100 60.2997C99.9993 59.1235 99.591 57.9684 99 56.9503L74 13.735C73.41 12.7166 72.689 11.978 71.6667 11.39C70.6443 10.802 69.1807 10.385 68 10.385C66.8193 10.385 65.689 10.802 64.6667 11.39C63.6443 11.978 62.9233 12.7166 62.3333 13.735L56 24.79L43.3333 3.34921C42.7427 2.33088 42.0227 1.25789 41 0.67C39.9773 0.0821042 38.8473 0 37.6667 0C36.486 0 35.356 0.0821042 34.3333 0.67C33.3108 1.25789 32.2572 2.33088 31.6667 3.34921L0.666669 56.9503C0.0756616 57.9684 0.000516273 59.1235 2.53602e-06 60.2997C-0.000511201 61.4758 0.0765512 62.6313 0.666669 63.65C1.25679 64.6684 2.31082 65.4067 3.33334 65.995C4.35584 66.5833 5.48594 67 6.66667 67H30C39.2457 67 45.975 62.8319 50.6667 54.94L62 35.175L68 24.79L86.3333 56.28H62L56 67ZM29.6667 56.28H13.3333L37.6667 14.07L50 35.175L41.8303 49.4879C38.7147 54.6084 35.1627 56.28 29.6667 56.28Z"
//     //                 fill="#00DC82"
//     //               ></path>
//     //             </svg>
//     //           </div>
//     //         </div>
//     //       </li>
//     //       <li className="my-2 flex flex-col justify-between sm:flex-row sm:items-center">
//     //         <div className="flex items-center">
//     //           <div className="text-surface-8">January 2016 – Febrary 2020</div>
//     //           <div className="border-surface-6 ml-4 flex-1 shrink-0 border-b-[0.5px] border-dashed sm:hidden"></div>
//     //         </div>
//     //         <div className="flex flex-1 items-center sm:ml-auto">
//     //           <div className="border-surface-6 mr-4 flex-1 shrink-0 border-b-[0.5px] border-dashed sm:ml-4"></div>
//     //           <div className="text-surface-10 ml-auto flex items-baseline gap-2">Agency and freelance front-end</div>
//     //         </div>
//     //       </li>
//     //       <li className="my-2 flex flex-col justify-between sm:flex-row sm:items-center">
//     //         <div className="flex items-center">
//     //           <div className="text-surface-8">2012 – 2016</div>
//     //           <div className="border-surface-6 ml-4 flex-1 shrink-0 border-b-[0.5px] border-dashed sm:hidden"></div>
//     //         </div>
//     //         <div className="flex flex-1 items-center sm:ml-auto">
//     //           <div className="border-surface-6 mr-4 flex-1 shrink-0 border-b-[0.5px] border-dashed sm:ml-4"></div>
//     //           <div className="text-surface-10 ml-auto flex items-baseline gap-2">Affiliate marketing, SEO</div>
//     //         </div>
//     //       </li>
//     //     </ul>
//     //   </div>
//     // </div>
//   );
// }
