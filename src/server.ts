async function main() {
    const App = await import("./app.js").then(mod => mod.default.default);
    App.listen({ port: 3000 }, () => { console.log("test"); });
}

main();