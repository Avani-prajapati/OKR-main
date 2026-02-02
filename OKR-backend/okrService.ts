import okrDB from './Local/db.json';
export class OkrService {
    getOkrData() {
        return {status: "OK", data: okrDB};
    }
    postOkrData(req: any) {
        console.log("Received OKR data:", req.body);
        return {status: "OK", message: "OKR created successfully"};
    }
}