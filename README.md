# Inversion of Control Pattern Implementation in a Grafana App Plugin

## Getting Started

Docker: Ensure Docker is installed on your system to run Grafana within a containe

1. Start Grafana docker container

```bash
docker compose up
```

2. Build plugin with IOC=alternate to use component in alternate configuration

```bash
IOC=alternate npm build
```

For default configuration, use `npm run build` or `IOC=default npm run build`

3. Once Grafana is running and the plugin is built, open your web browser and navigate to:

```bash
http://localhost:3000
```

Tools used:

- [Grafana](https://grafana.com/developers/plugin-tools/)
- [InversifyJS](https://inversify.io/)
