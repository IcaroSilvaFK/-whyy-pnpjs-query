---

# This library is intended to make it easier to write OData queries.

## Overview

<p>
OData (Open Data Protocol) is a standardized protocol developed by Microsoft for querying and updating data. It allows for the creation and consumption of queryable and interoperable RESTful APIs in a simple and standard way. OData helps applications expose data in a standard format, making it easier to interact with various data sources over HTTP.
</p>

<p>
Write OData queries in a semantic and easy-to-understand way, without typos.
</p>

## Features

- Semantic
- Typesafe
- Secure

## Basic Usage

<h5>AND</h5>

```js
const query = new Query().eq("name", "Test").and().eq("age", 1).build();

/* output
 name eq 'Test' and age eq 1
*/
```

<h5>OR</h5>

```js
const query = new Query().eq("name", "Test").or().eq("age", 1).build();
/* output
 name eq 'Test' or age eq 1
*/
```

<h5>CONTAINS</h5>

```js
const query = new Query().contains("name", "Test").build();
/* output
 contains(name, 'Test')
*/
```

<h5>EQ</h5>

```js
const query = new Query().eq("age", 1).build();
/* output
 age eq 1
*/

const query = new Query().eq("name", "Whyy").build();
/* output
  name eq 'Whyy'
*/
```

<h5>GE</h5>

```js
const query = new Query().ge("name", "Test").build();
/* output
 age ge 'Test'
*/

const query = new Query().ge("age", 10).build();
/* output
  age ge 10
*/
```

### Install

```shell
npm i @icarowhyy/pnpjs-query
```

### Contributing

We welcome contributions! To contribute to the project, get in touch.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Support

If you encounter any issues or have any questions, please open an issue on our GitHub repository.
