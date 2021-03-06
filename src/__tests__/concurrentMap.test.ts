import { concurrentMap } from "../concurrentMap";
import { of } from "../of";
import { toArray } from "../toArray";

test("concurrentMap", async () => {
  const result = await toArray(
    concurrentMap(async (value: number) => value * 2, 2)(of(1, 2, 3))
  );
  result.sort();
  expect(result).toEqual([2, 4, 6]);
});
