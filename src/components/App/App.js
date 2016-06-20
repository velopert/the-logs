import React from 'react';
import { Write, List, Read } from '../';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Write/>
                <List />
                <Read />
            </div>
        )
    }
}
