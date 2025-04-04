export const metadata = {
  title: "Cart",
  description: "This is the cart page for looking what you have in your cart",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-zinc-50">
        <div>{children}</div>
      </body>
    </html>
  );
}
