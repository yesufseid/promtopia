import"@styles/globals.css";
import Nav from "../components/Nav"
import provider from "../components/providers";


export const metadata={
    title:"proptopia",
    discription:"discover and share ai propmts"
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
      <provider>
       <div className="main">
        <div className="gradient"/>
       </div>
       <main className="app">
       < Nav />
        {children}
       </main>
       </provider>
      </body>
    </html>
  )
}
