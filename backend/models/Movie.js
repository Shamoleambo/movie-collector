import mongoose, { Schema } from 'mongoose'

const movieSchema = new Schema(
  {
    name: { required: true, type: String },
    year: { required: true, type: String },
    synopsis: { required: true, type: String },
    imageUrl: { required: true, type: String }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Movie', movieSchema)
