export interface ICountry {
    alpha3Code: string;
    name: string; // Nombre
    region: string; // Región
    flag: string;
    nativeName?: string; // Nombre nativo
    population?: number; // Población
    subregion?: string; // Sub Región
    capital?: string; // Capital
    topLevelDomain?: string[]; // Top Level Domain
    currencies?: any[]; // Moneda
    languages?: any[]; // Lenguajes
    borders?: string[]; // Paises fronterizos
}
