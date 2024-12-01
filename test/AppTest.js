import { calculateOrderTotal } from "../Test_Functions/OrderService.js";
import { expect } from "chai";
import { hashPassword } from "../Test_Functions/HashPassword.js";

describe("Order Service Test", () => {
  describe("should calculate order total correctly without discount code", () => {
    it("No Discount without discount code", () => {
      const orderItems = [
        {
          price: 50,
          quantity: 2,
        },
        {
          price: 30,
          quantity: 1,
        },
      ];

      const total = calculateOrderTotal(orderItems, "");
      expect(calculateOrderTotal(orderItems, "")).to.equal(130); //No discount to be provided
    });
  });

  describe("should calculate order total correctly with wrong discount Code", () => {
    it("No Discount with wrong discount code", () => {
      const orderItems = [
        {
          price: 50,
          quantity: 2,
        },
        {
          price: 30,
          quantity: 1,
        },
      ];

      const total = calculateOrderTotal(orderItems, "INVALID_CODE");
      expect(total).to.equal(130); //No discount to be provided
    });
  });

  describe("should calculate order total without items", () => {
    it("Total should be 0", () => {
      const orderItems = [];

      const total = calculateOrderTotal(orderItems, "SUMMER10");
      expect(total).to.equal(0); //Should return 0 for emplty list
    });
  });

  describe("should calculate order total with items and proper discount code", () => {
    it("Calculate total order amount with proper discount code", () => {
      const orderItems = [
        {
          price: 50,
          quantity: 2,
        },
        {
          price: 100,
          quantity: 1,
        },
      ];

      const total = calculateOrderTotal(orderItems, "SUMMER10");
      expect(total).to.equal(180); //Should return with proper discount
    });
  });
});

describe("To Check password hashed or not", () => {
  it("Should hash password", () => {
    const password = "Aritra@2003";
    const hashedPassword = hashPassword(password);
    expect(hashedPassword).to.not.equal(password);
  });
});
