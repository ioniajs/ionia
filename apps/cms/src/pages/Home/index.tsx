import React from "react";
import { Button } from "antd";
import { useService, HttpService } from "@ionia/libs";
import { UserService } from "@/services";

const Home = () => {
  const httpService = useService<HttpService>(HttpService);
  const userService = useService<UserService>(UserService);

  const handleLogin = async () => {
    console.log(await userService.login({ username: "123456" }));
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={async () => {
          const res = await httpService.get("/login");
          console.log("->", res);
        }}
      >
        Fetch
      </Button>
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default Home;
