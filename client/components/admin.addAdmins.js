import React, { Component } from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

//TODO: This is abandoned code. We'll come back to admins, but for now,
// let's leave this unlogiced.

const style = {
  adminList: {
    marginTop: 15,
    float: 'left',
    width: '48%',
    left: 0,
    height: 450,
    marginLeft: 15,
    fontFamily: "Chalks",
    color: 'white',
  },
  buttonFonts: {
    fontFamily: "Chalks",
    color: 'white',
  }
}

export default class AddAdmin extends Component {

  render(){
    return(
      <div style={style.adminList}>
        <span>Admins</span>
        <Table style={style.buttonFonts}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Priviledges</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>Scott</TableRowColumn>
              <TableRowColumn>Full</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Michael</TableRowColumn>
              <TableRowColumn>Full</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>Rong</TableRowColumn>
              <TableRowColumn>Full</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Jon</TableRowColumn>
              <TableRowColumn>Full</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table >
      </div>
    )
  }
}
                 