import { ReactElement } from "react";

interface IGame {
    name: string;
    rulesPage: ReactElement;
}

type IGames = IGame[];

export type { IGame, IGames };
