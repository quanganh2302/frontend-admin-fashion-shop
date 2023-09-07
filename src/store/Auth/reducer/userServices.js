import https from "../../../axios";

export const userServices = {
  createNewUser(data) {
    return https.post("/api/create-new-user", data);
  },
};
