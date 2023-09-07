import https from "../../../axios";

const productServices = {
  // handleCreateColorTable(data) {
  //   return https.post("/api/create-color-product", data);
  // },
  handleCreateNewProduct(data) {
    return https.post("/api/create-new-product", data);
  },
  handleFetchProduct() {
    return https.get("/api/fetch-product");
  },
};

export default productServices;
