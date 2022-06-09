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

module.exports = {
  getAllTea,
  newTea,
};
