import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, GameController } from "phosphor-react";
import { Input } from "./Form/Input";
import { useEffect, useState } from "react";

interface Game {
  id: string;
  title: string;
}

export const CreateAdModal = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      });
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio
        </Dialog.Title>

        <form className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="game">
              Qual o game?
            </label>
            <select
              id="game"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
            >
              <option disabled selected value={""}>
                Selecione o game que você deseja jogar
              </option>

              {games.map((game) => {
                return (
                  <option value={game.id} key={game.id}>
                    {game.title}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-semibold" htmlFor="name">
              Seu nome?
            </label>
            <Input id="name" type="text" placeholder="Digite seu nome" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="yearsPlaying">
                Joga a quantos anos?
              </label>
              <Input
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser zero"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="discord">
                Qual o seu discord?
              </label>
              <Input id="discord" type="text" placeholder="usuario#00000" />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="weekDays">
                Quando costuma jogar?
              </label>
              <div className="grid grid-cols-4 gap-2">
                <button className="w-8 h-8 rounded bg-zinc-900" title="Domingo">
                  D
                </button>
                <button className="w-8 h-8 rounded bg-zinc-900" title="Segunda">
                  S
                </button>
                <button className="w-8 h-8 rounded bg-zinc-900" title="Terça">
                  T
                </button>
                <button className="w-8 h-8 rounded bg-zinc-900" title="Quarta">
                  Q
                </button>
                <button className="w-8 h-8 rounded bg-zinc-900" title="Quinta">
                  Q
                </button>
                <button className="w-8 h-8 rounded bg-zinc-900" title="Sexta">
                  S
                </button>
                <button className="w-8 h-8 rounded bg-zinc-900" title="Sábado">
                  S
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label className="font-semibold" htmlFor="hourStart">
                Qual o horário do dia?
              </label>
              <div className="grid grid-cols-2 gap-2">
                <Input id="hourStart" type="time" placeholder="De" />
                <Input id="hourEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>

          <div className="mt-2 flex gap-2 text-sm">
            <Checkbox.Root className="w-6 h-6 rounded p-1 bg-zinc-900">
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz?
          </div>
          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold  hover:bg-zinc-600"
              type="button"
            >
              Cancelar
            </Dialog.Close>
            <button
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
              type="submit"
            >
              <GameController size={24} />
              Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
