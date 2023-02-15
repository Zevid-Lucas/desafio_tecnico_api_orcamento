import { Request, Response } from "express";
import getUserService from "../services/user.service";

const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await getUserService();
    res.status(200).json(users);
  } catch (error) {
    const { message } = error as Error;
    res.status(404).json({ message: message });
  }
};

export default getUsers;
