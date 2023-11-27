'use client'

import Link from "next/link";


export default function ButtonLink({name,href}) {
    return (
        <Link href={href}><button className="block w-full py-2 bg-btn-secondary text-white rounded-md text-l font-semibold cursor-pointer hover:bg-green-700">
        {name}
      </button></Link>
    );
}