import dbConnect from '../../../db'
import PostModel from '../../../models/post.model'

const handler = async (req, res) => {
    try {
        const { id, comment } = req.body
        await PostModel.updateOne({_id: id},{
            $push: {
                comments: comment
            }
        })
        res.status(200).json({data: "success"})
    } catch (error) {
        console.log(error)
        res.status(500).json({data: "error"})
    }
}

export default dbConnect(handler)