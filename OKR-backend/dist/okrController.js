"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OkrController = void 0;
class OkrController {
    constructor(okrService) {
        this.okrService = okrService;
    }
    handleOkrGet(req, res) {
        return res.status(200).send(this.okrService.getOkrData());
    }
    handleOkrPost(req, res) {
        return res.status(200).send(this.okrService.postOkrData(req));
    }
}
exports.OkrController = OkrController;
