const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const {check, validationResult} = require("express-validator");

const Router = require('express');


const router = new Router();

router.post('/registration', [
	check('email', 'incorrect email').isEmail(),
	check('password', 'Password must be longer then 3 and shorter then 12 simbols').isLength({min: 3, max: 12})
], async (req, res) => {
	try {
		console.log(req.body)
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({message: 'incorrect request', errors})
		}

		const {email, password} = req.body;
		const candidate = await User.findOne({email});

		if (candidate) {
			return res.status(400).json({message: `User with email ${email} already exist`});
		}
		const hashPassword = await bcryptjs.hash(password, 8);
		const user = new User({email, password: hashPassword});
		await user.save();
		return res.json({message: 'User was created'})

	} catch (e) {
		console.log(e);
		res.send({message: 'server error'});
	}
});


router.post('/login', async (req, res) => {
	try {
		const {email, password} = req.body;
		const user = await User.findOne({email});
		if (!user) {
			return res.status(404).json({message: "user not found"});
		}
		const isPassValid = bcryptjs.compareSync(password, user.password);
		if (!isPassValid) {
			console.log('password incorrect')
			return res.status(400).json({message: "password incorrect"})
		}

		const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: '1h'});
		console.log({
			token, user: {
				id: user.id,
				email: user.email,
				diskSpace: user.diskSpace,
				usedSpace: user.usedSpace,
				avatar: user.avatar || 'no avatar'
			}});
		return res.json({
			token,
			user: {
				id: user.id,
				email: user.email,
				diskSpace: user.diskSpace,
				usedSpace: user.usedSpace,
				avatar: user.avatar || 'no avatar'
			}
		});
	} catch
		(e)
		{
			console.log(e);
			res.send({message: 'server error'});
		}
	}
)

	module.exports = router;