import Conversation from "../models/conversaton.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {

try {
    const {message} = req.body;
    const {id: recieverId} = req.params;
    const senderId = req.user._id;

    let conversation= await Conversation.findOne({
        participants:{$all:[senderId,recieverId]},
    })

    if(!conversation){
        conversation= await Conversation.create({
            participants:[senderId,recieverId],
        });
    }

    const newMessage = new Message({
        senderId,
        recieverId,
        message,
    });

    if(newMessage){
        conversation.messages.push(newMessage._id);
    }
    // await conversation.save();
    // await newMessage.save();

    //This will run parallelly
    await Promise.all([conversation.save(),newMessage.save()]);

    res.status(201).json({newMessage});

} catch (error) {
    console.log("Error in sending message controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
}

};

export const getMessages = async (req, res) => {

    try {
        
        

    } catch (error) {
        console.log("Error in getting messages controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}