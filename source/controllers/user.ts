/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";
let users = require("../Users");

interface User {
  name: String;
  email: String;
  dob: String;
}

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  let id: string = req.params.id;

  const getData: User = users.some((user: any) => user.id === parseInt(id));
  if (getData) {
    let findData = users.filter((user: any) => user.id === parseInt(id));
    return res.status(200).json({
      message: findData,
    });
  } else {
    return res.sendStatus(400);
  }
};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  let id: string = req.params.id;

  const getData: User = users.some((user: any) => user.id === parseInt(id));

  if (getData) {
    users = users.filter((user: any) => user.id !== parseInt(id));
    return res.status(200).json({
      message: "User deleted successfully",
      data: users,
    });
  } else {
    return res.sendStatus(400);
  }
};

const addUser = async (req: Request, res: Response, next: NextFunction) => {
  let name: string = req.body.name;
  let email: string = req.body.email;
  let dob: string = req.body.dob;
  let lastElement = users[users.length - 1];
  let userId = lastElement.id + 1;
  const newUser = {
    id: userId,
    name: name,
    email: email,
    dob: dob,
  };

  if (!newUser.name || !newUser.email) {
    return res.sendStatus(400);
  }

  users.push(newUser);

  return res.status(200).json({
    message: users,
  });
};

export default { getUser, deleteUser, addUser };
