import { Button } from "@/components/ui/button";
import { UserButton, auth, authMiddleware } from "@clerk/nextjs";
import { LogIn} from 'lucide-react'
import Link from "next/link";
import Image from "next/image";

export default async function Home() {

  const { userId } = await authMiddleware();
  const isAuth = !!userId;
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-rose-100 to-blue-600 ">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex item-center">
            <hi className= "mr-2 text-5x1 font-bold" >AI Data Extractor  </hi>
            <UserButton afterSignOutUrl="/"/>
          </div>
          <div className="flex mt-2">
            {isAuth && (
            <Button>Go to Chats</Button>)}
          </div>
          <p className="max-w-xl mt-2 text-lg text-slate-800">
            aayo milo silo saalo 
          </p>
          <div className="w-full mt-4">
           {isAuth ? (<h1>fileuplode</h1>):(
            <Link href='/sign-in'>

            <Button>Login to get Started!
              <LogIn className="w-4 h-4 m1-2"/>
            </Button>
            </Link>
           )  }
          </div>
        </div>
      </div>
    </div>
  );
}
