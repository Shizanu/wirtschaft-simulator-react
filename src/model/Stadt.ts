export interface Stadt {
    name: String;
    einwohnerzahl: number;
    gebaeude: Gebaeude[];
}

export interface Gebaeude {
    name : String;
    geldKosten : number;
}

