// export default function FristPost(){
//     return <h1>First Post</h1>   
// }

import Link from 'next/link'
import Head from 'next/head'

export default function FristPost(){
    return(
        <>
        <Head>
            <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">
                <a>back to home</a>
            </Link>
        </h2>
        </>
    )

}