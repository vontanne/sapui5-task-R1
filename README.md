# SAPUI5 Walkthrough

OpenUI5 app built with the [UI5 Walkthrough tutorial](https://ui5.github.io/tutorials/walkthrough/) (JavaScript), with an extra status filter for the invoice list.

## Run

```sh
npm install
npm start
```

`npm start` serves the app at http://localhost:8080:

- **Mock data** (opens by default): http://localhost:8080/test/mockServer.html
- **Remote data** (Northwind OData service): http://localhost:8080/index.html. Needs internet. The status filter works only with mock data, because the real service has no `Status` field.
