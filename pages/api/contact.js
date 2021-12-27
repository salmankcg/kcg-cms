import { MongoClient } from 'mongodb'
async function handler(req, res) {
    if (req.method === 'POST') {
        // Validate received data
        const { email, name, message } = JSON.parse(req.body) 
        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid input.' })
            return
        }

        // Connect to MongoDB
        let client
        try {
            client = await MongoClient.connect('mongodb://localhost/next-course')
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database' })
            return
        }

        // Insert new message and close connection
        const db = client.db()
        const newMessage = { email, name, message }
        try {
            const result = await db.collection('messages').insertOne(newMessage)
            newMessage.id = result.insertedId
        } catch (error) {
            res.status(500).json({ message: 'Could not store data' })
            return
        }
        client.close()

        // Send response back
        res.status(201).json({ message: 'Successfully saved!', message: newMessage })
    }
}
export default handler