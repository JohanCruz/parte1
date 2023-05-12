// Routes
import express, { response }  from "express";
import fetch from "node-fetch";
const router = express.Router();

// GET /resumen/2019-12-01?dias=5

router.get('/resumen/:date',(req, res) =>{
    async function fetchSales() { 

        let initialDate = new Date(req.params.date + "T00:00:00.000"); 
        let settings = { method: "Get" };
        let notBuied = 0;
        let buyHigher = 0;
        let creditCardPurchases = {}
        let rangeOfTime = 0;
        let total = 0; 
        
        do {            
            const slideDate = initialDate.getDate() < 10 ?
             "0" + initialDate.getDate().toString() : initialDate.getDate().toString()
            
            let url = "https://apirecruit-gjvkhl2c6a-uc.a.run.app/compras/" +
             initialDate.getFullYear() + "-" + initialDate.getMonth() + "-" + slideDate;
            
            const response = await fetch(url, settings);
                    
            const clients = await response.json(); 

            clients.forEach(function(client) {  
                if('tdc' in client){
                    if(client.tdc in creditCardPurchases){
                        creditCardPurchases[client.tdc] += client.monto
                        buyHigher = client.monto > buyHigher ? client.monto : buyHigher;
                    } else {
                        creditCardPurchases[client.tdc] = client.monto
                        buyHigher = client.monto > buyHigher ? client.monto : buyHigher;
                    }
                } else notBuied += 1;                                
            });
                    
            for (const subtotal in creditCardPurchases) {
                total += creditCardPurchases[subtotal];
            }        
            
            rangeOfTime += 1;
            initialDate.setDate(initialDate.getDate() +  1);
            
        }while(rangeOfTime <= parseInt(req.query.dias))

        return {  
            "total": total, 
            "comprasPorTDC": creditCardPurchases, 
            "nocompraron": notBuied, 
            "compraMasAlta": buyHigher 
        }
    }

    fetchSales().then(clients => {   
        res.json(clients)
    });

});

export default router;