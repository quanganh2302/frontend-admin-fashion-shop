import https from "../../../axios";

const homeServices = {
  getAllCode(type) {
    return https.get("/api/get-all-code-user", {
      params: {
        type: type,
      },
    });
  },
  getColor() {
    return https.get("/api/get-color-product");
  },
};

export default homeServices;
