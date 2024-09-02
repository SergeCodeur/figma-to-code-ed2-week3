import logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

const SignUpForm = () => {
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
        <h1 className="text-3xl font-bold text-center">Inscrivez-vous</h1>
      </div>
      <div>
        <form className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input placeholder="Votre nom" required />
            <Input placeholder="Votre prénom" required />
          </div>
          <div className="grid gap-2">
            <Input
              id="email"
              type="email"
              placeholder="Votre adresse email"
              required
            />
          </div>
          <div className="grid gap-2">
            <Input
              id="password"
              type="password"
              placeholder="Votre mot de passe"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            S&apos;inscrire
          </Button>
          <Button variant="outline" className="w-full">
            S&apos;inscrire avec Google
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Déjà un compte ?{" "}
          <Link href="/sign-in" className="underline">
            Se connecter
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
