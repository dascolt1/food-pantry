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
            <div className='addPostContainer mx-auto mb-5 mt-5 w-50 bg-dark rounded p-5'>
                <form
                 onSubmit={this.submitPost}>
                    <label>Zip Code:</label>
                    <input 
                    id='addZipInput'
                    type='number'
                    className="zip-code bg-dark form-control w-25 text-light"
                    onChange={ this.handleZip }>
                    </input>
                    <label
                    className="w-100 pt-3"
                    >Food type:</label>
                    
                    <select
                        className="selectpicker"
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
                        
                        <label
                        className="w-100 pt-3"
                        >Quantity:</label>
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
                    <button
                    className="btn btn-primary ml-5 w-50 ml-5" 
                    onClick={this.confirm}>
                    Donate</button>
                    
                </form>
            </div>
        )
    }   
   
    handleZip = (e) => {

        let zip = e.target.value;
        this.setState({
            zip: zip
        }) 
    }

    handleFood = (e) => {                        
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
        let postData = `Zip Code: ${this.state.zip} Food Type: ${this.state.fType} Quantity: ${this.state.qty}`;

        this.setState({
            post: postData
        })
    }

    submitPost = (e) => {
        

        this.confirm();
        
        if(this.state.zip !== 0 && this.state.zip.length === 5){
            this.props.addPostFn(this.state.post)
        }
        
        e.preventDefault();
        
    }
}

export default addPost