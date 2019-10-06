import React, { Component } from 'react';
import {Button} from 'react-mdl';

class Counter extends Component{

    state = {
        angka : 0
    };

    tambah = () => {
        this.setState(
            {
                angka: this.state.angka + 1
            }
        );
        console.log(this.state.angka);
    };

    kurang = () => {
        this.setState(
            {
                angka: this.state.angka - 1
            }
        );
        console.log(this.state.angka);
    };

    render(){
        return(
            <div className="counter-text">
                <h1>{this.state.angka}</h1>
                <Button raised colored onClick={() => this.tambah()}>Tambah</Button>
                &nbsp;
                <Button raised accent onClick={() => this.kurang()}>Kurang</Button>
            </div>
        )
    }
}


export default Counter;