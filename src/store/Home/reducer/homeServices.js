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
  getSize() {
    return https.get("/api/get-code-size-product");
  },
  getType() {
    return https.get("/api/get-code-type-product");
  },
  getCategories() {
    return https.get("/api/get-code-cate-product");
  },
  getTagProduct() {
    return https.get("/api/get-code-tag-product");
  },
};

export default homeServices;
