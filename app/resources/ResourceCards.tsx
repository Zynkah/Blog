"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ResourceData } from "@/data/ResourceData";
import Link from "next/link";


export default function ResourceCards() {
  return (
    <div className="items-center justify-center grid lg:grid-cols-2 gap-6 m-10">
      {ResourceData.map((resource, index) => (
        <ResizablePanelGroup
          key={index}
          direction="vertical"
          className="min-h-[500px] min-w-[400px] rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">{resource.header}</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full p-6">
              <ul>
                <p className="font-semibold mb-2">{resource.content}</p>
                <p className="mb-2">
                  Enjoy these links to get you started on your learning:
                </p>
                <li>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Link
                        href={resource.docs}
                        target="blank"
                        className="hover:underline decoration-sky-500"
                      >
                        ♡ Documentation
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <Avatar>
                          <AvatarImage src={resource.image} />
                          <AvatarFallback>N/A</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">
                            {resource.header}
                          </h4>
                          <p className="text-sm">
                            Click here to be taken to the official documentation.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
                <li>
                  <Link
                    href={resource.tutorial}
                    target="blank"
                    className="hover:underline decoration-sky-500"
                  >
                    ♡ Tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    href={resource.course}
                    target="blank"
                    className="hover:underline decoration-sky-500"
                  >
                    ♡ Course
                  </Link>
                </li>
              </ul>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      ))}
    </div>
  );
}
