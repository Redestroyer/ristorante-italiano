export function importJSON<T = object>(filePath: string): Promise<T> {
    if (!filePath.endsWith(".json")) {
        filePath += ".json";
    }
    return import(filePath, { with: { type: "json" } }).then(mod => mod.default);
}