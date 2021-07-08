// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Rsvp } from "../../types/Rsvp";

type Response = {
  rsvps: Rsvp[];
};

const response: Response = {
  rsvps: [
    { id: "", roomId: "0" },
    { id: "", roomId: "3" },
    { id: "", roomId: "7" },
    { id: "", roomId: "8" },
    { id: "", roomId: "1000" },
  ],
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const adjResponse = {
    ...response,
    rsvps: response.rsvps.map((r, ind) => ({
      ...r,
      id: `${ind}`,
    })),
  };
  res.status(200).json(adjResponse);
}
