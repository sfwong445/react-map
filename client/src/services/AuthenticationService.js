import Api from "./Api";

export default {
  display() {
    Api().get("http://localhost:8081").then(result => {
      console.log(result.data.message);
    });
  }
};
