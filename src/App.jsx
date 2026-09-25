import './App.css'

import coffeeImage from './assets/ethiopian-coffee.jpg'
import coffeeProduct from './assets/coffee-product.jpg'
import sesameProduct from './assets/sesame-product.jpg'
import agricultureProduct from './assets/agriculture-product.jpg'

function App() {
  return (
    <div className="site">

      <header className="navbar">
        <a href="#home" className="logo">
          ETHIO<span>HARVEST</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Request a Quote
        </a>
      </header>

      <main>

        <section id="home" className="hero-section">

          <div className="hero-content">
            <p className="eyebrow">
              ETHIOPIAN EXPORT COMPANY
            </p>

            <h1>
              Connecting
              <span> Ethiopia </span>
              to the World.
            </h1>

            <p className="hero-text">
              Premium Ethiopian coffee, sesame and agricultural
              products prepared for international markets.
            </p>

            <div className="hero-buttons">
              <a href="#products" className="primary-button">
                Explore Products
              </a>

              <a href="#contact" className="secondary-button">
                Request a Quote
              </a>
            </div>
          </div>

          <div className="hero-card">
            <img
              src={coffeeImage}
              alt="Ethiopian coffee"
              className="hero-image"
            />

            <div className="hero-card-content">
              <p>ETHIOPIAN</p>
              <strong>ORIGIN</strong>
              <span>From the land of origin</span>
            </div>
          </div>

        </section>


        <section id="products" className="section">

          <div className="section-heading">
            <p className="eyebrow">
              OUR PRODUCTS
            </p>

            <h2>
              Products from Ethiopia
            </h2>

            <p>
              Carefully selected products sourced from Ethiopian
              producers and prepared for global markets.
            </p>
          </div>


          <div className="products-grid">

            <article className="product-card">

              <img
                src={coffeeProduct}
                alt="Ethiopian coffee"
                className="product-image"
              />

              <div className="product-content">

                <p className="product-category">
                  COFFEE
                </p>

                <h3>
                  Ethiopian Coffee
                </h3>

                <p>
                  Specialty and commercial coffee sourced from
                  renowned Ethiopian coffee-growing regions.
                </p>

                <a href="#contact">
                  Request Information →
                </a>

              </div>

            </article>


            <article className="product-card">

              <img
                src={sesameProduct}
                alt="Ethiopian sesame seeds"
                className="product-image"
              />

              <div className="product-content">

                <p className="product-category">
                  AGRICULTURAL
                </p>

                <h3>
                  Sesame Seeds
                </h3>

                <p>
                  Quality Ethiopian sesame prepared for
                  international food and agricultural markets.
                </p>

                <a href="#contact">
                  Request Information →
                </a>

              </div>

            </article>


            <article className="product-card">

              <img
                src={agricultureProduct}
                alt="Ethiopian agricultural products"
                className="product-image"
              />

              <div className="product-content">

                <p className="product-category">
                  AGRICULTURE
                </p>

                <h3>
                  Agricultural Products
                </h3>

                <p>
                  A growing selection of Ethiopian agricultural
                  commodities available for international buyers.
                </p>

                <a href="#contact">
                  Request Information →
                </a>

              </div>

            </article>

          </div>

        </section>


        <section id="about" className="about-section">

          <div>
            <p className="eyebrow">
              ABOUT ETHIO HARVEST
            </p>

            <h2>
              From Ethiopian producers to global buyers.
            </h2>
          </div>

          <div className="about-text">
            <p>
              Ethio Harvest Export is a fictional demonstration
              company created to showcase how an Ethiopian export
              business can build a professional digital presence.
            </p>

            <p>
              Our focus is connecting quality Ethiopian products
              with buyers around the world through reliable
              communication and transparent product information.
            </p>
          </div>

        </section>


        <section className="process-section">

          <div className="section-heading">
            <p className="eyebrow">
              OUR PROCESS
            </p>

            <h2>
              Simple. Clear. Reliable.
            </h2>
          </div>

          <div className="process-grid">

            <div>
              <span>01</span>
              <h3>Source</h3>
              <p>
                Connect with trusted Ethiopian producers and suppliers.
              </p>
            </div>

            <div>
              <span>02</span>
              <h3>Prepare</h3>
              <p>
                Prepare products and documentation for export markets.
              </p>
            </div>

            <div>
              <span>03</span>
              <h3>Connect</h3>
              <p>
                Respond to international buyer inquiries and requests.
              </p>
            </div>

          </div>

        </section>


        <section id="contact" className="contact-section">

          <div>
            <p className="eyebrow">
              LET'S WORK TOGETHER
            </p>

            <h2>
              Looking for Ethiopian products?
            </h2>

            <p>
              Contact our team to discuss products, quantities
              and international sourcing requirements.
            </p>
          </div>

          <a
            href="mailto:info@ethioharvest.example"
            className="primary-button"
          >
            Request a Quote
          </a>

        </section>

      </main>


      <footer>

        <div>
          <a href="#home" className="logo">
            ETHIO<span>HARVEST</span>
          </a>

          <p>
            Ethiopian products. Global connections.
          </p>
        </div>

        <p>
          © 2026 Ethio Harvest Export — Demo Website
        </p>

      </footer>

    </div>
  )
}

export default App
