import Header from "./Header";
import Footer from "./Footer";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../ErrorFallback";
import { Outlet } from "react-router-dom";

export default function Layout(): JSX.Element {
  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}