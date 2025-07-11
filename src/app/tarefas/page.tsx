"use client";
import Header from "@/components/header";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function TarefasPage() {
    const [tarefas, setTarefas] = useState([]);
    
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 m-3">
            <h1 className="text-2xl font-bold mb-4">Tarefas</h1>
            <Button>
                <Link href="/tarefas/nova" className="flex items-center gap-2">
                    <span>Adicionar Nova Tarefa +</span>
                </Link>
            </Button>

            <ul>
              {tarefas.map((tarefa, index) => (
                <li key={index} className="mb-2">
                  {tarefa}
                </li>
              ))}
            </ul>
        </main>
        <footer className="bg-gray-100 py-4 px-6 text-center text-sm text-gray-600">
          <p>
            GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
            <br />
            <a
              href="https://fsf.org/"
              className="hover:text-gray-800 underline"
            >
              Copyright (C) 2007 Free Software Foundation, Inc.
            </a>

          </p>
        </footer>
      </div>
    );
    }

export default TarefasPage;