---
title: 'Nachlese zum Wahlsalon 2019'
description: '  Mit Open Data, Code und Design gegen Desinformation und Politikverdrossenheit'
author: Simon Jockers
date: '2019-05-23'
template: 'article'
hidden: false
lang: 'de'
---

Beim [Wahlsalon 2019](/wahlsalon) brachten wir für ein Wochenende Aktive und Interessierte aus Zivilgesellschaft, Journalismus und Verwaltung zusammen, um gemeinsam an Hacks und Prototypen rund um die Themen Wahlen, Politik und Open Data zu arbeiten. Ziel war es, demokratische Prozesse transparenter und zugänglicher zu machen. Dabei waren rund 30 Hacker\*innen, Journalist\*innen, Designer\*innen, Statistiker\*innen, und Politik-Nerds aus ganz Deutschland.

Zum Auftakt der Veranstaltung gab es kurze Vorträge von Kira Schacht (Journocode), die ihre Arbeit als Datenjournalistin vorstellte und Heidrun Stirner (Destatis), die eine Übersicht über aktuelle Entwicklungen bei den Statistischen Ämtern gab. Daniel Kraft vom Mannheimer Morgen sprach über die Sorgen und Nöte von Lokaljournalisten bei der Wahlberichterstattung. Daniel stellte außerdem ein Vorschlag vor, mit dem er und seine Kollegen von DDJBW die Veröffentlichung von Wahlergebnissen verbessern wollen.

Im Anschluss an die Vorträge stellten Teilnehmer\*innen Ideen vor und bildeten Teams, in denen Sie bis Sonntagnachmittag ganz verschiedene Fragestellungen bearbeiteten. Hier eine Auswahl von Projekten, die beim Wahlsalon entstanden sind:

### Abstimmungsverhalten im Europaparlament

[Screenshot]

Lisa Rost, Stefan Wehrmeyer und Jochen Klar arbeiteten daran, das Abstimmungsverhalten der EU-Parlamentarier zu visualisieren. Ihr Projekt ist inspiriert durch die Visualisierungen der Parlamentsabstimmungen, die Martin Sonneborn auf Twitter populär gemacht hat. Ihr Ergebnis ist ein Tool, das automatisch Abstimmungsergebnisse aus den offiziellen Veröffentlichungen des Europäischen Parlaments extrahiert und in einer Rasterdarstellung visualisiert.

- [Visualising EU Parliament Vote PDFs (Observable Notebook)](https://observablehq.com/@stefanw/parsing-eu-parliament-vote-pdfs)
- [Skripte zum extrahieren der Daten (Source Code)](https://github.com/jochenklar/meps)

### Parteiprogramme zur Europawahl

[Screenshot]

Das nächste Projekt ist ein schönes Beispiel dafür, wie Kooperation durch open source aussehen kann: Sebastian Schröder und Marco Holz erarbeiteten ein [Wahlprogramm-Quiz für die Europawahl](https://wahlprogrammquiz.de). Ihr Quiz baut einem älteren Projekt auf, das ursprünglich für die letzte Bundestagswahl entwickelt wurde. Die Texte der Wahlprogramme, die Sebastian und Marco für ihr Quiz gesammelt und aufbereitet haben, bildeten später die Basis für eine Datenanalyse, die Johannes Filter veröffentlicht hat. In dieser erstellt Johannes eine Rangliste der am häufigsten verwendeten Worte in den Wahlprogrammen der deutschen Parteien.

- [Wahlprogramm-Quiz](https://wahlprogrammquiz.de)
- [Wahlprogramm-Quiz (Source Code)](https://github.com/codedust/wahlsalon19-werhatsgesagt)
- [Maschinenlesbare Wahlprogramme der Europawahl 2019](https://github.com/basti-schr/eu-wahlprogramme)
- [Ranking der häufigsten Worte in den Wahlprogrammen](https://github.com/jfilter/most-frequent-words-2019-german-eu-election-programs)

### Wahlbeteiligung und andere regionale Statistiken

Ein Team um Alexandra Kapp und Lisa Hehnke von CorrelAid entwickelten einen Prototyp für eine interaktive Anwendung, die die Wahlbeteiligung bei der letzten Europawahl auf einer Karte darstellt und auf der Nutzer\*innen ihre Wahlabsicht bei der Wahl 2019 veröffentlichen können.

Gleichzeitig arbeiteten Christian Rijke und Simon Wörpel von Datenguide an Tools, die es einfacher machen, über die Datenguide-API mit Daten der amtlichen Statistik zu arbeiten. Mit diesen Tools können Entwickler\*innen und Datenjournalist\*innen schneller auf historische Wahldaten und andere regionale Statistiken zugreifen.

Aus dem Kontakt zwischen CorrelAid und Datenguide entstand die Idee, gemeinsam weiter daran zu arbeiten, die Datenschnittstelle von Datenguide besser mit den Programmiersprachen R und Python nutzbar zu machen. Inzwischen gibt es einen Aufruf, sich an diesem Projekt zu beteiligen: [Macht mit!](https://mailchi.mp/14a8f1458fca/correlaid-projektausschreibung-datenguide)

### Die Demographie des Brandenburger Landtags

Im Superwahljahr 2019 stehen nicht nur Europawahlen an, sondern auch Landtagswahlen in verschiedenen Bundesländern. Ein Team betrachtete beispielhaft den Brandenburger Landtag und verglich anhand amtlicher Statistiken, wie gut (oder wie schlecht) die Demographie der Landtagsabgeordneten die Brandenburger repräsentiert. Mehr zu diesem Projekt gibt es in einigen Wochen hier im Blog. Als kleiner Vorgeschmack: Hier eine unkommentierte Übersicht über die Geschlechterveteilung im Landtag.

---

Der Wahlsalon 2019 war ein gemeinsames Projekt von [Datenguide](/) und [Code for Germany](https://codefor.de). Die Veranstaltung wurde unterstützt von [Wikimedia Deutschland](https://wikimedia.de/) und dem [MIZ Babelsberg](https://www.miz-babelsberg.de/).
