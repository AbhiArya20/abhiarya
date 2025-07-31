"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { fadeDownChildVariants } from "@/lib/animation-variants";
import TagsV1 from "@/components/shared/tags/tags-v1";
import { Icons } from "@/components/shared/icons";
import { type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { track } from "@vercel/analytics";
import { motion } from "framer-motion";
import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCardV4({ name, icon, description, github, url, image, tags }: Project) {
  const Icon = Icons[icon!];
  const GithubIcon = Icons.github;
  return (
    <motion.div variants={fadeDownChildVariants} className="flex">
      <Card className="group flex-grow border-none pt-0 sm:rounded-lg dark:bg-neutral-900">
        {image && (
          <Image
            src={image}
            width={64}
            height={64}
            alt={name}
            className="aspect-video w-full shrink-0 rounded-md transition-all group-hover:saturate-100 sm:saturate-0"
          />
        )}
        <CardContent className="flex flex-col gap-2 px-4">
          <div className="flex w-full gap-2">
            {icon && <Icon className="mr-2 h-10 w-10 shrink-0 transition-all group-hover:saturate-100 sm:saturate-0" />}
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
          {tags && <TagsV1 tags={tags} />}
        </CardContent>
        <CardFooter className="px-4">
          <div className="flex flex-row flex-wrap items-start gap-1">
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener"
                onClick={() => track(`project_${name}_github_clicked`)}
              >
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  <GithubIcon />
                  Github
                </Badge>
              </Link>
            )}
            {url && (
              <Link href={url} target="_blank" rel="noopener" onClick={() => track(`project_${name}_clicked`)}>
                <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                  <Link2 />
                  Website
                </Badge>
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
