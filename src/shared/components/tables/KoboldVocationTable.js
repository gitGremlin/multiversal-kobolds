import {observer} from 'mobx-react';
import React, {Component} from 'react';
import Table, {TableBody, TableRow, TableCell} from 'material-ui/Table';
import VocationButton from '../buttons/VocationButton';
import store from '../../stores/KoboldStore';

@observer
export default class KoboldVocationTable extends Component {

  generateVoc = (type) => {
    let vocArr = [];
    let count = 0;
    for (let voc in store.vocation.list) {
      if (store.vocation.list[voc].type === type) {
        count++;
        vocArr.push(<VocationButton key={count} name={voc}/>);
      }
    }
    return vocArr;
  };

  render() {
    return (
      <div>
        <hr/>
        <Table>
          <TableBody>
            {[...this.generateVoc(this.props.name)]}
          </TableBody>
        </Table>
      </div>
    );
  }
}
