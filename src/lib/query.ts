import { Utils } from "../utils/utils";

export class Query {
  private query: string[] = [];

  contains(field: string, text: string): Query {
    if (!Utils.trimSpaces(text)) return this;

    this.query.push(`contains(${field}, '${text}')`);

    return this;
  }

  startsWith(field: string, text: string): Query {
    if (!Utils.trimSpaces(text)) return this;
    this.query.push(`startsWith(${field}, '${text}')`);

    return this;
  }

  eq(field: string, value: string | number | Date): Query {

    if (value instanceof Date) {
      value = Utils.toIsoString(value);
    }

    if (typeof value !== "number" && !Utils.trimSpaces(value)) return this;

    if (typeof value === "number") {
      this.query.push(`${field} eq ${value}`);
      return this;
    }

    this.query.push(`${field} eq '${value}'`);

    return this;
  }

  le(field: string, value: string | number | Date): Query {
    if (value instanceof Date) {
      value = Utils.toIsoString(value);
    }

    if (typeof value === "string" && !Utils.trimSpaces(value)) return this;

    if (typeof value === "number") {
      this.query.push(`${field} le ${value}`);

      return this;
    }

    this.query.push(`${field} le '${value}'`);

    return this;
  }

  ge(field: string, value: string | number | Date): Query {

    if (value instanceof Date) {
      value = Utils.toIsoString(value);
    }

    if (typeof value === "string" && !Utils.trimSpaces(value)) return this;

    if (typeof value === "number") {
      this.query.push(`${field} ge ${value}`);

      return this;
    }

    this.query.push(`${field} ge '${value}'`);

    return this;
  }

  substringof(field: string, value: string): Query {
    if (!value) return this;

    this.query.push(`substringof('${value}', ${field})`);

    return this;
  }

  and(): Query {
    if (!this.query.length) return this;

    this.query.push("and");

    return this;
  }

  or(): Query {
    if (!this.query.length) return this;

    this.query.push("or");

    return this;
  }

  build(): string {
    const generatedQuery = this.query.join(" ");

    return generatedQuery;
  }


}
