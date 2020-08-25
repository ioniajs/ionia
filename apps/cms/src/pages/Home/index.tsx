import React from "react";
import { Button } from "antd";
import { Request } from "@ionia/libs";

const Home = () => {
  return (
    <div>
      <Button
        type="primary"
        onClick={async () => {
          const res = await Request.get("/contents");
          console.log("->", res);
        }}
      >
        Fetch Contents
      </Button>
    </div>
  );
};

export default Home;
