const ages = [10, 18, 55, 3, 20];
const checkAcess = (age) => {}
    for (age of ages) {
        if (age >= 18){
            console.log(`Возраст: ${age}: Доступ разрешен`);
        } else {
            console.log(`Возраст: ${age}: Доступ запрещен`);
        }       
    }   
checkAcess(ages);
