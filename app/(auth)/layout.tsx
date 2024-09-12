import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset bg-black bg-opacity-50">
        <div>
          <Image
            src="/icons/bank.jpg"
            alt="Auth image"
            width={600}
            height={600}
            className="rounded-l-xl object-contain"
          />
        </div>
      </div>
    </main>
  );
}
