import Head from "next/head";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const dynamic = () => {
    const router = useRouter();
    console.log("router",router); 
    return <div><Head><title>{router.query.dynamic}</title></Head>Page {router.query.dynamic}
    <Link href="/">Back to home</Link></div>
}

export default dynamic;