export class Utils {
  public add(a: number, b: number) {
    return a + b;
  }

  public concatStrings(str1: string, str2: string) {
    return str1 + str2;
  }

  public getRandom(value = 10): number {
    return Math.round(Math.random() * value);
  }
}
