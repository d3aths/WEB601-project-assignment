import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://celeste:no@onlinestore-shard-00-00.0wtgx.mongodb.net:27017,onlinestore-shard-00-01.0wtgx.mongodb.net:27017,onlinestore-shard-00-02.0wtgx.mongodb.net:27017/OnlineStore?ssl=true&replicaSet=atlas-clnngi-shard-0&authSource=admin&retryWrites=true&w=majority', { 
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
  })
    

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
