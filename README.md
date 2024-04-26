# eBRÁNA Frontend testovací úloha

Úvodní repozitář pro testovací úlohu. Jedná se o základní projekt vytvořený pomocí [`npm create vite@latest`](https://vitejs.dev/guide/) (react + typescript).

Projekt byl rozšířen o [`json-server`](https://github.com/typicode/json-server/actions/workflows/node.js.yml) pro umožnění lokálního získávání dat. Zároveň byl přidán [`sass`](https://sass-lang.com/) a testovací data.

## Nastavení

- Pro instalaci závislostí použij příkaz `npm install`.
- Pro spuštění react projektu použij `npm run dev`.
- Pro spuštění json-serveru použij `npm run json-server`.
- Je potřeba mít spuštěné oba současně (json-server běží obvykle na `http://localhost:3000/`, avšak adresa se může lišit).

## Zadání

Grafický návrh náhled: [odkaz](https://www.figma.com/proto/0u59wYxcHZj8Mq0reGgJdy/Frontend-Testovac%C3%AD-%C3%BAloha?node-id=2002-12295&starting-point-node-id=2002%3A12295&mode=design&t=sODUxnCzyunWA0UA-1)

Figma soubor: [odkaz](https://www.figma.com/file/0u59wYxcHZj8Mq0reGgJdy/Frontend-Testovac%C3%AD-%C3%BAloha?type=design&node-id=2002%3A12295&mode=design&t=5pFJP3GjrrDWNDft-1)

Návrhy obsahují i komentáře s popisem. Pro zobrazení komentů je potřeba být přihlášený do Figma účtu.

### Úkoly

Jedná se o aplikaci, která zobrazuje seznam produktů a umožňuje uživatelům hodnotit jednotlivé produkty. Uživatelé si mohou zobrazit hodnocení od ostatních uživatelů a přidat své vlastní hodnocení. Pokud uživatel již hodnocení přidal, může ho upravit a poté odeslat.

Vzhled a bližší popis jednotlivých komponent jsou již připraveny v návrhu. Úkolem je vytvořit funkční aplikaci, která získává data z lokálního json-serveru.

Veškeré podklady se dají stahovat z figma souboru.

Je možné si doinstalovat i balíčky 3. stran, pokud to považujete za nutné. Nicméně není povolenou používat žádnou knihovnu pro stylování a ani komponentovou knihovnu. Na stylování je povolen pouze sass a css.

## Akceptační kritéria

- Aplikace získává seznam produktů z lokálního json-serveru.
- Produkty jsou vypsané v seznamu.
    - Zobrazujeme pouze 4 produkty na stránku, tudíž funguje tlačítko pro načtení dalších produktů.
- Aplikace umožňuje uživatelům přidat/odebrat/upravit svoje hodnocení produktu.
    - Hodnocení probíhá pomocí hvězdiček.
    - Uživatelé mohou přidat komentář k produktu.
    - Po dokončení hodnocení je možné jej odeslat. Po odeslání se zobrazí v seznamu produktů.
    - Hodnocení se nemusí ukládat na json-server, stačí v rámci aplikace (způsob, jak hodnocení ukládat, je na vás).
- Aplikace je responzivní.
    - Vzhled na menších zařízeních je na vás. Nicméně je potřeba dodržet základní design projektu.
- Aplikace nepoužívá žádnou knihovnu pro stylování (např. bootstrap, material-ui, tailwindcss atd.).
    - Povoleny jsou pouze sass a css.
- Uživatelé mohou zobrazit hodnocení od ostatních uživatelů.
    - Komentáře ostatních uživatelů mohou být označeny jako "lajkované".
- Sekce "Moje celková spokojenost" reaguje na mé hodnocení.
- Pokud mám vyplněno nejméně jedno hodnocení, mám možnost své hodnocení odeslat. Tato akce vezme veškeré mé hodnocení a zaloguje ho do konzole. Zároveň přidá i mojí celkovou spokojenost. Každé hodnocení obsahuje následující informace:
    - ID produktu
    - Hodnocení v procentech
    - Komentář
    - Celková spokojenost

- Aplikace vychází z návrhu.
