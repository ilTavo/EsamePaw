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
e le VIEWS, che però invece di renderizzare una pagina HTML, tramite la libreria REST restituiamo delle API Web.

La tecnologia scelta per la persistenza dei dati è PostgreSQL, è un potente sistema di database relazionale a oggetti open source con oltre 30 anni di sviluppo attivo che gli è valso una solida reputazione per affidabilità, robustezza delle funzionalità e prestazioni. La possibilità di creare dati di tipo JSON è una delle peculiarità che ha portato alla scelta.

Servizi e librerie utilizzate:
<br>
- <strong>Django REST Framework</strong><br>
<img src="https://www.django-rest-framework.org/img/logo.png" width="200px" >

### FRONTEND - REACT JS
Per rendere il frontend più leggere e dinamico possibile, è stato usato REACT, che grazie alla sua possibilità di dividere l'applicazione per componenti, rende la realizzazione e le future modifiche più comprensibili e snelle. 

Servizi e librerie usate:
<strong>Axios</strong> - per le chiamate alle API;
<br>
<img src="https://i.ytimg.com/vi/AirWT_XpEpM/maxresdefault.jpg" width="200px" >
<br>

<strong>MUI</strong> - per le componenti Material native
<img src="https://mui.com/static/logo.png" width="200px" >

## MANUALE UTENTE
### Bagnante
 Il bagnante riceve le credenziali al momento dell'inizio del suo soggirno: uno Username, associato all'ombrellone (es. Ombrellone15) e una password generata al momento. Una volta collegatosi al link, effettuerà la login, visualizzerà l'elenco dei prodotti, li aggiungerà al carrello secondo quantità, visualizzerà il totale e invierà l'ordine.  
  

###  Bar
Se il profilo utente sarà "staff" verrà caricata un altra schermata con l'elenco degli ordini di oggi ancora da evadere. Ogni ordine può essere accettato, e cambiato in consegnato.


### Pannello di controllo
Tramite il pannello di amministrazione nativo di Django è possibile modificare gli utenti, aggiungere prodotti a listino. e intervenire per manutenzione.
