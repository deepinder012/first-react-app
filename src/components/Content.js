import React from 'react';

class Content extends React.Component {

    paraFun(){
       console.log("PARA was clicked");
    }

    onChangeOfInput(e){
        console.log('Entered Values: ' + e.target.value);
    }

    render() {
        return (
            <div id='content'>
                <p className='paragraph' onClick={
                    () => {this.paraFun()}
                }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus atque fugiat, quia mollitia facere commodi quo explicabo quasi, corporis autem expedita tenetur neque distinctio nostrum, consequatur dignissimos reprehenderit doloribus eligendi!</p>

                <input id='input1' type='number'
                placeholder='Enter Expense'
                onChange={
                    (e)=>{this.onChangeOfInput(e)}
                }/>
                <button onClick={
                    () => {this.calculate()}
                }>Calculate Expense</button>
            </div>
        )
    }
}

export default Content;