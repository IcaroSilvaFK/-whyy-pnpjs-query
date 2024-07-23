export class Query {
	private query: string[] = [];

	contains(field: string, text: string): Query {
		if (!this.trimSpaces(text)) return this;

		this.query.push(`contains(${field}, '${text}')`);

		return this;
	}

	startsWith(field: string, text: string): Query {
		if (!this.trimSpaces(text)) return this;
		this.query.push(`startsWith(${field}, '${text}')`);

		return this;
	}

	eq(field: string, value: string | number): Query {
		if (typeof value !== "number" && !this.trimSpaces(value)) return this;

		if (typeof value === "number") {
			this.query.push(`${field} eq ${value}`);
			return this;
		}

		this.query.push(`${field} eq '${value}'`);

		return this;
	}

	le(field: string, value: string | number): Query {
		if (typeof value === "string" && !this.trimSpaces(value)) return this;

		if (typeof value === "number") {
			this.query.push(`${field} le ${value}`);

			return this;
		}

		this.query.push(`${field} le '${value}'`);

		return this;
	}

	ge(field: string, value: string | number): Query {
		if (typeof value === "string" && !this.trimSpaces(value)) return this;

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

	//TODO add validation method on generate query

	private trimSpaces(value: string) {
		return value.trim();
	}
}
