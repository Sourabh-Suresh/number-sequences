document.getElementById("header").innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="index.html">Sequence Generator</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="mainNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="ap.html">AP</a></li>
                        <li class="nav-item"><a class="nav-link" href="gp.html">GP</a></li>
                        <li class="nav-item"><a class="nav-link" href="fibonacci.html">Fibonacci</a></li>
                    </ul>
                </div>

            </div>
        </nav>
`;

// Highlight active page
const current = location.pathname.split("/").pop();
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === current) link.classList.add("active");
});
