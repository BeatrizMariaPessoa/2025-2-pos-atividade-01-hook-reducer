import Image from "next/image";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="m-auto flex w-full max-w-2xl flex-col items-center justify-center gap-4 p-6">
          <h2 className="font-semibold text-2xl">
            Atividade 1 do 2o bimestre com hook reducer e shadcnui
          </h2>
          <Button asChild className="w-2xl items-center gap-2 md:flex-row">
            <Link href="/tarefas">Tarefas</Link>
          </Button>
        </section>
      </main>
      <footer className="bg-gray-100 py-4 px-6 text-center text-sm text-gray-600">
        <p>
          GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
          <br />
          <a href="https://fsf.org/" className="hover:text-gray-800 underline">
            Copyright (C) 2007 Free Software Foundation, Inc.
          </a>
        </p>
      </footer>
    </div>
  );
}
