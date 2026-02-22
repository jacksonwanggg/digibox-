import { Link } from "react-router-dom";
import MagneticButton from "../components/MagneticButton";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function NotFound() {
  useDocumentMeta({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist. Return to UNSW DigiSoc — UNSW Digital Society homepage.",
  });

  return (
    <section className="page-header not-found-page">
      <div
        className="blob blob-purple animate-pulse"
        style={{ width: 400, height: 400, top: -100, right: -100 }}
      />
      <div className="container not-found-content">
        <h1 className="not-found-title">
          <span className="gradient-text">404</span>
        </h1>
        <p className="not-found-message">Page not found</p>
        <p className="not-found-sub">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="not-found-actions">
          <Link to="/">
            <MagneticButton className="btn-primary">Back to Home</MagneticButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
