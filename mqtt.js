
var mqtt = require('mqtt');
var RFIDDataModel = require('./model/rfidData');
const express = require('express');
var socket = require('./app');
// const BatchModel = require('./model/batch');

console.log("MQTT Loaded");
client = mqtt.connect('mqtt://138.197.92.157:1883');
var moment = require('moment-timezone');

client.on('connect', function () {
    console.log('mqtt connected ... ');
    client.subscribe('port/data');
    client.subscribe('port/rfid');

});



var thisTime = moment().tz("Asia/Colombo");;






    client.on('message', async function (topic, message) {
        // message = JSON.parse(message);
        // locationPoints = JSON.parse(message.locationPoints);
        // console.log(topic + " - " + locationPoints.lat);

       

//         if(topic=="port/rfid"){
//             console.log(message.toString());
//             var dto = {};
            message = JSON.parse(message.toString());
        locationPoints = JSON.parse(message.locationPoints);
        console.log(locationPoints.lat);
//             dto.val=message.rfid.toString();
//             dto.timestamp = moment(message.timestamp).tz("Asia/Colombo");
//             dto.datetime = moment(message.timestamp).tz("Asia/Colombo").format("YYYY-MM-DD, h:mm:ss a");
//             dto.date = moment(message.timestamp).tz("Asia/Colombo").format("YYYY-MM-DD");
//             dto.time = moment(message.timestamp).tz("Asia/Colombo").format("HH:mm:ss");


// console.log(dto);

//             // try {
//             //     const RFIDData = new RFIDDataModel({
//             //         node_id:"TRUCK001",
//             //         val: dto.val,
//             //         timestamp: dto.timestamp,
//             //         datetime: dto.datetime,
//             //         date: dto.date,
//             //         time: dto.time,
//             //         sessionStatus: false
//             //     });

//             //     const savedRFIDData = await RFIDData.save();
//             //     console.log(savedRFIDData);

//             // } catch (error) {
//             //     console.log(error.message);

//             // };
//         }
       


    });


