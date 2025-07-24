# 🌦️ Servidor MCP con Open-Meteo y TypeScript, Claude Sonnet 3.5

Este proyecto implementa un servidor basado en **Model Context Protocol (MCP)** utilizando `@modelcontextprotocol/sdk`, `Zod` para validaciones y la API pública de **Open-Meteo** para obtener el clima actual de una ciudad.

Desarrollado como parte del taller de introducción a MCP en **Microsoft Reactor**.

## 🔧 Funcionalidad incluida
Se define una herramienta llamada get-weather, que:

Recibe como entrada el nombre de una ciudad (city).

Valida el dato usando Zod.

Utiliza la API de Open-Meteo para consultar el clima.

Retorna una respuesta textual con la descripción del clima.

<img width="416" height="463" alt="Screenshot_2" src="https://github.com/user-attachments/assets/a0d8ce60-dc7f-44e7-8d25-51bfa2545649" />

<img width="408" height="495" alt="Screenshot_3" src="https://github.com/user-attachments/assets/c6c57c1c-20e2-405a-bdf0-e9cabd09d146" />


---


## 🚀 Tecnologías utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol)
- [`@modelcontextprotocol/sdk`](https://www.npmjs.com/package/@modelcontextprotocol/sdk)
- [Zod](https://zod.dev/)
- [Open-Meteo API](https://open-meteo.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

---

## 🔗 Recursos
📘 Documentación oficial de MCP

🌍 Open-Meteo API

🧰 Zod - Validaciones con TypeScript



## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/mcp-weather-server.git
cd mcp-weather-server
