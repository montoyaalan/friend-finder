/****************************************************************************
 ****************************************************************************
    
    Initialize
    
*****************************************************************************
*****************************************************************************/
const express  = require("express");
const path     = require("path");
const validUrl = require("valid-url");

// Create an instance of Router
const router = express.Router();

// Create an instance of FriendFinder
const FriendFinder = require(path.join(__dirname, "..", "data", "friends.js"));
const friendFinder = new FriendFinder();
