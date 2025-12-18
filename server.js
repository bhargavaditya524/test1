



import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/paymentRoutes.js";

const app = express();

// 🔹 Enable CORS globally, must be BEFORE routes
app.use(cors({
  origin: "https://bharadwajayurveda.netlify.app",// your React frontend
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

