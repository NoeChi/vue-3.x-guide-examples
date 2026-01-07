function join<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const res = join<string>(["1", "2", "3"], ["4", "5", "6"]);
res.map((x) => x.toUpperCase());
