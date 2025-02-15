const axios = require('axios');

async function getSources(req, res) {
    if(process.env.API_KEY && process.env.SOURCE){
        const response = await axios.get(`${process.env.SOURCE}/sources?`, {
            params: { apiKey: process.env.API_KEY }
        });

        res.json(response.data)
    } else {
        res.send([])
    }
}

async function getHeadlineNews(req, res) {
    if(process.env.API_KEY && process.env.SOURCE){
        const { country, category, sources, q } = req.query;
        const response = await axios.get(`${process.env.SOURCE}/top-headlines?`, {
            params: { apiKey: process.env.API_KEY, country, category, sources, q }
        });

        res.json(response.data)
    } else {
        res.send([])
    }
}

async function getEverythingNews(req, res) {
    if(process.env.API_KEY && process.env.SOURCE){
        const { q } = req.query;
        const response = await axios.get(`${process.env.SOURCE}/everything?`, {
            params: { apiKey: process.env.API_KEY, q }
        });
        res.json(response.data);
    } else {
        res.send([])
    }
}

module.exports = {
    getSources,
    getHeadlineNews,
    getEverythingNews
}