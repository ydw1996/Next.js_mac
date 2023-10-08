import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    // Handle your API logic here
    res.status(200).json({ name: 'John Doe2' });
}