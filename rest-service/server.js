const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("pong");
});

app.get("/common", (req, res) => {
  res.json({
    origin: ["Semarang Tawang", "Semarang Poncol"],
    destination: ["Bandung", "Cimahi", "Gambir", "Pasar Senen"],
    train: [
      { label: "Ciremai", value: 210000 },
      { label: "Harina", value: 275000 },
    ],
  });
});

app.get("/detail", (req, res) => {
  res.json({
    kursi: ["3A", "11B", "15C"],
    addons: [
      { label: "Insurance", value: 15200 },
      { label: "Refund guarantee", value: 12400 },
      { label: "Home protection", value: 9500 },
    ],
    metode: ["BNI", "BCA", "QRIS"],
  });
});

app.get("/payment", (req, res) => {
  res.json({
    account: "123456789",
    amount: "Rp 210.000",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
