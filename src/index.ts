export { Query } from "./lib/query";
import { Query } from "./lib/query";

const queryBuilder = new Query();

const query = queryBuilder.contains("name", "Test").build();

console.log(query);

export default Query;
