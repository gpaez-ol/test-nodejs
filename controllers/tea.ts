import { Tea } from "../models/tea";
import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/http-exception";
import { validateJobPostCreate } from "../models/validations/tea";
let Teas: Tea[] = [
  {
    name: "Jasmine Tea",
    color: "red",
    description: "This is red tea my favorite tea",
    imageUrl: "imageUrl.com",
    price: 250,
    tags: ["Pricey"],
  },
];
//GET '/tea'
const getAllTea = (req: Request, res: Response, next: NextFunction) => {
  res.json({ teas: Teas });
};

//POST '/tea'
const newTea = (req: Request, res: Response, next: NextFunction) => {
  const { error } = validateJobPostCreate(req.body);
  if (error) {
    console.log(error.details);
    next(new HttpException(404, "Tea was not valid"));
  } else {
    const newTea: Tea = {
      name: req.body.name,
      color: req.body.color,
      description: req.body.description,
      imageUrl: req.body.imageUrl ?? "",
      price: req.body.price,
      tags: req.body.tags,
    };
    Teas.push(newTea);
    /*Add it if you find a tea is in the same name as the other  next(new HttpException(404, "Post not found"));*/
    res.json({ message: "POST new tea" });
  }
};

//DELETE '/tea'
const deleteAllTea = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "DELETE all tea" });
};

//GET '/tea/:name'
const getOneTea = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.params.name); // its bringing it
  res.json({ message: "GET 1 tea" });
};

//POST '/tea/:name'
const newComment = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "POST 1 tea comment" });
};

//DELETE '/tea/:name'
const deleteOneTea = (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "DELETE 1 tea" });
};

module.exports = {
  getAllTea,
  newTea,
  deleteAllTea,
  getOneTea,
  newComment,
  deleteOneTea,
};
