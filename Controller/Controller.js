const users= require('../Model/Model')
 exports.addUser =async (req,res)=>{
    try {
        const user=new users(req.body)
        await user.save()
        res.status(200).send({message:'user successfully added',user})
    } catch (error) {
        res.status(500).send({message:'error creating user',error})
    }
 }
exports.getUsers =async (req,res)=>{
    try {
        const allUsers = await users.find()
        res.status(200).send({message:'all users successfully',allUsers})
    } catch (error) {
        res.status(500).send({message:'failed to get users',error})
    }
}
exports.deleteUser =async (req,res)=>{
    try {
        const user= await users.findByIdAndDelete(req.params.id)
        res.status(200).send({message:'user successfully deleted',user})
    } catch (error) {
        res.status(500).send({message:'user faild to delete',error})
    }
}
exports.updateUser =async (req,res)=>{
    try {
        const user=await users.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).send({message:'user updated',user})
    } catch (error) {
        res.status(500).send({message:'faild to update user',error})
    }
}