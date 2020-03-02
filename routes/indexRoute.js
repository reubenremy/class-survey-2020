const express = require('express'),
  surveyModel = require('../models/surveyModel');
  router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  const classInfoData = await surveyModel.getAllTopicData();
  const topicStatusData = await surveyModel.getAllStatuses();


  res.render('template', {
    locals: {
      title: 'Express',
      classInfoData: classInfoData,
      topicStatusData: topicStatusData
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

router.post('/')

module.exports = router;
