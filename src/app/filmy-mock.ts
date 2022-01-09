import { Film } from './Film';

const filmy: Film[] = [];
let film = new Film('Kubus Puchatek', 'Bajka', '100min', new Date('2020-09-25'), '20:15', 2);
filmy.push(film);
film = new Film('Kopciuszek', 'Horror', '20min', new Date('2020-09-20'), '13:10', 4);
filmy.push(film);
film = new Film('Groch', 'Science-Fiction', '140min', new Date('2020-09-06'), '12:15', 3);
filmy.push(film);
export const Filmy = filmy;