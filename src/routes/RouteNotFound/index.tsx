import { Helmet, HelmetProvider } from "react-helmet-async";

export default function RouteNotFound() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <title>Thea Oland Portfolio - Route Not Found</title>
        <meta name="description" content="Route not found" />
      </Helmet>
      <div className="bg-beige max-w-[50rem] flex flex-col align-center justify-center mx-auto mt-10 gap-4 rounded-lg p-4 min-m-2 h-full">
        <p className="text-center text-lg">Page not found.</p>
        <p className="text-danger italic w-full bg-background p-4 text-center rounded-lg">404</p>
      </div>
    </HelmetProvider>
  );
}
