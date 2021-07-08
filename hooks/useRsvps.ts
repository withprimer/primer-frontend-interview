import { useEffect, useState } from "react";
import { Rsvp } from "../types/Rsvp";

export const useRsvps = () => {
  const [response, setResponse] = useState<null | { rsvps: Rsvp[] }>(null);

  useEffect(() => {
    fetch("/api/rsvps", {})
      .then((r) => r.json())
      .then((r) => {
        setResponse(r);
      });
  }, []);

  return response;
};
