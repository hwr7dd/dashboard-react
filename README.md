#  Dashboard with Charts

A dashboard showing data in bar graph and pie chart.

### Live here: https://dashboard-chart-react.herokuapp.com/

## Technologies used

- [React.JS](https://reactjs.org/) -Frontend library used in the project.
- [Victory](https://formidable.com/open-source/victory/) - Charting library used.
- [Node.JS](http://nodejs.org/) - Node.JS is used in the backend to serve the MySQL DB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

_Node.JS and npm must be installed. Download and install them from [here](https://nodejs.org)._

### Installing

Follow these steps to run this project in your local computer.

```
$ https://github.com/geekysrm/dashboard-react.git
$ cd dashboard-react
```

Now, create a `.env` file in the root of the project with the following variables:

```
MYSQL_HOST=<YOUR_MYSQL_HOST>
MYSQL_USER=<YOUR_MYSQL_USER>
MYSQL_PASSWORD=<YOUR_MYSQL_PASSWORD>
MYSQL_DB=<YOUR_MYSQL_DB>
JWT_SECRET=<YOUR_JWT_SECRET>
```

Now run :

```
$ npm i
$ npm run client-install
```

Now, to run both the server and client on port `5000` and `3000` respectively, run:

```
$ npm run dev
```

To run only the server, run:

```
$ npm run server
```

To run only the client, run:

```
$ npm run client
```
## Authors

- **Soumya Ranjan Mohanty** - [geekysrm](https://github.com/geekysrm)

## License

This project is licensed under the MIT License.
