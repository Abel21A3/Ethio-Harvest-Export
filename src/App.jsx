import './App.css'
import coffeeImage from './assets/ethiopian-coffee.webp'
import coffeeProduct from './assets/coffee-product.jpg'
import sesameProduct from './assets/sesame-product.jpg'
import agricultureProduct from './assets/agriculture-product.jpg'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            ETHIO<span>HARVEST</span>
          </a>

          <div className="nav-links">
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-button">
            Request a Quote
          </a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">ETHIOPIAN EXPORT COMPANY</p>

            <h1>
              Ethiopian products.
              <br />
              <span>Global connections.</span>
            </h1>

            <p className="hero-text">
              Connecting quality Ethiopian coffee, sesame and agricultural
              products with buyers around the world.
            </p>

            <div className="hero-buttons">
              <a href="#products" className="button button-primary">
                Explore Products
              </a>

              <a href="#contact" className="button button-secondary">
                Request a Quote
              </a>
            </div>

            <div className="hero-details">
              <div>
                <strong>ETHIOPIA</strong>
                <span>Product Origin</span>
              </div>

              <div>
                <strong>GLOBAL</strong>
                <span>Market Focus</span>
              </div>

              <div>
                <strong>B2B</strong>
                <span>Trade Inquiries</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <img
              src={coffeeImage}
              alt="Ethiopian coffee"
              className="hero-image"
            />

            <div className="hero-image-label">
              <span>ETHIOPIAN</span>
              <strong>ORIGIN</strong>
              <small>From the land of origin</small>
            </div>

            <div className="hero-image-badge">
              <span>01</span>
              <p>
                Explore
                <br />
                our products
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products-section" id="products">
          <div className="products-header">
            <div>
              <p className="eyebrow">OUR PRODUCTS</p>

              <h2>
                From Ethiopia
                <br />
                <span>to global markets.</span>
              </h2>
            </div>

            <p className="products-intro">
              Carefully selected Ethiopian agricultural products presented
              for international buyers seeking reliable sourcing
              opportunities.
            </p>
          </div>

          <div className="product-grid">
            <article className="product-card product-card-featured">
              <div className="product-image-wrap">
                <img
                  src={coffeeProduct}
                  alt="Ethiopian coffee"
                  className="product-image"
                />

                <span className="product-tag">FEATURED PRODUCT</span>
              </div>

              <div className="product-content">
                <div>
                  <p className="product-category">COFFEE</p>

                  <h3>Ethiopian Coffee</h3>

                  <p>
                    Ethiopian coffee sourced from the country's renowned
                    coffee-growing regions and presented for international
                    trade inquiries.
                  </p>
                </div>

                <a href="#contact" className="product-link">
                  Request Information <span>→</span>
                </a>
              </div>
            </article>

            <article className="product-card">
              <div className="product-image-wrap">
                <img
                  src={sesameProduct}
                  alt="Ethiopian sesame seeds"
                  className="product-image"
                />
              </div>

              <div className="product-content">
                <p className="product-category">OILSEEDS</p>

                <h3>Sesame Seeds</h3>

                <p>
                  Ethiopian sesame products presented for buyers seeking
                  agricultural commodities for international markets.
                </p>

                <a href="#contact" className="product-link">
                  Request Information <span>→</span>
                </a>
              </div>
            </article>

            <article className="product-card">
              <div className="product-image-wrap">
                <img
                  src={agricultureProduct}
                  alt="Ethiopian agricultural products"
                  className="product-image"
                />
              </div>

              <div className="product-content">
                <p className="product-category">AGRICULTURE</p>

                <h3>Agricultural Products</h3>

                <p>
                  A selection of Ethiopian agricultural products available
                  for international trade inquiries.
                </p>

                <a href="#contact" className="product-link">
                  Request Information <span>→</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* WHY ETHIOPIA */}
        <section className="why-section">
          <div className="why-intro">
            <p className="eyebrow">WHY ETHIOPIA</p>

            <h2>
              The origin
              <br />
              <span>matters.</span>
            </h2>

            <p>
              Ethiopia's diverse agricultural landscape creates products
              with strong connections to their places of origin and
              opportunities for international trade.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <div className="why-number">01</div>

              <h3>Agricultural Heritage</h3>

              <p>
                Ethiopia has a long agricultural tradition and diverse
                growing environments supporting a wide range of products.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">02</div>

              <h3>Coffee Origin</h3>

              <p>
                Ethiopia is widely recognized as the birthplace of coffee,
                with its origins traditionally associated with the Kaffa
                region.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">03</div>

              <h3>Product Diversity</h3>

              <p>
                Coffee, sesame and other agricultural commodities create
                opportunities to serve different international markets.
              </p>
            </div>

            <div className="why-card">
              <div className="why-number">04</div>

              <h3>Global Opportunity</h3>

              <p>
                Connecting Ethiopian products with international buyers
                creates opportunities for long-term business relationships.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="about-content">
            <p className="eyebrow">ABOUT US</p>

            <h2>
              Bringing Ethiopian products
              <br />
              closer to global buyers.
            </h2>

            <p>
              Ethio Harvest Export is a fictional demonstration company
              created to showcase how an Ethiopian export business can build
              a professional digital presence.
            </p>

            <p>
              Our concept focuses on connecting Ethiopian products to buyers
              through clear communication, product information and a
              professional online experience.
            </p>
          </div>

          <div className="about-side">
            <div className="about-stat">
              <strong>ETHIOPIA</strong>
              <span>Origin</span>
            </div>

            <div className="about-stat">
              <strong>GLOBAL</strong>
              <span>Market Focus</span>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="process-section" id="process">
          <div className="section-heading">
            <p className="eyebrow">OUR PROCESS</p>

            <h2>From source to connection.</h2>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <span>01</span>

              <h3>Source</h3>

              <p>
                Identify agricultural products and establish reliable
                sourcing relationships.
              </p>
            </div>

            <div className="process-item">
              <span>02</span>

              <h3>Prepare</h3>

              <p>
                Organize product information and prepare clear communication
                for potential buyers.
              </p>
            </div>

            <div className="process-item">
              <span>03</span>

              <h3>Connect</h3>

              <p>
                Connect with international buyers through direct inquiries
                and business communication.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">GET IN TOUCH</p>

            <h2>Looking for Ethiopian products?</h2>

            <p>
              Contact us to discuss products, quantities, markets and
              potential business opportunities.
            </p>
          </div>

          <a
            href="mailto:info@ethioharvest.example"
            className="contact-button"
          >
            info@ethioharvest.example
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>ETHIO HARVEST</strong>

          <p>Ethiopian products. Global connections.</p>
        </div>

        <p>© 2026 Ethio Harvest Export — Demo Website</p>
      </footer>
    </>
  )
}

export default App
