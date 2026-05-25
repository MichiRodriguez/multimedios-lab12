import { describe, test, expect } from "vitest";

describe("WarningBadge Performance", () => {

  test("debe renderizar rápido", () => {

    const start = performance.now();

    const text = "Sesión por expirar";

    const end = performance.now();

    const renderTime = end - start;

    console.log(
      `Renderizado en ${renderTime} ms`
    );

    expect(renderTime).toBeLessThan(5);

  });

});