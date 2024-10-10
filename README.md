# Programiranje Korisnickih Interfejsa Ispit Oktobar 2024

Ovaj repozitorijum poseduje izvorni kod aplikacije za ispit iz predmeta
programiranje korisničkih interfejsa na smeru računarske nauke,
Fakulteta za informatiku i računarstvo Univerziteta Singidunum

## Tehnologije
Aplikacija je razvijena upotrebom frontend okruženja Angular 18
Pored toga korišćene su sledeće biblioteke:

-[Angular Material](https://material.angular.io/)

-[Sweet Alerts 2](https://sweetalert2.github.io/)

## Struktura aplikacije

Izvorni kod aplikacije koristi standradnu strukturu Angular projekta
bez `app.module.ts` datoteke koja nije potrebna od verzije 18.
Svi potrebni moduli se uvoze direktno u komponentama koje ih koriste

Prikaz svih direktorijuma:

- `src/app` - Glavni direktorijum koji sadrži sve komponente
- `src/models` - Direktorijum u kom skladištimo definicije tipova/interfejsa potrebnih za brži razvoj aplikacije
-`src/services` - Direktorijum koji sadrži definicije servisa potrenih za rad aplikacije

## Dodatne informacije

Aplikacija koristi Angular Router koji zahteva da prilikom puštanja aplikacije u produkciju
svaka putanja bude redirektovana na `index.html` datoteku jer su rute definisane programski u 
javascript-u, a ne fizički postojanjem fajlova 
