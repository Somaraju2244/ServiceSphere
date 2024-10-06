// routes/mybooking/layout.jsx

export default function MyBookingLayout({ children }) {
  return (
    <div>
      <header>
        <h1>My Booking</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer content</p>
      </footer>
    </div>
  );
}
