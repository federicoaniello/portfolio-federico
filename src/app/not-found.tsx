'use client';

export default function NotFound() {
  // Note that this is a simple, non-localized 404 page.
  // For a localized 404 page, you would need to use `next-intl`'s
  // `notFound` function within your pages and create a `not-found.tsx`
  // under the `[locale]` segment. This is a fallback for routes
  // that do not even match a locale.
  return (
    <html>
      <body className="bg-gray-900 text-white flex items-center justify-center min-h-screen text-center">
        <div>
          <h1 className="mt-10 font-semibold text-2xl">404 - Not Found</h1>
          <p className="text-gray-400 mt-2">This page could not be found.</p>
        </div>
      </body>
    </html>
  );
}
