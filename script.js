// Example: dynamically create elements
document.addEventListener("DOMContentLoaded", () => {
    const container = document.createElement("div");
    container.className = "flex flex-col items-center justify-center";
    container.innerHTML = "<h1>Welcome to Sahay</h1>";
    document.body.appendChild(container);
});

// Additional JS handles interactivity, animations, or API calls