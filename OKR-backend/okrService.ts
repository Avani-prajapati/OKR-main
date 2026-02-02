
const OkrDB = [
    {
        "id": "b1e3d6a2-7f9c-4f4e-9e3e-1b9e8a6c1a01",
        "objective": "Improve onboarding experience for new users",
        "keyResults": [
            {
                "id": "a21f4b8c-0d6e-4d7a-b3f1-2f6c8e9a1101",
                "isCompleted": false,
                "description": "Reduce onboarding completion time",
                "measure": "100"
            },

            {
                "id": "c9b8e6f2-2a41-4c1f-9a73-5d8e2b110102",
                "isCompleted": false,
                "description": "Increase onboarding completion rate",
                "measure": "85"
            },
            {
                "id": "8364ec05-b74e-44d5-af3e-5543421df5b9",
                "isCompleted": false,
                "description": "abcde",
                "measure": "100"
            }
        ]
    },
    {
        "id": "d3f7a1e9-8c2e-4f65-bc7a-91e2d4a20002",
        "objective": "Increase daily active users",
        "keyResults": [
            {
                "id": "e12c4f9a-4d5e-4b77-a9c1-0b3f11020001",
                "isCompleted": false,
                "description": "Improve feature discoverability",
                "measure": "30"
            },
            {
                "id": "f7b1a2e4-9c6d-4a11-8e22-3d11020002",
                "isCompleted": true,
                "description": "Launch engagement notifications",
                "measure": "20"
            },
            {
                "id": "1a9c3e4f-7b2d-4f66-b1a0-9e11020003",
                "isCompleted": false,
                "description": "Introduce referral incentives",
                "measure": "15"
            }
        ]
    }
]

export class OkrService {
    getOkrData() {
        return {status: "OK", data: OkrDB};
    }
}