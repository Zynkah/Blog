"use client";

import { useEffect, useState } from "react";

interface Entries {
  username: string;
  message: string;
}

export default function GuestbookEntries() {
  const [entries, setEntries] = useState<Entries[]>([]);

  useEffect(() => {
    async function fetchSurveyData() {
      try {
        const response = await fetch("/api/get-guestbook");
        if (response.ok) {
          try {
            const data = await response.json();
            setEntries(data.guestbookEntries);
          } catch (error) {
            console.error("Error parsing JSON:", error);
          }
        } else {
          console.error("Failed to fetch guestbook data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching guestbook data:", error);
      }
    }

    fetchSurveyData();
  }, []);

  return (
    <div className="m-auto border rounded w-[700px] mt-5">
      {entries.map((entry, index) => (
        <div key={index} className="p-3 border">
          <p className="text-lg">{entry.username}</p>
          <p>{entry.message}</p>
        </div>
      ))}
    </div>
  );
}
