import "../styles/global.css";

// you can only import your global css in this file 
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}