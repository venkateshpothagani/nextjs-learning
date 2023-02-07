// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";

import users, { User } from "@/data";
import methods from "@/constants/request-methods";

export default function handler(req: NextApiRequest, res: NextApiResponse<[User]>) {
    if (req.method === methods.GET) {
        return res.status(200).json(users);
    }

    if (req.method === methods.POST) {
        console.log(req.body);
        users.push(req.body);
        return res.status(201).json(users);
    }
}
