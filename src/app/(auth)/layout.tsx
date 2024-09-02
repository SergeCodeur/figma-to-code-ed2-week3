export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-auto max-w-[400px] w-full border border-tokena-light-gray rounded-xl p-6">
        {children}
      </div>
    </div>
  );
}
