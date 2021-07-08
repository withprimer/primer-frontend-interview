import React from "react";
import { RoomCard } from "../components/RoomCard";
import _ from "lodash";
import { useRooms } from "../hooks/useRooms";
import { useRsvps } from "../hooks/useRsvps";

export default function Home() {
  const roomsResponse = useRooms();
  const rsvpResponse = useRsvps();

  if (roomsResponse === null || rsvpResponse === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
			Hello world!
		</div>
  );
}
