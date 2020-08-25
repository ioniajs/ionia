import React from "react";
import { Button } from "antd";
import { Request } from "@ionia/libs";

const Home = () => {
  return (
    <div>
      <Button
        type="primary"
        onClick={async () => {
          const res = await Request.get("/login");
          console.log("->", res);
        }}
      >
        Fetch
      </Button>
      <Button
        type="primary"
        onClick={async () => {
          const res = await Request.post("/login", {
            data: {
              username: "roy",
            },
          });
          console.log("->", res);
        }}
      >
        Create
      </Button>
    </div>
  );
};

export default Home;
