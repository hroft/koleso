const errors = require("restify-errors");
const rjwt = require('restify-jwt-community');
const Customer = require("../models/Koleso");
const config = require('../config');

module.exports = server => {
  //Get koleso
  server.get("/koleso", async (req, res, next) => {
    try {
      const koleso = await Customer.find({});
      res.send(koleso);
      next();
    } catch (err) {
      return next(new errors.InvalidContentError(err));
    }
  });
  //Get single customer
  server.get("/koleso/:id", async (req, res, next) => {
    try {
      const customer = await Customer.findById(req.params.id);
      res.send(customer);
      next();
    } catch (err) {
      return next(
        new errors.ResourceNotFoundError(
          `There is not customer with the id of ${req.params.id}`
        )
      );
    }
  });
  //Add Customer
  server.post("/koleso", rjwt({secret: config.JWT_SECRET}), async (req, res, next) => {
    //check for Json
    if (!req.is("application/json")) {
      return next(new errors.InvalidContentError("Expects 'application/json'"));
    }

    const { Article,
        Serial,
        Construction,    
        Protector,
        Size1,
        Size_3,
        Size,
        Disk,
        Zamok,
        BRAND,
        NagrShina6,
        NagrShina10,
        NagrShina25,
        NagrMaster25,
        NagrSlave25,
        Diametr,
        Widht,
        Price,
        PriceOpt,
        Name1,
        Tech,
        SubscrideShort,
        SubscrideLong,
        SetupExp,
        Feature,
        Photo } = req.body;

    const customer = new Customer({
        Article,
        Serial,
        Construction,    
        Protector,
        Size1,
        Size_3,
        Size,
        Disk,
        Zamok,
        BRAND,
        NagrShina6,
        NagrShina10,
        NagrShina25,
        NagrMaster25,
        NagrSlave25,
        Diametr,
        Widht,
        Price,
        PriceOpt,
        Name1,
        Tech,
        SubscrideShort,
        SubscrideLong,
        SetupExp,
        Feature,
        Photo
    });

    try {
      const newCustomer = await customer.save();
      res.send(201);
      next();
    } catch (err) {
      return next(new errors.InvalidContentError(err.message));
    }
  });
  //Update Customer
  server.put("/koleso/:id", rjwt({secret: config.JWT_SECRET}), async (req, res, next) => {
    //check for Json
    if (!req.is("application/json")) {
      return next(new errors.InvalidContentError("Expects 'application/json'"));
    }

    const { Article,
        Serial,
        Construction,    
        Protector,
        Size1,
        Size_3,
        Size,
        Disk,
        Zamok,
        BRAND,
        NagrShina6,
        NagrShina10,
        NagrShina25,
        NagrMaster25,
        NagrSlave25,
        Diametr,
        Widht,
        Price,
        PriceOpt,
        Name1,
        Tech,
        SubscrideShort,
        SubscrideLong,
        SetupExp,
        Feature,
        Photo } = req.body;

    try {
      const customer = await Customer.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.send(200);
      next();
    } catch (err) {
      return next(
        new errors.ResourceNotFoundError(
          `There is not customer with the id of ${req.params.id}`
        )
      );
    }
  });
  //Delete Customer
  server.del("/koleso/:id", rjwt({secret: config.JWT_SECRET}), async (req, res, next) => {
    try {
      const customer = await Customer.findOneAndRemove({ _id: req.params.id });
      res.send(204);
      next();
    } catch (err) {
      return next(
        new errors.ResourceNotFoundError(
          `There is not customer with the id of ${req.params.id}`
        )
      );
    }
  });
};
