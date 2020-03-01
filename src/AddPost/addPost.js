import React from 'react'

class addPost extends React.Component {
constructor() {
    super()
    this.state = {
        post: '',
        zip: 0,
        qty: 1,
        fType: 'Vegan',
        name: ''
    }
}

    render() {
        return (
            <div className='addPostContainer mx-auto mb-5 mt-5 w-50'>
                <form
                 onSubmit={this.submitPost}>
                     {/* <label htmlFor="cars">Description:</label>
                    <input 
                    id='addPostInput'
                    type='text'
                    onChange={(e) => this.updateInput(e)}>
                    </input>  */}
                    <label>Zip Code:</label>
                    <input 
                    id='addZipInput'
                    type='number'
                    onChange={ this.handleZip }>
                    </input>
                    <label>Choose food type:</label>
                    <select
                    value={this.state.fType}
                    onChange={this.handleFood}
                    >
                        <option value="Vegan">Vegan</option>
                        <option value="Halal">Halal</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Meat">Meat</option>
                        <option value="Canned">Canned</option>
                        <option value="Soup">Soup</option>
                        <option value="Produce">Produce</option>
                        <option value="Pastry">Pastry</option>
                    </select>
                    <label>Quantity:</label>
                    <select 
                    value= {this.state.qty}
                    onChange={this.handleQuantity}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <label>Quantity:</label>
                    <button
                    onClick={this.confirm}>
                    Add food</button>
                    <button onClick={localStorage.clear()}>clear all</button>
                </form>
            </div>
        )
    }   

    // updateInput = (e) => {
    //     this.setState({
    //         post: e.target.value
    //     })
    // }
   
    handleZip = (e) => {

        let zip = parseInt(e.target.value);
        this.setState({
            zip: zip
        }) 
    }

    handleFood = (e) => {                        
            //console.log(this.state.fType);
            this.setState({
                fType: e.target.value
            })
    }

    handleQuantity = (e) => {  
                        
        this.setState({
            qty: parseInt(e.target.value),
        })
    }

    confirm = () => {
        let postData = `Zip Code: ${this.state.zip} Meat: ${this.state.fType} Quantity: ${this.state.qty}`;

        //console.log(postData);
        this.setState({
            post: postData
        })
    }

    /*
    chatTextHandler = (text) => {
  this.setState({ chatText : text});
}

    */
    submitPost = (e) => {
        
        // let postData = `Zip Code: ${this.state.zip} Meat: ${this.state.fType} Quantity: ${this.state.qty}`;

        // console.log(this.state)
        // //console.log(postData);
        // this.setState({
        //     post: postData
        // })

        //console.log(this.state)

        this.confirm();
        
        this.props.addPostFn(this.state.post)
        // document.getElementById('addPostInput').value = ''
        e.preventDefault();
        
    }
}

export default addPost