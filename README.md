# Esame PAWM

<img src="https://avatars.githubusercontent.com/u/100955841?v=4" width="200" height="200">

[Panoramica](#panoramica-progetto) | [Tecnologie](#tecnologie-utilizzate) | [Manuale utente](#manuale-utente)

## PANORAMICA PROGETTO
Il progetto si rivolge ai stabilimenti balneari, per permettere ai bagnanti di ordniare dall'ombrellone, e evitare assembramenti all'interno del bar.
Il sistema è pensato come installazione dedicata al singolo stabilimento. La lista Utente/Ombrellone viene creata al momento dell'installazione manualmente: gli user sono fissi collegati all'ombrellone, 
al momento dell'assegnazione dell'ombrellone al bagnante, lo user (disattivato di default) viene attivato, data una nuova password, e assegnata una data di reset, che segna la fine della validità dell'utente e resetta la password a db.
Il bagnante tramite la schermata a lui dedicata compila un ordinazione organizzata prodotto per quantità, e vede il totale, e la invia.
Il Bar riceve la comanda su una videata dedicata (che visualizza solo le nuove richieste), conferma l'accettazione, e una volta preparata e mandata in spiaggia, può cambiare lo stato in evaso.

## TECNOLOGIE UTILIZZATE 

### BACKEND - DJANGO PYTHON
Si è deciso di utilizzare Django che utilizza una struttura MVT. Di questa struttura abbiamo sfruttato i MODEL per la creazione e le chiamate agli oggetti del database
e le VIEWS, che però invece di renderizzare una pagina HTML, ci restituiscono JSON per ..

La tecnologia scelta per la persistenza dei dati ...



Servizi e librerie utilizzate:
...


## MANUALE UTENTE

  ...

### Bagnante
 ..
  
  

###  Bar
...


### Pannello di controllo

