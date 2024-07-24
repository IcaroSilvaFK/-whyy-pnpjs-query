export class Utils {
  static trimSpaces(value: string) {
    return value.trim();
  }

  static toIsoString(date: Date) {
    return date.toISOString();
  }
}