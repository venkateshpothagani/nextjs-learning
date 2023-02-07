// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

import users, { User } from "@/data";
import methods from "@/constants/request-methods";

export default function handler(req: NextApiRequest, res: NextApiResponse<User | undefined>) {
    const id: any = req.query.id;

    if (req.method === methods.GET) {
        return res.status(200).json(users.find((user) => user.id === parseInt(id)));
    }

    if (req.method === methods.DELETE) {
        return res.status(200).json(users.find((user) => user.id === parseInt(id)));
    }
}
