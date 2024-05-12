import ExpressConfig from "./express/express.config";
import { offerList as offerListMock } from "./mock/offer-list.mock";
import { productList as productListMock } from "./mock/product-list.mock";

const app = ExpressConfig();

const PORT = process.env.port || 5000;

app.get("/offers", (request, response) => {
  console.log(request);
  console.log("/offers is fetched", new Date());
  setTimeout(() => {
    response.json(offerListMock);
  }, 2000);
});

app.get("/products", (request, response) => {
  console.log(request);
  // const res = await fetch("https://dummyjson.com/products?limit=2")
  // const data = await res.json();
  // console.log(productList);
  setTimeout(() => {
    response.json(productListMock);
  }, 2000);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
