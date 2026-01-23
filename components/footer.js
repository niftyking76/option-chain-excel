class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-dark text-white py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <h5 class="text-uppercase mb-4">TradePulse Hub</h5>
                            <p>Providing professional traders with cutting-edge tools and resources since 2023.</p>
                        </div>
                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <h5 class="text-uppercase mb-4">Quick Links</h5>
                            <ul class="list-unstyled">
                                <li class="mb-2"><a href="/" class="text-white-50">Home</a></li>
                                <li class="mb-2"><a href="/products.html" class="text-white-50">Products</a></li>
                                <li class="mb-2"><a href="/about.html" class="text-white-50">About Us</a></li>
                                <li class="mb-2"><a href="/contact.html" class="text-white-50">Contact</a></li>
</ul>
                        </div>
                        <div class="col-lg-4">
                            <h5 class="text-uppercase mb-4">Connect With Us</h5>
                            <a href="https://youtube.com" class="text-white-50 me-3" target="_blank">
                                <i class="bi bi-youtube fs-4"></i>
                            </a>
                            <a href="https://telegram.org" class="text-white-50" target="_blank">
                                <i class="bi bi-telegram fs-4"></i>
                            </a>
                        </div>
                    </div>
                    <hr class="my-4 bg-secondary">
                    <div class="text-center">
                        <p class="small mb-0">&copy; 2023 TradePulse Hub. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);