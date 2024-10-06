// routes/details/[businessId]/layout.jsx

export default function BusinessDetailsLayout({ children }) {
  return (
    <div>
      <header>
        <h1>Business Details</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
