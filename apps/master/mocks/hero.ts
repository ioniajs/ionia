import { rest } from "msw";

export default [
  rest.get("/api/hero/list", (req, res, ctx) => {
    return res(
      ctx.json({
        isSuccess: true,
        data: [
          { id: 1, name: "韦鲁斯", nickname: "惩戒之箭" },
          { id: 2, name: "凯影", nickname: "影流之镰" },
        ],
      })
    );
  }),
];
