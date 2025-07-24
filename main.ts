import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
// Create an MCP server
const server = new McpServer({
  name: "Weather Real Time Server",
  version: "1.0.0",
});
// Add an addition tool
server.tool(
  "get-weather", //id de la herramienta
  "Obtiene el clima de una ciudad", //descripcion de la herramienta
  {
    // esquema de la entrada
    city: z.string().describe("El nombre de la ciudad para obtener el clima"),
  },
  async ({ city }) => {
    //implementacion de la herramienta
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
    );
    if (!response.ok) {
      return {
        content: [
          {
            type: "text",
            text: `No se pudo obtener el clima para ${city}. Por favor, intentalo de nuevo mas tarde`,
          },
        ],
      };
    }
    const data = await response.json();

    if (!data || !data.results || data.results.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No se encontraron resultados para ${city}. Por favor, verifica el nombre de la ciudad`,
          },
        ],
      };
    }

    const { latitude, longitude } = data.results[0];

    const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code,relative_humidity_2m,apparent_temperature,precipitation_probability,rain&forecast_days=1`)
   
    const weatherData = await weatherResponse.json()

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(weatherData, null, 2)
        },
      ],
    };
  }
);

const transport = new StdioServerTransport();
server.connect(transport);
