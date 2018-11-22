import path from "path";
import express from "express";
import cors from "cors";

import React from "react";
import { renderToString } from "react-dom/server";
import serialize from "serialize-javascript";
import axios from "axios";
import fetchRepos from "./routes/api.js";
import App from "../browser/components/container/App.js";

const app = express();
const PORT = process.env.PORT || 8084;

app.use(cors());
app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  fetchRepos().then(data => {
    const markup = renderToString(<App data={data} />);

    res.send(`<!DOCTYPE html>
      <html>
      <head>
          <meta charset="utf-8">
          <title>SSR with React</title>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
      </head>
          
      <body>
          <div id="app">${markup}</div>
          <script src="/static/js/public.js" defer></script>
      </body>
      </html>`);
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
  console.log(`Press Ctrl+C to quit`);
});
