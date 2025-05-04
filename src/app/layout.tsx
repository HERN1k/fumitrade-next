import Constants from "@/constants";
import "./globals.css";

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
        <div className="loaderContainer loaderConteinerInView" id={Constants.GENERAL_LOADING_ID}>
          <div className="loader">
            <h1 className="title"></h1>
          </div>
        </div>
      </body> 
    </html>
  );
}