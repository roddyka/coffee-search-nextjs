import Link from "next/link";
import { Router, useRouter } from "next/router";

const CoffeeStore = () => {
    const router = useRouter();
    console.log("router",router);
    return <div>
        Coffee page {router.query.id}
    <   Link href="/"><a>Back to home</a></Link>
    </div>
}

export default CoffeeStore;