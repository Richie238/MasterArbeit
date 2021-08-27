import React, { useState } from 'react';
import Navbar from '../Navbar/NavBar';
import Arrangement from '../Data/Arrangement';
import Formular from '../Formular/formular';
import {BrowserRouter as Router, Route} from "react-router-dom";

class Schnittpunkt extends React.Component{
    render(){
        return(
            <Router>
      <Navbar></Navbar>
   {/* Routes */}

      <Route exact path="/" component={Arrangement}/>
      <Route path="/Formular/:titel/:natuerlichePerson/" component={({match})=><Formular 
      
    //   <Route path="/Formular/:titel/:natuerlichePerson/:juristischePerson/:artDerPerson/:familienname/:vorname/:geschlecht/:geburtsdatum/:familienstand/:staatsangehoerigkeit/:religion/:anschrift/:kontakt/:email/:namedesUnternehmen/:handelsregister/:umsatzsteuer/:ort/:datum/:uhrzeit/:teilnehmer/:ausweissnummer/:antragsteller/:datumdesBeginn/:datumdesEnde/:kommentarcheck/:pdf/:bild/:word/:multipleChoice/:offene/:neueFelder/:textInput/:beschreibung/:kommentar/:anrede/:titelbzwGrade/:bankverbindung/:geburtsname/:ehegatte" component={({match})=><Formular 
      
                                                                                             titel={match.params.titel}
                                                                                             natuerlichePerson={match.params.juristischePerson}
                                                                                            //  juristischePerson={match.params.juristischePerson}
                                                                                            //  artDerPerson={match.params.artDerPerson}
                                                                                            //  familienname={match.params.familienname}
                                                                                            //  vorname={match.params.vorname}
                                                                                            //  geschlecht={match.params.geschlecht}
                                                                                            //  geburtsdatum={match.params.geburtsdatum}
                                                                                            //  familienstand={match.params.familienstand}
                                                                                            //  staatsangehoerigkeit={match.params.staatsangehoerigkeit}
                                                                                            //  religion={match.params.religion}
                                                                                            //  anschrift={match.params.anschrift}
                                                                                            //  kontakt={match.params.kontakt}
                                                                                            //  email={match.params.email}
                                                                                            //  namedesUnternehmen={match.params.namedesUnternehmen}
                                                                                            //  handelsregister={match.params.handelsregister}
                                                                                            //  umsatzsteuer={match.params.umsatzsteuer}
                                                                                            //  ort={match.params.ort}
                                                                                            //  datum={match.params.datum}
                                                                                            //  uhrzeit={match.params.uhrzeit}
                                                                                            //  teilnehmer={match.params.teilnehmer}
                                                                                            //  ausweissnummer={match.params.ausweissnummer}
                                                                                            //  antragsteller={match.params.antragsteller}
                                                                                            //  datumdesBeginn={match.params.datumdesBeginn}
                                                                                            //  datumdesEnde={match.params.datumdesEnde}
                                                                                            //  kommentarcheck={match.params.kommentarcheck}
                                                                                            //  pdf={match.params.pdf}
                                                                                            //  bild={match.params.bild}
                                                                                            //  word={match.params.word}
                                                                                            //  multipleChoice={match.params.multipleChoice}
                                                                                            //  offene={match.params.offene}
                                                                                            //  neueFelder={match.params.neueFelder}
                                                                                            //  titel={match.params.titel}
                                                                                            //  textInput={match.params.textInput}
                                                                                            //  beschreibung={match.params.beschreibung}
                                                                                            //  kommentar={match.params.kommentar}
                                                                                            //  anrede={match.params.anrede}
                                                                                            //  titelbzwGrade={match.params.titelbzwGrade}
                                                                                            //  bankverbindung={match.params.bankverbindung}
                                                                                            //  geburtsname={match.params.geburtsname}
                                                                                            //  ehegatte={match.params.ehegatte}

                                                                                              />}/>

    </Router>
    )
        }
}

export default Schnittpunkt;
