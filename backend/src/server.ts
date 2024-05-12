import ExpressConfig from "./express/express.config";
import { productList } from "./mock/product-list.mock";

const app = ExpressConfig();

const PORT = process.env.port || 5000;

app.get("/offers", (request, response) => {
  console.log(request);
  console.log("/offers is fetched", new Date());
  response.json({
    offers: [
      {
        id: 1,
        title: "Offer 1",
        description: "This is offer 1",
        discount: 10,
      },
      {
        id: 2,
        title: "Offer 2",
        description: "This is offer 2",
        discount: 15,
      },
      {
        id: 3,
        title: "Offer 3",
        description: "This is offer 3",
        discount: 20,
      },
    ],
    total: 3,
    skip: 0,
    limit: 3,
  });
});

app.get("/products", async (request, response) => {
  console.log(request);
  // const res = await fetch("https://dummyjson.com/products?limit=2")
  // const data = await res.json();
  // console.log(productList);
  response.json(productList)
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
