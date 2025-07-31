"use client";

import { fadeDownChildVariants } from "@/lib/animation-variants";
import TagsV1 from "@/components/shared/tags/tags-v1";
import { Eye, EyeClosed, Link2 } from "lucide-react";
import { Icons } from "@/components/shared/icons";
import { type Project } from "@/data/projects";
import { Card } from "@/components/ui/card";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCardV1({
  name,
  icon,
  description,
  github,
  url,
  image,
  tags,
  className,
}: Project & { className?: string }) {
  const Icon = Icons[icon!];
  const GithubIcon = Icons.github;

  const [preview, setPreview] = useState(false);

  return (
    <motion.div variants={fadeDownChildVariants}>
      <Card className={cn("group border-none p-4 sm:rounded-lg dark:bg-neutral-900", className)}>
        <div className="flex flex-col gap-2">
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
            <div className="flex flex-grow flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="flex items-center gap-1 text-left text-sm font-semibold">
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener"
                    className="hover:text-blue-400"
                    onClick={() => track(`project_${name}_clicked`)}
                  >
                    {name}
                  </Link>
                </h3>
                <p className="text-muted-frontend flex items-center gap-2">
                  {image && (
                    <span onClick={() => setPreview(!preview)} className="cursor-pointer">
                      {preview ? (
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
              {description.length > 0 && <p className="text-muted-foreground text-sm">{description[0]}</p>}
            </div>
          </div>
          {tags && (
            <div className="mt-2">
              <TagsV1 tags={tags} />
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
