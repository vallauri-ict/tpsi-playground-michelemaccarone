4. > **LEZIONE 4**
     4. > *Consegna Ajax - Ese 4 Automobili - Soluzione 2*
     
## Obiettivo:
Si vuole realizzare una applicazione per l’esposizione/vendita di automobili usate. Il sistema è basato sul database db.json.

## Svolgimento:
La realizzazione di questa soluzione è molto simile alla prima. (vedi https://github.com/vallauri-ict/tpsi-playground-MarengoSimone/tree/master/Ajax/esercizio4%20Automobili). La differenza
con la prima soluzione è nel momento della creazione delle celle nella tabella. Nella seconda soluzione non abbiamo più le proprietà nome e alimentazione salvate all'interno del listbox Modelli.
In questo caso abbiamo l'id dell'elemento attualmente selezionato (variabile modelloSelezionato). Tramite questo id è stata richiamata una nuova richiesta GET che mi fornisse i dati
del modello attualmente selezionato. Sulla done della richiesta ho poi inserito i dati nome e alimentazione del modello restituito. All'interno della stessa funzione done è stata completata
la tabella con i dati dell'automobile precedentemente resituita da una richiesta GET.
