"use client";
import logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <>
      <div className="mb-3 flex flex-col items-center gap-4">
        <Image
          src={logo}
          alt="logo"
          priority
          width={212}
          height={60}
          className="w-2/5"
        />
        <h1 className="text-3xl font-bold text-center">Connectez-vous</h1>
      </div>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <Input
          id="email"
          type="email"
          placeholder="Votre adresse email"
          required
        />
        <Input
          id="password"
          type="password"
          placeholder="Votre mot de passe"
          required
        />
        <Button type="submit" className="w-full">
          Se connecter
        </Button>
        <Button variant="outline" className="w-full">
          Se connecter avec Google
        </Button>
      </form>
      <div className="mt-4 flex items-center justify-center gap-0.5 text-sm">
        Pas encore de compte ?
        <Link href="/sign-up" className="underline">
          S&apos;inscrire
        </Link>
      </div>
    </>
  );
};

export default SignInForm;
