"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
// import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import { DATA } from "@/lib/data";
import { cn } from "@/lib/utils";
// import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
	return (
		<motion.section
			className="flex items-center justify-between"
			initial={{
				opacity: 0,
				y: -20,
				willChange: "opacity, transform",
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				duration: 0.5,
			}}
		>
			<div className="flex-1 space-y-1.5">
				<h1 className="text-2xl font-bold">
					{DATA.name}{" "}
					<span className="text-[10px] text-neutral-400 dark:text-neutral-700">{"( " + DATA.nickname + " )"}</span>
				</h1>
				<p className="text-muted-foreground max-w-md font-mono text-sm text-pretty print:text-[12px]">
					{DATA.description}
				</p>
				<p className="text-muted-foreground max-w-md items-center font-mono text-xs text-pretty">
					<Link
						className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
						target="_blank"
						href={DATA.address.url}
						rel="noopener"
					>
						<MapPin className="size-3" />
						{DATA.address.state}
					</Link>
				</p>

				<div className="text-muted-foreground flex gap-x-1 pt-1 font-mono text-sm print:hidden">
					{DATA.socials.map(social => {
						const Icon = Icons[social.icon];
						return (
							<Tooltip key={social.name}>
								<TooltipTrigger asChild>
									<Link
										//TODO: Fix the className to use buttonVariants
										// className={cn(
										// 	buttonVariants({
										// 		variant: "outline",
										// 		size: "icon",
										// 	})
										// 	"text-muted-foreground hover:text-foreground size-8 bg-transparent p-0 transition-colors duration-200 md:size-10"
										// )}
										className={cn(
											"focus-visible:ring-ring [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 rounded-md border text-sm font-medium whitespace-nowrap shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
											social.icon === "resume" ? "px-2" : "size-8"
										)}
										href={social.url}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.name}
									>
										<Icon className={social.icon === "github" ? "size-5" : "size-4"} />
										{social.withText && <span className="hidden md:inline">{social.name}</span>}
									</Link>
								</TooltipTrigger>
								{/* TODO: Fixed color of tooltip container - background instead of primary */}
								<TooltipContent side="bottom" className="text-xs">
									{social.name}
								</TooltipContent>
							</Tooltip>
						);
					})}
				</div>
			</div>
			<span className="relative flex size-36 shrink-0 overflow-hidden rounded-full">
				<Image
					width={144}
					height={144}
					className="aspect-square h-full w-full"
					alt={DATA.name}
					src={DATA.githubAvatar || DATA.avatar}
				/>
			</span>
		</motion.section>
	);
}
