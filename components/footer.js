class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        footer {
          background-color: #1f2937;
          color: white;
          padding: 3rem 2rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }
        
        .footer-section h3 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        .footer-section p {
          color: #d1d5db;
          line-height: 1.6;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-link {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: white;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .social-link {
          color: #d1d5db;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .social-link:hover {
          color: white;
        }
        
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-section {
            text-align: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }
      </style>
      
      <footer>
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>JOSH'S</h3>
              <p>Style contemporain, urbain et élégant pour révéler votre personnalité et accompagner vos moments de vie.</p>
              <div class="social-links">
                <a href="#" class="social-link"><i data-feather="instagram"></i></a>
                <a href="#" class="social-link"><i data-feather="facebook"></i></a>
                <a href="#" class="social-link"><i data-feather="twitter"></i></a>
                <a href="#" class="social-link"><i data-feather="linkedin"></i></a>
              </div>
            </div>
            
            <div class="footer-section">
              <h4>Collections</h4>
              <ul class="footer-links">
                <li><a href="products.html#urban" class="footer-link">Urbaine</a></li>
                <li><a href="products.html#elegant" class="footer-link">Élégante</a></li>
                <li><a href="products.html#comfort" class="footer-link">Confort</a></li>
                <li><a href="products.html" class="footer-link">Tout voir</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h4>Informations</h4>
              <ul class="footer-links">
                <li><a href="about.html" class="footer-link">À propos</a></li>
                <li><a href="contact.html" class="footer-link">Contact</a></li>
                <li><a href="#" class="footer-link">Livraison</a></li>
                <li><a href="#" class="footer-link">Retours</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h4>Légal</h4>
              <ul class="footer-links">
                <li><a href="#" class="footer-link">Mentions légales</a></li>
                <li><a href="#" class="footer-link">Politique de confidentialité</a></li>
                <li><a href="#" class="footer-link">CGV</a></li>
                <li><a href="#" class="footer-link">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; 2024 Josh's. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', FooterComponent);