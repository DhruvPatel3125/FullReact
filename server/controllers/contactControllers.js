const Contact = require("../models/contactModel.js")

const getContact = async(req,res) =>{
    try {
        const contacts = await Contact.find();
        return(
            res.status(200).json(contacts)
        ) 
    } catch (error) {
        console.log(error)
    }
}

const AddData =async (req,res)=>{
    const {name,email,contactNo} =  req.body;

     try {
        const contacts = await Contact.create({name,email,contactNo})
        return(
            res.status(200).json(contacts)
        ) 
    } catch (error) {
        console.log(error)
    }
}

const updateData = (req,res)=>{
    try {
        res.end("update")
    } catch (error) {
        console.log(error)
    }
}
const deleteData = (req,res)=>{
    try {
        res.end("delete ")
    } catch (error) {
        console.log(error)
    }
}


module.exports = {getContact,AddData,updateData,deleteData}