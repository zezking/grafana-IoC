# Inversion of Control Pattern Implementation in a Grafana App Plugin

## Getting Started

Docker: Ensure Docker is installed on your system to run Grafana within a container

1. Install dependencies

```bash
npm install
```

2. Start Grafana docker container

```bash
docker compose up
```

3. Build plugin with IOC=alternate to use component in alternate configuration

```bash
IOC=alternate npm run build
```

For default configuration, use `npm run build` or `IOC=default npm run build`

4. Once Grafana is running and the plugin is built, open your web browser and navigate to:

```bash
http://localhost:3001
```
Go to Side Menu > Apps > PageIOC to view the component in action

Depends on the configuration, the Email input field will display different default values.
Click on the login button to see different values printed in the console.

Tools used:

- [Grafana](https://grafana.com/developers/plugin-tools/)
- [InversifyJS](https://inversify.io/)
