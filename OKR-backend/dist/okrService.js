"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OkrService = void 0;
const db_json_1 = __importDefault(require("./Local/db.json"));
class OkrService {
    getOkrData() {
        return { status: "OK", data: db_json_1.default };
    }
    postOkrData(req) {
        console.log("Received OKR data:", req.body);
        return { status: "OK", message: "OKR created successfully" };
    }
}
exports.OkrService = OkrService;
