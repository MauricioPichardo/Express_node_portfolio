const express = require('express');
const router = express.Router();
const { data } = require('../data/Data.json');
const { projects } = data;

router.get('/:id', (req, res) => {
if (req.params.id<=5){
    res.render('project', {
      name: projects[req.params.id-1].project_name,
      description: projects[req.params.id-1].description,
      technologies: projects[req.params.id-1].technologies,
      git: projects[req.params.id-1].github_link,
      live: projects[req.params.id-1].live_link,
      images: projects[req.params.id-1].image_urls })
}
else {
  const err = new Error('Project Unavailble');
  res.locals.error = err;
  res.render('error', err);
}
});

module.exports = router;
