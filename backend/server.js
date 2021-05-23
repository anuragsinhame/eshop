import express from "express";
import mongoose from "mongoose";
// import data from "./data.js";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

const port = process.env.PORT || 4200;
const mongoUrl = process.env.MONGODB_URL || "mongodb://localhost/eshop";

const app = express();
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});



// app.get("/api/products", (req, res, next) => {
//   res.send(data.products);
// });

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.get("/", (req, res, next) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
