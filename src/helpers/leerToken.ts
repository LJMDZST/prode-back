import jwt,{ JwtPayload } from "jsonwebtoken";

export const leerToken = (token : string) : JwtPayload => jwt.verify(token,'misemilla') as JwtPayload;