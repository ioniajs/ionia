import { rest } from "msw";

export default [
  rest.get("/api/login", (req, res, ctx) => {
    return res(
      ctx.json({
        test: "ionia",
      })
    );
  }),
  rest.post("/api/login", (req, res, ctx) => {
    return res(
      ctx.json({
        token: "token",
      })
    );
  }),
];
