import ky from "ky";

const kyServer = ky.create({
  prefixUrl: "http://127.0.0.1:3000",
  credentials: "include",
  mode: "cors",
  cache: "no-store",
  retry: 0,
});

export default kyServer;
