import { auth, signIn, signOut } from "@/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const metadata = {
  title: "Account",
  description: "This is the account page for the app ",
};

export default async function SignIn() {
  const session = await auth();
  console.log(session);
  const user = session?.user;

  return user ? (
    <>
      <Card className={`mx-auto w-96 my-30 mt-40 text-center`}>
        <CardHeader className={`mb-10`}>
          <CardTitle className={`text-4xl mb-2`}>
            Welcome {user?.name}
          </CardTitle>
          <CardDescription>{user?.email}</CardDescription>
        </CardHeader>
        <CardContent
          className={`mb-10 text-center flex items-center justify-center`}
        >
          <form
            className="text-center"
            action={async () => {
              "use server";
              await signOut("");
            }}
          >
            <button
              type="submit"
              className="flex text-xl rounded cursor-pointer duration-150 hover:border-[#00000069] hover:shadow-md items-center px-4 py-2 border shadow-sm gap-4 "
            >
              Sign Out{" "}
            </button>
          </form>
        </CardContent>
        <CardFooter className={`text-center flex items-center justify-center`}>
          <div className="flex flex-col items-center gap-2">
            <Image
              className="rounded-full"
              src={user?.image}
              alt={user?.name}
              width={50}
              height={50}
            />
            <p>It is nice to see you :D</p>
          </div>
        </CardFooter>
      </Card>
    </>
  ) : (
    <>
      <Card className={`mx-auto w-96 my-30 mt-40 text-center`}>
        <CardHeader className={`mb-10`}>
          <CardTitle className={`text-4xl mb-2`}>Sign up</CardTitle>
          <CardDescription>Sign up for more features</CardDescription>
        </CardHeader>
        <CardContent
          className={`mb-10 text-center flex items-center justify-center`}
        >
          <div>
            <form
              className="text-center"
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button
                type="submit"
                className="flex mb-4 text-xl rounded cursor-pointer duration-150 hover:border-[#00000069] hover:shadow-md items-center px-4 py-2 border shadow-sm gap-4 "
              >
                <FcGoogle className="text-xl" /> Sign up with Google{" "}
              </button>
            </form>
            <form
              className="text-center"
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button
                type="submit"
                className="flex text-xl rounded cursor-pointer duration-150 hover:border-[#00000069] hover:shadow-md items-center px-4 py-2 border shadow-sm gap-4 "
              >
                <FaGithub className="text-xl" /> Sign up with Github{" "}
              </button>
            </form>
          </div>
        </CardContent>
        <CardFooter className={`text-center flex items-center justify-center`}>
          <p>It is free :D</p>
        </CardFooter>
      </Card>
    </>
  );
}
