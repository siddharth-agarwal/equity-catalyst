
# Equity Catalyst

Stock data visualization and catalyst notification platform supporting a wide library of metrics. Built with:

- [React](https://reactjs.org/)
- [IEX API](https://iexcloud.io/)

---

## Available Scripts (npm)

![Node.js CI](https://github.com/siddharth-agarwal/siddharth-agarwal.github.io/workflows/Node.js%20CI/badge.svg)

From the project's root directory, run:

### `npm install (--silent)`

Installs any required dependencies specified in the project `package.json`.

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build --if-present`

Builds an _optimized production_ version of the app in the `build` folder.

To use this folder to start/serve, run:

`yarn global add serve`

`serve -s build`

Open [http://localhost:5000](http://localhost:5000) in a browser to view.

---

## Usage (Docker)

### `docker build -t equity-catalyst:dev .`

Start a build of the app within a Docker container.

To run the container:

```bash
docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    equity-catalyst:dev
```

Open [http://localhost:3001](http://localhost:3001) in a browser to view/debug.
