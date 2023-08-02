export const noutFound = (req, res, next) => {
  res.status(404).json({ message: 'Page not Found' })
}

const errorHandler = (error, req, res, next) => {
  res.json({ message: error.message })
}

export default errorHandler
