import '../styles.css'
import Nav from "../components/Nav"
import Provider from "../components/providers";


export const metadata={
    title:"proptopia",
    discription:"discover and share ai propmts"
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
      <Provider>
       <div className="main">
        <div className="gradient"/>
       </div>
       <main className="app">
       < Nav />
        {children}
       </main>
       </Provider>
      </body>
    </html>
  )
}
