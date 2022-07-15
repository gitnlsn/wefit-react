import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import { Movie } from "../models/movie";
import { useCartItemList } from "./CartContext";

describe("useCartItemList", () => {
  it("should add movie", () => {
    const { result } = renderHook(() => useCartItemList());

    act(() => {
      result.current.addMovie({ id: 1 } as Movie);
    });

    expect(result.current.cartItems).toContainEqual({
      movie: { id: 1 },
      quantity: 1,
    });
  });

  it("should increment same movie", () => {
    const { result } = renderHook(() => useCartItemList());

    act(() => {
      result.current.addMovie({ id: 1 } as Movie);
    });
    act(() => {
      result.current.addMovie({ id: 1 } as Movie);
    });

    expect(result.current.cartItems).toContainEqual({
      movie: { id: 1 },
      quantity: 2,
    });
  });

  it("should add different movies", () => {
    const { result } = renderHook(() => useCartItemList());

    act(() => {
      result.current.addMovie({ id: 1 } as Movie);
    });
    act(() => {
      result.current.addMovie({ id: 2 } as Movie);
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
      result.current.addMovie({ id: 1 } as Movie);
    });
    act(() => {
      result.current.addMovie({ id: 2 } as Movie);
    });

    act(() => {
        result.current.removeMovie({id: 1} as Movie);
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
      result.current.addMovie({ id: 1 } as Movie);
    });
    act(() => {
      result.current.addMovie({ id: 1 } as Movie);
    });

    act(() => {
        result.current.removeMovie({id: 1} as Movie);
    })

    expect(result.current.cartItems.length).toBe(1);
    expect(result.current.cartItems).toContainEqual({
      movie: { id: 1 },
      quantity: 1,
    });
  });
});
