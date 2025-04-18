import { TEST_SOSPESO_ID } from "@/sospeso/fixtures.ts";
import { href } from "./href.ts";
import { describe, expect, test } from "vitest";

describe("href", () => {
  test("정적인 루트의 path를 생성할 수 있다", () => {
    expect(href("소스페소-발행", undefined)).toBe("/sospeso/issuing");
  });

  test("파라미터가 있는 동적인 루트의 path를 생성할 수 있다", () => {
    expect(href("소스페소-상세", { sospesoId: TEST_SOSPESO_ID })).toBe(
      "/sospeso/" + TEST_SOSPESO_ID,
    );
    expect(href("소스페소-신청", { sospesoId: TEST_SOSPESO_ID })).toBe(
      "/sospeso/" + TEST_SOSPESO_ID + "/application",
    );
  });

  test("파라미터가 잘못되면 에러를 던진다", () => {
    expect(() =>
      href("소스페소-상세", { sospesoId: "한글id에 공백까지 들어가?" }),
    ).toThrowError("[invalid route params]");
  });

  const TEST_CONSUMER_ID = "uugVC5lsmlBOHu";
  test("path에 없는 파라미터는 query string으로 붙는다", () => {
    expect(href("홈", { page: 1 })).toBe("/?page=1");

    expect(
      href("어드민-소스페소-사용", {
        sospesoId: TEST_SOSPESO_ID,
        consumerId: TEST_CONSUMER_ID,
      }),
    ).toBe(
      `/admin/sospeso/${TEST_SOSPESO_ID}/consuming?consumerId=${TEST_CONSUMER_ID}`,
    );
  });
});
