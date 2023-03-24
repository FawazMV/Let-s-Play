export const reviewSubmit = (req, res) => {
    try {
        console.log('helo')
        console.log(req.body)
    }
    catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}