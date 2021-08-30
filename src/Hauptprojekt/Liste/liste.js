import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import ArrowDropDownTwoToneIcon from '@material-ui/icons/ArrowDropDownTwoTone';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import TextFormatSharpIcon from '@material-ui/icons/TextFormatSharp';
import SubjectSharpIcon from '@material-ui/icons/SubjectSharp';
import CheckBoxSharpIcon from '@material-ui/icons/CheckBoxSharp';
import ListSharpIcon from '@material-ui/icons/ListSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';
import EventSharpIcon from '@material-ui/icons/EventSharp';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import SettingsIcon from '@material-ui/icons/Settings';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import Info from './info'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CancelPresentationSharpIcon from '@material-ui/icons/CancelPresentationSharp';

import {API, graphqlOperation} from 'aws-amplify'
import { Auth } from "aws-amplify";
import * as mutations from '../../graphql/mutations'


// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`,
    frage1: '',
    frage2: '',
    check: false,
    frage3: [
      {
        count:0,
        value:''
      }
      ],
    add: 1,
    fragenZahl:`${k}`,
    itemType: '',
    refID: k,
    file:false
  }));

  console.log('Jumbo', getItems)

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,

  // change background colour if dragging
  background: isDragging ? "white" : "white",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "white" : "white",
  padding: grid,
  width: '70%',
  marginTop: 20
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(0),
      displaylist:false,
      bocvalue:[],
      plusminus:false,
      titel:'',
      beschreibung:'',
      removedItem:[],
      ReserveItems:[{
        id: `item-0`,
        content: `item x`,
        frage1: '',
        frage2: '',
        check: false,
        frage3: [
        {
          count:0,
          value:''
        }
        ],
        add: 1,
        fragenZahl:`x`,
        itemType: '',
        refID: 'x',
        file:false
      }],
      random:1
    };
    this.onDragEnd = this.onDragEnd.bind(this);
    
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });
  }


  AddInput(e){
    const List=this.state.bocvalue
    const Input=e
    List.push(Input)
    //hinzufügen
    this.setState({bocvalue:List})
    console.log(Input, 'wurde hinzugefügt')


     var array = [...this.state.removedItem]; // make a separate copy of the array
     var index = array.indexOf(e)
     if (index !== -1) {
         array.splice(index, 1);
         //removen
         this.setState({removedItem: array});
     }

}

RemoveInput(e){
    console.log(e, 'wurde entfernt')
     var array = [...this.state.bocvalue]; // make a separate copy of the array
     var index = array.indexOf(e)
     if (index !== -1) {
         array.splice(index, 1);
         this.setState({bocvalue: array});
     }


     //this performs a second add function

     const List=this.state.removedItem
    const Input=e
    //console.log('2',Input)
    // console.log(Input, 'Wurde hinzugefüt')
    List.push(Input)
    this.setState({removedItem:List})
    console.log(this.state.removedItem, 'new removed input')

}

CallOrder = async (result) => {
 
    this.AddNewItem()
     .then(()=>{this.FinishAddNewItem(result)})
     .then(()=>{this.FixOrder()})
  
}


FixOrder = async () => {


        if(this.state.random === 1){

          var firstItteration = this.state.ReserveItems.map((rest, i) => rest.id)

     var secondItteration =this.state.items.map((item, i) => 
     firstItteration.includes(item.id) && item.itemType.length>2?
    (
      item
  ):(
    null
  )

     )

     secondItteration = secondItteration.filter( Boolean );


     this.setState({items: secondItteration});
     this.setState({ReserveItems: secondItteration});

      this.setState({random: 2});

          }else{

            var firstItteration = this.state.ReserveItems.map((rest, i) => rest.id)

     var secondItteration =this.state.items.map((item, i) => 
     firstItteration.includes(item.id)?
    (
      null
  ):(
    item
  )

     )

     secondItteration = secondItteration.filter( Boolean );

     const List=this.state.ReserveItems
    //console.log('2',Input)
    // console.log(Input, 'Wurde hinzugefüt')
    List.push(secondItteration[0])
   




     console.log('joeFixit',firstItteration);
     console.log('joeFixit2',secondItteration);
     console.log('joeFixit3',List);


     this.setState({items: List});
     this.setState({ReserveItems: List});

           

          }

}


AddNewItem = async () => {
   var array=this.state.items.length

   console.log('joeFixit000000000000',array);

   console.log('joeFixit000000000000222222222',getItems(array+1));

   

   this.setState({
        items: getItems(array+1)
    })

}

FinishAddNewItem = async (result) => {
  var array=this.state.items.length

  console.log('I happenedx 1', this.state.items)

  let myArray = this.state.items,
     
 //Find index of specific object using findIndex method.    
 objIndex = myArray.findIndex((obj => obj.refID == array-1));

 console.log('I happenedx 2', this.state.items)
 
 //Log object to Console.
 //console.log("Before update: ", myArray[objIndex])
 
 //Update object's name property.
 myArray[objIndex].itemType = result
 
 //Log object to console again.
 //console.log("After update: ", myArray[objIndex])


 console.log('I happenedx 3', this.state.items, this.state.ReserveItems)

 this.setState({items: myArray})
}


  AddFrageDrei(e, k){
    console.log('Length', e, k)
     const List=this.state.items
     const Length=this.state.items[k].frage3.length



    const Items = List.find(x => x.id === e);
    if (Items) {
        // Now add the ingredients to the found recipe
        Items.frage3.push({
          count: Length,
          value:''
        })


        var newItems = List.map(obj => [Items].find(o => o.id === obj.id) || obj);


         console.log(Length, 'LengthX', Items, this.state.items, newItems)
      
        this.setState({items:newItems})
      this.setState({ReserveItems:newItems})
    }
    else {
        // Do something intelligent if the recipe is not found
    }

  }


    RemoveFrageDrei(e, k, Count){

      const List=this.state.items
     const Length=this.state.items[k].frage3.length



    const Items = List.find(x => x.id === e);
    if (Items) {

      Items.frage3.splice(Count, 1);


      var fixed ={
          id: Items.id,
          content: Items.content,
          frage1: Items.frage1,
          frage2: Items.frage2,
          check: Items.check,
          frage3: [],
          add: Items.add,
          fragenZahl:Items.fragenZahl,
          itemType: Items.itemType,
          refID: Items.refID,
          file:Items.file
        }

        for (var i = 0 ; i <= Length-2 ; i++) {

            fixed.frage3.push(({
            count: i,
            value:Items.frage3[i].value? Items.frage3[i].value : ''
          }));

          console.log('length2', i)

}

      
    }
    else {
        // Do something intelligent if the recipe is not found
    }

    

    var newItems = List.map(obj => [fixed].find(o => o.id === obj.id) || obj);


    this.setState({items:newItems})
    this.setState({ReserveItems:newItems})


      //console.log('Length', Length, foo, fixed, newItems, Items)


  }


    UpdateCheckBox(value, e){

    let myArray = this.state.items,
      
      //Find index of specific object using findIndex method.    
      objIndex = myArray.findIndex((obj => obj.id == e));

      console.log('checkresult1', this.state.items)
      
      //Log object to Console.
      //console.log("Before update: ", myArray[objIndex])
      
      //Update object's name property.
      if(value==true){
        myArray[objIndex].check = false
      } else {
        myArray[objIndex].check = true
      }
      
      
      //Log object to console again.
      //console.log("After update: ", myArray[objIndex])


      console.log('checkresult2', myArray)

      this.setState({items: myArray})
      this.setState({ReserveItems: myArray})


  }

  UpdateCheckBoxFile(value, e){

    let myArray = this.state.items,
      
      //Find index of specific object using findIndex method.    
      objIndex = myArray.findIndex((obj => obj.id == e));

      console.log('checkresult1', this.state.items)
      
      //Log object to Console.
      //console.log("Before update: ", myArray[objIndex])
      
      //Update object's name property.
      if(value==true){
        myArray[objIndex].file = false
      } else {
        myArray[objIndex].file = true
      }
      
      
      //Log object to console again.
      //console.log("After update: ", myArray[objIndex])


      console.log('checkresult2', myArray)

      this.setState({items: myArray})
      this.setState({ReserveItems: myArray})


  }


  handleChangeFrage1 = (event, e) => {

    let myArray = this.state.items,
      
      //Find index of specific object using findIndex method.    
      objIndex = myArray.findIndex((obj => obj.id == e));

      console.log('checkresult1', this.state.items)
      
      //Log object to Console.
      //console.log("Before update: ", myArray[objIndex])
      
      //Update object's name property.
        myArray[objIndex].frage1 = event.target.value
      
      
      //Log object to console again.
      //console.log("After update: ", myArray[objIndex])


      console.log('checkresult2', myArray)

      this.setState({items: myArray})
      this.setState({ReserveItems: myArray})
  };

  handleChangeFrage2 = (event, e) => {

    let myArray = this.state.items,
      
      //Find index of specific object using findIndex method.    
      objIndex = myArray.findIndex((obj => obj.id == e));

      console.log('checkresult1', this.state.items)
      
      //Log object to Console.
      //console.log("Before update: ", myArray[objIndex])
      
      //Update object's name property.
        myArray[objIndex].frage2 = event.target.value
      
      
      //Log object to console again.
      //console.log("After update: ", myArray[objIndex])


      console.log('checkresult2', myArray)

      this.setState({items: myArray})
      this.setState({ReserveItems: myArray})
  };

  handleChangeTitel = (event) => {

      this.setState({titel: event.target.value})
  };

  handleChangeBeschreibung = (event) => {

    this.setState({beschreibung: event.target.value})
};

  ResetData = async () => {
    var reset = [{
      id: `item-0`,
      content: `item x`,
      frage1: '',
      frage2: '',
      check: false,
      frage3: [
      {
        count:0,
        value:''
      }
      ],
      add: 1,
      fragenZahl:`x`,
      itemType: '',
      refID: 'x',
      file:false
    }]

    this.setState({
      items: getItems(0)
  })

  this.setState({
    ReserveItems: reset
})

this.setState({random: 1});

      console.log('mimi')
  }


  CreateFormular = async () => {
    // Authentication flow is still lacking make sure to correct
    // Reset

    var randomstring = require("randomstring");

        var k1= randomstring.generate(10);

        var k2= randomstring.generate(4);


      var questions= this.state.items.map((rest)=>
      ({
        titel: this.state.titel,
         beschreibung: this.state.beschreibung,
         titelid: this.state.titel+k1+k2,
         refID: rest.refID,
         Frage: rest.frage1,
         Fragenbeschreibung: rest.frage2,
         SubFragen: rest.frage3,
         FragenTyp: rest.itemType,
         Pflicht: rest.check,
         Dateinotwendig: rest.file,
         FragenZahl: rest.add,
         Erfasser:'Joe'
      }))


      

       const result = await API.graphql(graphqlOperation(mutations.createFragenBatch, {input: questions}))

    //  console.log('Creation', k1)
    //  console.warn('Creation', result.data)

  }


  DeleteQuestion(e, k){

    const List=this.state.items
   const Length=this.state.items.length

   console.log('length1', this.state.items, Length)



  const Items = List
  if (Items) {

    Items.splice(k, 1);


     var fixed = []

        for (var i = 0 ; i <= Length-2 ; i++) {

          console.log('length',i)

             fixed.push({
              id: `item-${i}`,
              content: `item ${i}`,
              frage1: Items[i].frage1,
              frage2: Items[i].frage2,
              check: Items[i].check,
              frage3: Items[i].frage3,
              add: Items[i].add,
              fragenZahl:`${i}`,
              itemType: Items[i].itemType,
              refID: i,
              file:Items[i].file
            });

            console.log('length23', fixed)
         }

        console.log('length2', Items, fixed)


    
  }
  else {
      // Do something intelligent if the recipe is not found
  }

  if(fixed.length==0){
    this.setState({random: 1});

    var reset = [{
      id: `item-0`,
      content: `item x`,
      frage1: '',
      frage2: '',
      check: false,
      frage3: [
      {
        count:0,
        value:''
      }
      ],
      add: 1,
      fragenZahl:`x`,
      itemType: '',
      refID: 'x',
      file:false
    }]

    this.setState({
      items: getItems(0)
    })

  this.setState({
    ReserveItems: reset
    })

  }else{

     this.setState({items:fixed})
     this.setState({ReserveItems:fixed})

  }

  


}


  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
      console.log('items', this.state.items.length)
      console.log('items2', this.state.items)
      console.log('I happened 4', this.state.items, this.state.ReserveItems)
    return (
        <>

        <div name='TitelundBeschreibungsContainer'>
            <TextField onChange={(data)=>this.handleChangeTitel(data)} id="standard-basic" placeholder="Titel" style={{width: '100%', marginTop: 15}}/>
            <TextField onChange={(data)=>this.handleChangeBeschreibung(data)} id="standard-basic" multiline InputProps={{ disableUnderline: true }} placeholder="Beschreibung" style={{width: '50%', left: '0%'}}/>

        </div>
         {this.state.items.length==0?
          <div></div> :
        <div name='Draganddropcontainer'>
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                    <Paper elevation={6}>
                       <Card variant="outlined">
                       <CardHeader
                            style={{backgroundColor:'#e0e0e0' }}

                            action={
                                <>

                                <Button onClick={()=>this.DeleteQuestion(item.id, item.refID)} endIcon={<DeleteForeverSharpIcon/>} color="primary">
                                Löschen
                                </Button>
                                {this.state.plusminus && this.state.bocvalue.includes(item.id) && !this.state.removedItem.includes(item.id) && 
                                <IconButton  color="primary" onClick={()=>{this.setState({displaylist:true}); this.RemoveInput(item.id);  this.setState({plusminus:false})}}>
                                <AddSharpIcon/>
                                </IconButton> }

                                {!this.state.plusminus && !this.state.bocvalue.includes(item.id) && 
                                <IconButton  color="primary" onClick={()=>{this.setState({displaylist:false});  this.AddInput(item.id) ;  this.setState({plusminus:true})}}>
                                <RemoveSharpIcon />
                                </IconButton>}

                                {this.state.plusminus && !this.state.bocvalue.includes(item.id) && 
                                <IconButton  color="primary" onClick={()=>{this.setState({displaylist:false});  this.AddInput(item.id) ;  this.setState({plusminus:true})}}>
                                <RemoveSharpIcon />
                                </IconButton>}

                                {!this.state.plusminus && this.state.bocvalue.includes(item.id) && !this.state.removedItem.includes(item.id) && 
                                <IconButton  color="primary" onClick={()=>{this.setState({displaylist:true}); this.RemoveInput(item.id);  this.setState({plusminus:false})}}>
                                <AddSharpIcon/>
                                </IconButton> }
                                
                                
                              </>
                            }
                            subheader="Frage 1"
                        />
                           { (
                           ( (this.state.displaylist==false || this.state.displaylist==true) && !this.state.bocvalue.includes(item.id))
                            )  &&

                           <>
                           <CardContent>
                                  
                           {

                              item.itemType !== "LangerText"  && 
                              <>
                              <TextField 
                                id="standard-basic" 
                                label="Beispiel Frage 1" 
                                defaultValue="Beispiel Frage 1" 
                                style={{width: '85%', marginLeft: '3%'}} 
                                onChange={(data)=>{this.handleChangeFrage1(data, item.id)}}
                                />
                         
                              </>
                              
                            }
                           
                            {

                            item.itemType == "LangerText"  &&
                            <>
                            <TextField 
                            id="standard-basic" 
                            label="Beispiel Frage 1" 
                            defaultValue="Beispiel Frage 1" 
                            style={{width: '85%', marginLeft: '3%'}} 
                            multiline
                            onChange={(data)=>{this.handleChangeFrage1(data, item.id)}} 
                            />
                                                       
                            </>
                            }

                            {

                            item.itemType !== "Checkbox"  && item.itemType !== "Datum"  && item.itemType !== "Multiplechoice"  && item.itemType !== "ChoiceList"  && item.itemType !== "SelectList"  &&
                            <>
                            <TextField 
                            id="my-helper-text" 
                            label="Beispiel Wert" 
                            style={{width: '85%', marginLeft: '3%'}} 
                            multiline
                            onChange={(data)=>{this.handleChangeFrage2(data, item.id)}} 
                            />
                            </>
                            }

                            
                             {

                            item.itemType !== "KurzerText"  && item.itemType !== "LangerText"  && item.itemType !== "Checkbox"  && item.itemType !== "Datum"  && 
                            <>
                             { item.frage3.map((rest)=>(
                              <>
                            
                            <TextField  id='' defaultValue={rest.count} style={{width: '75%', marginLeft: '3%', marginTop:10}}/> 
                            <IconButton onClick={()=>this.RemoveFrageDrei(item.id, item.refID, rest.count)} variant="contained" color="secondary"><CancelPresentationSharpIcon /></IconButton>
                              </>
                              ))
                            }
                           
                            </>}


                            {

                            item.itemType !== "KurzerText"  && item.itemType !== "LangerText"  && item.itemType !== "Checkbox"  && item.itemType !== "Datum"  && 
                            <>
                            {
                              <>
                             
                            <Button onClick={()=>this.AddFrageDrei(item.id, item.refID)} style={{marginLeft:'70%', marginTop:15, marginBottom:50}} variant="contained" color="primary">
                            <AddCircleTwoToneIcon />
                            </Button>
                              </>
                            }

                            </>}



                            {

                            item.itemType !== "ChoiceList"  && item.itemType !== "SelectList"  && item.itemType !== "Multiplechoice"  &&
                            <>
                            <FormControlLabel
                              onChange={()=>this.UpdateCheckBox(item.check, item.id)}
                              control={<Checkbox checked={item.check} name="checkedA" />}
                              label="Required?"
                              style={{ marginLeft: '2%', marginTop:'4%'}}/>

                            </>

                            }


                            {

                            item.itemType == "Multiplechoice"  &&
                            <>
                            <Divider style={{ background: 'white', marginTop:'-4%'}} ></Divider>
                            <FormControlLabel
                              onChange={()=>this.UpdateCheckBox(item.check, item.id)}
                              control={<Checkbox checked={item.check} name="checkedA" />}
                              label="Required?"
                              style={{ marginLeft:'2.5%'}}/>

                            </>
                            }


                            {

                            <>
                            <Divider style={{ background: 'white'}} ></Divider>
                            <FormControlLabel
                              onChange={()=>this.UpdateCheckBoxFile(item.file, item.id)}
                              control={<Checkbox checked={item.file} name="checkedA" />}
                              label="Dateien?"
                              style={{ marginLeft:'2%'}}/>

                            </>
                            }

                            </CardContent>
                            </>
                            }










                        </Card>
                        </Paper>

                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      </div>
          }
      <div name='popup'>

      <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button endIcon={<ArrowDropDownTwoToneIcon/>} startIcon={<AddCircleTwoToneIcon />} variant="contained" color="primary" {...bindTrigger(popupState)}>
          AddField 
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
                <List  onClick={popupState.close} component="nav" aria-label="main mailbox folders">
                        <ListItem button onClick={()=>this.CallOrder('KurzerText')}>
                        <ListItemIcon>
                            <TextFormatSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Kurz Text" />
                        </ListItem>

                        <ListItem button onClick={()=>this.CallOrder('LangerText')}>
                        <ListItemIcon>
                            <SubjectSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Langer Text" />
                        </ListItem>

                        <ListItem button onClick={()=>this.CallOrder('Checkbox')}>
                        <ListItemIcon>
                            <CheckBoxSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Checkbox" />
                        </ListItem>

                        <ListItem button onClick={()=>this.CallOrder('Multiplechoice')}>
                        <ListItemIcon>
                            <CheckBoxSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Multiplechoice" />
                        </ListItem>

                        <ListItem button onClick={()=>this.CallOrder('ChoiceList')}>
                        <ListItemIcon>
                            <ListSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Choice list" />
                        </ListItem>

                        <ListItem button onClick={()=>this.CallOrder('SelectList')}>
                        <ListItemIcon>
                            <ExpandMoreSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Select List" />
                        </ListItem>

                        <ListItem button onClick={()=>this.CallOrder('Datum')}>
                        <ListItemIcon>
                            <EventSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Datum" />
                        </ListItem>
                </List>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
       


        </div>

        <div name='Complete Buttons'>

            <Button 
            startIcon={<CancelTwoToneIcon />} 
            variant="contained" 
            color="primary" 
            style={{marginLeft: 300, marginTop: 5 }} 
            onClick={()=>{this.ResetData();  console.log('mimi')}}>
                Zurücksetzen
            </Button>

            <Button 
            startIcon={<SaveTwoToneIcon />} 
            variant="contained" 
            color="primary" 
            style={{marginLeft: 300, marginTop: 5 }} 
            onClick={()=>this.CreateFormular()}>
                Speichern
            </Button>

        </div>

            </>


    );
  }
}

export default App;

// Put the thing into the DOM!
ReactDOM.render(<App />, document.getElementById("root"));

