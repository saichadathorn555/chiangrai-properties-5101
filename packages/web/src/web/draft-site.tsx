import { Link, Redirect, Route, Switch } from "wouter";
import Index from "./pages/index";
import PropertiesPage from "./pages/properties";
import PropertyPage from "./pages/property";
import VisualiserPage from "./pages/visualiser";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ListWithUsPage from "./pages/list-with-us";
import ServicesPage from "./pages/services";
import WorkWithUsPage from "./pages/work-with-us";
import BecomeCoAgentPage from "./pages/become-a-co-agent";
import PrivacyPage from "./pages/privacy";
import TermsPage from "./pages/terms";
import { SiteLayout } from "./components/site/layout";

function NotFound() {
  return (
    <section className="wrap py-40 text-center">
      <p className="eyebrow text-stone">404</p>
      <h1 className="display mt-4 text-5xl">Page not found</h1>
      <Link to="/" className="btn-line mt-10">Home</Link>
    </section>
  );
}

export default function DraftSite() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/properties" component={PropertiesPage} />
        <Route path="/property/:id" component={PropertyPage} />
        {/* Consultancy is paused: the public route redirects Home. pages/consultancy.tsx and its inquiry records are kept for a later relaunch. */}
        <Route path="/consultancy">{() => <Redirect to="/" replace />}</Route>
        <Route path="/visualiser" component={VisualiserPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/list-with-us" component={ListWithUsPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/work-with-us" component={WorkWithUsPage} />
        <Route path="/become-a-co-agent" component={BecomeCoAgentPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/terms" component={TermsPage} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}
