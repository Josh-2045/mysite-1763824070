class NavComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        nav {
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.875rem;
          font-weight: bold;
          color: #1f2937;
          text-decoration: none;
        }
        
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-link {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #1f2937;
        }
        
        .cart-icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #4b5563;
          text-decoration: none;
        }
        
        .cart-icon:hover {
          color: #1f2937;
        }
        
        .hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #4b5563;
        }
        
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          
          .hamburger {
            display: block;
          }
          
          .nav-links {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            background-color: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            gap: 1.5rem;
          }
          
          .nav-links.active {
            transform: translateY(0);
          }
        }
      </style>
      
      <nav>
        <div class="nav-container">
          <a href="index.html" class="logo">JOSH'S</a>
          
          <button class="hamburger">
            <i data-feather="menu"></i>
          </button>
          
          <ul class="nav-links">
            <li><a href="index.html" class="nav-link">Accueil</a></li>
            <li><a href="products.html" class="nav-link">Collections</a></li>
            <li><a href="about.html" class="nav-link">À propos</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
            <li>
              <a href="cart.html" class="cart-icon">
                <i data-feather="shopping-bag"></i>
                <span>Panier (0)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      
      <div style="height: 80px;"></div>
    `;

    // Mobile menu toggle
    const hamburger = this.shadowRoot.querySelector('.hamburger');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      
      // Change icon based on menu state
      const icon = hamburger.querySelector('i');
      if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });
  }
}

customElements.define('nav-component', NavComponent);