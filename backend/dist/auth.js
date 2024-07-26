"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_KEY = process.env.JWT_KEY;
const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader;
    if (!token) {
        return res.json({ msg: "token required" });
    }
    const verify = jsonwebtoken_1.default.verify(token, JWT_KEY, (error) => {
        if (error) {
            return res.json({ msg: 'wrong token' });
        }
    });
    next();
};
exports.default = auth;
