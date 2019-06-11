/****************************************************************************
 ****************************************************************************
    
    Initialize
    
*****************************************************************************
*****************************************************************************/
const express    = require("express");
const path       = require("path");
const bodyParser = require("body-parser");

const app  = express();
const PORT = process.env.PORT || 3000;

const directory_public = path.join(__dirname, "app", "public");
const directory_routes = path.join(__dirname, "app", "routes");