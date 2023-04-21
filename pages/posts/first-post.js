import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout.js";
// import Script from "next/script"

export default function FirstPost() {
    // This page was created using "File system routing"
    // Client side navigation means that navigation is being handled by Javascript instead of the browser itself handeling it. CLN doesn't reload the full page.
    return (
        <Layout>
            <Head>
                <title>First Post</title>

                {/* We can also add third party Javascript here */}
                {/* <Script 
                    src = "https://connect.facebook.net/en_US/sdk.js"
                    strategy = "lazyOnLoad" // takes "onLoad" too
                    onLoad = {() => {
                        console.log(`script loaded correctly, window.FB has been populated.`)
                    }}
                /> */}

            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/"> ← Back to home</Link>
            </h2>
        </Layout>
    )
}