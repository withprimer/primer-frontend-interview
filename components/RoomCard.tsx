import React from "react";
import { Room } from "../types/Room";

type Props = {
  room: Room;
  canRsvp?: boolean;
};

export const RoomCard: React.FC<Props> = (props) => {
  const { room, canRsvp } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "280px",
        borderRadius: "10px",
        border: "1px solid #ddd",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <img
        src={room.coverImageUrl}
        style={{ width: "100%", height: "157px" }}
      />
      <div style={{ margin: "16px", flex: 1 }}>
        <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
          {room.name}
        </div>
        <div style={{ fontStyle: "italic", marginBottom: "4px" }}>
          {room.subtitle}
        </div>
        <div style={{ marginBottom: "4px" }}>
          {new Date(Date.parse(room.startsAt)).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
        </div>
        <div
          style={{
            fontStyle: "italic",
            color: "#aaa",
            overflowY: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {room.description}
        </div>
      </div>
      {canRsvp && (
        <div style={{ margin: "16px", marginTop: "8px" }}>
          <a
            style={{
							cursor: 'pointer',
							width: '100%',
              display: "inline-block",
              padding: "0.5em 3em",
              border: "0.16em solid #776EE7",
              margin: "0 0.3em 0.3em 0",
              boxSizing: "border-box",
              textDecoration: "none",
              textTransform: "uppercase",
              fontFamily: "'Roboto',sans-serif",
              fontWeight: 400,
              color: "#776EE7",
              textAlign: "center",
              transition: "all 0.15s",
            }}
          >
            RSVP Now
          </a>
        </div>
      )}
    </div>
  );
};
