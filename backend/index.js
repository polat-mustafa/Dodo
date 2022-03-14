import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import todoRouters from "./Routers/todoRouters.js";

dotenv.config(); // .env içerisindeki verileri kullanmamızı sağlar

const app = express(); // express server'ımızı oluşturduk ve app değişkenine atadık.

app.use(express.json({ limit: "20mb" })); // express server'ımızın json verilerini almasını sağlıyoruz. resim boyutlarını limitledik.

app.use(cors()); // cors kullanımını sağlıyoruz. Resimleri stringe çevirmezsek mongodb ile bağlantı kurulamıyor, hata veriyor console da.

app.use("/todos", todoRouters); // /todos isteğine karşılık verecek olan todoRouters'ı app'e ekledik.

// server ı başlatıyoruz. hangi portta başlatılsın ise onu yazıyoruz. process.env.PORT ile .env dosyasındaki PORT değerini alıyoruz.
app.listen(process.env.PORT, () => {
  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("MongoDB connected...");
    }
  );
});
