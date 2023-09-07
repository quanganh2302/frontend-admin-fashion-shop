import https from "../../../axios";

const homeServices = {
  getAllCode(type) {
    return https.get("/api/get-all-code-user", {
      params: {
        type: type,
      },
    });
  },
  getColor(type) {
    return https.get("/api/get-color-product", {
      params: {
        type: type,
      },
    });
  },
};

export default homeServices;
