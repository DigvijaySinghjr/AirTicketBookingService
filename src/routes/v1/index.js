const express = require('express');

const { BookingController }  = require('../../controllers/index');
//const { createChannel } = require('../../utils/messageQueue')

//const channel =  await createChannel();                           //we cant use async/await here because this file is loaded before the app starts
const bookingController = new BookingController();
const router = express.Router();

router.post('/bookings', bookingController.create);
router.post('/publish', bookingController.sendMesageToQueue);


module.exports = router;