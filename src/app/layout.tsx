// The root layout is a required file in the app directory.
// Since all rendering is handled by either the [locale] layout
// or the not-found.tsx page, this component is just a pass-through.
import "./globals.css";
export default function RootLayout({children}: {children: React.ReactNode}) {
  return children;
}