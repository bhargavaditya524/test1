// import dotenv from "dotenv";
// import express from "express";
// import Razorpay from "razorpay";

// /* Load env variables */
// dotenv.config({ path: "./config/config.env" });

// const app = express();


// /* Razorpay instance */
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// /* Server */
// app.listen(process.env.PORT || 4000, () => {
//   console.log(`Server running on port ${process.env.PORT || 4000}`);
// });

// export { razorpay as instance };





// import express from "express";
// import paymentRoutes from "./routes/paymentRoutes.js";
// import cors from "cors";
// const app = express();

// app.use(express.json());

// /* Add this line */
// app.use("/api", paymentRoutes);

// app.listen(process.env.PORT || 4000, () => {
//   console.log(`Server running on port ${process.env.PORT || 4000}`);
// });









import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();

// 🔹 Enable CORS globally, must be BEFORE routes
app.use(cors({
  origin: "http://localhost:5173", // your React frontend
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));
// app.use(cors());


app.use(express.json());

// Routes
app.use("/api", paymentRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server running on port ${process.env.PORT || 4000}`);
});

