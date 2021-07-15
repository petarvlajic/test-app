const News = require('../models/News');

// @desc Add single news
// @route POST
// @access Public
exports.addNews = async (req, res) => {
  const { title, description, categories, image } = req.body;

  console.log(req.body);

  const news = await News.create({
    title,
    description,
    categories,
    image,
  });

  res.status(201).json({
    success: true,
    news,
  });
};

// @desc get all news
// @route GET
// @access Public
exports.getNews = async (req, res) => {
  const news = await News.find({});

  if (news.length === 0) {
    return res.json({ error: 'Inbox is empty' });
  }

  return res.json({ news });
};

// @desc get single news by id
// @route GET
// @access Public
exports.getSingleNews = async (req, res) => {
  console.log(req.params.news_id);

  const sNews = await News.findById(req.params.news_id);

  return res.json({ sNews });
};
