const express = require('express'),
  surveyModel = require('../models/surveyModel');
  router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const title = 'Class Survey 2020'
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
      partial: 'partial-index'
    }
  });
});

router.post('/')

module.exports = router;
