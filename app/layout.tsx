import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"Hotelia | Podłogi premium dla hoteli i biur",description:"Burmatex, Tarkett i Forbo — wykładziny dywanowe, podłogi drewniane i LVT z kompleksową obsługą i montażem w całej Polsce."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pl"><body>{children}</body></html>}
