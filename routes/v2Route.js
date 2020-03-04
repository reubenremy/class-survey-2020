const express = require('express'),
  surveyModel = require('../models/surveyModel');
  router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const title = 'Class Survey 2020 v2'
  const rankingData = await surveyModel.getAllTopics();
  const topicData = await surveyModel.getAllRanks();
  // console.log("topic info data", topicData);
  res.render('template', {
    locals: {
      title: title,
      rankingData: rankingData,
      topicData: topicData,
    },
    partials: {
      partial: 'partial-v2'
    }
  });
});

router.post("/", async (req,res) => {
  for (let key in req.body) {
    // console.log(key, req.body[key]);
  console.log(await surveyModel.update(key, req.body[key]));
  }

  res.status(200).redirect('/success');
});

module.exports = router;
