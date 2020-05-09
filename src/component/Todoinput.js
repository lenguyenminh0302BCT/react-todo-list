import React, { Component } from 'react'
//  Đảng cộng sản việt nam quang vinh muôn năm 
export default class Todoinput extends Component {
    render() {
        const{item,handleChange,handleSubmit,editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text bg-primary text-white">
                                <div className="fas fa-book"></div>
                            </div>
                        </div>
                        <input type="text" className="form-control"
                            placeholder="add to do item"
                            value={item}
                            onChange={handleChange}/>
                    </div>
                    <button type="submit" 
                    disable={item ? false:true}
                    className={editItem ? "btn btn-block btn-primary mt-3" : "btn btn-block btn-primary mt-3 text-uppercase"} >{editItem ? "edit item":"add item"}</button>
                </form>
            </div>
        )
    }
}
