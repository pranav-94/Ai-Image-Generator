"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const client_1 = require("@prisma/client");
const zod_1 = __importDefault(require("./zod"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send('hello world');
});
app.post('/signUp', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const checkedData = zod_1.default.safeParse({
        username: userData.username,
        email: userData.email,
        password: userData.password
    });
    if (checkedData.success !== true) {
        return res.status(400).json({
            msg: 'Input validation failed'
        });
    }
    const finalData = yield prisma.signUp.create({
        data: {
            username: checkedData.data.username,
            email: checkedData.data.email,
            password: checkedData.data.password
        }
    });
    res.status(200).json({
        msg: 'done',
        data: finalData
    });
}));
app.post('/signIn', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyData = req.body;
    const verifyDb = yield prisma.signUp.findFirst({
        where: {
            username: verifyData.username,
            password: verifyData.password
        }
    });
    if (verifyDb === null) {
        return res.status(400).json({
            msg: 'incorrect inputs'
        });
    }
    res.status(200).json({
        msg: 'found',
        data: verifyDb
    });
}));
app.get('/allData', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield prisma.signUp.findMany();
    res.json({
        msg: 'success',
        data: allData
    });
}));
app.post('/promptData', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const PData = req.body;
    const savePromptData = yield prisma.promptData.create({
        data: {
            promptUser: PData.user,
            promptText: PData.Text,
        }
    });
    res.json({
        msg: 'done',
        data: savePromptData
    });
}));
app.get('/userPrompts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const userData = yield prisma.promptData.findMany({
    // where:{
    //     promptUser: data.user
    // }
    });
    res.send(userData);
}));
app.delete('/deleteUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const deletedRecord = yield prisma.signUp.delete({
        where: {
            username: data.username,
            password: data.password
        }
    });
    res.status(200).json({
        msg: 'done',
        data: deletedRecord
    });
}));
app.listen(3000);
