const linkRouter = require('express').Router();
const shortid = require('shortid');
const UsersLink = require('../models/UsersLink');

linkRouter.get('/getallLinks', async (req, res)=> {
  const { sessionId } = res.locals;
  try{
    const allLinks = await UsersLink.find({owner: sessionId})
    res.json(allLinks);
  } catch (e){
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
  };
});

linkRouter.post('/generateLink', async (req, res)=> {
  const { sessionId } = res.locals;
  // console.log('----->', sessionId );
  // console.log(req.body);
  const {from, address} = req.body;
  const endCode = address.trim() ? address.trim() : shortid.generate();
  const code = 'https://' + endCode;
  const linok = new UsersLink({
    from:from , code , owner: sessionId
  });
  try{
    const linkToSave = await linok.save()
    res.json(linkToSave);
  } catch (e){
    res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
  };
});

module.exports = linkRouter;