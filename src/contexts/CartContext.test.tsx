import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import { Movie } from "../models/movie";
import { useCartItemList } from "./CartContext";

describe("useCartItemList", () => {
  it("should add movie", () => {
    const { result } = renderHook(() => useCartItemList());

    act(() => {
      result.current.increaseItem({ id: 1 } as Movie);
    });

    expect(result.current.cartItems).toContainEqual({
      movie: { id: 1 },
      quantity: 1,
    });
  });

  it("should increment same movie", () => {
    const { result } = renderHook(() => useCartItemList());

    act(() => {
      result.current.increaseItem({ id: 1 } as Movie);
    });
    act(() => {
      result.current.increaseItem({ id: 1 } as Movie);
    });

    expect(result.current.cartItems).toContainEqual({
      movie: { id: 1 },
      quantity: 2,
    });
  });

  it("should add different movies", () => {
    const { result } = renderHook(() => useCartItemList());

    act(() => {
      result.current.increaseItem({ id: 1 } as Movie);
    });
    act(() => {
      result.current.increaseItem({ id: 2 } as Movie);
    });

    expect(result.current.cartItems.length).toBe(2);
    expect(result.current.cartItems).toContainEqual({
      movie: { id: 1 },
      quantity: 1,
    });
    expect(result.current.cartItems).toContainEqual({
      movie: { id: 2 },
      quantity: 1,
    });
  });

  it("should remove specified movie", () => {
    const { result } = renderHook(() => useCartItemList());

    act(() => {
      result.current.increaseItem({ id: 1 } as Movie);
    });
    act(() => {
      result.current.increaseItem({ id: 2 } as Movie);
    });

    act(() => {
        result.current.decreaseItem({id: 1} as Movie);
    })

    expect(result.current.cartItems.length).toBe(1);
    expect(result.current.cartItems).toContainEqual({
      movie: { id: 2 },
      quantity: 1,
    });
  });

  it("should decrease quantity of specified movie", () => {
    const { result } = renderHook(() => useCartItemList());

    act(() => {
      result.current.increaseItem({ id: 1 } as Movie);
    });
    act(() => {
      result.current.increaseItem({ id: 1 } as Movie);
    });

    act(() => {
        result.current.decreaseItem({id: 1} as Movie);
    })

    expect(result.current.cartItems.length).toBe(1);
    expect(result.current.cartItems).toContainEqual({
      movie: { id: 1 },
      quantity: 1,
    });
  });

  it("should remove movie", () => {
    const { result } = renderHook(() => useCartItemList());

    act(() => {
      result.current.increaseItem({ id: 1 } as Movie);
    });
    act(() => {
      result.current.increaseItem({ id: 1 } as Movie);
    });

    act(() => {
        result.current.removeItem({id: 1} as Movie);
    })

    expect(result.current.cartItems.length).toBe(0);
  });

  it('should getTotal', () => {
    const { result } = renderHook(() => useCartItemList());

    act(() => {
      result.current.increaseItem({ id: 1, price: 1.00 } as Movie);
    });
    act(() => {
      result.current.increaseItem({ id: 2, price: 2.00 } as Movie);
    });
    act(() => {
      result.current.increaseItem({ id: 2, price: 2.00 } as Movie);
    });

    expect(result.current.getTotal()).toBe(5)
  })
});
