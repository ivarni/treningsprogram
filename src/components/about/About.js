import React from 'react';

export default function About() {
    return (
        <div>
            <p className="paragraph">
                Dette er et program basert på RYP som i sin tid ble laget
                av <a href="https://tn.no/">Tech Nutrition</a> men som de har
                bestemt seg for å slutte å tilby noen applikasjon eller webside for.
            </p>
            <p className="paragraph">
                Jeg har brukt samme formel for progresjon som det gamle programmet hadde
                men jeg har lagt opp til 3 sett på alle dager der det opprinnelig var noen
                av dagene som bare hadde 2.
            </p>
            <p className="paragraph">
                Det er også lagt opp til at du kan kjøre samme program som en 2-splitt
                der du bør kjøre 4 økter i uka. Bruker du det som 1-splitt kjører du 3 økter i uka.
            </p>
            <p className="paragraph">
                Du velger selv hvilke øvelser du vil gjøre. I det opprinnelige programmet
                ble disse øvelsene brukt:
            </p>
            <ol className="list">
                <li>Knebøy</li>
                <li>Skråbenk med manualer</li>
                <li>Nedtrekk</li>
                <li>Arnoldpress</li>
                <li>Bicepscurl</li>
                <li>Tricepspress</li>
                <li>Mage</li>
            </ol>
            <p className="paragraph">
                Når du setter opp programmet legger du inn din 10RM for hver øvelse.
                10RM er et mål på hvor mange kilo du klarer å gjøre 10 repetisjoner med
                og progresjonen i programmet vil være basert på dette. Programmet starter med
                12 repetisjoner på 80% av 10RM og slutter med 4 repetisjoner på 140% av 10RM.
            </p>
            <p className="paragraph">
                Når du har satt opp øvelser finner du selve programmet i menyen over.
                Du kan markere øvelsene som utført etter hvert som du gjør de og dette lagres i
                browseren din og blir liggende der til du enten endrer programmet eller sletter
                browserens cache.
            </p>
            <p className="paragraph">
                Finner du noen feil eller har du noen forslag til forbedringer så ta kontakt
                på <a href="mailto:post@ivarnilsen.com">post@ivarnilsen.com</a>.
            </p>
        </div>
    );
}
