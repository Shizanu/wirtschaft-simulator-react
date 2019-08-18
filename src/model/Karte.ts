export interface Karte {
    felder : KartenFeld[][]; // indiziert als (x, y)
    groesseX : number;
    groesseY : number;
}

export interface KartenFeld {
    gelaendeArt : GelaendeArtEnum;
    xKoordinate : number;
    yKoordinate : number;
}

export enum GelaendeArtEnum {
    Grasland,
    Huegel,
    Gebirge,
    Wasser,
}