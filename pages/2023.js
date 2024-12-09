import Head from 'next/head';

export default function StaticPage() {
    return (
        <div className="h-screen w-screen">
            <Head>
                <title>Datathon UoM 2023</title>
                <meta name="description" content="Join our exciting datathon event!" />
            </Head>
            <object
                data="/page_2023.html"
                type="application/pdf"
                className="h-full w-full"
            >
                Error loading the page.
            </object>
        </div>
    );
}