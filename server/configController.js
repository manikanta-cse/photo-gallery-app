var api_key = process.env.FLICKR_API_KEY;

module.exports.get = function (req, res) {
    if (!api_key)
        return res.status(400).json({ error: 'FLICKR_API_KEY is not found in enviromental variables' });

    return res.status(200).json({ "API_KEY": api_key });

}