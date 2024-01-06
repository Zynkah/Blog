"use client";

import { Fragment, useEffect, useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import AlertMessage from "@/components/Alerts";

interface Entries {
  username: string;
  message: string;
}

export default function GuestbookEntries() {
  const [entries, setEntries] = useState<Entries[]>([]);
  const [alert, setAlert] = useState({ type: "", message: "" });

  useEffect(() => {
    async function fetchSurveyData() {
      try {
        const response = await fetch("/api/get-guestbook");
        if (response.ok) {
          try {
            const data = await response.json();
            setEntries(data.guestbookEntries);
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
    <ScrollArea className="m-auto border rounded h-[400px] md:w-[700px] mt-5">
      {entries.map((entry, index) => (
        <Fragment key={index}>
          <div className="p-3">
            <p className="text-lg">{entry.username}</p>
            <p>{entry.message}</p>
          </div>
          <Separator key={`separator-${index}`} className="my-2" />
        </Fragment>
      ))}
      {alert.type && (
        <AlertMessage key="alert" type={alert.type} message={alert.message} />
      )}
      <ScrollBar key="scrollBar" orientation="horizontal" />
    </ScrollArea>
  );
}
