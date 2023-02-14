import { Request, Response } from "express";
import getUserService from "../services/user.service";

const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await getUserService();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default getUsers;
