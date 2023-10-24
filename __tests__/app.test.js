const request = require("supertest");
const app = require("../app");

describe("Lights Service", () => {
  test("GET /api/lights - should respond with an array of light objects ", async () => {
    const response = await request(app).get("/api/lights").expect(200);

    expect(response.body.lights.length).toBeGreaterThan(0);
    response.body.lights.forEach((light) => {
      expect(light).toEqual(
        expect.objectContaining({
          location: expect.any(String),
          status: expect.any(Boolean),
        })
      );
    });
  });
});
