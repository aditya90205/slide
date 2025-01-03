"use client"
import { usePathname } from "next/navigation"


export const usePaths = () => {
    const pathname = usePathname();
    console.log("use path",pathname);
    
    const path = pathname.split('/')
    let page = path[path.length - 1]
    console.log("page",page);
    
    return {page, pathname}
}