import asyncHandler from 'express-async-handler'
import Movie from '../models/Movie.js'

export const postMovie = asyncHandler(async (req, res) => {
  const { name, year, synopsis, imageUrl } = req.body

  if (!name || !year || !synopsis || !imageUrl) {
    res.status(400)
    throw new Error('Name, year, synopsis and imageUrl are all required fields')
  }

  if (+year < 1890 || +year > new Date().getFullYear()) {
    res.status(400)
    throw new Error('Year format is invalid')
  }

  const movie = new Movie()
  movie.name = name
  movie.year = year
  movie.synopsis = synopsis
  movie.imageUrl = imageUrl

  await movie.save()
  res.status(201).json({ name, year, synopsis, imageUrl })
})

export const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find().select('-createdAt -updatedAt')

  res.status(200).json({ movies })
})
