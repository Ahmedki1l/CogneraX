import React from "react";
import { Router, Route } from "./components/Router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Import all page components
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Features } from "./pages/Features";
import { Products } from "./pages/Products";
import { Legal } from "./pages/Legal";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { TermsOfService } from "./pages/TermsOfService";
import { CookiePolicy } from "./pages/CookiePolicy";
import { Security } from "./pages/Security";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Router>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/features">
            <Features />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/legal">
            <Legal />
          </Route>
          <Route path="/privacy">
            <PrivacyPolicy />
          </Route>
          <Route path="/terms">
            <TermsOfService />
          </Route>
          <Route path="/cookies">
            <CookiePolicy />
          </Route>
          <Route path="/security">
            <Security />
          </Route>
        </Router>
      </main>
      <Footer />
    </div>
  );
}