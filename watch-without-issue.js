import { subscribe } from "@parcel/watcher";

subscribe(
  process.cwd(),
  (_, events) => {
    console.log(events);
  },
  {
    ignore: ["node_modules"],
  }
);
