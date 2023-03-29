import { NextApiRequest, NextApiResponse } from "next";

import data from "../data.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case "GET":
      {
        const item = data.filter(({ id }) => id === req.query.id);

        res.status(200).json(item.length > 0 ? item[0] : []);
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
