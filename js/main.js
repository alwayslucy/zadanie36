function prawda(par1,par2) {
    if (par1===20) {
        let result = "true";
        return result;
    }
    else {
        if(par2===20) {
            let result = "true";
            return result;
        }
        else {
            let sum = par1+par2;
            if (sum<=20) {

                let result = "true";
                return result;
            }

            else {
                
                    let result = "false";
                    return result;
            
                }
            }
        }
    }

console.log(prawda(4,3));