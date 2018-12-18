import { Greeter } from "./greeter";

document.addEventListener("DOMContentLoaded", function () {
    let greeter = new Greeter("from TypeScript");
    document.body.innerHTML = greeter.greet();
});
