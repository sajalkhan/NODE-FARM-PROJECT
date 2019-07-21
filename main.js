'use strict';

//1.---- declare all of the secessery required service/module ----//

const http = require('http');
const link = require('url');
const fs = require('fs');
const replaceTemplate = require('./Module/replaceTemplate'); // export module

//1.---- declare all of the secessery required service/module ----//


//2.-------------------------- Read all of the necessery html template --------------------------- //

const template_overview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const template_card = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8');
const template_product = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');

//2.-------------------------- Read all of the necessery html template --------------------------- //


//3.-------------------------- Parse all json data ----------------------//
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const parseData = JSON.parse(data);
//3.-------------------------- Parse all json data ----------------------//


//4.------------- Create server and routing also do all necessery thing ---------- //

var server = http.createServer((req, res) => {

    const {query,pathname} = link.parse(req.url,true);


    if (pathname === "/" || pathname === "/overview") {
        
        res.writeHead(200,{'content-type':'text/html'});

        const cards_Html = parseData.map(el => replaceTemplate(template_card,el)).join('');
        const output = template_overview.replace('{%product_cards%}',cards_Html);
        
        res.end(output);
    }
    else if (pathname === "/product") {

        res.writeHead(200,{'content-type':'text/html'});       
        
        const product = parseData[query.id];
        const output = replaceTemplate(template_product,product);

        res.end(output);

    }
    else if (pathname === '/api') {

        res.writeHead(200, { 'content-type': 'application/json' });
        
        res.end(data);
    }
    else {
        res.writeHead(400, {
            'content-type': 'text/html'
        });

        res.end('<h1 style="color:red">Page Not Found!</h1>');
    }
});

server.listen(8080, () => {
    console.log('listing form 8080');
});

//4.------------- Create server and routing also do all necessery thing ---------- //