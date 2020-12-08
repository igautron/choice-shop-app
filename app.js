const express = require('express');
const mysql = require('mysql2/promise');
const config = require('./config');

const asincDB = require('./asincDB')

let $ = require('jquery');
window.$ = window.jQuery = $;



