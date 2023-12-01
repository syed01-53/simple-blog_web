import Link from "next/link"


export default function Header(){
    return(
        <>
        <div className="flex flex-row max-w-9xl  bg-black justify-around p-1 h-16  ">
           <div >
           <span className="text-4xl text-red-500">B</span><span className="text-amber-400 text-lg">L</span><span className="text-blue-800 text-2xl">0</span><span className="text-orange-700">g</span>
           </div>
           <div className="page-ofblog ">
            <ul className="flex text-white justify-between p-3 text-xl">
                <div className="px-2"><li> <Link href="./Home" >Home</Link> </li></div>
                <div className="px-2"><li><Link href="./Blog">Blog</Link></li></div>
            </ul></div>
        
        </div>
        </>
    )

}