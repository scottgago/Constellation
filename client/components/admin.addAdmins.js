import React, { Component } from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'

const style = {
  adminList: {
    marginTop: 15,
    float: 'left',
    width: '48%',
    left: 0,
    height: 450
  },
}

export default class AddAdmin extends Component {

  constructor(props){
    super(props)
    this.state = {

    }

  }


  render(){
    return(
      <div style={style.adminList}>
        <span>Admins</span>
        <Table>
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
                 