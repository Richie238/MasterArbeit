import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import SettingsIcon from '@material-ui/icons/Settings';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';


//a
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import { IconButton } from "@material-ui/core";
import CancelPresentationSharpIcon from '@material-ui/icons/CancelPresentationSharp';



//b

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

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
      items: getItems(1)
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  state = {
    plusminus:false,
    bocvalue:'', //switch to check for contains value this will prevent list error
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

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
      console.log('items', this.state.items)
    return (
        <>

        <div name='kurzertext' style={{backgroundColor:'blue' }}>
      <DragDropContext onDragEnd={this.onDragEnd} >
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
                                <Button endIcon={<SettingsIcon/>} color="primary">
                                Feld ändern
                                </Button>
                                <Button endIcon={<DeleteForeverSharpIcon/>} color="primary">
                                Löschen 
                                </Button>
                                {this.state.plusminus && this.state.bocvalue==item.id ? <Button endIcon={<RemoveSharpIcon/>} color="primary" size="small" onClick={()=>{this.setState({plusminus:false});  this.setState({bocvalue:''})}}>
                                
                                </Button> : <Button endIcon={<AddSharpIcon/>} color="primary" size="small" onClick={()=>{this.setState({plusminus:true});  this.setState({bocvalue:item.id})}}>
                                
                                </Button>}
             
                              </>
                            }
                            subheader="Frage bearbeiten"
                        />
                           { this.state.plusminus==true && this.state.bocvalue==item.id &&
                           <>
                           <CardContent>
                                <Typography variant="body2" component="p">
                                {item.content}
                                </Typography>
                            </CardContent>
                            <div name='TitelundBeschreibungsContainer'>





                            <TextField id="standard-basic" label="Beispiel Frage 1" defaultValue="Beispiel Frage 1" style={{width: '85%', marginLeft: '3%'}}  />
                            
                            <TextField id="my-helper-text" label="Beispiel Wert" style={{width: '85%', marginLeft: '3%'}} />

                            <FormControlLabel
                        onChange={''}
                        control={<Checkbox checked={true} name="checkedA" />}
                        label="Required?"
                        style={{ marginLeft: '2%', marginTop:'4%'}}
                          />






                            </div>
                            
                            </>}
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

      <div name='langertext' style={{backgroundColor:'blue' }}>
      <DragDropContext onDragEnd={this.onDragEnd} >
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
                                <Button endIcon={<SettingsIcon/>} color="primary">
                                Feld ändern
                                </Button>
                                <Button endIcon={<DeleteForeverSharpIcon/>} color="primary">
                                Löschen
                                </Button>
                                {this.state.plusminus && this.state.bocvalue==item.id ? <Button endIcon={<RemoveSharpIcon/>} color="primary" size="small" onClick={()=>{this.setState({plusminus:false});  this.setState({bocvalue:''})}}>
                                
                                </Button> : <Button endIcon={<AddSharpIcon/>} color="primary" size="small" onClick={()=>{this.setState({plusminus:true});  this.setState({bocvalue:item.id})}}>
                                
                                </Button>}
                                
                                
                              </>
                            }
                            subheader="Frage 1"
                        />
                           { this.state.plusminus==true && this.state.bocvalue==item.id &&
                           <>
                           <CardContent>
                                <Typography variant="body2" component="p">
                                {item.content}
                                </Typography>
                            </CardContent>





                            <TextField id="standard-basic" label="Beispiel Frage 1" defaultValue="Beispiel Frage 1" style={{width: '85%', marginLeft: '3%'}} multiline />
                            
                            <TextField id="my-helper-text" label="Beispiel Wert" style={{width: '85%', marginLeft: '3%'}} multiline/>

                            <FormControlLabel
                        onChange={''}
                        control={<Checkbox checked={true} name="checkedA" />}
                        label="Required?"
                        style={{ marginLeft: '2%', marginTop:'4%'}}
                          />





                            </>}
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

      <div name='checkbox' style={{backgroundColor:'blue' }}>
      <DragDropContext onDragEnd={this.onDragEnd} >
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
                                <Button endIcon={<SettingsIcon/>} color="primary">
                                Feld ändern
                                </Button>
                                <Button endIcon={<DeleteForeverSharpIcon/>} color="primary">
                                Löschen
                                </Button>
                                {this.state.plusminus && this.state.bocvalue==item.id ? <Button endIcon={<RemoveSharpIcon/>} color="primary" size="small" onClick={()=>{this.setState({plusminus:false});  this.setState({bocvalue:''})}}>
                                
                                </Button> : <Button endIcon={<AddSharpIcon/>} color="primary" size="small" onClick={()=>{this.setState({plusminus:true});  this.setState({bocvalue:item.id})}}>
                                
                                </Button>}
                                
                                
                              </>
                            }
                            subheader="Frage 1"
                        />
                           { this.state.plusminus==true && this.state.bocvalue==item.id &&
                           <>
                           <CardContent>
                                <Typography variant="body2" component="p">
                                {item.content}
                                </Typography>
                            </CardContent>





                            <TextField id="standard-basic" label="Beispiel Frage 1" defaultValue="Beispiel Frage 1" style={{width: '85%', marginLeft: '3%'}}/>

                            <FormControlLabel
                        onChange={''}
                        control={<Checkbox checked={true} name="checkedA" />}
                        label="Required?"
                        style={{ marginLeft: '2%', marginTop:'4%'}}
                          />






                            </>}
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

      <div name='multiplechoice' style={{backgroundColor:'blue' }}>
      <DragDropContext onDragEnd={this.onDragEnd} >
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
                                <Button endIcon={<SettingsIcon/>} color="primary">
                                Feld ändern
                                </Button>
                                <Button endIcon={<DeleteForeverSharpIcon/>} color="primary">
                                Löschen
                                </Button>
                                {this.state.plusminus && this.state.bocvalue==item.id ? <Button endIcon={<RemoveSharpIcon/>} color="primary" size="small" onClick={()=>{this.setState({plusminus:false});  this.setState({bocvalue:''})}}>
                                
                                </Button> : <Button endIcon={<AddSharpIcon/>} color="primary" size="small" onClick={()=>{this.setState({plusminus:true});  this.setState({bocvalue:item.id})}}>
                                
                                </Button>}
                                
                                
                              </>
                            }
                            subheader="Frage 1"
                        />
                           { this.state.plusminus==true && this.state.bocvalue==item.id &&
                           <>
                           <CardContent>
                                <Typography variant="body2" component="p">
                                {item.content}
                                </Typography>
                            </CardContent>



                            <TextField id="standard-basic" label="Beispiel Frage 1" defaultValue="Beispiel Frage 1" style={{width: '85%', marginLeft: '3%'}}  />
                            
                            <FormControlLabel
                            onChange={''}
                            control={<Checkbox checked={true} name="checkedA" />}
                            label="Required?"
                            style={{ marginLeft: '2%', marginTop:'1%'}}
                              />


                            <TextField id="my-helper-text" defaultValue="Beispiel Wert" style={{width: '85%', marginLeft: '3%'}} />

                            <div style={{marginTop:50}}></div>


                            {
                              <>
                            <TextField id="my-helper-text" defaultValue="Beispiel Wert" style={{width: '75%', marginLeft: '3%', marginTop:10}}/> 
                            <IconButton variant="contained" color="secondary"><CancelPresentationSharpIcon /></IconButton>
                              </>
                            }

                            <Button style={{marginLeft:'70%', marginTop:15, marginBottom:50}} variant="contained" color="primary">
                            <AddCircleTwoToneIcon />
                            </Button>

                            </>}

                            
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

      <div name='choicelist' style={{backgroundColor:'blue' }}>
      <DragDropContext onDragEnd={this.onDragEnd} >
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
                                <Button endIcon={<SettingsIcon/>} color="primary">
                                Feld ändern
                                </Button>
                                <Button endIcon={<DeleteForeverSharpIcon/>} color="primary">
                                Löschen
                                </Button>
                                {this.state.plusminus && this.state.bocvalue==item.id ? <Button endIcon={<RemoveSharpIcon/>} color="primary" size="small" onClick={()=>{this.setState({plusminus:false});  this.setState({bocvalue:''})}}>
                                
                                </Button> : <Button endIcon={<AddSharpIcon/>} color="primary" size="small" onClick={()=>{this.setState({plusminus:true});  this.setState({bocvalue:item.id})}}>
                                
                                </Button>}
                                
                                
                              </>
                            }
                            subheader="Frage 1"
                        />
                           { this.state.plusminus==true && this.state.bocvalue==item.id &&
                           <>
                           <CardContent>
                                <Typography variant="body2" component="p">
                                {item.content}
                                </Typography>
                            </CardContent>
                           



                            <TextField id="my-helper-text" defaultValue="Beispiel Wert" style={{width: '85%', marginLeft: '3%'}} />

                            <div style={{marginTop:50}}></div>


                            {
                              <>
                            <TextField id="my-helper-text" defaultValue="Beispiel Wert" style={{width: '75%', marginLeft: '3%', marginTop:10}}/> 
                            <IconButton variant="contained" color="secondary"><CancelPresentationSharpIcon /></IconButton>
                              </>
                            }

                            <Button style={{marginLeft:'70%', marginTop:15, marginBottom:50}} variant="contained" color="primary">
                            <AddCircleTwoToneIcon />
                            </Button>





                            </>}
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

      <div name='selectlist' style={{backgroundColor:'blue' }}>
      <DragDropContext onDragEnd={this.onDragEnd} >
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
                                <Button endIcon={<SettingsIcon/>} color="primary">
                                Feld ändern
                                </Button>
                                <Button endIcon={<DeleteForeverSharpIcon/>} color="primary">
                                Löschen
                                </Button>
                                {this.state.plusminus && this.state.bocvalue==item.id ? <Button endIcon={<RemoveSharpIcon/>} color="primary" onClick={()=>{this.setState({plusminus:false});  this.setState({bocvalue:''})}}>
                                
                                </Button> : <Button endIcon={<AddSharpIcon/>} color="primary" onClick={()=>{this.setState({plusminus:true});  this.setState({bocvalue:item.id})}}>
                                
                                </Button>}
                                
                                
                              </>
                            }
                            subheader="Frage 1"
                        />
                           { this.state.plusminus==true && this.state.bocvalue==item.id &&
                           <>
                           <CardContent>
                                <Typography variant="body2" component="p">
                                {item.content}
                                </Typography>
                            </CardContent>
                            




                            <TextField id="my-helper-text" defaultValue="Beispiel Wert" style={{width: '85%', marginLeft: '3%'}} />

                            <div style={{marginTop:50}}></div>


                            {
                              <>
                            <TextField id="my-helper-text" defaultValue="Beispiel Wert" style={{width: '75%', marginLeft: '3%', marginTop:10}}/> 
                            <IconButton variant="contained" color="secondary"><CancelPresentationSharpIcon /></IconButton>
                              </>
                            }

                            <Button style={{marginLeft:'70%', marginTop:15, marginBottom:50}} variant="contained" color="primary">
                            <AddCircleTwoToneIcon />
                            </Button>




                            </>}
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

      <div name='date' style={{backgroundColor:'blue' }}>
      <DragDropContext onDragEnd={this.onDragEnd} >
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
                                <Button endIcon={<SettingsIcon/>} color="primary">
                                Feld ändern
                                </Button>
                                <Button endIcon={<DeleteForeverSharpIcon/>} color="primary">
                                Löschen
                                </Button>
                                {this.state.plusminus && this.state.bocvalue==item.id ? <Button endIcon={<RemoveSharpIcon/>} color="primary" onClick={()=>{this.setState({plusminus:false});  this.setState({bocvalue:''})}}>
                                
                                </Button> : <Button endIcon={<AddSharpIcon/>} color="primary" onClick={()=>{this.setState({plusminus:true});  this.setState({bocvalue:item.id})}}>
                                
                                </Button>}
                                
                                
                              </>
                            }
                            subheader="Frage 1"
                        />
                           { this.state.plusminus==true && this.state.bocvalue==item.id &&
                           <>
                           <CardContent>
                                <Typography variant="body2" component="p">
                                {item.content}
                                </Typography>
                            </CardContent>




                            <TextField id="standard-basic" label="Beispiel Frage 1" defaultValue="Beispiel Frage 1" style={{width: '85%', marginLeft: '3%'}}/>

                            <FormControlLabel
                            onChange={''}
                            control={<Checkbox checked={true} name="checkedA" />}
                            label="Required?"
                            style={{ marginLeft: '2%', marginTop:'4%'}}
                            />





                            </>}
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



            </>


    );
  }
}

export default App;

// Put the thing into the DOM!
ReactDOM.render(<App />, document.getElementById("root"));

