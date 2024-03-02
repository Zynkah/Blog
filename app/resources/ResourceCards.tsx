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
import AlertMessage from "@/components/alert";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Entries {
  id: string;
  header: string;
  content: string;
  docs: string;
  tutorial: string;
  course_1: string;
  course_1_name: string;
  course_2: string;
  course_2_name: string;
  course_3: string;
  course_3_name: string;
  image: string;
}

export default function ResourceCards() {
  const [entries, setEntries] = useState<Entries[]>([]);
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    async function fetchSurveyData() {
      try {
        const response = await fetch("/api/get-resources");
        if (response.ok) {
          try {
            const data = await response.json();
            setEntries(data.resourceEntries);
          } catch (error) {
            setAlert({
              type: "failure",
              message: "Something went wrong, please try again.",
            });
          }
        } else {
          setAlert({
            type: "failure",
            message: "Something went wrong, please try again.",
          });
        }
      } catch (error) {
        setAlert({
          type: "failure",
          message: "Something went wrong, please try again.",
        });
      }
    }

    fetchSurveyData();
  }, []);

  return (
    <div className="items-center justify-center grid lg:grid-cols-2 gap-6 m-10">
      {entries.map((resource, index) => (
        <ResizablePanelGroup
          key={index}
          direction="horizontal"
          className="max-w-2xl min-h-[500px] rounded-lg border"
        >
          <ResizablePanel defaultSize={10}>
            <div className="flex h-full items-center justify-center">
              <span className="font-thin -rotate-90 text-4xl">
                {resource.header}
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={50}>
                <p className="p-6">{resource.content}</p>
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
                              Click here to be taken to the official
                              documentation.
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
          </ResizablePanel>
        </ResizablePanelGroup>
      ))}
      {alert.type && (
        <AlertMessage key="alert" type={alert.type} message={alert.message} />
      )}
    </div>
  );
}
