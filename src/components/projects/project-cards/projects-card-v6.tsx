// "use client";

// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
// import { fadeDownChildVariants } from "@/lib/animation-variants";
// // import TagsV1 from "@/components/tags/tags-v1";
// import { type Project } from "@/data/projects";
// import { Badge, } from "lucide-react";
// // import { Icons } from "@/components/icons";
// // import { track } from "@vercel/analytics";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";

// export default function ProjectCardV4({ name, icon, description, github, url, image, tags }: Project) {
//   // const Icon = Icons[icon!];
//   // const GithubIcon = Icons.github;
//   return (
//     <motion.div variants={fadeDownChildVariants}>
//       {/* <Card className="group border-none p-4 sm:rounded-lg dark:bg-neutral-900">
//         <div className="flex flex-col gap-2">
//           <div className="flex w-full gap-2">
//             {icon && <Icon className="mr-2 h-10 w-10 shrink-0 transition-all group-hover:saturate-100 sm:saturate-0" />}
//             {image && (
//               <Image
//                 src={image}
//                 width={64}
//                 height={64}
//                 alt={name}
//                 className="mr-2 h-10 w-10 shrink-0 rounded-md transition-all group-hover:saturate-100 sm:saturate-0"
//               />
//             )}
//             <div className="flex flex-grow flex-col justify-between">
//               <div className="flex items-center justify-between">
//                 <h1 className="flex items-center gap-1 text-left text-sm font-semibold">
//                   <Link
//                     href={url}
//                     target="_blank"
//                     rel="noopener"
//                     className="hover:text-blue-400"
//                     onClick={() => track(`project_${name}_clicked`)}
//                   >
//                     {name}
//                   </Link>
//                 </h1>
//                 <p className="text-muted-frontend flex items-center gap-2">
//                   {github && (
//                     <Link
//                       href={github}
//                       target="_blank"
//                       rel="noopener"
//                       onClick={() => track(`project_${name}_github_clicked`)}
//                     >
//                       <GithubIcon className="text-muted-foreground size-5 hover:text-blue-400" />
//                       <span className="sr-only">Visit Repository</span>
//                     </Link>
//                   )}
//                   {url && (
//                     <Link href={url} target="_blank" rel="noopener" onClick={() => track(`project_${name}_clicked`)}>
//                       <Link2 className="text-muted-foreground size-5 hover:text-blue-400" />
//                       <span className="sr-only">Visit Website</span>
//                     </Link>
//                   )}
//                 </p>
//               </div>
//               {description.length > 0 && <p className="text-muted-foreground text-sm">{description[0]}</p>}
//             </div>
//           </div>
//           {tags && <TagsV1 tags={tags} />}
//         </div>
//       </Card> */}

//       <Card
//         className={"flex h-full flex-col overflow-hidden border transition-all duration-300 ease-out hover:shadow-lg"}
//       >
//         <Link href={url || "#"} className={cn("block cursor-pointer", className)}>
//           {/* {video && (
//             <video
//               src={video}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
//             />
//           )} */}
//           {image && (
//             <Image
//               src={image}
//               alt={name}
//               width={500}
//               height={300}
//               className="h-40 w-full overflow-hidden object-cover object-top"
//             />
//           )}
//         </Link>
//         <CardHeader className="px-2">
//           <div className="space-y-1">
//             <CardTitle className="mt-1 text-base">{name}</CardTitle>
//             <time className="font-sans text-xs">{dates}</time>
//             <div className="hidden font-sans text-xs underline print:visible">
//               {link?.replace("https://", "").replace("www.", "").replace("/", "")}
//             </div>
//             <Markdown className="prose text-muted-foreground dark:prose-invert max-w-full font-sans text-xs text-pretty">
//               {description}
//             </Markdown>
//           </div>
//         </CardHeader>
//         <CardContent className="mt-auto flex flex-col px-2">
//           {tags && tags.length > 0 && (
//             <div className="mt-2 flex flex-wrap gap-1">
//               {tags?.map(tag => (
//                 <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tag}>
//                   {tag}
//                 </Badge>
//               ))}
//             </div>
//           )}
//         </CardContent>
//         <CardFooter className="px-2 pb-2">
//           {links && links.length > 0 && (
//             <div className="flex flex-row flex-wrap items-start gap-1">
//               {links?.map((link, idx) => (
//                 <Link href={link?.href} key={idx} target="_blank">
//                   <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
//                     {link.icon}
//                     {link.type}
//                   </Badge>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </CardFooter>
//       </Card>
//     </motion.div>
//   );
// }
