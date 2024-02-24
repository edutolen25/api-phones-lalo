import {Schema, model} from 'mongoose';

const phoneSchema= new Schema({
    serialNumber: {
        type: String,
        unique: true,
        require: true
    },
    size: String,
    model: String,
    price:Number,
    cost: Number,
    stock: Number,
    status: Number
},{
    versionKey: false,
    timestamps: true
})

export default model('phones', phoneSchema)