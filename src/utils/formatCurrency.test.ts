import { formatCurrency } from "./formatCurrency";

describe("formatCurrency", () => {
  it("should format to pt-BR format", () => {
    expect(formatCurrency(9.99)).toBe("R$ 9,99");
  });
  
  it("should format to pt-BR format 2", () => {
    expect(formatCurrency(9.9)).toBe("R$ 9,90");
  });
});
