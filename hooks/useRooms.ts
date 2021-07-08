import { useEffect, useState } from "react";
import { Room } from "../types/Room";

export const useRooms = () => {
  const [response, setResponse] = useState<null | { rooms: Room[] }>(null);

  useEffect(() => {
    fetch("/api/rooms", {})
      .then((r) => r.json())
      .then((r) => {
        setResponse(r);
      });
  }, []);

  return response;
};
