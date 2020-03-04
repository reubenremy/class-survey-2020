const express = require('express'),
  surveyModel = require('../models/surveyModel');
  router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const title = 'Class Survey 2020 v2'
  const classInfoData = await surveyModel.getAllTopicData();
  const topicInfoData = await surveyModel.getAllStatus();
  // console.log("topic info data", topicInfoData);
  res.render('template', {
    locals: {
      title: title,
      classInfoData: classInfoData,
      topicInfoData: topicInfoData,
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
