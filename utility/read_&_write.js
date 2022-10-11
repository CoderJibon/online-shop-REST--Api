// package include
const { readFileSync , writeFileSync, unlinkSync } = require('fs');
const path = require('path');

// get all customer DB
const getCustomerDB = () =>{

    // customer db json to obj
    return JSON.parse(readFileSync(path.join(__dirname,"../DB/customers.json")));

}

//update customer DB
const updateCustomerDB = (obj) => {

    // update customer DB
    writeFileSync(path.join(__dirname,"../DB/customers.json"),JSON.stringify(obj));
}


// get all Tag DB
const getTagDB = () =>{

    // customer db json to obj
    return JSON.parse(readFileSync(path.join(__dirname,"../DB/tag.json")));

}

//update Tag DB
const updateTagDB = (obj) => {

    // update customer DB
    writeFileSync(path.join(__dirname,"../DB/tag.json"),JSON.stringify(obj));
}


// get all Category DB
const getCategoryDB = () =>{

    // Category db json to obj
    return JSON.parse(readFileSync(path.join(__dirname,"../DB/category.json")));

}

//update Category DB
const updateCategoryDB = (obj) => {

    // update Category DB
    writeFileSync(path.join(__dirname,"../DB/category.json"),JSON.stringify(obj));
}

//remove Category OLD image
const removeCategoryOldImage =(fileName) => {
    // remove product old image
    unlinkSync(path.join(__dirname,`../public/category/${fileName}`));
}

// get all Product DB
const getProductDB = () =>{
    // Product db json to obj
    return JSON.parse(readFileSync(path.join(__dirname,"../DB/product.json")));

}

//update Product DB
const updateProductDB = (obj) => {
    // update Product DB
    writeFileSync(path.join(__dirname,"../DB/product.json"),JSON.stringify(obj));
}

//remove Product OLD image
const removeProductOldImage =(fileName) => {
    // remove product old image
    unlinkSync(path.join(__dirname,`../public/product/${fileName}`));
}

// get all brand db

const getBrandDb = () =>{

    // customer json from db
   const brandDb =  JSON.parse(readFileSync(path.join(__dirname , '../db/brand.json')));

//return customer db

   return brandDb;

}

// update brand db

const updateBrandDb = (obj) =>{

    // update customer Db
    writeFileSync(path.join(__dirname , '../db/brand.json') , JSON.stringify(obj));

}



//module exports
module.exports = {
    getCustomerDB,
    updateCustomerDB,
    getTagDB,
    updateTagDB,
    getCategoryDB,
    updateCategoryDB,
    getProductDB,
    updateProductDB,
    removeProductOldImage,
    removeCategoryOldImage,
    getBrandDb,
    updateBrandDb
}


