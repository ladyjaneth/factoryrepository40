import ProductDaoMem from "../daos/products/productDAOMem.js";
import ProductDAOFile from "../daos/products/productDAOFile.js";
import ProductDAODb from "../daos/products/productDAODb.js";

const rutaFile = './txt/products.txt';
const connString = 'mongodb://localhost:27017/final-proyect';

const option = process.env.STORE || 'Mem';

let dao
switch (option) {
    case 'Mongo':
        dao = new ProductDAODb(connString);
        await dao.init();
        break;

    case 'File':
        dao = new ProductDAOFile(rutaFile);
        await dao.init();
        break;

    default:
        dao = new ProductDaoMem();
        await dao.init(); 
        break;
}

export default class ProductsDAOFFactory{
    static getDao(){
        return dao;
    }
}






//1:30