import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const myList = styled.ul`
  display: flex;
  justify-items: right;
  text-align: right;
  color: palevioletred;
  z-index: 999;
`;

class devList extends Component {
  render() {
    return (
      <Fragment>
        <myList>
          <li>Dev1</li>
          <li>Dev2</li>
          <li>Dev3</li>
        </myList>
      </Fragment>
    );
  }
}

export default devList;
