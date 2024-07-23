class Query {
  query;

  constructor() {
    this.query = [];
  }

  contains(field, text) {
    if (!text) return;

    this.query.push(`contains(${field}, '${text}')`);

    return this;
  }

  startsWith(field, text) {
    if (!text) return;
    this.query.push(`startsWith(${field}, '${text}')`);
  }

  eq(field, value) {
    this.query.push(`${field} eq ${value}`);

    return this;
  }

  le(field, value) {
    this.#guardNumberType(value);

    this.query.push(`${field} le ${value}`);

    return this;
  }

  ge(field, value) {
    this.#guardNumberType(value);

    this.query.push(`${field} ge ${value}`);

    return this;
  }

  substringof(field, value) {
    this.query.push(`substringof('${value}', ${field})`);

    return this;
  }

  build() {
    this.query = this.query.join(" and ");

    return this.query;
  }

  #guardNumberType(value) {
    if (typeof value !== "number") throw new Error();
  }
}

const kql = new Query()
  .contains("name", "John")
  .ge("age", 30)
  .le("age", 50)
  .build();

console.log(kql);
