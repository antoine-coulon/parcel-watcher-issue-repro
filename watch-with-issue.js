import { subscribe } from "@parcel/watcher";

subscribe(
  process.cwd(),
  (_, events) => {
    console.log(events);
  },
  {
    ignore: [
      "!.vscode/settings.json",
      "!.vscode/tasks.json",
      "!.vscode/launch.json",
      "!.vscode/extensions.json",
      "node_modules",
    ],
  }
);
