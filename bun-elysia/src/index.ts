import { Elysia, t } from "elysia";
import Gateway1Service from "./service/gateway1.service";
import Gateway2Service from "./service/gateway2.service";
const app = new Elysia();

app.group("/gateway1", (app) => app.get('/:path', async ({params}) => {
  const response = await Gateway1Service.getService1(params.path);
  const data = await response.json();
  return data
}));

app.group("/gateway2", (app) => app.get('/', async () => {
  const response = await Gateway2Service.getService2();
  const data = await response.json();
  return data
}));

app.listen(8080, () => {
  console.log(`app listen on ${8080}`);
});
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
