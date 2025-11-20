const searchEngines = {
      Google: "https://www.google.com/search?q=",
      Bing: "https://www.bing.com/search?q=",
      DuckDuckGo: "https://duckduckgo.com/?q=",
      Perplexity: "https://www.perplexity.ai/search?q=",
      Ecosia: "https://www.ecosia.org/search?q="
    };

    let currentEngine = "Google";

    const engineSelector = document.getElementById("engineSelector");
    for (const key in searchEngines) {
      const btn = document.createElement("button");
      btn.textContent = key;
      btn.onclick = () => setEngine(key);
      if (key === currentEngine) btn.classList.add("active");
      engineSelector.appendChild(btn);
    }

    function setEngine(engine) {
      currentEngine = engine;
      document.querySelectorAll(".engine-selector button").forEach(btn => btn.classList.remove("active"));
      [...engineSelector.children].find(b => b.textContent === engine).classList.add("active");
      document.getElementById("query").placeholder = `Search with ${engine}...`;
    }

    document.getElementById("searchForm").addEventListener("submit", e => {
      e.preventDefault();
      const query = document.getElementById("query").value.trim();
      if (query) {
        window.open(searchEngines[currentEngine] + encodeURIComponent(query), "_blank");
      }
    });