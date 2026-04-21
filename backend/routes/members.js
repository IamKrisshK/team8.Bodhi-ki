const router = require('express').Router();
const multer = require('multer');
const Member = require('../models/Member');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req,file,cb)=> cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/', upload.single('image'), async (req,res)=>{
  const member = await Member.create({ ...req.body, image: req.file?.filename });
  res.json(member);
});

router.get('/', async (req,res)=>{
  const members = await Member.find().sort({createdAt:-1});
  res.json(members);
});

router.get('/:id', async (req,res)=>{
  const member = await Member.findById(req.params.id);
  res.json(member);
});

module.exports = router;
