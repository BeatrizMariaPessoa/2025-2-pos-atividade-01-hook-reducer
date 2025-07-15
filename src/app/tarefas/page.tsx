"use client";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Tarefa {
    id: number;
    nome: string;
    descricao: string;
    concluida: boolean;
}

function TarefasPage() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);    useEffect(() => {
        const tarefasSalvas = localStorage.getItem("tarefas");
        if (tarefasSalvas) {
            setTarefas(JSON.parse(tarefasSalvas));
        }
    }, []);

    const toggleTarefaConcluida = (id: number) => {
        const tarefasAtualizadas = tarefas.map(tarefa => 
            tarefa.id === id 
                ? { ...tarefa, concluida: !tarefa.concluida }
                : tarefa
        );
        setTarefas(tarefasAtualizadas);
        localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas));
    };
    
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
          <ul className="flex flex-col gap-2 mt-4">
            <li className="border-2 p-2 rounded-sm pb-2 border-gray-300 flex flex-row justify-between items-top">
              <div className="max-w-7xl">
                <h2 className="text-lg font-semibold mb-4">Nome da tarefa</h2>
                <Badge variant={"destructive"} className="mb-2">pendente</Badge>
                <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. P inventore maiores. Maxime expedita, beatae accusamus culpa quos adipisci inventore assumenda repellendus, cumque iusto itaque alias fugiat quidem ea.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro quas inventore maiores. Maxime expedita, beatae accusamus culpa quos adipisci inventore assumenda repellendus, cumque iusto itaque alias fugiat quidem ea.
                  delectus, exercitationem totam atque fuga reiciendis! Accusantium, pariatur sapiente. Mollitia hic iste molestiae a?</p>
              </div>
              <div className="space-x-3">
                <Button variant="outline" className="mt-2">
                  <Link href="/tarefas/nova">Editar</Link>
                </Button>
                <Button variant="destructive" className="mt-2">
                  <Link href="/tarefas/nova">Apagar</Link>
                </Button>
              </div>
            </li>
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