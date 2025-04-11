import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin text-8xl text-zinc-500" />
      {/* add this to redeploy
      github work correct now test google 
      test again
      and again*/}
    </div>
  );
}
