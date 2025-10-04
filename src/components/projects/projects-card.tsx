"use client";

import { Icons } from "@/components/icons";
import Tags from "@/components/tags/tags";
import { Card } from "@/components/ui/card";
import { type Project } from "@/data/projects";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";
import { track } from "@vercel/analytics";
import { Eye, EyeClosed, Link2 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectCard({
  name,
  icon,
  description,
  github,
  url,
  image,
  preview,
  tags,
  className,
}: Project & { className?: string }) {
  const Icon = Icons[icon!];
  const GithubIcon = Icons.github;

  const [openPreview, setOpenPreview] = useState(false);

  return (
    <motion.div variants={fadeDownChildVariants}>
      <Card className={cn("group border-none p-4 sm:rounded-lg dark:bg-neutral-900", className)}>
        <div className="flex flex-col gap-2">
          {preview && (
            <AnimatePresence>
              {openPreview && (
                <motion.div
                  initial={{ opacity: 0, height: 0, transformOrigin: "bottom" }}
                  animate={{
                    opacity: 1,
                    height: openPreview ? "auto" : 0,
                    marginBottom: openPreview ? "1rem" : 0,
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    marginBottom: 0,
                  }}
                  transition={{ duration: 1 }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src={preview}
                    width={64}
                    height={64}
                    alt={name}
                    className="aspect-video w-full shrink-0 rounded-xl transition-all group-hover:saturate-100 sm:saturate-0"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
          <div className="flex w-full gap-2">
            {icon && <Icon className="mr-2 h-10 w-10 shrink-0 transition-all group-hover:saturate-100 sm:saturate-0" />}
            {image && (
              <Image
                src={image}
                width={64}
                height={64}
                alt={name}
                className="mr-2 h-10 w-10 shrink-0 rounded-md transition-all group-hover:saturate-100 sm:saturate-0"
              />
            )}
            <div className="flex flex-grow flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between gap-2">
                <h3 className="flex items-center gap-1 overflow-hidden text-left text-sm font-semibold">
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener"
                    className="truncate hover:text-blue-400"
                    onClick={() => track(`project_${name}_clicked`)}
                  >
                    {name}
                  </Link>
                </h3>
                <p className="text-muted-frontend flex items-center gap-2">
                  {preview && (
                    <span onClick={() => setOpenPreview(!openPreview)} className="cursor-pointer">
                      {openPreview ? (
                        <EyeClosed className="text-muted-foreground size-5 hover:text-blue-400" />
                      ) : (
                        <Eye className="text-muted-foreground size-5 hover:text-blue-400" />
                      )}
                      <span className="sr-only">Preview</span>
                    </span>
                  )}
                  {github && (
                    <Link
                      href={github}
                      target="_blank"
                      rel="noopener"
                      onClick={() => track(`project_${name}_github_clicked`)}
                    >
                      <GithubIcon className="text-muted-foreground size-5 hover:text-blue-400" />
                      <span className="sr-only">Visit Repository</span>
                    </Link>
                  )}
                  {url && (
                    <Link href={url} target="_blank" rel="noopener" onClick={() => track(`project_${name}_clicked`)}>
                      <Link2 className="text-muted-foreground size-5 hover:text-blue-400" />
                      <span className="sr-only">Visit Website</span>
                    </Link>
                  )}
                </p>
              </div>
              {description.length > 0 && <p className="text-muted-foreground line-clamp-2 text-sm">{description[0]}</p>}
            </div>
          </div>
          {tags && (
            <div className="mt-2">
              <Tags tags={tags} />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
