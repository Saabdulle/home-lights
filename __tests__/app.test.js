const request = require("supertest");
const app = require("../app");

describe("Lights Service", () => {
  test("GET /api/lights - should respond with an array of light objects ", async () => {
    const { body } = await request(app).get("/api/lights").expect(200);

    expect(body.lights.length).toBeGreaterThan(0);
    body.lights.forEach((light) => {
      expect(light).toEqual(
        expect.objectContaining({
          location: expect.any(String),
          status: expect.any(Boolean),
        })
      );
    });
  });

  test("POST /api/lights - should allow a new light to be added", async () => {
    const newLight = { location: "Kitchen", status: false };
    const { body } = await request(app)
      .post("/api/lights")
      .send(newLight)
      .expect(201);

    expect(body.light).toEqual({ id: 1, ...newLight });
  });
});
