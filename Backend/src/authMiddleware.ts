import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload }  from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

export const userMiddleware = ( req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"]?.split("")[1];
    
    if (!header) {
        return res.status(401).json({ message: "Unauthorized" });
      }
    try{
        const decoded = jwt.verify(header as string, JWT_PASSWORD  || "defaultSecret") as JwtPayload

        if(decoded){
            // @ts-ignore
            req.userId = decoded.id;
            next();
        }else{
            res.status(403).json({
                message : "You are not Autharized"
            })
        }
    } catch(err: any) {
        if(err.name === "TokenExpiredError") {
            return res.status(401).json({ message: "Session expired" });
          }
          return res.status(403).json({ message: "Invalid token" });
    }
}