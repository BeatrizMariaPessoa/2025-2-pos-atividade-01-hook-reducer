"use client";
import Header from "@/components/header";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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
            <div className="mt-6">
                {tarefas.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">
                        Nenhuma tarefa encontrada. Adicione uma nova tarefa para começar!
                    </p>
                ) : (                    
                <ul>
                  {tarefas.map((tarefa) => (
                      <li key={tarefa.id} className="border rounded-lg p-4 shadow-sm bg-white">
                          <div className="flex items-start justify-between">
                              <div className="flex-1">
                                  <h3 className={`text-lg font-semibold ${tarefa.concluida ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                                      {tarefa.nome}
                                  </h3>
                                  {tarefa.descricao && (
                                      <p className={`mt-2 text-sm ${tarefa.concluida ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                                          {tarefa.descricao}
                                      </p>
                                  )}
                              </div>
                              <div className="flex items-center space-x-2 ml-4">
                                  <Button
                                      variant={tarefa.concluida ? "outline" : "default"}
                                      onClick={() => toggleTarefaConcluida(tarefa.id)}
                                  >
                                      {tarefa.concluida ? 'Reabrir' : 'Concluir'}
                                  </Button>
                                  <Button variant="destructive">
                                      <Link href={`/tarefas/${tarefa.id}/apagar`}>
                                          <span>Excluir</span>
                                      </Link>
                                  </Button>
                              </div>
                          </div>
                      </li>
                  ))}
                </ul>
                )}
            </div>
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