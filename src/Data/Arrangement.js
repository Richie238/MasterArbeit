import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';

import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom'

// import ReactDOM from 'react-dom';
// import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
// import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class Arrangement extends React.Component{
    state = {
        natuerlichePerson:false,
        juristischePerson: false,
        artDerPerson:'',
        familienname:false,
        vorname:false,
        geschlecht: false,
        geburtsdatum:false,
        familienstand:false,
        staatsangehoerigkeit:false,
        religion:false,
        anschrift:false,
        kontakt:false,
        email:false,
        namedesUnternehmen:false,
        handelsregister:false,
        umsatzsteuer:false,
        ort:false,
        datum:false,
        uhrzeit:false,
        teilnehmer:false,
        ausweissnummer:false,
        antragsteller:false,
        datumdesBeginn:false,
        datumdesEnde:false,
        kommentarcheck:false,
        pdf: false,
        bild: false,
        word: false, 
        neueFelder: [],
        titel: "",
        textInput:"",
        beschreibung:false,
        kommentar:false,
        geburtsname: false,
        ehegatte: false,
        anrede: false,
        titelbzwGrade: false,
        bankverbindung: false,
        multipleChoice: false,
        offene: false,
    }

    errorControl(){

    };

    //Handle Change: manipulation du changement// gestionnaire d'événement

     handleChangeArtDerPerson(value){
      if(value === 'Natürlich'){
          this.setState({juristischePerson:false})
          this.setState({natuerlichePerson:true})
          this.setState({artDerPerson:'Natürlich'})

      }else if(value === 'Juristisch'){
        this.setState({juristischePerson:true})
        this.setState({natuerlichePerson:false})
        this.setState({artDerPerson:'Juristisch'})

      }else{
        this.setState({juristischePerson:false})
        this.setState({natuerlichePerson:false})
        this.setState({artDerPerson:''})

      }
    };

    handleChangePersönlichNatürlich(value){
        if(value === 'Familienname'){
            if(this.state.familienname===false){
                this.setState({familienname:true})
            } else if(this.state.familienname===true){
                this.setState({familienname:false})
            }
  
        }else if(value === 'Vorname'){
            if(this.state.vorname===false){
                this.setState({vorname:true})
            } else if(this.state.vorname===true){
                this.setState({vorname:false})
            }

        }else if(value === 'Geburtsname'){
            if(this.state.geburtsname===false){
                this.setState({geburtsname:true})
            } else if(this.state.geburtsname===true){
                this.setState({geburtsname:false})
            }
        
        }else if(value === 'Ehegatte'){
            if(this.state.ehegatte===false){
                this.setState({ehegatte:true})
            } else if(this.state.ehegatte===true){
                this.setState({ehegatte:false})
            }
  
        }else if(value === 'Geschlecht'){
            if(this.state.geschlecht===false){
                this.setState({geschlecht:true})
            } else if(this.state.geschlecht===true){
                this.setState({geschlecht:false})
            }

        }else if(value === 'Anrede'){
            if(this.state.anrede===false){
                this.setState({anrede:true})
            } else if(this.state.anrede===true){
                this.setState({anrede:false})
            }

        }else if(value === 'Titel bzw. Grade'){
            if(this.state.titelbzwGrade===false){
                this.setState({titelbzwGrade:true})
            } else if(this.state.titelbzwGrade===true){
                this.setState({titelbzwGrade:false})
            }

        // }else if (value === 'Titel'){
        //     if(this.state.titel===false){
        //         this.setState({titel:true})
        //     }else if(this.state.titel===true){
        //         this.setState({titel:false})
        //        }
    
          }

    };

    handleChangeWeitereInformationen(value){
        if(value === 'Geburtsdatum'){
            if(this.state.geburtsdatum===false){
                this.setState({geburtsdatum:true})
            } else if(this.state.geburtsdatum===true){
                this.setState({geburtsdatum:false})
            }
  
        }else if(value === 'Familienstand'){
            if(this.state.familienstand===false){
                this.setState({familienstand:true})
            } else if(this.state.familienstand===true){
                this.setState({familienstand:false})
            }
  
        }else if(value === 'Staatsangehörigkeit'){
            if(this.state.staatsangehoerigkeit===false){
                this.setState({staatsangehoerigkeit:true})
            } else if(this.state.staatsangehoerigkeit===true){
                this.setState({staatsangehoerigkeit:false})
            }
    
          }else if(value === 'Religion'){
            if(this.state.religion===false){
                this.setState({religion:true})
            } else if(this.state.religion===true){
                this.setState({religion:false})
            }
    
          }else if(value === 'Anschrift'){
            if(this.state.anschrift===false){
                this.setState({anschrift:true})
            } else if(this.state.anschrift===true){
                this.setState({anschrift:false})
            }
        }else if(value === 'Bankverbindung'){
            if(this.state.bankverbindung===false){
                this.setState({bankverbindung:true})
            }else if(this.state.bankverbindung===true){
                this.setState({bankverbindung:false})
            }
          
    
          }else if(value === 'Kontakt'){
            if(this.state.kontakt===false){
                this.setState({kontakt:true})
            } else if(this.state.kontakt===true){
                this.setState({kontakt :false})
            }
    
          }else if(value === 'Email'){
            if(this.state.email===false){
                this.setState({email:true})
            } else if(this.state.email===true){
                this.setState({email:false})
            }
    
          }

    };

    handleChangeJuristischePerson(value){
        if(value === 'NamedesUnternehmens'){
            if(this.state.namedesUnternehmen===false){
                this.setState({namedesUnternehmen:true})
            } else if(this.state.namedesUnternehmen===true){
                this.setState({namedesUnternehmen:false})
            }
  
        }else if(value === 'Handelsregister'){
            if(this.state.handelsregister===false){
                this.setState({handelsregister:true})
            } else if(this.state.handelsregister===true){
                this.setState({handelsregister:false})
            }
  
        }else if(value === 'Umsatzsteuer'){
            if(this.state.umsatzsteuer===false){
                this.setState({umsatzsteuer:true})
            } else if(this.state.umsatzsteuer===true){
                this.setState({umsatzsteuer:false})
            }
    
          }

    };

    handleChangeInformationen(value){
        if(value === 'Ort'){
            if(this.state.ort===false){
                this.setState({ort:true})
            } else if(this.state.ort===true){
                this.setState({ort:false})
            }
  
        }else if(value === 'Datum'){
            if(this.state.datum===false){
                this.setState({datum:true})
            } else if(this.state.datum===true){
                this.setState({datum:false})
            }
  
        }else if(value === 'Uhrzeit'){
            if(this.state.uhrzeit===false){
                this.setState({uhrzeit:true})
            } else if(this.state.uhrzeit===true){
                this.setState({uhrzeit:false})
            }
    
          }else if(value === 'Teilnehmer'){
            if(this.state.teilnehmer===false){
                this.setState({teilnehmer:true})
            } else if(this.state.teilnehmer===true){
                this.setState({teilnehmer:false})
            }
    
          }else if(value === 'Ausweissnummer'){
            if(this.state.ausweissnummer===false){
                this.setState({ausweissnummer:true})
            } else if(this.state.ausweissnummer===true){
                this.setState({ausweissnummer:false})
            }
    
          }else if(value === 'Antragsteller'){
            if(this.state.antragsteller===false){
                this.setState({antragsteller:true})
            } else if(this.state.antragsteller===true){
                this.setState({antragsteller:false})
            }
    
          }else if(value === 'DatumdesBeginn'){
            if(this.state.datumdesBeginn===false){
                this.setState({datumdesBeginn:true})
            } else if(this.state.datumdesBeginn===true){
                this.setState({datumdesBeginn:false})
            }
    
          }else if(value === 'DatumdesEnde'){
            if(this.state.datumdesEnde===false){
                this.setState({datumdesEnde:true})
            } else if(this.state.datumdesEnde===true){
                this.setState({datumdesEnde:false})
            }
    
          }else if(value === 'Kommentar'){
            if(this.state.kommentar===false){
                this.setState({kommentar:true})
            } else if(this.state.kommentar===true){
                this.setState({kommentar:false})
            }
    
          }else if(value === 'Beschreibung'){
            if(this.state.beschreibung===false){
                this.setState({beschreibung:true})
            } else if(this.state.beschreibung===true){
                this.setState({beschreibung:false})
            }
    
          }

    };

    handleChangeDateiTyp(value){
        if(value === 'PDF'){
            if(this.state.pdf===false){
                this.setState({pdf:true})
            } else if(this.state.pdf===true){
                this.setState({pdf:false})
            }
  
        }else if(value === 'Bild'){
            if(this.state.bild===false){
                this.setState({bild:true})
            } else if(this.state.bild===true){
                this.setState({bild:false})
            }
  
        }else if(value === 'Word'){
            if(this.state.word===false){
                this.setState({word:true})
            } else if(this.state.word===true){
                this.setState({word:false})
            }
    
          }

    };



    handleChangeFrageType(value){
        if(value === 'Multiple-Choice-Frage'){
            if(this.state.multipleChoice===false){
                this.setState({multipleChoice:true})
            } else if(this.state.multipleChoice===true){
                this.setState({multipleChoice:false})
            }
  
        }else if(value === 'Offene-Frage'){
            if(this.state.offene===false){
                this.setState({offene:true})
            } else if(this.state.offene===true){
                this.setState({offene:false})
            }
    
          }

    };
    

    AddInput(){
        const List=this.state.neueFelder
        const Input=this.state.textInput
        //console.log('2',Input)
        // console.log(Input, 'Wurde hinzugefüt')
        List.push(Input)
        this.setState({textInput:""})
        this.setState({neueFelder:List})
        console.log(Input, 'wurde hinzugefügt')

    }

    RemoveInput(e){
        console.log(e, 'wurde entfernt')
         var array = [...this.state.neueFelder]; // make a separate copy of the array
         var index = array.indexOf(e)
         if (index !== -1) {
             array.splice(index, 1);
             this.setState({neueFelder: array});
         }

    }

    zuruecksetzen(){
            this.setState({natuerlichePerson:false})
            this.setState({juristischePerson: false})
            this.setState({artDerPerson:''})
            this.setState({familienname:false})
            this.setState({vorname:false})
            this.setState({geschlecht: false})
            this.setState({geburtsdatum:false})
            this.setState({familienstand:false})
            this.setState({staatsangehoerigkeit:false})
            this.setState({religion:false})
            this.setState({anschrift:false})
            this.setState({kontakt:false})
            this.setState({email:false})
            this.setState({namedesUnternehmen:false})
            this.setState({handelsregister:false})
            this.setState({umsatzsteuer:false})
            this.setState({ort:false})
            this.setState({datum:false})
            this.setState({uhrzeit:false})
            this.setState({teilnehmer:false})
            this.setState({ausweissnummer:false})
            this.setState({antragsteller:false})
            this.setState({datumdesBeginn:false})
            this.setState({datumdesEnde:false})
            this.setState({kommentarcheck:false})
            this.setState({pdf: false})
            this.setState({bild: false})
            this.setState({word: false})
            this.setState({multipleChoice: false})
            this.setState({offene: false}) 
            this.setState({neueFelder: []})
            this.setState({titel: ""})
            this.setState({textInput:""})
            this.setState({beschreibung:false})
            this.setState({kommentar:false})
            this.setState({anrede:false})
            this.setState({titelbzwGrade:false})
            this.setState({bankverbindung:false})
            this.setState({geburtsname:false})
            this.setState({ehegatte:false})
            
    }

    auswaellen(){
        this.setState({natuerlichePerson:true})
        this.setState({juristischePerson: true})
        this.setState({artDerPerson:''})
        this.setState({familienname:true})
        this.setState({vorname:true})
        this.setState({geschlecht: true})
        this.setState({geburtsdatum:true})
        this.setState({familienstand:true})
        this.setState({staatsangehoerigkeit:true})
        this.setState({religion:true})
        this.setState({anschrift:true})
        this.setState({kontakt:true})
        this.setState({email:true})
        this.setState({namedesUnternehmen:true})
        this.setState({handelsregister:true})
        this.setState({umsatzsteuer:true})
        this.setState({ort:true})
        this.setState({datum:true})
        this.setState({uhrzeit:true})
        this.setState({teilnehmer:true})
        this.setState({ausweissnummer:true})
        this.setState({antragsteller:true})
        this.setState({datumdesBeginn:true})
        this.setState({datumdesEnde:true})
        this.setState({kommentarcheck:true})
        this.setState({pdf: true})
        this.setState({bild: true})
        this.setState({word: true})
        this.setState({multipleChoice: true})
        this.setState({offene: true}) 
        this.setState({neueFelder: []})
        this.setState({titel: "titel"})
        this.setState({textInput:"text eingeben"})
        this.setState({beschreibung:true})
        this.setState({kommentar:true})
        this.setState({anrede:true})
        this.setState({titelbzwGrade:true})
        this.setState({bankverbindung:true})
        this.setState({geburtsname:true})
        this.setState({ehegatte:true})
        
}



    render(){
        //console.log(this.state.textInput)
        return(
            
            <div>
                <Typography variant="h6" style={{marginLeft: 500, marginTop: 50, color: "#3f51b5"}} gutterBottom>
                Gestalten Sie ihren eigene Prozess  </Typography>
      
    

            <div name="Titel input" style={{marginLeft: 500, marginTop: 50 }}> 
            <TextField
                id="outlined-helperText"
                label="Titel"
                defaultValue=""
                value={this.state.titel}
                helperText="Titel des Prozesses eingeben"
                variant="outlined"
                onChange={e => { this.setState({ titel: e.target.value }) }}
                />
                
            </div>
            
            <div name="art der Person" style={{marginLeft: 500, marginTop: 30  }}> 
                <FormControl component="fieldset"> 
                    <FormLabel component="legend" style={{color: "#3f51b5" }}>Handelt es sich um eine Natürliche oder Juristische Person?</FormLabel>
                        <RadioGroup aria-label="Weiblich" name="Weiblich1" >
                            <FormControlLabel onChange={()=>this.handleChangeArtDerPerson('Natürlich')} control={<Radio checked={this.state.natuerlichePerson} />} label="Natürliche Person" />
                            <FormControlLabel onChange={()=>this.handleChangeArtDerPerson('Juristisch')} control={<Radio checked={this.state.juristischePerson}/>} label="Juristische Person" />
                        </RadioGroup>
                </FormControl>
            </div>

            <div name="Persönliche für natürliche person" style={{marginLeft: 500, marginTop: 30 }}> 
            <FormControl component="fieldset">
            <FormLabel component="legend" style={{color: "#3f51b5" }}>Persönliche für natürliche Person</FormLabel>
                    <FormControlLabel
                        onChange={()=>this.handleChangePersönlichNatürlich('Familienname')}
                        control={<Checkbox checked={this.state.familienname} name="checkedA" />}
                        label="Familienname"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangePersönlichNatürlich('Vorname')}
                        control={<Checkbox checked={this.state.vorname} name="checkedA" />}
                        label="Vorname"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangePersönlichNatürlich('Geburtsname')}
                        control={<Checkbox checked={this.state.geburtsname} name="checkedA" />}
                        label="Geburtsname"
                    />
                     <FormControlLabel
                        onChange={()=>this.handleChangePersönlichNatürlich('Ehegatte')}
                        control={<Checkbox checked={this.state.ehegatte} name="checkedA" />}
                        label="Ehegatte"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangePersönlichNatürlich('Geschlecht')}
                        control={<Checkbox checked={this.state.geschlecht} name="checkedA" />}
                        label="Geschlecht"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangePersönlichNatürlich('Anrede')}
                        control={<Checkbox checked={this.state.anrede} name="checkedA" />}
                        label="Anrede"
                    />
                   <FormControlLabel
                        onChange={()=>this.handleChangePersönlichNatürlich('Titel bzw. Grade')}
                        control={<Checkbox checked={this.state.titelbzwGrade} name="checkedA" />}
                        label="Titel bzw. Grade"
                    />
            </FormControl>
            </div>

            <div name="Weitere Informationen für natürliche personen" style={{marginLeft: 500, marginTop: 30 }}> 
            <FormControl component="fieldset">
            <FormLabel component="legend" style={{color: "#3f51b5" }}>Weitere Informationen</FormLabel>
                    <FormControlLabel
                        onChange={()=>this.handleChangeWeitereInformationen('Geburtsdatum')}
                        control={<Checkbox checked={this.state.geburtsdatum} name="checkedA" />}
                        label="Geburtsdatum"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeWeitereInformationen('Familienstand')}
                        control={<Checkbox checked={this.state.familienstand} name="checkedA" />}
                        label="Familienstand"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeWeitereInformationen('Staatsangehörigkeit')}
                        control={<Checkbox checked={this.state.staatsangehoerigkeit} name="checkedA" />}
                        label="Staatsangehörigkeit"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeWeitereInformationen('Religion')}
                        control={<Checkbox checked={this.state.religion} name="checkedA" />}
                        label="Religion"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeWeitereInformationen('Anschrift')}
                        control={<Checkbox checked={this.state.anschrift} name="checkedA" />}
                        label="Anschrift"
                    />

                        <FormControlLabel
                        onChange={()=>this.handleChangeWeitereInformationen('Bankverbindung')}
                        control={<Checkbox checked={this.state.bankverbindung} name="checkedA" />}
                        label="Bankverbindung"
                    />

                    <FormControlLabel
                        onChange={()=>this.handleChangeWeitereInformationen('Kontakt')}
                        control={<Checkbox checked={this.state.kontakt} name="checkedA" />}
                        label="Kontakt"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeWeitereInformationen('Email')}
                        control={<Checkbox checked={this.state.email} name="checkedA" />}
                        label="E-mail"
                    />
            </FormControl> 
            </div>

            <div name="Infromationen für juristische person" style={{marginLeft: 500, marginTop: 30 }}> 
            <FormControl component="fieldset">
            <FormLabel component="legend" style={{color: "#3f51b5" }}>Informationen für juristische Person</FormLabel>
                    <FormControlLabel
                        onChange={()=>this.handleChangeJuristischePerson('NamedesUnternehmens')}
                        control={<Checkbox checked={this.state.namedesUnternehmen} name="checkedA" />}
                        label=" Name des Unternehmens"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeJuristischePerson('Handelsregister')}
                        control={<Checkbox checked={this.state.handelsregister} name="checkedA" />}
                        label="Handelsregister"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeJuristischePerson('Umsatzsteuer')}
                        control={<Checkbox checked={this.state.umsatzsteuer} name="checkedA" />}
                        label="Umsatzsteuer"
                    />
            </FormControl>
            </div>

            <div name="Informationen" style={{marginLeft: 500, marginTop: 30 }}> 
            <FormControl component="fieldset">
            <FormLabel component="legend" style={{color: "#3f51b5" }}>Informationen</FormLabel>
                    <FormControlLabel
                        onChange={()=>this.handleChangeInformationen('Ort')}
                        control={<Checkbox checked={this.state.ort} name="checkedA" />}
                        label="Ort"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeInformationen('Datum')}
                        control={<Checkbox checked={this.state.datum} name="checkedA" />}
                        label="Datum"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeInformationen('Uhrzeit')}
                        control={<Checkbox checked={this.state.uhrzeit} name="checkedA" />}
                        label="Uhrzeit"
                    />
                     <FormControlLabel
                        onChange={()=>this.handleChangeInformationen('Teilnehmer')}
                        control={<Checkbox checked={this.state.teilnehmer} name="checkedA" />}
                        label="Teilnehmer"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeInformationen('Ausweissnummer')}
                        control={<Checkbox checked={this.state.ausweissnummer} name="checkedA" />}
                        label="Ausweissnummer"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeInformationen('Antragsteller')}
                        control={<Checkbox checked={this.state.antragsteller} name="checkedA" />}
                        label="Antragsteller"
                    />
                     <FormControlLabel
                        onChange={()=>this.handleChangeInformationen('DatumdesBeginn')}
                        control={<Checkbox checked={this.state.datumdesBeginn} name="checkedA" />}
                        label="Datum des Beginn"
                    />
                     <FormControlLabel
                        onChange={()=>this.handleChangeInformationen('DatumdesEnde')}
                        control={<Checkbox checked={this.state.datumdesEnde} name="checkedA" />}
                        label="Datum des Ende"
                    />
                     <FormControlLabel
                        onChange={()=>this.handleChangeInformationen('Beschreibung')}
                        control={<Checkbox checked={this.state.beschreibung} name="checkedA" />}
                        label="Beschreibung"
                    />
                    <FormControlLabel
                        onChange={()=>this.handleChangeInformationen('Kommentar')}
                        control={<Checkbox checked={this.state.kommentar} name="checkedA" />}
                        label="Kommentar"
                    />
            </FormControl>
            
            </div>

            <div name="Dateitype auswählen" style={{marginLeft: 500, marginTop: 30 }}> 
            <FormControl component="fieldset">
                    <FormLabel component="legend" style={{color: "#3f51b5" }}>Dateitype auswählen</FormLabel>
                        <RadioGroup aria-label="PDF" name="PDF">
                            <FormControlLabel
                            onChange={()=>this.handleChangeDateiTyp('PDF')}
                            control={<Checkbox checked={this.state.pdf} name="checkedA" />}
                            label="PDF"
                                />
                            <FormControlLabel
                            onChange={()=>this.handleChangeDateiTyp('Bild')}
                            control={<Checkbox checked={this.state.bild} name="checkedA" />}
                            label="Bild (JPG, JPEG, PNG)"
                                />
                            <FormControlLabel
                            onChange={()=>this.handleChangeDateiTyp('Word')}
                            control={<Checkbox checked={this.state.word} name="checkedA" />}
                            label="Word"
                                />
                        </RadioGroup>
                </FormControl>
            </div>



            <div name="Fragetypen auswählen" style={{marginLeft: 500, marginTop: 30 }}> 
            <FormControl component="fieldset">
                    <FormLabel component="legend" style={{color: "#3f51b5" }}>Fragetypen auswählen</FormLabel>
                        <RadioGroup aria-label="Multiple-Choice-Frage" name="Multiple-Choice-Frage">
                            <FormControlLabel
                            onChange={()=>this.handleChangeFrageType('Multiple-Choice-Frage')}
                            control={<Checkbox checked={this.state.multipleChoice} name="checkedA" />}
                            label="Multiple-Choice-Frage"
                                />
                            
                            <FormControlLabel
                            onChange={()=>this.handleChangeFrageType('Offene-Frage')}
                            control={<Checkbox checked={this.state.offene} name="checkedA" />}
                            label="Offene-Frage"
                                />
                        </RadioGroup>
                </FormControl>
            </div>


            

            <div name="Additional Inputs" style={{marginLeft: 500, marginTop: 30 }}> 
            <TextField
                id="outlined-helperText"
                label="Text Input"
                defaultValue=""
                helperText="Text eingeben"
                variant="outlined"
                value={this.state.textInput}
                onChange={e => { this.setState({ textInput: e.target.value }) }}
                />
                <Button onClick={()=>this.AddInput()} variant="contained" color="primary" style={{marginLeft: 20, marginTop: 15 }}>
                Hinzufügen
                </Button>
            
            <List component="nav" aria-label="mailbox folders" style={{width: 400}}>
            {
                this.state.neueFelder.map((post) =>
                <div>
                  <ListItem>
                    <ListItemText primary={post} />
                    <Icon className="fa fa-plus-circle" style={{ fontSize: 30 }} color="primary" />
                    <IconButton onClick={()=>this.RemoveInput(post)} color="primary" aria-label="upload picture" component="span">
                        <RemoveIcon />
                    </IconButton>
                </ListItem>
                <Divider />
                </div>
              )
            }
            </List>
            
            </div>

            <div name="Buttons" style={{marginBottom: 50}}> 
            <Button variant="contained" color="primary" style={{marginLeft: 500, marginTop: 30 }} component={Link} to={`/Formular/${this.state.titel}/${this.state.natuerlichePerson}`}>
                Erstellen
            </Button>
            <Button onClick={()=>this.zuruecksetzen()} variant="contained" color="primary" style={{marginLeft: 50, marginTop: 30 }}>
                Alles Zurücksetzen
            </Button>

            <Button onClick={()=>this.auswaellen()} variant="contained" color="primary" style={{marginLeft: 50, marginTop: 30 }}>
                Alles auswählen
            </Button>

            
            </div>


          
            </div>
            
    )
        }
}

export default Arrangement;