import mongoose from 'mongoose'

const connectToDB = async (req, res) => {
  const mongooseConnection = await mongoose.connect(process.env.MONGO_URI)

  if (mongooseConnection) {
    console.log(
      `Connected to the database: ${mongooseConnection.connection.host}`
    )
  } else {
    res.status(400)
    throw new Error('Connection failed')
  }
}

export default connectToDB
