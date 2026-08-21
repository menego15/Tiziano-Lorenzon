# Tiziano Lorenzon — Basket Personal Coaching

Sito statico: solo HTML e CSS, nessun JavaScript.

## Contenuto
- `index.html`, `mission.html`, `chi-sono.html`, `faq.html`, `blog.html` — le pagine del sito
- `uploads/` — immagini e PDF (volantino Academy, foto palestra, modulo iscrizione)
- `robots.txt`, `sitemap.xml` — indicizzazione per i motori di ricerca
- `CNAME` — dominio personalizzato per GitHub Pages (`tizianolorenzon.com`)
- Le cartelle a singola parola (`mission/`, `chi-sono/`, `blog/`, ecc.) sono redirect dai vecchi indirizzi del sito WordPress verso le nuove pagine `.html`, per non perdere l'indicizzazione già ottenuta su Google

## Pubblicare su GitHub Pages
1. Carica il contenuto di questa cartella nella radice di un repository GitHub.
2. Settings → Pages → Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
3. Dopo qualche minuto il sito è online su `https://<utente>.github.io/<repo>/`.
4. Per usare il dominio `tizianolorenzon.com`: Settings → Pages → Custom domain → inserisci `tizianolorenzon.com` (il file `CNAME` è già presente nel repo) e punta i DNS del dominio verso GitHub Pages.

I font (Oswald, Lato) sono caricati da Google Fonts: serve la connessione internet.
