class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="sticky-top bg-white shadow-sm">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container">
                        <a class="navbar-brand fw-bold" href="/">
                            <span class="text-primary">Trade</span>Pulse
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="products.html">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/contact.html">Contact</a>
                                </li>
<li class="nav-item">
                                    <a class="nav-link" href="https://youtube.com" target="_blank">
                                        <i class="bi bi-youtube"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://telegram.org" target="_blank">
                                        <i class="bi bi-telegram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        `;
    }
}


customElements.define('custom-header', CustomHeader);
