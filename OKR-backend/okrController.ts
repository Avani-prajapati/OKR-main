import { OkrService } from './okrService';
export class OkrController {
    private readonly okrService: OkrService;
    constructor(okrService: OkrService) {
        this.okrService = okrService;
    }

    handleOkrGet(req: any, res: any) {
        return res.status(200).send(this.okrService.getOkrData());
    }
}