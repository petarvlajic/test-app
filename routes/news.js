const express = require('express');
const { addNews, getNews, getSingleNews } = require('../controllers/news');

const router = express.Router({ mergeParams: true });

router.route('/addNews').post(addNews);
router.route('/getnews').get(getNews);
router.route('/getsnews/:news_id').get(getSingleNews);

module.exports = router;
