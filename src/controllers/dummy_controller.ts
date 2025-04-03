import { Request, Response } from "express";    

export default {
    dummy(req, res){
        res.status(200).json({
            message: "sukses hit /dummy",
            data:"ok",
        });
    },
};