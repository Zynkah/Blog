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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ResourceData } from "@/data/ResourceData";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ResourceCards() {
  return (
    <div className="items-center justify-center grid lg:grid-cols-2 gap-6 m-10">
      {ResourceData.map((resource, index) => (
        <ResizablePanelGroup
          key={index}
          direction="vertical"
          className="min-h-[600px] sm:min-w-[400px] rounded-lg border"
        >
          <ResizablePanel defaultSize={25}>
            <h1 className="font-semibold flex h-full items-center justify-center p-6">
              {resource.header}
            </h1>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={25}>
            <ScrollArea className="h-[200px]">
              <p className="text-center p-6">{resource.content}</p>
            </ScrollArea>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <ul className="h-full p-6">
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
                  <HoverCardContent className="w-80 ml-10">
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
              <li className="mt-3">
                <Link
                  href={resource.tutorial}
                  target="blank"
                  className="hover:underline decoration-sky-500"
                >
                  ♡ Tutorial
                </Link>
              </li>
              <li>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="hover:underline decoration-sky-500">
                      ♡ Free Courses
                    </AccordionTrigger>

                    <AccordionContent>
                      <ul>
                        <li className="mb-2 hover:underline decoration-sky-500">
                          <Link href={resource?.course_1} target="_blank">
                            ✩ {resource.course_1_name}
                          </Link>
                        </li>
                        <li className="mb-2 hover:underline decoration-sky-500">
                          <Link href={resource?.course_2} target="_blank">
                            ✩ {resource.course_2_name}
                          </Link>
                        </li>
                        <li className="mb-2 hover:underline decoration-sky-500">
                          <Link href={resource?.course_3} target="_blank">
                            ✩ {resource.course_3_name}
                          </Link>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            </ul>
          </ResizablePanel>
        </ResizablePanelGroup>
      ))}
    </div>
  );
}
