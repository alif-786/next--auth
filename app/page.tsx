
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SignalZero } from "lucide-react";
import { LoginButton } from "@/components/auth/login-button";


const font  = Poppins({
  subsets: ['latin'],
  weight:["600", "700"]
})

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-sky-500 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-400 to-violet-800">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-white font-bold text-6xl drop-shadow-md text-center",font.className)}>
          🔐 Auth
        </h1>
        <p className="text-white text-lg">
          A simple Authentication service
        </p>
        <div>
          <LoginButton>
            <Button size={"lg"} variant={"secondary"}>Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
