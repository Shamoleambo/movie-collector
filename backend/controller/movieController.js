import Movie from '../models/Movie.js'

export const postMovie = async (req, res) => {
  const { name, year, synopsis, imageUrl } = req.body

  if (!name || !year || !synopsis || !imageUrl) {
    res.status(400)
    res.json({
      message: 'Name, year, synopsis and imageUrl are all required fields'
    })
    return
  }

  if (+year < 0 || +year > new Date().getFullYear()) {
    res.status(400)
    res.json({ message: 'Year format is invalid' })
    return
  }

  const movie = new Movie()
  movie.name = name
  movie.year = year
  movie.synopsis = synopsis
  movie.imageUrl = imageUrl

  await movie.save()
  res.status(201).json({ name, year, synopsis, imageUrl })
}
